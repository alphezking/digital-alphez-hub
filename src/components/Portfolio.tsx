import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Zap } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Local Store Instagram Growth",
      client: "XYZ Local Store",
      result: "500 → 10K followers",
      timeframe: "3 months",
      icon: Users,
      category: "Social Media",
      description: "Implemented targeted content strategy and engagement campaigns"
    },
    {
      title: "Artist Streaming Success",
      client: "Artist A",
      result: "+40% streams",
      timeframe: "2 weeks",
      icon: TrendingUp,
      category: "Music Promotion",
      description: "Strategic playlist placement and fan engagement initiatives"
    },
    {
      title: "Full Website Development",
      client: "Charles World Construction",
      result: "Complete Site Launch",
      timeframe: "1 month",
      icon: Zap,
      category: "Web Development",
      description: "Modern WordPress site with SEO optimization and mobile responsiveness"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Work in <span className="text-primary">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from real businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>
                <Badge variant="outline" className="mb-3">
                  {project.category}
                </Badge>
              </div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.client}</p>
              <p className="text-muted-foreground text-sm mb-6">{project.description}</p>

              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{project.result}</div>
                    <div className="text-xs text-muted-foreground">in {project.timeframe}</div>
                  </div>
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
