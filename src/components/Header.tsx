import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Active section detection
      const sections = ["contact", "about", "testimonials", "portfolio", "services"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom > 120;
      });
      setActiveSection(current || "home");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Testimonials", id: "testimonials" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-foreground/95 backdrop-blur-2xl shadow-[0_1px_0_hsl(0_0%_100%_/_0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-1 group">
            <span className="text-xl sm:text-2xl font-bold text-background transition-colors">
              Digital<span className="text-primary group-hover:text-primary/80 transition-colors">alphez</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-background/60 hover:text-background"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
            <Button
              size="sm"
              className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-6 shadow-[0_4px_16px_hsl(48_96%_53%_/_0.2)] hover:shadow-[0_6px_24px_hsl(48_96%_53%_/_0.3)] transition-all duration-300"
              onClick={() => scrollTo("contact")}
            >
              Start a Project
            </Button>
          </nav>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-background"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-foreground/98 backdrop-blur-2xl border-t border-background/8 animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === link.id
                    ? "text-primary bg-primary/5"
                    : "text-background/60 hover:text-background hover:bg-background/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 rounded-xl"
              onClick={() => scrollTo("contact")}
            >
              Start a Project
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
