import { Card } from "@/components/ui/card";
import { Rocket, Handshake, TrendingUp, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Rocket,
      title: "Innovation",
      description: "Cutting-edge strategies that keep you ahead of the curve"
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "Transparent partnerships built on trust and honesty"
    },
    {
      icon: TrendingUp,
      title: "Results",
      description: "Data-driven approach delivering measurable outcomes"
    },
    {
      icon: Globe,
      title: "Community",
      description: "Supporting local businesses to thrive globally"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Digital Alphez</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Digital Alphez is a modern digital solutions company dedicated to helping 
            small and medium-sized businesses grow online. With innovative strategies in 
            social media marketing, music promotions, and online problem-solving, we 
            transform challenges into opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
