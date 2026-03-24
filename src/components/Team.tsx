import { Card } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Jacob Yond",
      role: "Founder & Digital Strategist",
      bio: "Passionate about empowering local businesses through innovative digital solutions. With years of experience in digital marketing and business growth strategies.",
      email: "alphezking@gmail.com"
    }
  ];

  return (
    <section id="team" className="py-16 sm:py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">Our People</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-display">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            Dedicated professionals committed to your success
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-10 hover:shadow-xl transition-all duration-300 border-border/30 bg-card relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent" />
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 ring-4 ring-primary/10">
                  <div className="text-5xl font-bold text-gradient font-display">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 font-display">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
