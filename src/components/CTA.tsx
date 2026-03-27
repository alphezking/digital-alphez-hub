import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28 bg-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-background leading-tight">
            Ready to Take Your Brand to the{" "}
            <span className="text-primary">Next Level?</span>
          </h2>
          <p className="text-background/60 text-base sm:text-lg max-w-xl mx-auto">
            Let's build something that makes your audience stop scrolling. Start your project today and see results that matter.
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 h-14 text-base"
              onClick={scrollToContact}
            >
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
