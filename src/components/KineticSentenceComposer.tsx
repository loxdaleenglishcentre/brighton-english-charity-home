import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Sparkles, Shuffle, Volume2, Mic, Undo2, Pointer, CheckCircle2 } from "lucide-react";

// Kinetic Sentence Composer
// - Shuffle a sentence into magnetized chips you drag into slots
// - Auto-snap next-correct word ("magnet")
// - Live correctness + progress + celebratory confetti
// - Optional speech in/out (Web Speech APIs when available)

const sampleSentences = [
  "I am improving my English every single day",
  "Practice makes perfect in speaking and listening",
  "Small classes help me learn faster and speak confidently",
  "Pronunciation and fluency grow with daily conversation",
];

function tokenize(sentence: string) {
  return sentence
    .trim()
    .replace(/\s+/g, " ")
    .split(" ");
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const KineticSentenceComposer: React.FC = () => {
  const [target, setTarget] = useState<string>(sampleSentences[0]);
  const targetTokens = useMemo(() => tokenize(target), [target]);

  // Build state
  const [slots, setSlots] = useState<(string | null)[]>(() => Array(tokenize(sampleSentences[0]).length).fill(null));
  const [pool, setPool] = useState<string[]>(() => shuffle(tokenize(sampleSentences[0])));

  // UI state
  const [listening, setListening] = useState(false);
  const [speakingEnabled, setSpeakingEnabled] = useState(true);
  const [confetti, setConfetti] = useState<{ id: number; x: number; y: number; e: string }[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const elevenAudioRef = useRef<HTMLAudioElement | null>(null);

  // Speech synthesis controls
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string | null>(null);
  const [rate, setRate] = useState<number>(1.0);
  const [pitch, setPitch] = useState<number>(1.0);

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    const load = () => {
      const all = window.speechSynthesis.getVoices();
      const en = all.filter((v) => v.lang?.toLowerCase().startsWith("en"));
      setVoices(en.length ? en : all);
      if (!selectedVoiceURI) {
        const preferred =
          en.find((v) => /neural|natural|google|microsoft|samantha|victoria|aria/i.test(v.name)) || en[0] || all[0];
        if (preferred) setSelectedVoiceURI(preferred.voiceURI);
      }
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [selectedVoiceURI]);

  // Reset when target changes
  useEffect(() => {
    setSlots(Array(targetTokens.length).fill(null));
    setPool(shuffle(targetTokens));
  }, [targetTokens]);

  const nextIndex = useMemo(() => slots.findIndex((s) => s === null), [slots]);
  const isComplete = nextIndex === -1 && slots.length > 0;
  const correctCount = useMemo(
    () => slots.reduce((acc, s, i) => (s === targetTokens[i] ? acc + 1 : acc), 0),
    [slots, targetTokens]
  );
  const progress = Math.round((correctCount / targetTokens.length) * 100);

  // Confetti celebration
  useEffect(() => {
    if (!isComplete) return;
    triggerConfetti();
    if (!speakingEnabled) return;

    const useEleven = (() => {
      try { return localStorage.getItem('USE_ELEVEN') === '1'; } catch { return false; }
    })();
    const xi = (() => {
      try { return localStorage.getItem('XI_API_KEY'); } catch { return null; }
    })();
    const voiceId = (() => {
      try { return localStorage.getItem('ELEVEN_VOICE_ID') || '9BWtsMINqrJLrRacOk9x'; } catch { return '9BWtsMINqrJLrRacOk9x'; }
    })();

    (async () => {
      const text = "Brilliant! Perfect sentence.";
      if (useEleven && xi) {
        try {
          const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?optimize_streaming_latency=2`, {
            method: 'POST',
            headers: {
              'xi-api-key': xi!,
              'Content-Type': 'application/json',
              'Accept': 'audio/mpeg',
            },
            body: JSON.stringify({
              model_id: 'eleven_turbo_v2_5',
              text,
              voice_settings: { stability: 0.45, similarity_boost: 0.8, style: Math.round(((rate - 0.7) / 0.6) * 100) },
            }),
          });
          if (res.ok) {
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            try { elevenAudioRef.current?.pause(); } catch {}
            elevenAudioRef.current = new Audio(url);
            void elevenAudioRef.current.play();
            return;
          }
        } catch {}
      }
      if ("speechSynthesis" in window) {
        const u = new SpeechSynthesisUtterance(text);
        const voice = voices.find((v) => v.voiceURI === selectedVoiceURI);
        if (voice) u.voice = voice;
        u.rate = rate;
        u.pitch = pitch;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(u);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComplete]);

  const triggerConfetti = () => {
    const rect = sectionRef.current?.getBoundingClientRect();
    const items: { id: number; x: number; y: number; e: string }[] = [];
    const emojis = ["✨", "🎉", "🌟", "🎊", "💫", "👏"]; 
    for (let i = 0; i < 16; i++) {
      items.push({
        id: Date.now() + i,
        x: Math.random() * (rect?.width ?? 300),
        y: Math.random() * 120,
        e: emojis[Math.floor(Math.random() * emojis.length)],
      });
    }
    setConfetti(items);
    setTimeout(() => setConfetti([]), 1200);
  };

  // Speak the full sentence
  const speakSentence = () => {
    if (!speakingEnabled) return;

    const useEleven = (() => { try { return localStorage.getItem('USE_ELEVEN') === '1'; } catch { return false; } })();
    const xi = (() => { try { return localStorage.getItem('XI_API_KEY'); } catch { return null; } })();
    const voiceId = (() => { try { return localStorage.getItem('ELEVEN_VOICE_ID') || '9BWtsMINqrJLrRacOk9x'; } catch { return '9BWtsMINqrJLrRacOk9x'; } })();

    if (useEleven && xi) {
      (async () => {
        try {
          const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?optimize_streaming_latency=2`, {
            method: 'POST',
            headers: {
              'xi-api-key': xi!,
              'Content-Type': 'application/json',
              'Accept': 'audio/mpeg',
            },
            body: JSON.stringify({
              model_id: 'eleven_turbo_v2_5',
              text: target,
              voice_settings: { stability: 0.45, similarity_boost: 0.8, style: Math.round(((rate - 0.7) / 0.6) * 100) },
            }),
          });
          if (res.ok) {
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            try { elevenAudioRef.current?.pause(); } catch {}
            elevenAudioRef.current = new Audio(url);
            void elevenAudioRef.current.play();
            return;
          }
        } catch {}
        if ("speechSynthesis" in window) {
          const u = new SpeechSynthesisUtterance(target);
          const voice = voices.find((v) => v.voiceURI === selectedVoiceURI);
          if (voice) u.voice = voice;
          u.rate = rate;
          u.pitch = pitch;
          window.speechSynthesis.cancel();
          window.speechSynthesis.speak(u);
        }
      })();
      return;
    }

    if ("speechSynthesis" in window) {
      const u = new SpeechSynthesisUtterance(target);
      const voice = voices.find((v) => v.voiceURI === selectedVoiceURI);
      if (voice) u.voice = voice;
      u.rate = rate;
      u.pitch = pitch;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }
  };

  // Try microphone input -> set new target
  const startListening = () => {
    // @ts-ignore
    const Recognition = (window.SpeechRecognition || window.webkitSpeechRecognition) as any;
    if (!Recognition) {
      setListening(false);
      return alert("Speech recognition unavailable in this browser.");
    }
    const rec = new Recognition();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onstart = () => setListening(true);
    rec.onresult = (e: any) => {
      const phrase = e.results?.[0]?.[0]?.transcript as string;
      if (phrase) setTarget(phrase);
    };
    rec.onend = () => setListening(false);
    rec.start();
  };

  // Drag & Drop helpers
  type DragData = { from: "pool" | "slot"; index: number };

  const onDragStart = (data: DragData, ev: React.DragEvent) => {
    ev.dataTransfer.setData("text/plain", JSON.stringify(data));
    ev.dataTransfer.effectAllowed = "move";
  };

  const readDragData = (ev: React.DragEvent): DragData | null => {
    try {
      const text = ev.dataTransfer.getData("text/plain");
      return JSON.parse(text);
    } catch {
      return null;
    }
  };

  const placeIntoSlot = (slotIndex: number, word: string) => {
    setSlots((prev) => {
      const next = [...prev];
      const displaced = next[slotIndex];
      next[slotIndex] = word;
      if (displaced) setPool((p) => [...p, displaced]);
      return next;
    });
  };

  const removeFromSlot = (slotIndex: number) => {
    setSlots((prev) => {
      const next = [...prev];
      const displaced = next[slotIndex];
      next[slotIndex] = null;
      if (displaced) setPool((p) => [...p, displaced]);
      return next;
    });
  };

  const removeFromPool = (poolIndex: number): string | null => {
    let removed: string | null = null;
    setPool((prev) => {
      const next = [...prev];
      removed = next.splice(poolIndex, 1)[0] ?? null;
      return next;
    });
    return removed;
  };

  const onDropOnSlot = (slotIndex: number, ev: React.DragEvent) => {
    ev.preventDefault();
    const data = readDragData(ev);
    if (!data) return;

    // Magnet behavior: if this word is the correct next word, snap to nextIndex
    if (data.from === "pool") {
      const word = pool[data.index];
      if (!word) return;
      const targetIndex = word === targetTokens[nextIndex] ? nextIndex : slotIndex;
      const w = removeFromPool(data.index);
      if (!w) return;
      placeIntoSlot(targetIndex, w);
    } else {
      // Moving from another slot
      const word = slots[data.index];
      if (!word) return;
      if (data.index === slotIndex) return;
      removeFromSlot(data.index);
      placeIntoSlot(slotIndex, word);
    }
  };

  const onDropOnPool = (ev: React.DragEvent) => {
    ev.preventDefault();
    const data = readDragData(ev);
    if (!data) return;
    if (data.from === "slot") {
      const word = slots[data.index];
      if (!word) return;
      removeFromSlot(data.index);
    }
  };

  const onDropOnBuild = (ev: React.DragEvent) => {
    ev.preventDefault();
    const data = readDragData(ev);
    if (!data) return;
    if (data.from === "pool") {
      const w = pool[data.index];
      if (w && w === targetTokens[nextIndex]) {
        removeFromPool(data.index);
        placeIntoSlot(nextIndex, w);
      }
    }
  };

  const resetArrangement = () => {
    setSlots(Array(targetTokens.length).fill(null));
    setPool(shuffle(targetTokens));
  };

  const useAnother = () => {
    const next = sampleSentences[(sampleSentences.indexOf(target) + 1) % sampleSentences.length];
    setTarget(next);
  };

  return (
    <section aria-labelledby="kinetic-title" className="py-12 relative overflow-hidden">
      <div ref={sectionRef} className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-gradient-primary text-white border-0">Interactive Challenge</Badge>
          <h2 id="kinetic-title" className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Kinetic Sentence Composer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Drag words into place. The next-correct word magnetizes to the right slot. Hear it, speak it, feel it click.
          </p>
        </div>

        <Card className="glass border-0 shadow-xl">
          <CardContent className="p-6 lg:p-8">
            {/* Controls */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Button variant="secondary" onClick={speakSentence} className="hover-scale">
                    <Volume2 /> Hear sentence
                  </Button>
                  <Button variant="outline" onClick={resetArrangement} className="hover-scale">
                    <Undo2 /> Reset
                  </Button>
                  <Button variant="outline" onClick={useAnother} className="hover-scale">
                    <Shuffle /> New sentence
                  </Button>
                  <Button
                    variant={listening ? "default" : "outline"}
                    onClick={startListening}
                    className="hover-scale"
                    aria-pressed={listening}
                  >
                    <Mic /> {listening ? "Listening…" : "Speak a sentence"}
                  </Button>

                  <div className="flex items-center gap-3">
                    <Select value={selectedVoiceURI ?? ""} onValueChange={(v) => setSelectedVoiceURI(v)}>
                      <SelectTrigger className="w-56">
                        <SelectValue placeholder="Voice" />
                      </SelectTrigger>
                      <SelectContent>
                        {voices.map((v) => (
                          <SelectItem key={v.voiceURI} value={v.voiceURI}>
                            {v.name} ({v.lang})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Rate</span>
                      <Slider
                        value={[rate]}
                        min={0.7}
                        max={1.3}
                        step={0.05}
                        onValueChange={(vals) => setRate(vals[0] ?? 1)}
                        className="w-24"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Pitch</span>
                      <Slider
                        value={[pitch]}
                        min={0.7}
                        max={1.3}
                        step={0.05}
                        onValueChange={(vals) => setPitch(vals[0] ?? 1)}
                        className="w-24"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Switch
                        defaultChecked={typeof window !== 'undefined' ? localStorage.getItem('USE_ELEVEN') === '1' : false}
                        onCheckedChange={(v) => {
                          try { localStorage.setItem('USE_ELEVEN', v ? '1' : '0'); } catch {}
                        }}
                      />
                      <span className="text-xs text-muted-foreground">ElevenLabs</span>
                    </div>
                    <Input
                      type="password"
                      placeholder="XI API Key"
                      className="w-48"
                      defaultValue={typeof window !== 'undefined' ? localStorage.getItem('XI_API_KEY') ?? '' : ''}
                      onChange={(e) => {
                        try { localStorage.setItem('XI_API_KEY', e.target.value); } catch {}
                      }}
                    />
                    <Select
                      defaultValue={typeof window !== 'undefined' ? (localStorage.getItem('ELEVEN_VOICE_ID') ?? '9BWtsMINqrJLrRacOk9x') : '9BWtsMINqrJLrRacOk9x'}
                      onValueChange={(v) => {
                        try { localStorage.setItem('ELEVEN_VOICE_ID', v); } catch {}
                      }}
                    >
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="EL Voice" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9BWtsMINqrJLrRacOk9x">Aria</SelectItem>
                        <SelectItem value="EXAVITQu4vr4xnSDxMaL">Sarah</SelectItem>
                        <SelectItem value="JBFqnCBsd6RMkjVDRZzb">George</SelectItem>
                        <SelectItem value="TX3LPaxmHKxFdv7VOQHJ">Liam</SelectItem>
                        <SelectItem value="XB0fDUnXU5powFXDhCwa">Charlotte</SelectItem>
                        <SelectItem value="onwK4e9ZLuTAKqWW03F9">Daniel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
                    <Pointer className="w-4 h-4" /> Tip: Drop anywhere to snap the next word.
                  </div>
                </div>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Progress</span>
                <span className="text-sm font-medium">{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>

            {/* Build Area */}
            <div className="mb-6">
              <div className="text-sm text-muted-foreground mb-2">Build</div>
              <div
                className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-3 rounded-lg bg-muted/40"
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDropOnBuild}
              >
                {slots.map((s, i) => {
                  const correct = s && s === targetTokens[i];
                  const isNext = i === nextIndex;
                  return (
                    <div
                      key={i}
                      className={
                        "h-12 rounded-md border flex items-center justify-center select-none transition-all " +
                        (s
                          ? correct
                            ? "bg-primary/10 border-primary/40 text-primary"
                            : "bg-destructive/10 border-destructive/30 text-destructive"
                          : isNext
                          ? "border-primary/40 bg-primary/5 ring-2 ring-primary/30"
                          : "border-border bg-background")
                      }
                      onDrop={(e) => onDropOnSlot(i, e)}
                      onDragOver={(e) => e.preventDefault()}
                    >
                      {s ? (
                        <button
                          draggable
                          onDragStart={(e) => onDragStart({ from: "slot", index: i }, e)}
                          className="px-3 py-2 rounded-md bg-card shadow-sm hover:shadow-md transition-all hover-scale"
                          title={s}
                        >
                          {s}
                        </button>
                      ) : (
                        <span className="text-xs text-muted-foreground">{isNext ? "Next" : ""}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pool */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Word pool</span>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Sparkles className="w-4 h-4" /> Correct word auto-snaps to the highlighted slot
                </div>
              </div>
              <div
                className="min-h-16 flex flex-wrap gap-2 p-3 rounded-lg bg-muted/30"
                onDrop={onDropOnPool}
                onDragOver={(e) => e.preventDefault()}
              >
                {pool.map((w, idx) => (
                  <button
                    key={w + idx}
                    draggable
                    onDragStart={(e) => onDragStart({ from: "pool", index: idx }, e)}
                    onClick={() => {
                      // Tap to place into next slot if it matches, else do nothing
                      if (w === targetTokens[nextIndex]) {
                        setPool((p) => p.filter((_, i) => i !== idx));
                        placeIntoSlot(nextIndex, w);
                      }
                    }}
                    className="px-3 py-2 rounded-md bg-card border hover-scale transition-all"
                    title={w}
                  >
                    {w}
                  </button>
                ))}
                {pool.length === 0 && (
                  <span className="text-xs text-muted-foreground">No remaining words</span>
                )}
              </div>
            </div>

            {/* Completion */}
            {isComplete && (
              <div className="mt-8 text-center animate-enter">
                <div className="flex items-center justify-center gap-2 text-primary font-medium mb-3">
                  <CheckCircle2 className="w-5 h-5" /> Perfect! “{target}”
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button variant="secondary" onClick={useAnother} className="hover-scale">
                    <Shuffle /> Try another
                  </Button>
                  <Button asChild variant="default" className="hover-scale">
                    <a href="#contact">Enquire now</a>
                  </Button>
                </div>
              </div>
            )}

            {/* Confetti overlay */}
            <div className="pointer-events-none relative">
              <div className="absolute inset-x-0 top-0 h-32">
                {confetti.map((c) => (
                  <div
                    key={c.id}
                    className="animate-fade-out"
                    style={{
                      position: "absolute",
                      left: c.x,
                      top: c.y,
                      transform: `rotate(${Math.random() * 40 - 20}deg)`,
                    }}
                  >
                    <span className="text-2xl">{c.e}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default KineticSentenceComposer;
