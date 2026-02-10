import { Wrench, Layers, Code, Camera } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";

const projects = [
  {
    level: "Beginner",
    color: "from-emerald-500/20 to-primary/20",
    border: "border-emerald-500/20",
    items: ["Blinking LED with 555 Timer", "Arduino Weather Station"],
  },
  {
    level: "Intermediate",
    color: "from-accent/20 to-orange-500/20",
    border: "border-accent/20",
    items: ["Custom Mechanical Keyboard", "ESP32 Home Automation Sensor"],
  },
];

const includes = [
  { icon: Layers, label: "Components List" },
  { icon: Code, label: "Code Snippets" },
  { icon: Wrench, label: "Schematics" },
  { icon: Camera, label: "Photos & Videos" },
];

export const BuildItSection = () => (
  <AnimatedSection id="build-it" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="badge-tag mb-4">🛠️ Build It!</span>
        <h2 className="section-title mt-4">Hands-On <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle mt-3">From blinking LEDs to IoT systems — step-by-step guides for every skill level.</p>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {projects.map((p) => (
          <StaggerItem key={p.level}>
            <div className={`glass-card-hover p-6 md:p-8 bg-gradient-to-br ${p.color} ${p.border}`}>
              <span className="text-xs font-mono font-semibold tracking-widest text-primary/80 uppercase">{p.level}</span>
              <div className="mt-4 space-y-3">
                {p.items.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/40 hover:bg-background/60 transition-colors cursor-pointer group"
                  >
                    <div className="glow-dot shrink-0" />
                    <span className="font-medium group-hover:text-primary transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {includes.map((inc) => (
          <StaggerItem key={inc.label}>
            <div className="glass-card p-4 text-center group cursor-pointer hover:border-primary/20 transition-colors">
              <inc.icon className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground">{inc.label}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </AnimatedSection>
);
