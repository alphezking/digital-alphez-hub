import { Card } from "@/components/ui/card";
import { Rocket, Handshake, TrendingUp, Globe } from "lucide-react";

const About = () => {
  const values = [
    { icon: Rocket, title: "Innovation", description: "Cutting-edge strategies that keep you ahead of the curve" },
    { icon: Handshake, title: "Integrity", description: "Transparent partnerships built on trust and honesty" },
    { icon: TrendingUp, title: "Results", description: "Data-driven approach delivering measurable outcomes" },
    { icon: Globe, title: "Community", description: "Supporting local businesses to thrive globally" }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">Who We Are</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-display">
            About <span className="text-gradient">Digital Alphez</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
            Digital Alphez is a modern digital solutions company dedicated to helping
            small and medium-sized businesses grow online. With innovative strategies in
            social media marketing, music promotions, and online problem-solving, we
            transform challenges into opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/30 bg-card group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 font-display">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
