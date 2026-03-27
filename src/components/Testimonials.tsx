import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

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
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase mb-4">Testimonials</p>
          <h2 className="section-heading mb-5">
            What Our Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground font-light text-base sm:text-lg">
            Don't just take our word for it — hear from the people we've helped grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <Card key={index} className="p-8 border-border hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 group">
              <Quote className="w-8 h-8 text-primary/20 mb-4 group-hover:text-primary/30 transition-colors" />
              
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light">
                "{t.content}"
              </p>
              
              <div className="pt-5 border-t border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
