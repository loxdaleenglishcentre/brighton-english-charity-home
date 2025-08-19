import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, MapPin } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const TravelJourney = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Loxdale English Centre",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Locks Hill",
        addressLocality: "Portslade",
        postalCode: "BN1 2LA",
        addressCountry: "UK",
      },
      url: typeof window !== "undefined" ? window.location.origin : undefined,
      image: "/lovable-uploads/e658a474-bed4-4339-bac4-83df7e016ae2.png",
      sameAs: [
        "https://www.google.com/maps?q=locks+hill,+portslade+bn1+2la+uk",
      ],
    }),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when just 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Use new airplane image for clean animation
  const planeSrc = "/lovable-uploads/f19cb3a9-1ed0-4743-ad5b-b2688851bbc2.png";





  return (
    <section ref={sectionRef} id="journey" aria-labelledby="journey-title" className="relative py-12 overflow-hidden">
      {/* Hexagon pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${encodeURIComponent('hsl(var(--accent))')}' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      {/* Flying plane across the section */}

      <div className="container mx-auto px-6 lg:px-8">
        <header className="text-center mb-6">
          <Badge className="mb-4 bg-gradient-primary text-white border-0">Getting here</Badge>
          <h2 id="journey-title" className="text-3xl lg:text-4xl font-bold text-gradient-green-metallic">
            Your Journey to Loxdale English Centre
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            From your home country to our campus: fly to the UK and take a taxi to Locks Hill in Portslade. It's smooth, simple, and exciting.
          </p>
        </header>

          <div className="mb-6">
            <div className="pointer-events-none relative -mt-2">
              <img
                src={planeSrc}
                alt="Clean blue airplane flying across the travel journey section"
                className={`plane-vivid transform-gpu h-16 sm:h-20 md:h-24 opacity-95 rotate-90 mx-[-12vw] ${isVisible ? 'plane-pan' : 'plane-hidden'}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

        <Tabs defaultValue="2025" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-sm mx-auto mb-6">
            <TabsTrigger value="2025">2025 Prices</TabsTrigger>
            <TabsTrigger value="2026">2026 Prices</TabsTrigger>
          </TabsList>
          
          <TabsContent value="2025">
            <Card className="mx-auto max-w-xl rounded-3xl border border-border shadow-2xl overflow-hidden bg-card">
              <CardContent className="p-0">
                <figure className="relative">
                  <AspectRatio ratio={4/3}>
                    <img
                      src="/lovable-uploads/bd6a9da6-9fb7-465c-8f2e-ccbd6aee23f2.png"
                      alt="Loxdale English Centre building in Portslade, Brighton"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </AspectRatio>
                </figure>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Airport transfers (one way) - 2025</h3>
                  <p className="text-sm text-muted-foreground mb-4">Out of Summer Period: 6 January to 7 June and 17 August to 17 December 2025</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    <li className="flex items-center justify-between rounded-lg bg-background/60 px-3 py-2">
                      <span className="flex items-center gap-2"><Car className="w-4 h-4 text-primary" />Heathrow</span>
                      <span className="font-medium">£171</span>
                    </li>
                    <li className="flex items-center justify-between rounded-lg bg-background/60 px-3 py-2">
                      <span className="flex items-center gap-2"><Car className="w-4 h-4 text-primary" />Gatwick</span>
                      <span className="font-medium">£109</span>
                    </li>
                    <li className="flex items-center justify-between rounded-lg bg-background/60 px-3 py-2">
                      <span className="flex items-center gap-2"><Car className="w-4 h-4 text-primary" />Stansted</span>
                      <span className="font-medium">£255</span>
                    </li>
                    <li className="flex items-center justify-between rounded-lg bg-background/60 px-3 py-2 sm:col-span-2">
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />Eurostar St Pancras</span>
                      <span className="text-sm text-muted-foreground">£210 each way • 105–150 minutes</span>
                    </li>
                    <li className="flex items-center justify-between rounded-lg bg-background/60 px-3 py-2 sm:col-span-2">
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />Newhaven Ferry Port</span>
                      <span className="text-sm text-muted-foreground">£80 each way • 30–50 minutes</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Other options available for London Heathrow, London City Airport, London Stansted and Luton Airport.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="2026">
            <Card className="mx-auto max-w-xl rounded-3xl border border-border shadow-2xl overflow-hidden bg-card">
              <CardContent className="p-0">
                <figure className="relative">
                  <AspectRatio ratio={4/3}>
                    <img
                      src="/lovable-uploads/bd6a9da6-9fb7-465c-8f2e-ccbd6aee23f2.png"
                      alt="Loxdale English Centre building in Portslade, Brighton"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </AspectRatio>
                </figure>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Airport transfers (one way) - 2026</h3>
                  <p className="text-sm text-muted-foreground mb-4">Out of Summer Period: 4 January to 6 June and 16 August to 20 December 2026</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    <li className="flex items-center justify-between rounded-lg bg-background/60 px-3 py-2">
                      <span className="flex items-center gap-2"><Car className="w-4 h-4 text-primary" />Heathrow</span>
                      <span className="font-medium">£180</span>
                    </li>
                    <li className="flex items-center justify-between rounded-lg bg-background/60 px-3 py-2">
                      <span className="flex items-center gap-2"><Car className="w-4 h-4 text-primary" />Gatwick</span>
                      <span className="font-medium">£115</span>
                    </li>
                    <li className="flex items-center justify-between rounded-lg bg-background/60 px-3 py-2">
                      <span className="flex items-center gap-2"><Car className="w-4 h-4 text-primary" />Stansted</span>
                      <span className="font-medium">£255</span>
                    </li>
                    <li className="flex items-center justify-between rounded-lg bg-background/60 px-3 py-2 sm:col-span-2">
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />Eurostar St Pancras</span>
                      <span className="text-sm text-muted-foreground">Contact for 2026 pricing • 105–150 minutes</span>
                    </li>
                    <li className="flex items-center justify-between rounded-lg bg-background/60 px-3 py-2 sm:col-span-2">
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />Newhaven Ferry Port</span>
                      <span className="text-sm text-muted-foreground">Contact for 2026 pricing • 30–50 minutes</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Other options available for London Heathrow, London City Airport, London Stansted and Luton Airport. 2026 pricing subject to confirmation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* JSON-LD for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </div>
      
      {/* White spacer */}
      <div className="section-spacer"></div>

      {/* Local animation styles */}
      <style>{`
        /* Hidden state for plane before animation */
        .plane-hidden {
          transform: translateX(-25vw) translateY(0) scale(0.9) rotate(-4deg);
          opacity: 0;
        }
        
        /* Canva-like pan animation for the plane (slower, more cinematic) */
        @keyframes plane-pan {
          0% { transform: translateX(-25vw) translateY(0) scale(0.9) rotate(-4deg); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateX(50vw) translateY(-3vh) scale(1.05) rotate(-1deg); }
          90% { opacity: 1; }
          100% { transform: translateX(125vw) translateY(0) scale(1) rotate(3deg); opacity: 0; }
        }
        .plane-pan { animation: plane-pan 18s cubic-bezier(0.33, 1, 0.68, 1) forwards; will-change: transform, opacity; }
        .plane-vivid { filter: drop-shadow(0 8px 16px hsl(var(--primary)/0.35)) saturate(1.25) contrast(1.05); }

        @media (prefers-reduced-motion: reduce) {
          .plane-pan { animation: none; }
          .plane-hidden { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
    );
};

export default TravelJourney;
