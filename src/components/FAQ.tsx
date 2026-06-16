import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      q: "What services does Alphez Digital Solutions offer?",
      a: "We offer website design, school digital transformation, digital marketing, business automation, branding, mobile app development, IT consulting, and e-commerce solutions.",
    },
    {
      q: "Do you work with clients outside Liberia?",
      a: "Yes. While we are based in Liberia, we serve clients across Africa and internationally, delivering remotely with clear communication and timelines.",
    },
    {
      q: "How long does a typical project take?",
      a: "Most websites take 2–4 weeks; full digital transformation projects range from 4–12 weeks depending on scope. We provide a clear timeline after the discovery call.",
    },
    {
      q: "Do you offer ongoing support after launch?",
      a: "Yes. We provide maintenance, hosting, performance monitoring, and training packages so your team can confidently use and grow with the system.",
    },
    {
      q: "How much do your services cost?",
      a: "Pricing depends on scope. We offer affordable packages tailored for small businesses, schools, and NGOs. Book a free consultation for a custom quote.",
    },
    {
      q: "Can you help schools digitize their operations?",
      a: "Absolutely. We build student portals, admission systems, school management software, and online learning platforms designed for African schools.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase mb-4">FAQ</p>
          <h2 className="section-heading mb-5">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-foreground/60 font-light">Quick answers to common questions about working with us.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-2xl px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/60 font-light leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
