import { Cpu, Building2, Wifi, Package } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const items = [
  { icon: Cpu, title: "New Silicon", desc: "Latest chip announcements from Intel, AMD, NVIDIA, and ARM.", color: "text-primary" },
  { icon: Building2, title: "Industry Moves", desc: "Mergers, acquisitions, and new semiconductor fab constructions.", color: "text-accent" },
  { icon: Wifi, title: "Evolving Standards", desc: "Rollout of Wi-Fi 7, USB4, next-gen display protocols.", color: "text-primary" },
  { icon: Package, title: "Supply Chain Watch", desc: "Updates on component shortages and surpluses.", color: "text-accent" },
];

export const ChipChatSection = () => (
  <AnimatedSection id="chip-chat" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="badge-tag mb-4">💬 Chip Chat</span>
        <h2 className="section-title mt-4">Industry <span className="gradient-text">Pulse</span></h2>
        <p className="section-subtitle mt-3">Stay ahead with the latest in semiconductor and tech industry news.</p>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <StaggerItem key={item.title}>
            <div className="glass-card-hover p-6 md:p-8 group cursor-pointer">
              <item.icon className={`w-8 h-8 ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </AnimatedSection>
);
