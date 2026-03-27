import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Zap, Palette, Globe, Music, ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Brand Identity for Thompson's Boutique",
      category: "Branding",
      result: "2x increase in foot traffic after rebrand",
      description: "Complete visual identity overhaul including logo, packaging, and storefront design.",
      icon: Palette,
    },
    {
      title: "Instagram Growth — XYZ Local Store",
      category: "Social Media",
      result: "500 → 10K followers in 3 months",
      description: "Strategic content calendar and engagement campaigns for rapid audience growth.",
      icon: Users,
    },
    {
      title: "Artist A — Streaming Promotion",
      category: "Music Promotion",
      result: "+40% streams in 2 weeks",
      description: "Targeted playlist placements and social media promotion strategy.",
      icon: Music,
    },
    {
      title: "Charles World Construction Website",
      category: "Web Development",
      result: "Complete site launch, 3x more inquiries",
      description: "Modern responsive website with lead capture and SEO optimization.",
      icon: Globe,
    },
    {
      title: "Ad Campaign — Adams Construction",
      category: "Digital Marketing",
      result: "5x return on ad spend",
      description: "Facebook and Google ad campaigns with precise audience targeting.",
      icon: TrendingUp,
    },
    {
      title: "Full Rebrand — MC Music",
      category: "Branding + Web",
      result: "New identity, website, and 60% more bookings",
      description: "End-to-end brand transformation from visual identity to online presence.",
      icon: Zap,
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase mb-4">Portfolio</p>
          <h2 className="section-heading mb-5">
            Results That <span className="text-primary">Speak</span>
          </h2>
          <p className="text-muted-foreground font-light text-base sm:text-lg">
            Real projects. Real outcomes. See what we've done for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative p-6 sm:p-8 border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-elevated)] overflow-hidden cursor-pointer"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground/0 group-hover:text-primary transition-all duration-300 translate-y-1 group-hover:translate-y-0" />
                </div>

                <Badge variant="outline" className="text-xs mb-3 border-border font-medium">
                  {project.category}
                </Badge>
                <h3 className="font-bold text-base leading-snug mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground font-light mb-6 leading-relaxed">{project.description}</p>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary">{project.result}</p>
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
