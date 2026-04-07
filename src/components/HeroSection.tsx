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
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Community Builder | Event Coordinator | Content Creator
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

        {/* Right visual — Profile Photo Container */}
        <motion.div
          className="flex-1 flex items-center justify-center relative mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          {/* Subtle network animation background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none scale-110">
            <NetworkAnimation />
          </div>

          {/* Profile Photo Circular Container */}
          <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 xl:w-[400px] xl:h-[400px] rounded-full p-1.5 bg-gradient-to-tr from-primary via-cyan-400 to-secondary custom-pulse-glow shadow-2xl">
            {/* The Image Wrapper */}
            <div className="w-full h-full rounded-full bg-background overflow-hidden border-4 border-background flex items-center justify-center relative group">
              <img
                src="/profile.jpg"
                alt="Harshitha K S"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay that matches the portfolio's primary color */}
              <div className="absolute inset-0 bg-primary/20 mix-blend-color pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-80 mix-blend-overlay pointer-events-none" />
            </div>

            {/* Orbit rings */}
            <div className="absolute -inset-6 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-10 border border-secondary/20 rounded-full animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />

            {/* Orbit nodes */}
            <motion.div
              className="absolute top-8 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-background border border-primary/30 flex items-center justify-center shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary" />
            </motion.div>
            <motion.div
              className="absolute bottom-12 -left-4 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border border-secondary/30 flex items-center justify-center shadow-lg"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-secondary" />
            </motion.div>
          </div>
        </motion.div>
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

// Network node animation
const NetworkAnimation = () => {
  const nodes = [
    { cx: 150, cy: 80 }, { cx: 250, cy: 50 }, { cx: 200, cy: 160 },
    { cx: 100, cy: 180 }, { cx: 300, cy: 150 }, { cx: 180, cy: 250 },
    { cx: 280, cy: 240 }, { cx: 80, cy: 100 }, { cx: 320, cy: 90 },
    { cx: 130, cy: 280 }, { cx: 260, cy: 300 }, { cx: 350, cy: 200 },
  ];

  const connections = [
    [0, 1], [0, 2], [1, 4], [2, 3], [2, 5], [4, 6], [3, 7],
    [5, 9], [6, 10], [4, 8], [6, 11], [5, 6], [0, 7], [1, 8],
    [9, 10], [2, 4], [3, 5],
  ];

  return (
    <svg width="400" height="350" viewBox="0 0 400 350" className="w-full max-w-[400px]">
      {connections.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="url(#lineGrad)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.5 + i * 0.05 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r="5"
          fill="url(#nodeGrad)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 0.5, delay: 0.8 + i * 0.06, type: "spring" }}
        />
      ))}
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#985e6d" />
          <stop offset="100%" stopColor="#98878f" />
        </linearGradient>
        <radialGradient id="nodeGrad">
          <stop offset="0%" stopColor="#ad7e8a" />
          <stop offset="100%" stopColor="#985e6d" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default HeroSection;

