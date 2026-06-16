import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl bg-card border border-primary/20 p-10 sm:p-16 text-center relative overflow-hidden shadow-[var(--shadow-premium)]">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="relative space-y-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Ready to Transform Your{" "}
              <span className="text-gradient">Organization Digitally?</span>
            </h2>
            <p className="text-foreground/60 text-base sm:text-lg max-w-2xl mx-auto font-light">
              Book a free consultation today and discover how Alphez Digital Solutions can help you grow faster,
              operate smarter, and reach more customers.
            </p>
            <div className="pt-2">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gold-gradient hover:opacity-90 text-primary-foreground font-semibold px-12 h-14 text-base rounded-xl shadow-[var(--shadow-gold)]"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
