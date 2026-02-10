import { MonitorSmartphone, Activity, Settings } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const tools = [
  { icon: MonitorSmartphone, title: "EDA Software", desc: "Tips for KiCad, Eagle, or Altium Designer.", tag: "DESIGN" },
  { icon: Activity, title: "Simulation", desc: "SPICE, LTspice, Falstad's Circuit Simulator guides.", tag: "SIM" },
  { icon: Settings, title: "Firmware", desc: "Setting up IDEs like PlatformIO for MCUs.", tag: "DEV" },
];

export const DigitalToolkitSection = () => (
  <AnimatedSection id="toolkit" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="badge-tag mb-4">🧰 Digital Toolkit</span>
        <h2 className="section-title mt-4">Your <span className="gradient-text">Toolbox</span></h2>
        <p className="section-subtitle mt-3">Software, simulators, and dev environments to power your workflow.</p>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((t) => (
          <StaggerItem key={t.title}>
            <div className="glass-card-hover p-8 group cursor-pointer h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
              <span className="text-[10px] font-mono font-semibold tracking-widest text-primary/60">{t.tag}</span>
              <t.icon className="w-8 h-8 text-primary mt-3 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm">{t.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </AnimatedSection>
);
