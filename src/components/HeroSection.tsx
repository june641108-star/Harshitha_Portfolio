import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const words = ["Harshitha", "K", "S"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      {/* Aurora orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="aurora-orb-violet absolute w-[600px] h-[600px] rounded-full top-[-10%] left-[-10%] blur-3xl" />
        <div className="aurora-orb-cyan absolute w-[500px] h-[500px] rounded-full top-[20%] right-[-5%] blur-3xl" />
        <div className="aurora-orb-coral absolute w-[400px] h-[400px] rounded-full bottom-[10%] left-[30%] blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 pt-24">
        {/* Left content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-[1.05] mb-6">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block text-gradient-primary mr-4"
                initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Hello everyone, and welcome to my portfolio! I’m Harshitha K S, and I’m glad you’re here. With a background in Business Administration, I thrive on bringing people together and turning ideas into meaningful experiences. From building strong relationships to creating engaging events and content, I focus on making every interaction impactful, memorable, and driven by purpose.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a
              href="#work"
              className="btn-gradient px-6 py-3 rounded-full font-medium text-primary-foreground flex items-center gap-2 transition-all hover:scale-105 active:scale-95 relative overflow-hidden shimmer-on-hover"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="glass-card px-6 py-3 rounded-full font-medium text-foreground flex items-center gap-2 hover:glass-card-hover transition-all hover:scale-105 active:scale-95"
            >
              Get In Touch <ChevronDown size={16} />
            </a>
          </motion.div>
        </div>
        {/* Right visual removed */}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-mono-label text-muted-foreground text-[10px]">scroll</span>
        <ChevronDown size={16} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
};

// ...existing code...

export default HeroSection;

