import { AnimatedSection } from "./AnimatedSection";

export const AchievementsSection = () => (
  <AnimatedSection id="achievements" className="section-padding">
    <div className="max-w-7xl mx-auto text-center">
      <div className="mb-8">
        <span className="badge-tag mb-4">Achievements & More</span>
        <h2 className="section-title mt-4">
          Our <span className="gradient-text-accent">Impact</span>
        </h2>
      </div>
      <p className="text-muted-foreground text-sm md:text-base">
        Coming Soon — department achievements, research highlights, and opportunities will be showcased here.
      </p>
    </div>
  </AnimatedSection>
);
