import React, { useEffect, useMemo, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import paperTexture from "@/assets/paper-texture.png";
import { Pencil } from "lucide-react";
import YearToggle from "@/components/YearToggle";
// 2025 Adult Out of Summer pricing data based on provided price list
const PRICING_2025 = {
  currency: "GBP",
  bookingFee: 90, // non-returnable, non-deductible
  materialsPerTenWeeks: 35, // £35 per 10 weeks
  insurance: 6.98, // per week
  airportTransfer: {
    gatwick: 109,
    heathrow: 171,
    stansted: 255,
  },
  examFees: { min: 150, max: 235 }, // Cambridge or IELTS
  
  // Total pricing from provided table
  totalPrices: {
    1: 231, 2: 462, 3: 693, 4: 924, 5: 1125, 6: 1350, 7: 1575, 8: 1720, 9: 1935, 10: 2150,
    11: 2150, 12: 2460, 13: 2665, 14: 2870, 15: 3075, 16: 3280, 17: 3485, 18: 3690, 19: 3895, 20: 4100,
    21: 4305, 22: 4305, 23: 4485, 24: 4680, 25: 4875, 26: 5070, 27: 5265, 28: 5460, 29: 5655, 30: 5850
  },
  additionalWeeksRate: 185, // additional weeks beyond 30 are £185 per week
  
  accommodation: {
    none: 0,
    "bed-breakfast": 148, // Bed & Breakfast per week
    "half-board-lunch": 180, // Half Board Lunch per week  
    "half-board-dinner": 180, // Half Board Dinner per week
    "full-board": 212, // Full Board per week
  },
};

// 2026 Adult Out of Summer pricing data based on provided price list
const PRICING_2026 = {
  currency: "GBP",
  bookingFee: 95, // non-returnable, non-deductible
  materialsPerTenWeeks: 35, // £35 per 10 weeks
  insurance: 7.74, // per week
  airportTransfer: {
    gatwick: 115,
    heathrow: 180,
    stansted: 255,
  },
  examFees: { min: 160, max: 245 }, // Cambridge or IELTS
  
  // Pricing table for General English (20 lessons per week = 15 hours per week)
  weeklyPrices: {
    1: 240, 2: 238, 3: 238, 4: 238, 5: 232, 6: 232, 7: 232, 8: 232, 9: 232, 10: 232,
    11: 211, 12: 220, 13: 220, 14: 220, 15: 220, 16: 220, 17: 220, 18: 220, 19: 220, 20: 220,
    21: 220, 22: 210, 23: 210, 24: 210, 25: 210, 26: 210, 27: 210, 28: 210, 29: 210, 30: 210
  },
  additionalWeeksRate: 185, // additional weeks beyond 30 are £185 per week
  
  accommodation: {
    none: 0,
    "bed-breakfast": 170, // Bed & Breakfast per week
    "half-board-lunch": 218, // Half Board Lunch per week
    "half-board-dinner": 218, // Half Board Dinner per week
    "full-board": 252, // Full Board per week
  },
};

function useCurrencyFormatter(currency: string) {
  return useMemo(() => new Intl.NumberFormat("en-GB", { style: "currency", currency }), [currency]);
}

function useTypewriter(text: string, speed = 12) {
  const [out, setOut] = useState("");
  useEffect(() => {
    setOut("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

const CourseQuoteCalculator: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<"2025" | "2026">("2025");
  const currentPricing = selectedYear === "2025" ? PRICING_2025 : PRICING_2026;
  const format = useCurrencyFormatter(currentPricing.currency);

  const sectionRef = useRef<HTMLElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStarted(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const [weeks, setWeeks] = useState<number>(4);
  const [accommodation, setAccommodation] = useState<string>("none");
  const [includeTransfer, setIncludeTransfer] = useState(false);
  const [transferType, setTransferType] = useState<"gatwick" | "heathrow" | "stansted">("gatwick");

  // Reset accommodation when year changes to avoid invalid selections
  useEffect(() => {
    setAccommodation("none");
  }, [selectedYear]);

  // Calculate tuition based on selected year pricing
  const calculateTuition = (weeks: number) => {
    if (selectedYear === "2025") {
      // Use total pricing table for 2025
      if (weeks <= 30 && PRICING_2025.totalPrices[weeks as keyof typeof PRICING_2025.totalPrices]) {
        return PRICING_2025.totalPrices[weeks as keyof typeof PRICING_2025.totalPrices];
      } else {
        const basePrice = PRICING_2025.totalPrices[30];
        const additionalWeeks = weeks - 30;
        return basePrice + (additionalWeeks * PRICING_2025.additionalWeeksRate);
      }
    } else {
      // Use weekly pricing for 2026
      let total = 0;
      for (let i = 1; i <= weeks; i++) {
        if (i <= 30 && PRICING_2026.weeklyPrices[i as keyof typeof PRICING_2026.weeklyPrices]) {
          total += PRICING_2026.weeklyPrices[i as keyof typeof PRICING_2026.weeklyPrices];
        } else {
          total += PRICING_2026.additionalWeeksRate;
        }
      }
      return total;
    }
  };

  const tuition = calculateTuition(weeks);
  const materials = Math.ceil(weeks / 10) * currentPricing.materialsPerTenWeeks; // £35 per 10 weeks
  const bookingFee = currentPricing.bookingFee;
  const accom = weeks * (currentPricing.accommodation[accommodation as keyof typeof currentPricing.accommodation] || 0);
  const transfer = includeTransfer ? currentPricing.airportTransfer[transferType] : 0;
  const total = tuition + materials + bookingFee + accom + transfer;

  const breakdown = `Weeks (${weeks}) × Tuition (calculated from ${selectedYear} rates) + Materials (${format.format(materials)}) + Booking Fee (${format.format(bookingFee)})${accommodation !== "none" ? ` + Accommodation (${accommodation} ${format.format(currentPricing.accommodation[accommodation as keyof typeof currentPricing.accommodation])} × ${weeks})` : ""}${includeTransfer ? ` + Airport Transfer (${transferType} ${format.format(transfer)})` : ""} = ${format.format(total)}`;

  const typed = useTypewriter(started ? breakdown : "", 75);
  const isTyping = started && typed.length < breakdown.length;

  return (
    <section ref={sectionRef} id="quote" aria-labelledby="quote-title" className="py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <header className="mb-8 text-center">
          <h2 id="quote-title" className="text-3xl lg:text-4xl font-bold tracking-tight">
            {selectedYear} Adult Course Quote Calculator
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Calculate your {selectedYear} course cost for adult programmes outside of summer period {selectedYear === "2025" ? "(6 January to 7 June and 17 August to 17 December 2025)" : "(4 January to 6 June and 16 August to 20 December 2026)"}.
          </p>
          
          <div className="flex justify-center mt-4">
            <YearToggle
              year={selectedYear === "2025" ? 2025 : 2026}
              onYearChange={(y) => setSelectedYear(String(y) as "2025" | "2026")}
              aria-label="Select year for pricing"
            />
          </div>
        </header>

        <Card className="glass border-0 shadow-xl">
          <CardContent className="p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <Label htmlFor="weeks" className="mb-2 block">Weeks of study: {weeks}</Label>
                  <Slider
                    id="weeks"
                    min={1}
                    max={52}
                    step={1}
                    value={[weeks]}
                    onValueChange={(v) => setWeeks(v[0])}
                    className="mt-3"
                    aria-label="Weeks of study"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Airport Transfer Type</Label>
                  <Select value={transferType} onValueChange={(v: any) => setTransferType(v)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select airport" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gatwick">Gatwick (£{currentPricing.airportTransfer.gatwick})</SelectItem>
                      <SelectItem value="heathrow">Heathrow (£{currentPricing.airportTransfer.heathrow})</SelectItem>
                      <SelectItem value="stansted">Stansted (£{currentPricing.airportTransfer.stansted})</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Accommodation (Homestay Options)</Label>
                  <Select value={accommodation} onValueChange={(v: any) => setAccommodation(v)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Accommodation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="bed-breakfast">Bed & Breakfast (£{currentPricing.accommodation["bed-breakfast"]}/week)</SelectItem>
                      <SelectItem value="half-board-lunch">Half Board Lunch (£{currentPricing.accommodation["half-board-lunch"]}/week)</SelectItem>
                      <SelectItem value="half-board-dinner">Half Board Dinner (£{currentPricing.accommodation["half-board-dinner"]}/week)</SelectItem>
                      <SelectItem value="full-board">Full Board (£{currentPricing.accommodation["full-board"]}/week)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <Label htmlFor="transfer">Add airport transfer</Label>
                  <Switch id="transfer" checked={includeTransfer} onCheckedChange={setIncludeTransfer} />
                </div>

                <div className="text-sm text-muted-foreground">
                  {selectedYear} Adult Out of Summer pricing: Booking fee £{currentPricing.bookingFee}, Materials £{currentPricing.materialsPerTenWeeks}/10 weeks. Homestay options: Bed & Breakfast £{currentPricing.accommodation["bed-breakfast"]}/week, Half Board Lunch £{currentPricing.accommodation["half-board-lunch"]}/week, Half Board Dinner £{currentPricing.accommodation["half-board-dinner"]}/week, Full Board £{currentPricing.accommodation["full-board"]}/week. Airport transfers: Gatwick £{currentPricing.airportTransfer.gatwick}, Heathrow £{currentPricing.airportTransfer.heathrow}, Stansted £{currentPricing.airportTransfer.stansted}.
                  {selectedYear === "2025" && <span className="block mt-1 text-primary font-medium">Special offer: Every 11th week, get one free week's lessons!</span>}
                </div>
              </div>

              {/* Summary */}
              <div className="flex flex-col justify-between gap-6">
                <div className="rounded-2xl p-6 border bg-white/95 bg-blend-multiply" style={{ backgroundImage: `url(${paperTexture})` }}>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Live calculation</p>
                  <div className="min-h-[88px] text-2xl sm:text-3xl leading-relaxed font-handwriting">
                    <span className="whitespace-pre-wrap">{typed}</span>
                    <span aria-hidden="true" className="inline-block w-[2px] h-6 bg-foreground -skew-x-12 ml-1 align-baseline pulse" />
                    {isTyping ? (
                      <span className="relative inline-block ml-2 align-baseline -rotate-12">
                        <Pencil size={20} aria-hidden="true" className="text-foreground animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                        <span
                          aria-hidden="true"
                          className="absolute"
                          style={{
                            right: "-2px",
                            top: "50%",
                            width: "8px",
                            height: "8px",
                            transform: "translateY(-50%) rotate(12deg)",
                            background: "hsl(var(--secondary))",
                            clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
                          }}
                        />
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="rounded-2xl border p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                  <p className="text-sm text-muted-foreground">Estimated total</p>
                  <p className="text-4xl font-bold tracking-tight">{format.format(total)}</p>
                  <p className="text-xs text-muted-foreground mt-1">Prices are indicative and subject to confirmation.</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button className="bg-gradient-primary text-white border-0 hover-glow-primary" onClick={() => navigator.clipboard.writeText(`${typed}`)}>
                      Copy quote
                    </Button>
                    <Button variant="outline" className="glass" asChild>
                      <a href="https://www.loxdale.com/contact/" target="_blank" rel="noopener noreferrer">Enquire now</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CourseQuoteCalculator;
