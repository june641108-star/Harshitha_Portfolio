import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false); // ✅ added

  useEffect(() => {
    if (finished) return; // ✅ prevents running again

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setFinished(true); // ✅ mark as done
          setTimeout(onComplete, 600);
          return 100;
        }
        return p + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete, finished]); // ✅ added finished

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
      transition={{ duration: 0.8 }}
    >
      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-12 text-center"
      >
        <motion.h1
          initial={{ letterSpacing: "0.6em", opacity: 0 }}
          animate={{ letterSpacing: "0.15em", opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl text-gradient-primary"
        >
          HKS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-body text-sm font-medium tracking-[0.28em] text-muted-foreground mt-5"
        >
          PORTFOLIO EXPERIENCE
        </motion.p>
      </motion.div>

      {/* PROGRESS BAR */}
      <div className="w-60 h-[2px] rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-500 via-violet-400 to-cyan-400"
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;