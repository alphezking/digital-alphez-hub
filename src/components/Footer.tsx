import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollTo = (id: string) => {
    if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = ["Home", "About", "Services", "Industries", "Portfolio", "FAQ", "Contact"];
  const services = [
    "Website Development",
    "School Digital Transformation",
    "Digital Marketing",
    "Business Automation",
    "Branding & Design",
    "Mobile App Development",
  ];

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gold-gradient flex items-center justify-center font-bold text-primary-foreground text-lg shadow-[var(--shadow-gold)]">A</div>
              <span className="text-lg font-bold text-foreground">Alphez<span className="text-primary"> Digital</span></span>
            </div>
            <p className="text-foreground/55 text-sm font-light leading-relaxed mb-5">
              Transforming Ideas Into Digital Success. We help businesses, schools, NGOs, and organizations
              thrive in the digital age.
            </p>
            <div className="flex gap-2">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-all group">
                  <Icon className="w-4 h-4 text-foreground/60 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <button onClick={() => scrollTo(l.toLowerCase())} className="text-sm text-foreground/55 hover:text-primary transition-colors">{l}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}><button onClick={() => scrollTo("services")} className="text-sm text-foreground/55 hover:text-primary transition-colors text-left">{s}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-foreground/55">
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 text-primary mt-0.5" /><a href="mailto:alphezking@gmail.com" className="hover:text-primary transition-colors">alphezking@gmail.com</a></li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 text-primary mt-0.5" /><a href="tel:+231887303826" className="hover:text-primary transition-colors">+231 887 303 826</a></li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5" />Monrovia, Liberia</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-foreground/40">© {year} Alphez Digital Solutions. All rights reserved.</p>
          <p className="text-xs text-foreground/40">Transforming Ideas Into Digital Success.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
