import { Users } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export const CommunitySection = () => (
  <AnimatedSection id="community" className="section-padding">
    <div className="max-w-7xl mx-auto text-center">
      <div className="mb-8">
        <span className="badge-tag mb-4">
          <Users className="w-3 h-3 mr-1.5 inline" /> Community Spotlight
        </span>
        <h2 className="section-title mt-4">
          Student <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle mt-3">
          Cool projects from our community — with photos, descriptions, and links.
        </p>
      </div>
      <p className="text-muted-foreground text-sm md:text-base">
        Coming Soon — featured student projects from the ECE department will appear here.
      </p>
    </div>
  </AnimatedSection>
);
