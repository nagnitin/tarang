import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const giants = [
  { name: "Nikola Tesla", years: "1856–1943", field: "AC Systems & Wireless", emoji: "⚡" },
  { name: "Jack Kilby", years: "1923–2005", field: "Integrated Circuit", emoji: "🔲" },
  { name: "Ada Lovelace", years: "1815–1852", field: "First Programmer", emoji: "💻" },
  { name: "Claude Shannon", years: "1916–2001", field: "Information Theory", emoji: "📡" },
];

export const GiantsSection = () => (
  <AnimatedSection id="giants" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="badge-tag mb-4">🏛️ Giants of the Past</span>
        <h2 className="section-title mt-4">Standing on the Shoulders of <span className="gradient-text-accent">Giants</span></h2>
        <p className="section-subtitle mt-3">Pioneers whose inventions shaped our discipline.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {giants.map((g, i) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="glass-card p-6 text-center group cursor-pointer hover:border-accent/30 transition-all duration-300"
          >
            <div className="text-4xl mb-3">{g.emoji}</div>
            <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">{g.name}</h3>
            <p className="text-xs text-muted-foreground font-mono mt-1">{g.years}</p>
            <p className="text-sm text-primary/70 mt-2">{g.field}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
