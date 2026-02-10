import { Smartphone, Microchip, Star } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const gadgets = [
  { icon: Smartphone, title: "First Looks", desc: "New consumer gadgets — phones, laptops, smart home devices.", tag: "NEW" },
  { icon: Microchip, title: "For the Makers", desc: "New Raspberry Pi, Arduino, sensors, or modules for your next project.", tag: "MAKER" },
  { icon: Star, title: "Mini-Reviews", desc: "Brief, hands-on product tests with honest takeaways.", tag: "REVIEW" },
];

export const GadgetCornerSection = () => (
  <AnimatedSection id="gadget-corner" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="badge-tag mb-4">🔧 Gadget Corner</span>
        <h2 className="section-title mt-4">Latest <span className="gradient-text-accent">Gear</span></h2>
        <p className="section-subtitle mt-3">From consumer tech to maker boards — first looks and honest reviews.</p>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gadgets.map((g) => (
          <StaggerItem key={g.title}>
            <div className="glass-card-hover p-6 h-full flex flex-col group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <g.icon className="w-7 h-7 text-accent group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-[10px] font-mono font-semibold tracking-widest text-accent/70 bg-accent/10 px-2 py-0.5 rounded">{g.tag}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{g.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{g.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </AnimatedSection>
);
