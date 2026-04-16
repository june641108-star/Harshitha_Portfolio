import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const languages = [
  {
    name: "Tamil",
    level: "Native",
    color: "bg-rose-500",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800", // South Indian Temple Architecture
    border: "border-rose-500/30"
  },
  {
    name: "Malayalam",
    level: "Native",
    color: "bg-violet-500",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800", // Kerala Backwaters
    border: "border-violet-500/30"
  },
  {
    name: "English",
    level: "Fluent",
    color: "bg-cyan-500",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800", // Classic London Architecture
    border: "border-cyan-500/30"
  },
  {
    name: "Korean",
    level: "Beginner",
    color: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800", // Traditional Hanok/Palace
    border: "border-amber-500/30"
  },
];

const LanguagesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="languages" className="py-12 sm:py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.p
              className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
            >
              Linguistic Range
            </motion.p>
            <motion.h2
              className="font-mono-label tracking-widest text-foreground uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Communication without <span className="text-gradient-primary">Barriers</span>
            </motion.h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent hidden md:block" />
        </div>

        <div className="flex flex-wrap gap-5 justify-start">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className={`relative h-16 rounded-[1.25rem] border ${lang.border} flex items-center transition-all duration-700 cursor-pointer overflow-hidden group px-6`}
              style={{ 
                width: hoveredIndex === i ? '300px' : '160px',
              }}
            >
              {/* Background Cultural Image */}
              <div className="absolute inset-0 z-0">
                 <motion.div 
                   className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                   style={{ backgroundImage: `url(${lang.image})` }}
                 />
                 {/* Dark Overlay for Readability */}
                 <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                 {/* Gradient Accent */}
                 <div className={`absolute inset-0 bg-gradient-to-r from-${lang.color.split('-')[1]}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              </div>

              <div className="relative z-10 flex items-center gap-4 w-full min-w-[260px]">
                {/* Name always visible */}
                <span className="font-display font-bold text-white text-xl whitespace-nowrap drop-shadow-md">
                  {lang.name}
                </span>

                {/* Expanding Content (Text-based Level) */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex items-center gap-4 flex-1"
                    >
                      <div className="h-px w-6 bg-white/40" />
                      <span className="font-mono text-sm font-bold text-white tracking-widest uppercase bg-white/10 px-3 py-1 rounded-md backdrop-blur-sm">
                        {lang.level}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Small pulse dot */}
              <div className={`absolute right-4 w-1.5 h-1.5 rounded-full ${lang.color} opacity-80 animate-pulse group-hover:hidden`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
