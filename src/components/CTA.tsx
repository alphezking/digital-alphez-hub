import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-foreground relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[140px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight">
            Ready to Grow Your Brand?{" "}
            <span className="text-gradient">Let's Build Something Powerful.</span>
          </h2>
          <p className="text-background/45 text-base sm:text-lg max-w-xl mx-auto font-light">
            Stop waiting. Start building. Join the brands that chose growth — and got results.
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 h-14 text-base rounded-xl shadow-[0_8px_32px_hsl(48_96%_53%_/_0.3)] hover:shadow-[0_12px_40px_hsl(48_96%_53%_/_0.4)] transition-all duration-300"
              onClick={scrollToContact}
            >
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <p className="text-background/25 text-xs tracking-wide">
            Limited slots available — respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
