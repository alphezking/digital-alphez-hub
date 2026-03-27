import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
    <section id="contact" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-14 animate-fade-in">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Build <span className="text-primary">Together</span>
          </h2>
          <p className="text-muted-foreground">
            Ready to start your project? Fill out the form and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
              <p className="text-muted-foreground text-sm">
                Have a project in mind? We'd love to hear about it. Reach out and let's make it happen.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "alphezking@gmail.com", href: "mailto:alphezking@gmail.com" },
                { icon: Phone, label: "+231 887 303 826", href: "tel:+231887303826" },
                { icon: MapPin, label: "Liberia, West Africa" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
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
            <Card className="p-5 bg-foreground text-background border-0">
              <h4 className="font-bold mb-1 text-primary">Free Consultation</h4>
              <p className="text-sm text-background/60">
                Book a 30-minute call to discuss your goals and get a custom strategy — no strings attached.
              </p>
            </Card>
          </div>

          {/* Form */}
          <Card className="lg:col-span-3 p-6 sm:p-8 border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name *</label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required className="h-12" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email *</label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="h-12" />
              </div>
              <div>
                <label htmlFor="services" className="block text-sm font-medium mb-1.5">Service Needed</label>
                <Select value={formData.services} onValueChange={(v) => setFormData((prev) => ({ ...prev, services: v }))}>
                  <SelectTrigger className="w-full h-12 bg-background">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border z-50">
                    <SelectItem value="Starter Package">Starter Package</SelectItem>
                    <SelectItem value="Growth Package">Growth Package</SelectItem>
                    <SelectItem value="Premium Package">Premium Package</SelectItem>
                    <SelectItem value="Custom Project">Custom Project</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-1.5">Budget Range</label>
                <Select value={formData.budget} onValueChange={(v) => setFormData((prev) => ({ ...prev, budget: v }))}>
                  <SelectTrigger className="w-full h-12 bg-background">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border z-50">
                    <SelectItem value="Under $100">Under $100</SelectItem>
                    <SelectItem value="$100 - $300">$100 – $300</SelectItem>
                    <SelectItem value="$300 - $600">$300 – $600</SelectItem>
                    <SelectItem value="$600+">$600+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message *</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={4} required />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12">
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
