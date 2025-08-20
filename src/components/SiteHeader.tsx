import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { label: "Courses", href: "#courses" },
    { label: "Brighton", href: "#brighton" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let activeId = "";
        
        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeId = entry.target.id;
          }
        });
        
        if (activeId) {
          setActiveSection(activeId);
        }
      },
      {
        threshold: [0.1, 0.5, 0.7],
        rootMargin: "-20% 0px -20% 0px"
      }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "backdrop-blur-xl border-b border-white/10" 
          : ""
      }`}
      style={{
        background: "transparent"
      }}
      role="banner"
    >
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <nav className="flex items-center justify-between h-32 lg:h-36" role="navigation" aria-label="Main navigation">
          
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Logo className="h-24 lg:h-28 xl:h-32" />
          </div>
          
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <SearchBar />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                  activeSection === item.href.slice(1)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-white drop-shadow-lg hover:text-white"
                }`}
                aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
            
            <Button 
              asChild 
              size="sm" 
              className="bg-gradient-green-3d text-primary-foreground border-0 shadow-green-glow transition-all duration-300 px-6 font-semibold"
            >
              <a href="#contact" className="flex items-center gap-2">
                Enquire Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="sm" className="glass border-white/30 text-white hover:bg-white/10">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-gradient-premium border-0">
              <div className="flex flex-col space-y-6 mt-8">
                
                {/* Mobile Search */}
                <div className="md:hidden">
                  <SearchBar />
                </div>
                
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium text-white/90 hover:text-white transition-colors duration-200 py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                
                {/* Mobile CTA */}
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 mt-8"
                >
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    Enquire Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;