import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const languages = [
  {
    name: "Tamil",
    level: "Speak, Read & Write",
    proficiency: 85,
    borderColor: "border-coral-500/40",
    glowColor: "rgba(248, 161, 176, 0.2)",
  },
  {
    name: "English",
    level: "Speak, Read & Write (Fluently)",
    proficiency: 95,
    borderColor: "border-cyan-500/40",
    glowColor: "rgba(6,182,212,0.2)",
  },
  {
    name: "Malayalam",
    level: "Speak (Mother Tongue)",
    proficiency: 90,
    borderColor: "border-violet-500/40",
    glowColor: "rgba(124,58,237,0.2)",
  },
];

const LanguagesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-[15vh] relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Linguistic Versatility
        </motion.p>
        <motion.h2
          className="font-mono-label tracking-widest font-display font-semibold text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Languages I <span className="text-gradient-primary">Operate In</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              className={`glass-card rounded-full px-8 py-5 border ${lang.borderColor} flex items-center gap-4 cursor-default`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 120 }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 30px ${lang.glowColor}`,
              }}
            >
              <div>
                <p className="font-display font-semibold text-foreground text-lg">{lang.name}</p>
                <p className="text-xs text-muted-foreground">{lang.level}</p>
              </div>
              <div className="font-mono text-sm text-primary tabular-nums">{lang.proficiency}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
