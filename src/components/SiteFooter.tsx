import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  ExternalLink,
  Star,
  Target,
  UserCheck,
  FileText,
  Building,
  GraduationCap,
  Settings,
  PenTool,
  Heart,
  Calendar,
  Shield
} from "lucide-react";
import Logo from "@/components/Logo";

const SiteFooter = () => {
  const partnerLogos = [
    {
      name: "Young Learners English UK",
      logo: "/lovable-uploads/e9dbae5c-630d-4e06-a8b5-b81754620159.png",
      url: "https://yleuk.com/",
      description: "Young Learners Accreditation"
    },
    {
      name: "English UK",
      logo: "/lovable-uploads/df69767f-057f-4c98-9e4e-069a7eee6a76.png", 
      url: "https://www.englishuk.com/en",
      description: "Member of English UK"
    },
    {
      name: "el-gazette Centre of Excellence",
      logo: "/lovable-uploads/ff64f121-072c-495c-b05a-7a7c4def8e7d.png",
      url: "https://www.elgazette.com/category/supplements/uk-language-centre-rankings/",
      description: "Centre of Excellence 2024-2025"
    },
    {
      name: "Visit Brighton",
      logo: "/lovable-uploads/807e9599-4257-4b43-b98b-4ead09f00916.png",
      url: "https://www.visitbrighton.com/",
      description: "Official Brighton Partner"
    },
    {
      name: "Braheskolan",
      logo: "/lovable-uploads/9fdbbe6a-4dc8-46ad-bb27-afb0ff4bc970.png",
      url: "https://www.braheskolan.se/",
      description: "Educational Partnership"
    },
    {
      name: "West Sussex Safeguarding",
      logo: "/lovable-uploads/39e3deba-996f-45f1-bb79-3e3ab8bfeff5.png",
      url: "https://www.westsussexscp.org.uk/",
      description: "Safeguarding Children Partnership"
    }
  ];

  const quickLinks = [
    { title: "About Us", href: "#about" },
    { title: "Our Courses", href: "#courses" },
    { title: "Pricing", href: "#pricing" },
    { title: "Brighton Guide", href: "#brighton" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms & Conditions", href: "/terms" },
    { title: "Complaints Procedure", href: "/complaints" },
    { title: "Safeguarding", href: "/safeguarding" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/loxdale", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/loxdale", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/loxdale", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/loxdale", label: "LinkedIn" }
  ];


  return (
    <footer className="bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
        <div className="absolute top-20 left-20 w-32 h-1 bg-secondary"></div>
        <div className="absolute top-20 left-52 w-1 h-32 bg-secondary"></div>
        <div className="absolute bottom-40 right-40 w-48 h-1 bg-accent"></div>
        <div className="absolute bottom-20 right-20 w-1 h-20 bg-primary"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Top Section - Logo, Description & Stats - Full Width */}
        <div className="mb-16">
          {/* Company Info - Full Width */}
          <div className="w-full">
            <div className="text-center mb-8">
            </div>
            <div className="flex items-center justify-center gap-4 mb-6">
              <Logo height={60} />
              <div>
                <h3 className="text-2xl font-bold text-foreground">Loxdale English Centre</h3>
                <p className="text-muted-foreground">Brighton's Premier Language School</p>
              </div>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-4xl mx-auto text-center">
              For over 50 years, Loxdale English Centre has been providing exceptional English language 
              education in the beautiful seaside city of Brighton. Our commitment to quality teaching 
              and student success continues to make us one of the UK's most trusted language schools.
            </p>

          </div>
        </div>
        {/* Accredited Excellence Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-700">Accredited Excellence</h3>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our commitment to quality is validated by prestigious international accreditations and memberships
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {partnerLogos.map((partner, index) => (
              <a 
                key={index} 
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 text-center group"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-semibold text-foreground mb-1 text-sm">{partner.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {partner.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-foreground">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-2 text-sm"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-foreground">Legal & Policies</h4>
            <div className="space-y-2">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors py-2 text-sm"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2025 Loxdale English Centre. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Established 1968 • Brighton's Premier English Language School
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Registered No: 1497558 • Registered charity No: 280428
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-gradient-secondary text-foreground border-0">
                🌟 Autumn enrollment open now
              </Badge>
              <Button 
                size="sm"
                className="bg-gradient-primary hover:scale-105 transition-all duration-300 text-white border-0"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;