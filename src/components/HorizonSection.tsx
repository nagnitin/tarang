import { Brain, Cpu, Smartphone, Sparkles } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const future = [
  {
    icon: Brain,
    title: "Quantum Computing",
    desc: "Qubits, entanglement, and the race for quantum advantage.",
    url: "https://en.wikipedia.org/wiki/Quantum_computing"
  },
  {
    icon: Cpu,
    title: "Neuromorphic Chips",
    desc: "Brain-inspired computing architectures for edge AI.",
    url: "https://en.wikipedia.org/wiki/Neuromorphic_engineering"
  },
  {
    icon: Smartphone,
    title: "Flexible Electronics",
    desc: "Bendable displays, e-skin, and stretchable circuits.",
    url: "https://en.wikipedia.org/wiki/Flexible_electronics"
  },
  {
    icon: Sparkles,
    title: "AI Hardware",
    desc: "Custom accelerators, NPUs, and the future of silicon intelligence.",
    url: "https://en.wikipedia.org/wiki/AI_accelerator"
  },
];

export const HorizonSection = () => (
  <AnimatedSection id="horizon" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
    <div className="max-w-7xl mx-auto relative">
      <div className="mb-12">
        <span className="badge-tag mb-4">🔭 The Horizon</span>
        <h2 className="section-title mt-4">Future <span className="gradient-text">Tech</span></h2>
        <p className="section-subtitle mt-3">What's next in electronics and communication engineering.</p>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {future.map((f) => (
          <StaggerItem key={f.title}>
            <a
              href={f.url}
              target="_blank"
              rel="noreferrer"
              className="glass-card-hover p-6 md:p-8 flex gap-5 group cursor-pointer block h-full"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:shadow-[0_0_24px_hsl(174_72%_52%/0.3)] transition-shadow duration-500">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </AnimatedSection>
);
