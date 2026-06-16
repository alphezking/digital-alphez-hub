import { Target, Lightbulb, Shield, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    { icon: Lightbulb, title: "Innovative", description: "Future-focused solutions built on modern technology and best practices." },
    { icon: Target, title: "Results-Driven", description: "We measure success by the outcomes and growth we deliver for our clients." },
    { icon: Shield, title: "Reliable", description: "Professional support, transparent communication, and dependable delivery." },
    { icon: TrendingUp, title: "Growth-Focused", description: "Strategies designed for long-term sustainable business growth." },
  ];

  return (
    <section id="about" className="section-padding bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase mb-4">Who We Are</p>
          <h2 className="section-heading mb-6">
            Bridging Business with <span className="text-gradient">Modern Technology</span>
          </h2>
          <p className="text-foreground/60 leading-relaxed text-base sm:text-lg font-light">
            Alphez Digital Solution is a technology-driven company dedicated to helping organizations navigate
            the digital age. We provide innovative digital transformation services that improve operations,
            enhance customer engagement, increase productivity, and accelerate business growth. Our mission is
            to bridge the gap between traditional business processes and modern technology by delivering
            reliable, affordable, and scalable solutions tailored to each client's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-card)] group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-base mb-2 text-foreground">{value.title}</h3>
              <p className="text-foreground/55 text-sm font-light leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
