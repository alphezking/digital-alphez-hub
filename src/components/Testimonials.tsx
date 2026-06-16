import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rev. Joseph Karpeh",
      role: "Administrator, Bright Future Academy",
      content:
        "Alphez Digital built our school management system from scratch. Our admissions, attendance, and grading are now fully digital — and parents finally have visibility. A complete transformation.",
    },
    {
      name: "Mariama Sesay",
      role: "Owner, MSay Retail Liberia",
      content:
        "They built our e-commerce store and trained my staff. Within a month we started receiving online orders. Affordable, professional, and truly invested in our growth.",
    },
    {
      name: "Daniel Toe",
      role: "Director, Hope Forward NGO",
      content:
        "Their digital marketing strategy doubled our donor reach. The team understood our mission and delivered tools that match how an NGO actually operates in Liberia.",
    },
    {
      name: "Ophelia Kollie",
      role: "Founder, Kollie Tech Startup",
      content:
        "From branding to mobile app, Alphez Digital was our partner end-to-end. Their consultation alone saved us months of guesswork. Highly recommended for African startups.",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase mb-4">Testimonials</p>
          <h2 className="section-heading mb-5">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-foreground/60 font-light text-base sm:text-lg">
            Real feedback from schools, businesses, NGOs, and startups we've helped grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-8 bg-card border-border hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 group">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed mb-7 font-light">"{t.content}"</p>
              <div className="pt-5 border-t border-border flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary-foreground">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-foreground/55">{t.role}</div>
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
