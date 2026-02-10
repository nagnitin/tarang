import { AnimatedSection } from "./AnimatedSection";

export const BargainBinSection = () => (
  <AnimatedSection className="section-padding">
    <div className="max-w-7xl mx-auto text-center">
      <div className="mb-8">
        <span className="badge-tag mb-4">The Bargain Bin</span>
        <h2 className="section-title mt-4">
          Curated <span className="gradient-text">Resources</span>
        </h2>
        <p className="section-subtitle mt-3">
          Deals, articles, videos, and tutorials handpicked for you.
        </p>
      </div>
      <p className="text-muted-foreground text-sm md:text-base">
        Coming Soon — discounted tools, articles, and learning resources will be listed here.
      </p>
    </div>
  </AnimatedSection>
);
