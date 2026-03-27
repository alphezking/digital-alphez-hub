import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({ title: "You're in!", description: "We'll send you tips and updates to grow your brand." });
    setEmail("");
  };

  return (
    <section className="py-20 bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Get Free Growth Tips</h3>
          <p className="text-muted-foreground text-sm font-light">
            Join our newsletter and get weekly tips on branding, marketing, and growing your business online.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-xl bg-background border-border"
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 px-8 rounded-xl whitespace-nowrap shadow-[0_4px_16px_hsl(48_96%_53%_/_0.2)] hover:shadow-[0_6px_24px_hsl(48_96%_53%_/_0.3)] transition-all duration-300">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
