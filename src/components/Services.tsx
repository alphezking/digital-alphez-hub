import { Card } from "@/components/ui/card";
import {
  Globe, GraduationCap, Megaphone, Cog, Palette, Smartphone, Briefcase, ShoppingCart, ArrowUpRight,
} from "lucide-react";

const Services = () => {
  const services = [
    { icon: Globe, title: "Website Design & Development", desc: "Professional websites that are responsive, secure, fast, and optimized for business growth." },
    { icon: GraduationCap, title: "School Digital Transformation", desc: "Student portals, school management systems, digital admissions, and online learning platforms." },
    { icon: Megaphone, title: "Digital Marketing", desc: "SEO, social media management, content marketing, online advertising, and brand growth strategies." },
    { icon: Cog, title: "Business Automation", desc: "Streamline operations using digital workflows, automation tools, and cloud technologies." },
    { icon: Palette, title: "Graphic Design & Branding", desc: "Logos, business identities, marketing materials, and professional visual communication." },
    { icon: Smartphone, title: "Mobile App Development", desc: "Custom Android and iOS applications designed for business growth and customer engagement." },
    { icon: Briefcase, title: "IT Consulting", desc: "Technology strategy, digital roadmaps, system implementation, and digital adoption support." },
    { icon: ShoppingCart, title: "E-Commerce Solutions", desc: "Online stores and payment integration solutions for businesses of all sizes." },
  ];

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="section-padding bg-secondary relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase mb-4">Our Services</p>
          <h2 className="section-heading mb-5">
            Digital Transformation <span className="text-gradient">Services</span>
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg font-light">
            A complete range of technology solutions designed to help organizations operate smarter,
            grow faster, and stay competitive in an increasingly digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {services.map((s, i) => (
            <Card
              key={i}
              onClick={scrollToContact}
              className="group relative p-7 bg-card border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-elevated)] cursor-pointer overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/0 group-hover:bg-primary/10 rounded-full blur-2xl transition-all duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-base text-foreground mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-foreground/55 font-light leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
