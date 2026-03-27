import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollTo = (id: string) => {
    if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = ["Home", "Services", "Portfolio", "Testimonials", "About", "Contact"];

  return (
    <footer className="bg-foreground text-background py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Digital<span className="text-primary">alphez</span>
            </h3>
            <p className="text-background/40 text-sm font-light max-w-xs leading-relaxed">
              Helping artists and brands grow faster online through design, web, and promotion.
            </p>
          </div>
          <div className="flex gap-3">
            {[
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} className="w-11 h-11 rounded-xl bg-background/8 flex items-center justify-center hover:bg-primary/15 transition-all duration-300 group">
                <Icon className="w-5 h-5 text-background/50 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-12">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className="text-sm text-background/40 hover:text-primary transition-colors duration-300"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="pt-8 border-t border-background/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-background/30">© {currentYear} Digitalalphez. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:alphezking@gmail.com" className="text-xs text-background/30 hover:text-primary transition-colors">alphezking@gmail.com</a>
            <a href="tel:+231887303826" className="text-xs text-background/30 hover:text-primary transition-colors">+231 887 303 826</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
