import { Search, ClipboardList, Code2, FlaskConical, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    { icon: Search, title: "Discovery & Consultation", desc: "We learn your goals, audience, and pain points." },
    { icon: ClipboardList, title: "Planning & Strategy", desc: "We craft a tailored roadmap and clear deliverables." },
    { icon: Code2, title: "Design & Development", desc: "We build with modern stacks, polished design, and care." },
    { icon: FlaskConical, title: "Testing & Optimization", desc: "We test rigorously and optimize for speed and SEO." },
    { icon: Rocket, title: "Launch & Ongoing Support", desc: "We launch confidently and support your growth." },
  ];

  return (
    <section id="process" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase mb-4">Our Process</p>
          <h2 className="section-heading mb-5">
            A Simple, Proven <span className="text-gradient">Process</span>
          </h2>
          <p className="text-foreground/60 font-light">
            We make digital transformation simple — clear steps, real outcomes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          {steps.map((s, i) => (
            <div key={i} className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-primary-foreground font-bold text-sm shadow-[var(--shadow-gold)]">
                {i + 1}
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-sm text-foreground mb-1.5">{s.title}</h3>
              <p className="text-xs text-foreground/55 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
