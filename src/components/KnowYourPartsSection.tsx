import { Atom, Box, Lightbulb, FileText } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

type PartTopic = {
  icon: typeof Atom;
  title: string;
  desc: string;
  query: string;
};

const parts: PartTopic[] = [
  {
    icon: Atom,
    title: "How It Works",
    desc: "Physics and theory behind components like BJT operation.",
    query: "BJT transistor operation basics for ECE students",
  },
  {
    icon: Box,
    title: "Common Packages",
    desc: "Visual guides — TO-92 vs. SOT-23 and more.",
    query: "TO-92 vs SOT-23 package comparison electronics",
  },
  {
    icon: Lightbulb,
    title: "Practical Applications",
    desc: "Real-world uses: MOSFETs in power switching, op-amps in filters.",
    query: "MOSFET power switching applications and op-amp filter circuits",
  },
  {
    icon: FileText,
    title: "Key Parameters",
    desc: "Reading datasheets — slew rate, bandwidth, and beyond.",
    query: "how to read op-amp datasheet slew rate bandwidth ECE",
  },
];

const openTopicResource = (query: string) => {
  const q = encodeURIComponent(`${query} `);
  const url = `https://www.google.com/search?q=${q}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export const KnowYourPartsSection = () => (
  <AnimatedSection id="know-parts" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="badge-tag mb-4">Know Your Parts</span>
        <h2 className="section-title mt-4">
          Component <span className="gradient-text-accent">Deep Dives</span>
        </h2>
        <p className="section-subtitle mt-3">
          Understand the building blocks — from transistors to ICs.
        </p>
      </div>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {parts.map((p) => (
          <StaggerItem key={p.title}>
            <button
              type="button"
              onClick={() => openTopicResource(p.query)}
              className="glass-card-hover p-6 text-center group cursor-pointer h-full w-full"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </button>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </AnimatedSection>
);
