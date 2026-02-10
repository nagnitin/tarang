import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const giants = [
  {
    name: "Nikola Tesla",
    years: "1856–1943",
    field: "AC Systems & Wireless",
    image: "/images/giants/tesla.png",
    url: "https://en.wikipedia.org/wiki/Nikola_Tesla",
  },
  {
    name: "Jack Kilby",
    years: "1923–2005",
    field: "Integrated Circuit",
    image: "/images/giants/kilby.png",
    url: "https://en.wikipedia.org/wiki/Jack_Kilby",
  },
  {
    name: "Ada Lovelace",
    years: "1815–1852",
    field: "First Programmer",
    image: "/images/giants/lovelace.png",
    url: "https://en.wikipedia.org/wiki/Ada_Lovelace",
  },
  {
    name: "Claude Shannon",
    years: "1916–2001",
    field: "Information Theory",
    image: "/images/giants/shannon.png",
    url: "https://en.wikipedia.org/wiki/Claude_Shannon",
  },
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
          <motion.a
            key={g.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            href={g.url}
            target="_blank"
            rel="noreferrer"
            className="glass-card p-6 text-center group cursor-pointer hover:border-accent/30 transition-all duration-300"
          >
            <div className="mb-4 flex justify-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/50 transition-colors">
                <img
                  src={g.image}
                  alt={g.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">{g.name}</h3>
            <p className="text-xs text-muted-foreground font-mono mt-1">{g.years}</p>
            <p className="text-sm text-primary/70 mt-2">{g.field}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
