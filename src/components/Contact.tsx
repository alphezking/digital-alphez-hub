import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", organization: "", services: "", message: "",
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
        business_name: formData.organization,
        services: formData.services,
        message: `Phone: ${formData.phone}\nOrganization: ${formData.organization}\n\n${formData.message}`,
      });
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", phone: "", organization: "", services: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({ title: "Failed to Send", description: "Please try again or contact us directly.", variant: "destructive" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase mb-4">Contact</p>
          <h2 className="section-heading mb-5">
            Let's Build Your <span className="text-gradient">Digital Future</span>
          </h2>
          <p className="text-foreground/60 font-light text-base sm:text-lg">
            Tell us about your project. We'll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Get in Touch</h3>
              <p className="text-foreground/60 text-sm font-light leading-relaxed">
                Reach out by phone, email, or fill out the form. We're here to help your organization
                embrace digital transformation.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "alphezking@gmail.com", href: "mailto:alphezking@gmail.com" },
                { icon: Phone, label: "+231 887 303 826", href: "tel:+231887303826" },
                { icon: MapPin, label: "Monrovia, Liberia — West Africa" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-foreground/70 hover:text-primary transition-colors">{item.label}</a>
                  ) : (
                    <span className="text-sm text-foreground/70">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
            <Card className="p-6 bg-card border-primary/20 rounded-2xl">
              <h4 className="font-bold mb-2 text-primary">Free Consultation</h4>
              <p className="text-sm text-foreground/60 font-light leading-relaxed">
                Book a 30-minute call with our team to discuss your goals and get a tailored digital roadmap — no obligation.
              </p>
            </Card>
          </div>

          <Card className="lg:col-span-3 p-6 sm:p-10 bg-card border-border rounded-2xl shadow-[var(--shadow-card)]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">Name *</label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" required className="h-12 rounded-xl bg-background border-border" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">Email *</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" required className="h-12 rounded-xl bg-background border-border" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">Phone</label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+231..." className="h-12 rounded-xl bg-background border-border" />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2 text-foreground">Organization</label>
                  <Input id="organization" name="organization" value={formData.organization} onChange={handleChange} placeholder="Company / School / NGO" className="h-12 rounded-xl bg-background border-border" />
                </div>
              </div>
              <div>
                <label htmlFor="services" className="block text-sm font-medium mb-2 text-foreground">Service Needed</label>
                <Select value={formData.services} onValueChange={(v) => setFormData((p) => ({ ...p, services: v }))}>
                  <SelectTrigger className="w-full h-12 rounded-xl bg-background border-border"><SelectValue placeholder="Select a service" /></SelectTrigger>
                  <SelectContent className="bg-card border-border z-50 rounded-xl">
                    <SelectItem value="Website Development">Website Development</SelectItem>
                    <SelectItem value="School Digital Transformation">School Digital Transformation</SelectItem>
                    <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                    <SelectItem value="Business Automation">Business Automation</SelectItem>
                    <SelectItem value="Branding & Design">Branding & Design</SelectItem>
                    <SelectItem value="Mobile App">Mobile App Development</SelectItem>
                    <SelectItem value="IT Consulting">IT Consulting</SelectItem>
                    <SelectItem value="E-Commerce">E-Commerce Solutions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Message *</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project, goals, and timeline..." rows={4} required className="rounded-xl bg-background border-border" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gold-gradient text-primary-foreground font-semibold h-13 rounded-xl shadow-[var(--shadow-gold)]">
                Book a Free Consultation
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
