import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Missing Information", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    try {
      emailjs.init("wDWZMdnRMCfHkIVXV");
      await emailjs.send("service_90du9z7", "template_3yw104n", {
        from_name: formData.name,
        from_email: formData.email,
        business_name: "",
        services: formData.services,
        message: `Budget: ${formData.budget}\n\n${formData.message}`,
      });
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", services: "", budget: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({ title: "Failed to Send", description: "Please try again or contact us directly via email.", variant: "destructive" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase mb-4">Contact</p>
          <h2 className="section-heading mb-5">
            Let's Build <span className="text-primary">Together</span>
          </h2>
          <p className="text-muted-foreground font-light text-base sm:text-lg">
            Ready to start your project? Fill out the form and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Get in Touch</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Have a project in mind? We'd love to hear about it. Reach out and let's make it happen.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "alphezking@gmail.com", href: "mailto:alphezking@gmail.com" },
                { icon: Phone, label: "+231 887 303 826", href: "tel:+231887303826" },
                { icon: MapPin, label: "Liberia, West Africa" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
            <Card className="p-6 bg-foreground text-background border-0 rounded-2xl">
              <h4 className="font-bold mb-2 text-primary">Free Consultation</h4>
              <p className="text-sm text-background/50 font-light leading-relaxed mb-4">
                Book a 30-minute call to discuss your goals and get a custom strategy — no strings attached.
              </p>
              <Button
                variant="outline"
                className="border-background/20 text-background hover:bg-background/10 text-sm rounded-lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book a Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </div>

          {/* Form */}
          <Card className="lg:col-span-3 p-6 sm:p-10 border-border rounded-2xl shadow-[var(--shadow-soft)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required className="h-12 rounded-xl bg-secondary/50 border-border focus:border-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="h-12 rounded-xl bg-secondary/50 border-border focus:border-primary" />
              </div>
              <div>
                <label htmlFor="services" className="block text-sm font-medium mb-2">Service Needed</label>
                <Select value={formData.services} onValueChange={(v) => setFormData((prev) => ({ ...prev, services: v }))}>
                  <SelectTrigger className="w-full h-12 rounded-xl bg-secondary/50 border-border">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border z-50 rounded-xl">
                    <SelectItem value="Starter Package">Starter Package</SelectItem>
                    <SelectItem value="Growth Package">Growth Package</SelectItem>
                    <SelectItem value="Premium Package">Premium Package</SelectItem>
                    <SelectItem value="Custom Project">Custom Project</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range</label>
                <Select value={formData.budget} onValueChange={(v) => setFormData((prev) => ({ ...prev, budget: v }))}>
                  <SelectTrigger className="w-full h-12 rounded-xl bg-secondary/50 border-border">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border z-50 rounded-xl">
                    <SelectItem value="Under $100">Under $100</SelectItem>
                    <SelectItem value="$100 - $300">$100 – $300</SelectItem>
                    <SelectItem value="$300 - $600">$300 – $600</SelectItem>
                    <SelectItem value="$600+">$600+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={4} required className="rounded-xl bg-secondary/50 border-border focus:border-primary" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-13 rounded-xl shadow-[0_8px_24px_hsl(48_96%_53%_/_0.2)] hover:shadow-[0_12px_32px_hsl(48_96%_53%_/_0.3)] transition-all duration-300">
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
