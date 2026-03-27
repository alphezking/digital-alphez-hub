import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_hsl(48_96%_53%_/_0.06),_transparent_60%)]" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-in">
          <p className="text-primary font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase">
            Design • Websites • Promotion
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-background leading-[1.05] tracking-tight">
            We Help Artists & Brands{" "}
            <span className="text-gradient">Grow Faster</span>{" "}
            Online
          </h1>

          <p className="text-lg sm:text-xl text-background/50 max-w-2xl mx-auto leading-relaxed font-light">
            Digitalalphez is a creative growth agency helping artists and small businesses build their brand, get more clients, and scale online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 h-14 text-base rounded-xl shadow-[0_8px_32px_hsl(48_96%_53%_/_0.3)] hover:shadow-[0_12px_40px_hsl(48_96%_53%_/_0.4)] transition-all duration-300 w-full sm:w-auto"
              onClick={() => scrollTo("contact")}
            >
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/20 text-background hover:bg-background/10 h-14 text-base rounded-xl w-full sm:w-auto transition-all duration-300"
              onClick={() => scrollTo("portfolio")}
            >
              View Our Work
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-background/30 text-sm font-medium tracking-wide">
            Trusted by growing brands & artists across Africa
          </p>

          {/* Trust stats */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-background/35 text-sm">
            {[
              { stat: "50+", label: "Clients Served" },
              { stat: "100+", label: "Projects Delivered" },
              { stat: "98%", label: "Satisfaction Rate" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-primary">{item.stat}</span>
                <span className="text-xs tracking-wide uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-background/20" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
