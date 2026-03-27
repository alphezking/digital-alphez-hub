import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah Thompson", role: "Owner, Thompson's Boutique", content: "Digitalalphez completely transformed our brand. Sales doubled within two months of their social media strategy." },
    { name: "Michael Chen", role: "Independent Artist", content: "My streaming numbers skyrocketed. They know exactly how to get your music in front of the right audience." },
    { name: "Jennifer Adams", role: "Director, Adams Construction", content: "Professional, creative, and results-driven. Best investment we've made for our online presence." },
    { name: "David Kollie", role: "Founder, Kollie Fashion", content: "From logo to website to marketing — they handled everything. My brand looks world-class now." },
    { name: "Grace Weah", role: "CEO, GW Beauty", content: "I went from zero online presence to getting daily customer inquiries. Digitalalphez is the real deal." },
    { name: "Prince Johnson", role: "Artist & Producer", content: "They understand the creative space. My brand identity and streaming presence have never been better." },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-14 animate-fade-in">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Our Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it — hear from the people we've helped grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <Card key={index} className="p-6 border-border hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{t.content}"
              </p>
              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
