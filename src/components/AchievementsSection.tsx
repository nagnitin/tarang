import { Trophy, BookOpen, Briefcase, TrendingUp } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AnimatedCounter = ({ target, label, icon: Icon }: { target: number; label: string; icon: React.ElementType }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <div ref={ref} className="glass-card p-6 text-center group hover:border-primary/20 transition-colors cursor-default">
      <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
      <div className="text-3xl md:text-4xl font-bold gradient-text">{count}+</div>
      <p className="text-sm text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

const stats = [
  { icon: Trophy, target: 50, label: "Awards Won" },
  { icon: BookOpen, target: 120, label: "Research Papers" },
  { icon: Briefcase, target: 300, label: "Graduates Placed" },
  { icon: TrendingUp, target: 25, label: "Active Projects" },
];

const research = [
  "VLSI Design & Embedded Systems",
  "Wireless Communication & IoT",
  "Signal Processing & Machine Learning",
  "Antenna Design & RF Engineering",
];

const jobs = [
  { role: "Research Associate – VLSI Lab", type: "Full-time" },
  { role: "Teaching Assistant – Signal Processing", type: "Part-time" },
  { role: "Project Intern – IoT Systems", type: "Internship" },
];

export const AchievementsSection = () => (
  <AnimatedSection id="achievements" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="badge-tag mb-4">🏆 Achievements & More</span>
        <h2 className="section-title mt-4">Our <span className="gradient-text-accent">Impact</span></h2>
      </div>

      {/* Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((s) => (
          <AnimatedCounter key={s.label} {...s} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Research */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" /> Research Areas
          </h3>
          <div className="space-y-3">
            {research.map((r) => (
              <div key={r} className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="glow-dot shrink-0" />
                {r}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Jobs */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-accent" /> Open Positions
          </h3>
          <div className="space-y-3">
            {jobs.map((j) => (
              <div key={j.role} className="flex items-center justify-between p-3 rounded-lg bg-background/40 hover:bg-background/60 transition-colors cursor-pointer group">
                <span className="text-sm font-medium group-hover:text-primary transition-colors">{j.role}</span>
                <span className="text-[10px] font-mono text-accent/70 bg-accent/10 px-2 py-0.5 rounded">{j.type}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
);
