import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 sm:py-12 border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-display">
              Digital <span className="text-gradient">Alphez</span>
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering local businesses with smart digital solutions. Your partner in online growth and digital transformation.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label={Icon.displayName}>
                  <Icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary font-display">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary font-display">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="mailto:alphezking@gmail.com" className="hover:text-primary transition-colors">alphezking@gmail.com</a></li>
              <li><a href="tel:+231887303826" className="hover:text-primary transition-colors">+231 887 303 826</a></li>
              <li>Liberia, West Africa</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Digital Alphez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
