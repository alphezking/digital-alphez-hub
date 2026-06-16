import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(43_89%_55%_/_0.08),_transparent_60%)]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass gold-border">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-foreground/80 tracking-wide">
              Liberia's Premier Digital Transformation Partner
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight">
            Empowering Businesses Through{" "}
            <span className="text-gradient">Digital Transformation</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed font-light">
            Alphez Digital Solution helps businesses, schools, NGOs, and organizations embrace technology,
            improve efficiency, strengthen their online presence, and achieve sustainable growth through
            innovative digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-gold-gradient hover:opacity-90 text-primary-foreground font-semibold px-10 h-14 text-base rounded-xl shadow-[var(--shadow-gold)] w-full sm:w-auto"
              onClick={() => scrollTo("contact")}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5 h-14 text-base rounded-xl w-full sm:w-auto"
              onClick={() => scrollTo("contact")}
            >
              Request Consultation
            </Button>
          </div>

          <p className="text-foreground/40 text-sm font-medium tracking-wide pt-2">
            Trusted by schools, NGOs, startups & businesses across West Africa
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-foreground/25" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
