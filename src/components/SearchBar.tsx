import { useState, useCallback, useEffect } from "react";
import { Search, X, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
interface SearchResult {
  title: string;
  content: string;
  section: string;
  href: string;
}
interface SearchBarProps {
  className?: string;
  isTranslating?: boolean;
  currentLanguage?: string;
  onLanguageChange?: (language: string) => void;
}
const SearchBar = ({
  className,
  isTranslating,
  currentLanguage = "en",
  onLanguageChange
}: SearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock search data - in a real app, this would come from a search index
  const searchableContent: SearchResult[] = [{
    title: "General English Course",
    content: "Improve your English skills with our comprehensive General English course designed for international students",
    section: "Courses",
    href: "#course-info"
  }, {
    title: "Brighton Location",
    content: "Study English in the beautiful seaside city of Brighton, United Kingdom",
    section: "Location",
    href: "#brighton-facts"
  }, {
    title: "Summer Programme 2025",
    content: "Join our exclusive summer English programme with cultural activities and excursions",
    section: "Programme",
    href: "#programme-highlights"
  }, {
    title: "Course Pricing",
    content: "Competitive prices for high-quality English language education with flexible payment options",
    section: "Pricing",
    href: "#pricing"
  }, {
    title: "Student Testimonials",
    content: "Read what our international students say about their experience at Loxdale English Centre",
    section: "Reviews",
    href: "#testimonials"
  }, {
    title: "Accommodation",
    content: "Host family and residence accommodation options available for international students",
    section: "Housing",
    href: "#accommodation"
  }, {
    title: "Contact Information",
    content: "Get in touch with our admissions team for course enquiries and applications",
    section: "Contact",
    href: "#contact"
  }];
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }
    setIsSearching(true);

    // Simulate search delay
    setTimeout(() => {
      const filtered = searchableContent.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.content.toLowerCase().includes(searchQuery.toLowerCase()) || item.section.toLowerCase().includes(searchQuery.toLowerCase()));
      setResults(filtered);
      setIsSearching(false);
    }, 300);
  }, []);
  useEffect(() => {
    performSearch(query);
  }, [query, performSearch]);
  const handleResultClick = (href: string) => {
    setIsOpen(false);
    setQuery("");
    setResults([]);

    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const handleClear = () => {
    setQuery("");
    setResults([]);
  };
  return <div className={cn("relative w-full max-w-md", className)}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        
        
        {/* Right side buttons */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          {/* Language indicator */}
          <Badge variant="secondary" className="h-7 px-2 text-xs bg-muted/80 hover:bg-muted cursor-pointer" onClick={() => onLanguageChange?.(currentLanguage === "en" ? "auto" : "en")}>
            <Globe className="h-3 w-3 mr-1" />
            {currentLanguage.toUpperCase()}
            {isTranslating && <span className="ml-1 animate-pulse">•</span>}
          </Badge>
          
          {/* Clear button */}
          {query && <Button variant="ghost" size="sm" onClick={handleClear} className="h-7 w-7 p-0 hover:bg-muted/80">
              <X className="h-3 w-3" />
            </Button>}
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (query || results.length > 0) && <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          
          {/* Results Container */}
          <Card className="absolute top-full mt-2 left-0 right-0 z-20 border-border shadow-2xl bg-background/95 backdrop-blur transform-gpu perspective-1000 rotate-x-1 hover:rotate-x-0 transition-all duration-300">
            <CardContent className="p-4">
              {isSearching ? <div className="flex items-center justify-center py-8">
                  <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full"></div>
                  <span className="ml-2 text-sm text-muted-foreground">Searching...</span>
                </div> : results.length > 0 ? <div className="space-y-2">
                  <p className="text-sm text-muted-foreground mb-3">
                    Found {results.length} result{results.length !== 1 ? 's' : ''}
                  </p>
                  {results.map((result, index) => <div key={index} onClick={() => handleResultClick(result.href)} className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer group transition-colors">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                            {result.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                            {result.content}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {result.section}
                        </Badge>
                      </div>
                    </div>)}
                </div> : query ? <div className="text-center py-8">
                  <Search className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    No results found for "{query}"
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Try searching for courses, accommodation, or contact info
                  </p>
                </div> : <div className="space-y-2">
                  <p className="text-sm text-muted-foreground mb-3">Popular searches</p>
                  {["General English", "Summer Programme", "Brighton", "Pricing", "Contact"].map(term => <div key={term} onClick={() => setQuery(term)} className="p-2 rounded-lg hover:bg-muted/50 cursor-pointer text-sm transition-colors">
                      <Search className="h-3 w-3 inline mr-2 text-muted-foreground" />
                      {term}
                    </div>)}
                </div>}
            </CardContent>
          </Card>
        </>}
    </div>;
};
export default SearchBar;