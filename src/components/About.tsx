import { Rocket, Eye, Target, Handshake } from "lucide-react";

const About = () => {
  const values = [
    { icon: Rocket, title: "Growth-Focused", description: "Every decision we make is aimed at growing your brand and revenue." },
    { icon: Eye, title: "Creative Vision", description: "We blend aesthetics with strategy to create designs that convert." },
    { icon: Target, title: "Results-Driven", description: "We measure success by the outcomes we deliver for your business." },
    { icon: Handshake, title: "Partnership", description: "We work alongside you, not just for you. Your goals are our goals." },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 animate-fade-in">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">About Us</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            More Than an Agency — Your <span className="text-primary">Growth Partner</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            Digitalalphez is a modern creative and growth agency based in Liberia, West Africa. 
            We help artists, entrepreneurs, and small businesses build powerful brands, launch 
            professional websites, and grow their audience online. Whether you need a brand identity, 
            a website, or a full promotional strategy — we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-base mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
