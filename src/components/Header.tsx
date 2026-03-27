import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-foreground/95 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-1">
            <span className="text-xl sm:text-2xl font-bold text-background">
              Digital<span className="text-primary">alphez</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-4 py-2 text-sm font-medium text-background/70 hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              className="ml-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-6"
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
        <div className="md:hidden bg-foreground/98 backdrop-blur-xl border-t border-background/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-4 py-3 text-left text-sm font-medium text-background/70 hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
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
