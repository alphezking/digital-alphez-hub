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
    businessName: "",
    services: "",
    message: ""
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
        from_name: formData.name, from_email: formData.email,
        business_name: formData.businessName, services: formData.services, message: formData.message,
      });
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", businessName: "", services: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({ title: "Failed to Send", description: "Please try again or contact us directly via email.", variant: "destructive" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-x-1/2" />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">Contact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-display">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            Ready to transform your business? Get in touch and let's discuss your goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-display">Get in Touch</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                Have a project in mind? Fill out the form or reach out directly. We're here to help your business grow.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Mail, label: "Email", value: "alphezking@gmail.com", href: "mailto:alphezking@gmail.com" },
                { icon: Phone, label: "Phone", value: "+231 887 303 826", href: "tel:+231887303826" },
                { icon: MapPin, label: "Location", value: "Liberia, West Africa" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 font-display">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h4 className="font-bold mb-2 text-primary font-display">Book a Free Consultation</h4>
              <p className="text-sm text-muted-foreground">
                Schedule a 30-minute call to discuss your digital strategy and how we can help you achieve your goals.
              </p>
            </Card>
          </div>

          <Card className="p-6 sm:p-8 border-border/30 bg-card">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required className="rounded-xl" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="rounded-xl" />
              </div>
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium mb-2">Business Name</label>
                <Input id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Your business name" className="rounded-xl" />
              </div>
              <div>
                <label htmlFor="services" className="block text-sm font-medium mb-2">Services Needed</label>
                <Select value={formData.services} onValueChange={(v) => setFormData(prev => ({ ...prev, services: v }))}>
                  <SelectTrigger className="w-full bg-background rounded-xl">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border z-50">
                    <SelectItem value="Social Media Boosting">Social Media Boosting</SelectItem>
                    <SelectItem value="Music Promotion">Music Promotion</SelectItem>
                    <SelectItem value="Web Solutions">Web Solutions</SelectItem>
                    <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                    <SelectItem value="Problem-Solving Hub">Problem-Solving Hub</SelectItem>
                    <SelectItem value="Multiple Services">Multiple Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5} required className="rounded-xl" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
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
