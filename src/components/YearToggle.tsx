import * as React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export type YearType = 2025 | 2026;

interface YearToggleProps {
  year: YearType;
  onYearChange: (year: YearType) => void;
  className?: string;
  "aria-label"?: string;
}

const YearToggle: React.FC<YearToggleProps> = ({ year, onYearChange, className, "aria-label": ariaLabel }) => {
  return (
    <ToggleGroup
      type="single"
      value={String(year)}
      onValueChange={(val) => {
        if (val) onYearChange(Number(val) as YearType);
      }}
      className={`rounded-xl p-2 bg-gradient-to-r from-muted/50 to-muted/80 backdrop-blur-sm border border-border/30 shadow-lg ${className || ""}`}
      aria-label={ariaLabel || "Select year"}
    >
      <ToggleGroupItem 
        value="2025" 
        className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 data-[state=on]:bg-gradient-to-r data-[state=on]:from-primary data-[state=on]:to-primary/80 data-[state=on]:text-primary-foreground data-[state=on]:shadow-lg data-[state=on]:scale-105 hover:scale-102 data-[state=off]:hover:bg-muted/70"
      >
        2025
      </ToggleGroupItem>
      <ToggleGroupItem 
        value="2026" 
        className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 data-[state=on]:bg-gradient-to-r data-[state=on]:from-primary data-[state=on]:to-primary/80 data-[state=on]:text-primary-foreground data-[state=on]:shadow-lg data-[state=on]:scale-105 hover:scale-102 data-[state=off]:hover:bg-muted/70"
      >
        2026
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default YearToggle;

