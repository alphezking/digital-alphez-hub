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
    <section id="team" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            Dedicated professionals committed to your success
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="p-10 hover:shadow-xl transition-all duration-300 border-border/50 bg-card"
            >
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <div className="text-5xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
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
