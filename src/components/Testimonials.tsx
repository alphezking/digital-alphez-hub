import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Business Owner",
      company: "Thompson's Boutique",
      content: "Digital Alphez transformed our business. Our sales doubled after their social media boosting strategies! The team is professional, responsive, and truly cares about results.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Independent Artist",
      company: "MC Music",
      content: "My streaming numbers skyrocketed thanks to their music promotion services. They know exactly how to get your music in front of the right audience. Highly recommend!",
      rating: 5
    },
    {
      name: "Jennifer Adams",
      role: "Marketing Director",
      company: "Adams Construction",
      content: "Professional, creative, and results-driven. Digital Alphez built us a stunning website and manages our entire online presence. Best investment we've made.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
            What Our Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it — hear from businesses we've helped succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 bg-card border-border/50"
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-primary/30" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-xs text-primary mt-1">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
