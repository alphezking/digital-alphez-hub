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
    <section className="py-16 bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center space-y-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Get Free Growth Tips</h3>
          <p className="text-muted-foreground text-sm">
            Join our newsletter and get weekly tips on branding, marketing, and growing your business online.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 bg-background"
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 px-6 whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
