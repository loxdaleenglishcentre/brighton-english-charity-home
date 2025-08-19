import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import { useTranslation } from "@/hooks/useTranslation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems: { label: string; href: string }[] = [
  { label: "Course Info", href: "#course-info" },
  { label: "Programme", href: "#programme-highlights" },
  { label: "Pricing", href: "#pricing" },
  { label: "Quote", href: "#quote" },
  { label: "Contact", href: "#contact" },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { isTranslating, currentLanguage, changeLanguage } = useTranslation();

  // Track scroll to style header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy for active section
  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { root: null, rootMargin: "0px 0px -30% 0px", threshold: [0.2, 0.4, 0.6, 0.8] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (

    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-4 md:mb-8 transition-all duration-300",
        scrolled ? "bg-background/90 border-b border-foreground/10 shadow-lg" : "bg-background/70"
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300",
          scrolled ? "h-18 md:h-22 lg:h-26" : "h-22 md:h-28 lg:h-32"
        )}
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-3 min-w-0 py-1">
          <Link to="/" className="flex items-center gap-3">
            <Logo className={cn(
              "transition-all duration-300",
              scrolled ? "h-14 md:h-16 lg:h-18" : "h-16 md:h-20 lg:h-22"
            )} />
            <span className="sr-only">Loxdale English Centre</span>
          </Link>
        </div>

        {/* Center: Search Bar (Mobile & Desktop) */}
        <div className="flex-1 max-w-md mx-4 lg:mx-8">
          <SearchBar 
            isTranslating={isTranslating}
            currentLanguage={currentLanguage}
            onLanguageChange={changeLanguage}
            className="w-full"
          />
        </div>

        {/* Right: Desktop Nav + CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <nav
            className={cn(
              "hidden lg:flex items-center gap-2 rounded-full px-3 py-2 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border border-foreground/10 shadow-lg",
              scrolled && "shadow-xl"
            )}
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-sm font-semibold px-3 py-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                    isActive
                      ? "bg-primary/15 text-primary border border-primary/20 shadow-sm"
                      : "text-foreground hover:bg-primary/10"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <Button asChild variant="secondary" size="lg" className="hidden md:inline-flex">
            <a href="#contact">Enquire Now</a>
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="pt-8 flex flex-col gap-4" aria-label="Mobile navigation">
                {navItems.map((item) => {
                  const id = item.href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <SheetClose asChild key={item.href}>
                      <a
                        href={item.href}
                        className={cn(
                          "block text-lg font-bold px-3 py-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                          isActive ? "bg-primary/15 text-primary border border-primary/20" : "text-foreground hover:bg-primary/10"
                        )}
                        aria-label={item.label}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  );
                })}
                <Button asChild variant="secondary" className="mt-2">
                  <a href="#contact">Enquire Now</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
