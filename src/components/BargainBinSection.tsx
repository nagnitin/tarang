import { Tag, BookOpen, Video, GraduationCap } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const items = [
  { icon: Tag, title: "Tech Deals", desc: "Curated discounts on dev boards, tools, and components." },
  { icon: BookOpen, title: "Articles", desc: "Must-read technical articles and blog posts." },
  { icon: Video, title: "Videos", desc: "Top tutorials and conference talks you shouldn't miss." },
  { icon: GraduationCap, title: "Tutorials", desc: "Free courses and learning resources for ECE students." },
];

export const BargainBinSection = () => (
  <AnimatedSection className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="badge-tag mb-4">💡 The Bargain Bin</span>
        <h2 className="section-title mt-4">Curated <span className="gradient-text">Resources</span></h2>
        <p className="section-subtitle mt-3">Deals, articles, videos, and tutorials handpicked for you.</p>
      </div>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item) => (
          <StaggerItem key={item.title}>
            <div className="glass-card-hover p-5 group cursor-pointer h-full">
              <item.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </AnimatedSection>
);
