import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Industries", id: "industries" },
  { label: "Process", id: "process" },
  { label: "Portfolio", id: "portfolio" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const ids = links.map((l) => l.id).filter((id) => id !== "home").reverse();
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140;
      });
      setActiveSection(current || "home");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileOpen(false);
    if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gold-gradient flex items-center justify-center font-bold text-primary-foreground text-lg shadow-[var(--shadow-gold)]">
              A
            </div>
            <span className="text-base sm:text-lg font-bold text-foreground">
              Alphez<span className="text-primary"> Digital</span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.id ? "text-primary" : "text-foreground/65 hover:text-foreground"
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
              className="ml-4 bg-gold-gradient hover:opacity-90 text-primary-foreground font-semibold rounded-lg px-6 shadow-[var(--shadow-gold)]"
              onClick={() => scrollTo("contact")}
            >
              Get Started
            </Button>
          </nav>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden glass border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-all ${
                  activeSection === link.id
                    ? "text-primary bg-primary/5"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              className="mt-4 bg-gold-gradient text-primary-foreground font-semibold h-12 rounded-xl"
              onClick={() => scrollTo("contact")}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
