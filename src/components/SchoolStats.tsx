import React, { useEffect, useMemo, useRef, useState } from "react";

// SchoolStats
// - Edit the STATS array below to update values and labels.
// - Values are numbers; you can add a suffix like "+" if helpful.
// - Colors map to your design tokens: primary | secondary | accent
// - The counters animate when they enter the viewport.

type StatColor = "primary" | "secondary" | "accent";

interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  color?: StatColor;
  durationMs?: number;
}

// UPDATE THESE NUMBERS EASILY
const STATS: Stat[] = [
  {
    id: "years",
    label: "Years of Excellence",
    value: 45,
    suffix: "+",
    color: "primary",
  },
  {
    id: "students",
    label: "Total Students Since Opening",
    value: 20000,
    suffix: "+",
    color: "accent",
  },
  {
    id: "nationalities",
    label: "Nationalities Represented",
    value: 80,
    suffix: "+",
    color: "secondary",
  },
  {
    id: "avg-age",
    label: "Average Age",
    value: 24,
    color: "primary",
  },
];

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number, duration = 1500, start = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const step = (timestamp: number) => {
      if (startTime.current === null) startTime.current = timestamp;
      const progress = Math.min(1, (timestamp - startTime.current) / duration);
      const eased = easeOutCubic(progress);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startTime.current = null;
    };
  }, [target, duration, start]);

  return value;
}

const StatItem: React.FC<{ stat: Stat } & { format?: (n: number) => string }> = ({ stat, format }) => {
  const { value: target, suffix, color = "primary", durationMs = 1500, label } = stat;
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const current = useCountUp(target, durationMs, inView);
  const formatted = useMemo(() => {
    const base = format ? format(current) : new Intl.NumberFormat().format(current);
    return `${base}${suffix ?? ""}`;
  }, [current, suffix, format]);

  const gradientClass = {
    primary: "from-primary to-primary/70",
    secondary: "from-secondary to-secondary/70",
    accent: "from-accent to-accent/70",
  }[color];

  return (
    <div ref={ref} className="group rounded-3xl bg-card/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className={`text-5xl font-bold tracking-tight text-foreground ${inView ? 'number-spin' : ''}`}>
          {formatted}
        </div>
        <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${gradientClass}`} aria-hidden />
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{label}</p>
      </div>
    </div>
  );
};

const SchoolStats: React.FC = () => {
  return (
    <section id="school-stats" aria-labelledby="school-stats-title" className="py-12 relative overflow-hidden">
      {/* Subtle geometric background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-secondary/20 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-accent/20 rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <header className="mb-12 text-center">
          <h2 id="school-stats-title" className="text-4xl lg:text-5xl font-bold tracking-tight text-gradient-green-metallic mb-4">
            Trusted By Students Worldwide
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of successful English learners from around the globe at Loxdale English Centre
          </p>
        </header>
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <StatItem key={s.id} stat={s} />
            ))}
          </div>
        </main>
      </div>
      
      {/* White spacer */}
      <div className="section-spacer"></div>
    </section>
  );
};

export default SchoolStats;
