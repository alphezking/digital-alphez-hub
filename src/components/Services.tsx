import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star, Clock } from "lucide-react";

const Services = () => {
  const packages = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for getting started with your online presence.",
      features: [
        "Logo design or refresh",
        "Social media setup (2 platforms)",
        "Basic brand kit",
        "1 week delivery",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "$299",
      description: "The most popular choice for serious growth.",
      features: [
        "Custom website (1–3 pages)",
        "Full social media branding",
        "Content strategy guide",
        "SEO basics setup",
        "2 weeks delivery",
        "1 month support",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$599",
      description: "Complete branding + web + promotion package.",
      features: [
        "Full brand identity design",
        "Custom website (up to 7 pages)",
        "Social media management (1 month)",
        "Ad campaign setup",
        "Music/content promotion",
        "Priority support",
      ],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase mb-4">Our Packages</p>
          <h2 className="section-heading mb-5">
            Choose Your <span className="text-primary">Growth Plan</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-light">
            Simple, transparent pricing designed to deliver real results for your business.
          </p>
        </div>

        {/* Urgency */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <Clock className="w-4 h-4 text-primary" />
          <p className="text-sm font-medium text-muted-foreground">
            Limited slots available this week — <span className="text-primary font-semibold">book now</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`p-8 sm:p-10 relative transition-all duration-500 hover:-translate-y-2 group ${
                pkg.popular
                  ? "border-primary/50 bg-foreground text-background shadow-[var(--shadow-premium)] scale-[1.03]"
                  : "border-border bg-card hover:shadow-[var(--shadow-elevated)] hover:border-primary/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold px-5 py-1.5 rounded-full shadow-[0_4px_16px_hsl(48_96%_53%_/_0.3)]">
                    <Star className="w-3.5 h-3.5" /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${pkg.popular ? "text-background" : ""}`}>{pkg.name}</h3>
                <p className={`text-sm font-light ${pkg.popular ? "text-background/50" : "text-muted-foreground"}`}>{pkg.description}</p>
              </div>

              <div className="mb-8">
                <span className={`text-5xl font-extrabold ${pkg.popular ? "text-primary" : ""}`}>{pkg.price}</span>
                <span className={`text-sm ml-1 ${pkg.popular ? "text-background/40" : "text-muted-foreground"}`}>/ project</span>
              </div>

              <ul className="space-y-3.5 mb-10">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-start gap-3 text-sm ${pkg.popular ? "text-background/70" : "text-muted-foreground"}`}>
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-semibold h-12 rounded-xl transition-all duration-300 ${
                  pkg.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_8px_24px_hsl(48_96%_53%_/_0.3)]"
                    : "bg-foreground hover:bg-foreground/90 text-background group-hover:shadow-lg"
                }`}
                onClick={scrollToContact}
              >
                Get Started
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
