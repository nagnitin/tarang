import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";
import guLogo from "../GU Digital Logo 2.png";
import tarangLogo from "../../Untitled_design__6_-removebg-preview.png";

const navLinks = [
  { label: "Chip Chat", href: "#chip-chat" },
  { label: "Gadgets", href: "#gadget-corner" },
  { label: "Build It!", href: "#build-it" },
  { label: "Know Your Parts", href: "#know-parts" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Community", href: "#community" },
  { label: "Horizon", href: "#horizon" },
  { label: "Achievements", href: "#achievements" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
          <a href="#" className="flex items-center gap-2 group">
            <img
              src={tarangLogo}
              alt="Tarang ECE logo"
              className="h-20 w-auto object-contain"
            />
            <img
              src={guLogo}
              alt="Gauhati University logo"
              className="h-9 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-muted-foreground group-hover:text-primary transition-colors">
                Gauhati University
              </span>
              <span className="text-lg font-bold tracking-tight leading-tight">
                <span className="gradient-text">TARANG</span>
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 rounded-md hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-20 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
