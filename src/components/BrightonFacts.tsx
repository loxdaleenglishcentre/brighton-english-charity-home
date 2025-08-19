import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Landmark, Sun, Coffee, TrainFront, PartyPopper, Info } from "lucide-react";

const facts = [
  {
    title: "Cool",
    icon: PartyPopper,
    items: [
      "Home to the iconic Brighton Palace Pier and The Lanes",
      "Street art capital of the south coast",
      "Vibrant festivals, live music and indie cafés",
    ],
  },
  {
    title: "Whacky",
    icon: Coffee,
    items: [
      "Seagulls are serious about chips—guard your lunch!",
      "A beach made of pebbles, not sand",
      "Famous for quirky shops and vintage treasure hunts",
    ],
  },
  {
    title: "Boring (but useful)",
    icon: Info,
    items: [
      "Population ~290,000 (Brighton & Hove)",
      "Average summer highs: ~21°C; mild winters",
      "Fast trains to London: ~60–70 minutes",
    ],
  },
];

const BrightonFacts = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Brighton, UK',
    description: 'Seaside city in East Sussex known for the Palace Pier, Royal Pavilion and vibrant culture. Close to Loxdale English Centre in Portslade.',
    image: '/lovable-uploads/9de526c9-99d1-4966-a67e-9b061db86dff.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brighton',
      addressRegion: 'East Sussex',
      addressCountry: 'UK',
    },
  };

  return (
    <section id="about-brighton" aria-labelledby="brighton-title" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <header className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-primary text-white border-0">Brighton, UK</Badge>
          <h2 id="brighton-title" className="text-3xl lg:text-4xl font-bold text-gradient-green-metallic">Brighton, UK — Key Facts</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A creative seaside city with lively culture, historic landmarks and fast links to London.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card className="hover-float border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src="/lovable-uploads/9de526c9-99d1-4966-a67e-9b061db86dff.png"
                  alt="Brighton Palace Pier entrance sign on a sunny day"
                  loading="lazy"
                  className="w-full h-80 md:h-[26rem] object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Landmark className="w-4 h-4" />
                  <span>Royal Pavilion, i360, Palace Pier, The Lanes</span>
                </div>
                <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                  <Sun className="w-4 h-4" />
                  <span>Mild coastal climate; great year-round seaside walks</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {/* Proximity to Loxdale */}
            <Card className="glass border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Close to Loxdale (Portslade)</h3>
                    <p className="text-muted-foreground mt-1">
                      Loxdale English Centre is located in Portslade, part of Brighton & Hove—within easy reach of central Brighton.
                      Quick train links and frequent buses connect you to the seafront, shops and attractions in minutes.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2"><TrainFront className="w-4 h-4" />Fast trains to Brighton</span>
                      <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" />Neighbourhood: Portslade</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Facts */}
            <div className="grid sm:grid-cols-2 gap-6">
              {facts.map((group, i) => (
                <Card key={i} className="hover-float border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <group.icon className="w-5 h-5 text-primary" />
                      <h4 className="text-lg font-semibold">{group.title}</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {group.items.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
              <Card className="hover-float border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/images/brighton-pier-unsplash.jpg"
                    alt="Brighton Palace Pier at golden hour seen from the beach"
                    loading="lazy"
                    className="w-full h-48 md:h-56 lg:h-64 object-cover"
                  />
                </CardContent>
              </Card>
            </div>

          </div>
        </div>

        {/* JSON-LD for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </div>
      
      {/* White spacer */}
      <div className="section-spacer"></div>
    </section>
  );
};

export default BrightonFacts;
