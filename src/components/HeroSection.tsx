import { motion } from "framer-motion";
import { ArrowDown, Cpu } from "lucide-react";
import heroBg from "../../department.jpg";

export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="badge-tag mb-6 mx-auto w-fit">
          <Cpu className="w-3 h-3 mr-1.5" />
          Department of Electronics & Communication Engineering
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6"
      >
        <span className="gradient-text">TARANG</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4"
      >
        The Digital Magazine of ECE, Gauhati University
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="text-sm md:text-base text-muted-foreground/70 max-w-xl mx-auto mb-10"
      >
        Innovation • Knowledge • Community — Where circuits meet creativity
      </motion.p>

      <motion.a
        href="#chip-chat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all duration-300 group"
      >
        Explore
        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
      </motion.a>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);
