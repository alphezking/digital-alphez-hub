import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Zap, Palette, Globe, Music } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Brand Identity for Thompson's Boutique",
      category: "Branding",
      result: "2x increase in foot traffic after rebrand",
      icon: Palette,
    },
    {
      title: "Instagram Growth — XYZ Local Store",
      category: "Social Media",
      result: "500 → 10K followers in 3 months",
      icon: Users,
    },
    {
      title: "Artist A — Streaming Promotion",
      category: "Music Promotion",
      result: "+40% streams in 2 weeks",
      icon: Music,
    },
    {
      title: "Charles World Construction Website",
      category: "Web Development",
      result: "Complete site launch, 3x more inquiries",
      icon: Globe,
    },
    {
      title: "Ad Campaign — Adams Construction",
      category: "Digital Marketing",
      result: "5x return on ad spend",
      icon: TrendingUp,
    },
    {
      title: "Full Rebrand — MC Music",
      category: "Branding + Web",
      result: "New identity, website, and 60% more bookings",
      icon: Zap,
    },
  ];

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-14 animate-fade-in">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Results That <span className="text-primary">Speak</span>
          </h2>
          <p className="text-muted-foreground">
            Real projects. Real outcomes. See what we've done for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <Badge variant="outline" className="text-xs mb-2 border-border">
                    {project.category}
                  </Badge>
                  <h3 className="font-bold text-base leading-snug">{project.title}</h3>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-primary">{project.result}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
