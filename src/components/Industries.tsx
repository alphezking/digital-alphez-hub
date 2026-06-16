import { GraduationCap, Store, HeartHandshake, Rocket, ShoppingBag, HardHat, Briefcase, Landmark } from "lucide-react";

const Industries = () => {
  const items = [
    { icon: GraduationCap, label: "Schools & Universities" },
    { icon: Store, label: "Small Businesses" },
    { icon: HeartHandshake, label: "NGOs & Nonprofits" },
    { icon: Rocket, label: "Startups" },
    { icon: ShoppingBag, label: "Retail Businesses" },
    { icon: HardHat, label: "Construction Companies" },
    { icon: Briefcase, label: "Professional Services" },
    { icon: Landmark, label: "Government Agencies" },
  ];

  return (
    <section id="industries" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-14 animate-fade-in">
          <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase mb-4">Industries</p>
          <h2 className="section-heading mb-5">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-foreground/60 font-light text-base sm:text-lg">
            From classrooms to construction sites, we power digital transformation across diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {items.map((it, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors">
                <it.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground/85">{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
