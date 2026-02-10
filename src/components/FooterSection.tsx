import { Cpu } from "lucide-react";

export const FooterSection = () => (
  <footer className="border-t border-border py-12 px-4 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <Cpu className="w-5 h-5 text-primary" />
        <span className="font-bold gradient-text">TARANG</span>
        <span className="text-sm text-muted-foreground ml-2">— ECE, Gauhati University</span>
      </div>
      <p className="text-xs text-muted-foreground text-center md:text-right">
        © {new Date().getFullYear()} Department of Electronics & Communication Engineering, Gauhati University. All rights reserved.
      </p>
    </div>
  </footer>
);
