import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      {/* Subtle accent glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <p className="text-primary font-semibold text-sm sm:text-base tracking-widest uppercase">
            Design • Websites • Promotion
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-background leading-[1.08] tracking-tight">
            We Help Artists & Brands{" "}
            <span className="text-primary">Grow Faster</span> Online
          </h1>

          <p className="text-lg sm:text-xl text-background/60 max-w-2xl mx-auto leading-relaxed">
            Digitalalphez is a creative growth agency helping artists and small businesses build their brand, get more clients, and scale online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 text-base w-full sm:w-auto"
              onClick={() => scrollTo("contact")}
            >
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/20 text-background hover:bg-background/10 h-14 text-base w-full sm:w-auto"
              onClick={() => scrollTo("portfolio")}
            >
              View Our Work
            </Button>
          </div>

          {/* Trust bar */}
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-background/40 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              50+ Clients Served
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              100+ Projects Delivered
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              98% Satisfaction Rate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
