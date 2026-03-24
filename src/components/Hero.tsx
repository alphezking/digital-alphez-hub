import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-secondary/85" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium text-accent">Your Digital Growth Partner</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-[1.1] px-2 font-display tracking-tight">
            Empowering Local Businesses with{" "}
            <span className="text-gradient">Smart Digital Solutions</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            From boosting social media presence to increasing music platform plays —
            Digital Alphez is your one-stop solution for online growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 px-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 w-full sm:w-auto animate-glow-pulse rounded-full text-base"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/40 text-secondary-foreground hover:bg-primary/10 w-full sm:w-auto rounded-full text-base"
              onClick={() => scrollToSection("services")}
            >
              <Zap className="mr-2 w-4 h-4 text-accent" />
              View Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-10 sm:pt-14 max-w-3xl mx-auto px-4">
            {[
              { value: "50+", label: "Happy Clients" },
              { value: "100+", label: "Projects Done" },
              { value: "98%", label: "Success Rate" },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-2xl p-4 sm:p-6 space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient font-display">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
