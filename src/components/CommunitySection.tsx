import { Users, ExternalLink } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const spotlights = [
  { name: "Smart Irrigation System", by: "Rahul M., 6th Sem", desc: "An IoT-based soil moisture monitoring system using ESP32 and cloud analytics." },
  { name: "FPGA Music Synthesizer", by: "Priya S., 8th Sem", desc: "A real-time audio synthesizer built on a Xilinx FPGA with VHDL." },
  { name: "Solar MPPT Charger", by: "Ankit D., 4th Sem", desc: "Maximum power point tracking charge controller for off-grid solar panels." },
];

export const CommunitySection = () => (
  <AnimatedSection id="community" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="badge-tag mb-4"><Users className="w-3 h-3 mr-1.5 inline" /> Community Spotlight</span>
        <h2 className="section-title mt-4">Student <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle mt-3">Cool projects from our community — with photos, descriptions, and links.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {spotlights.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="glass-card p-6 group cursor-pointer hover:border-primary/30 transition-all duration-500"
          >
            <div className="w-full h-32 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 mb-4 flex items-center justify-center">
              <span className="text-4xl">⚡</span>
            </div>
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{s.name}</h3>
            <p className="text-xs text-primary/70 font-mono mb-2">{s.by}</p>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
            <div className="mt-4 flex items-center gap-1 text-xs text-primary/60 group-hover:text-primary transition-colors">
              <ExternalLink className="w-3 h-3" /> View Project
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
