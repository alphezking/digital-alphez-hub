import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";

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
        "Custom website (1-3 pages)",
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
    <section id="services" className="py-20 sm:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-14 animate-fade-in">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Packages</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-primary">Growth Plan</span>
          </h2>
          <p className="text-muted-foreground">
            Simple, transparent pricing designed to deliver real results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`p-8 relative transition-all duration-300 hover:-translate-y-1 ${
                pkg.popular
                  ? "border-primary bg-foreground text-background shadow-2xl scale-[1.02]"
                  : "border-border bg-card hover:shadow-lg"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                    <Star className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${pkg.popular ? "text-background" : ""}`}>{pkg.name}</h3>
                <p className={`text-sm ${pkg.popular ? "text-background/60" : "text-muted-foreground"}`}>{pkg.description}</p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-extrabold ${pkg.popular ? "text-primary" : ""}`}>{pkg.price}</span>
                <span className={`text-sm ${pkg.popular ? "text-background/50" : "text-muted-foreground"}`}> / project</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-start gap-2 text-sm ${pkg.popular ? "text-background/80" : "text-muted-foreground"}`}>
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.popular ? "text-primary" : "text-primary"}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-semibold h-12 ${
                  pkg.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-foreground hover:bg-foreground/90 text-background"
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
