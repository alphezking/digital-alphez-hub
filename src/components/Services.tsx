import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Music, Globe, BarChart3, Wrench, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    { icon: Smartphone, title: "Social Media Boosting", description: "Increase visibility, followers, and engagement across all major social platforms with proven strategies.", features: ["Instagram Growth", "Facebook Marketing", "TikTok Campaigns"] },
    { icon: Music, title: "Music Promotion", description: "Grow streams & plays on Spotify, Apple Music, and other major platforms with targeted promotion.", features: ["Playlist Placement", "Streaming Growth", "Artist Branding"] },
    { icon: Globe, title: "Web Solutions", description: "Professional websites, SEO optimization, and comprehensive online presence management.", features: ["Website Design", "SEO Services", "Domain Management"] },
    { icon: BarChart3, title: "Digital Marketing", description: "Strategic ad campaigns, analytics, and brand positioning to maximize your ROI.", features: ["Ad Campaigns", "Analytics", "Brand Strategy"] },
    { icon: Wrench, title: "Problem-Solving Hub", description: "Tailored solutions for unique business growth challenges and digital transformation.", features: ["Custom Solutions", "Consulting", "Strategy Planning"] }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/8 rounded-full blur-[100px]" />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">What We Do</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-foreground mb-4 sm:mb-6 font-display">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            Comprehensive digital solutions tailored to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/30 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-card-foreground font-display">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-full"
                onClick={scrollToContact}
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
