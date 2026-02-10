import { AnimatedSection } from "./AnimatedSection";

export const DigitalToolkitSection = () => (
  <AnimatedSection id="toolkit" className="section-padding">
    <div className="max-w-7xl mx-auto text-center">
      <div className="mb-8">
        <span className="badge-tag mb-4">Digital Toolkit</span>
        <h2 className="section-title mt-4">
          Your <span className="gradient-text">Toolbox</span>
        </h2>
        <p className="section-subtitle mt-3">
          Software, simulators, and development environments to power your workflow.
        </p>
      </div>
      <p className="text-muted-foreground text-sm md:text-base">
        Coming Soon — curated EDA, simulation, and firmware tools for ECE students.
      </p>
    </div>
  </AnimatedSection>
);
