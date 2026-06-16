import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const useCounter = (target: number, duration = 1800) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / duration, 1);
            setVal(Math.floor(p * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { val, ref };
};

const Counter = ({ value, label, suffix = "+" }: { value: number; label: string; suffix?: string }) => {
  const { val, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-extrabold text-gradient mb-2">
        {val}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm uppercase tracking-wider text-foreground/55 font-medium">{label}</div>
    </div>
  );
};

const WhyChoose = () => {
  const reasons = [
    "Innovative and Future-Focused Solutions",
    "Affordable Services for Growing Businesses",
    "Professional Support and Consultation",
    "Customized Strategies for Every Client",
    "Focus on Long-Term Business Growth",
    "Deep Understanding of African Markets",
    "Commitment to Quality and Results",
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[180px]" />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-primary font-semibold text-xs tracking-[0.25em] uppercase mb-4">Why Choose Us</p>
            <h2 className="section-heading mb-6">
              Why Businesses Trust <span className="text-gradient">Alphez Digital</span>
            </h2>
            <p className="text-foreground/60 mb-8 font-light leading-relaxed">
              We combine global technology standards with deep local insight to deliver solutions that
              actually work for African businesses and institutions.
            </p>
            <ul className="space-y-4">
              {reasons.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm sm:text-base">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <Counter value={120} label="Projects Delivered" />
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <Counter value={80} label="Happy Clients" />
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <Counter value={15} label="Industries Served" />
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <Counter value={98} label="Satisfaction" suffix="%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
