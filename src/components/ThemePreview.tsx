import { Button } from "@/components/ui/button";

const palettes = [
  { key: "theme-brand", name: "Loxdale Vibrant", desc: "Ember red + leaf green + charcoal" },
  { key: "theme-elegant", name: "Elegant Heritage", desc: "Ember red + warm sand + charcoal" },
  { key: "theme-fresh", name: "Fresh Leaf", desc: "Leaf green + ember red + soft sky" },
  { key: "theme-canopy", name: "Canopy Green", desc: "Deep greens + ember accents + slate" },
  { key: "theme-ember", name: "Ember & Charcoal", desc: "Fiery red-orange + moss + charcoal" },
];

const ThemePreview = () => {
  return (
    <section id="colors" aria-labelledby="colors-title" className="py-10 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <header className="mb-6">
          <h2 id="colors-title" className="text-2xl font-bold">Color palette mockups</h2>
          <p className="text-sm text-muted-foreground">Click a palette to apply it site-wide (preview only).</p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {palettes.map((p) => (
            <button
              key={p.key}
              type="button"
              className={`${p.key} rounded-2xl border p-5 text-left hover-float`}
              onClick={() => {
                document.documentElement.classList.remove("theme-brand", "theme-elegant", "theme-fresh", "theme-canopy", "theme-ember");
                document.documentElement.classList.add(p.key);
              }}
            >
              <div className="rounded-xl h-24 w-full bg-gradient-hero mb-4" />
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <div className="flex gap-2">
                <span className="w-6 h-6 rounded-full" style={{ background: "hsl(var(--primary))" }} />
                <span className="w-6 h-6 rounded-full" style={{ background: "hsl(var(--secondary))" }} />
                <span className="w-6 h-6 rounded-full" style={{ background: "hsl(var(--accent))" }} />
              </div>
              <div className="mt-4 flex gap-3">
                <Button className="bg-gradient-primary text-white border-0">Primary CTA</Button>
                <Button variant="outline" className="glass">Outline</Button>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemePreview;
