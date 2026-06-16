import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, GraduationCap, ShoppingCart, Megaphone, Smartphone, Palette, ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    { title: "School Management System", category: "EdTech", result: "5 schools onboarded, 3,000+ students managed", icon: GraduationCap, desc: "End-to-end student portal, admissions, and grade tracking." },
    { title: "Corporate Website — Pro Services Firm", category: "Web Development", result: "3x increase in client inquiries", icon: Globe, desc: "Modern, SEO-optimized site with lead capture and analytics." },
    { title: "E-Commerce Launch — Retail Brand", category: "E-Commerce", result: "Live store, integrated payments, first sales in week one", icon: ShoppingCart, desc: "Custom store with mobile money + card payment integration." },
    { title: "Digital Marketing Campaign — NGO", category: "Digital Marketing", result: "4x reach, 2x donation conversions", icon: Megaphone, desc: "Targeted social campaigns and content strategy." },
    { title: "Mobile App — Logistics Startup", category: "Mobile App", result: "MVP launched in 8 weeks", icon: Smartphone, desc: "Cross-platform app with real-time tracking dashboard." },
    { title: "Brand Identity — Construction Firm", category: "Branding", result: "Full visual rebrand + collateral", icon: Palette, desc: "Logo, brand book, stationery, and marketing materials." },
  ];

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase mb-4">Portfolio</p>
          <h2 className="section-heading mb-5">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-foreground/60 font-light text-base sm:text-lg">
            Real organizations. Real outcomes. See what we've delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <Card
              key={i}
              className="group relative p-7 bg-card border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-elevated)] overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-foreground/0 group-hover:text-primary transition-all translate-y-1 group-hover:translate-y-0" />
                </div>
                <Badge variant="outline" className="text-xs mb-3 border-primary/30 text-primary font-medium bg-primary/5">
                  {p.category}
                </Badge>
                <h3 className="font-bold text-base text-foreground leading-snug mb-2">{p.title}</h3>
                <p className="text-sm text-foreground/55 font-light mb-5 leading-relaxed">{p.desc}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary">{p.result}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
