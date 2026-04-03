import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skills = [
  {
    label: "Relationship Management",
    emoji: "🤝",
    value: 95,
    desc: "Cultivating and sustaining strategic partnerships built on trust and mutual success.",
    color: "from-primary/20 to-transparent"
  },
  {
    label: "Event Management",
    emoji: "🎪",
    value: 85,
    desc: "Orchestrating end-to-end impactful events with seamless execution.",
    color: "from-cyan-500/20 to-transparent"
  },
  {
    label: "Community Engagement",
    emoji: "🌐",
    value: 90,
    desc: "Fostering vibrant, inclusive communities that drive collective growth.",
    color: "from-secondary/20 to-transparent"
  },
  {
    label: "Communication",
    emoji: "🗣️",
    value: 90,
    desc: "Articulating ideas effectively and building consensus through active listening.",
    color: "from-primary/20 to-transparent"
  },
  {
    label: "Coordination & Ops",
    emoji: "⚙️",
    value: 88,
    desc: "Streamlining workflows ensuring seamless cross-functional delivery.",
    color: "from-cyan-500/20 to-transparent"
  },
  {
    label: "Leadership & Teamwork",
    emoji: "👑",
    value: 85,
    desc: "Inspiring teams and fostering a highly collaborative environment.",
    color: "from-secondary/20 to-transparent"
  },
  {
    label: "Social Media Content",
    emoji: "📱",
    value: 80,
    desc: "Crafting compelling digital narratives that resonate with target audiences.",
    color: "from-primary/20 to-transparent"
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveSkill((prev) => {
        if (prev === null) return 0;
        return prev < skills.length - 1 ? prev + 1 : 0;
      });
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveSkill((prev) => {
        if (prev === null) return skills.length - 1;
        return prev > 0 ? prev - 1 : skills.length - 1;
      });
    }
  };

  return (
    <section id="skills" className="py-[10vh] relative" ref={ref}>
      <div className="container mx-auto px-6">
        
        {/* Header content unchanged */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.p
              className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
            >
              Skills & Expertise
            </motion.p>
            <motion.h2
              className="font-mono-label tracking-widest text-foreground uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              The Toolkit of a <span className="text-gradient-primary">Connector</span>
            </motion.h2>
          </div>
        </div>

        {/* Compact Horizontal Accordion Layout */}
        <motion.div 
          className="flex flex-col md:flex-row w-full min-h-[600px] md:min-h-[420px] gap-3 outline-none rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseLeave={() => setActiveSkill(null)}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {skills.map((skill, i) => {
            const isActive = activeSkill === i;
            
            return (
              <div 
                key={skill.label}
                onMouseEnter={() => setActiveSkill(i)}
                onClick={() => setActiveSkill(i)}
                className="relative rounded-3xl overflow-hidden glass-card transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer border border-primary/10 shadow-sm hover:shadow-lg flex items-center justify-center transform-gpu"
                style={{ flex: isActive ? 5 : 1 }}
              >
                {/* Background active color */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} 
                />

                {/* INACTIVE STATE: Small Icon & Vertical Label */}
                <div 
                  className={`absolute w-full h-full flex flex-col items-center justify-center p-4 transition-all duration-500 ${isActive ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}
                >
                  <span className="text-3xl md:text-2xl lg:text-3xl filter drop-shadow-md transition-transform duration-300 hover:scale-110 mb-0 md:mb-6">{skill.emoji}</span>
                  <span 
                    className="hidden md:block text-xs font-semibold tracking-wider text-muted-foreground whitespace-nowrap"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {skill.label}
                  </span>
                  {/* Mobile label fallback */}
                  <span className="md:hidden text-xs font-semibold mt-2 text-muted-foreground">
                    {skill.label}
                  </span>
                </div>
                
                {/* ACTIVE STATE: Full Information */}
                <div 
                  className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 delay-100 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}
                >
                  <div className="min-w-[250px]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-background/50 border border-primary/20 flex items-center justify-center text-2xl shadow-sm">
                        {skill.emoji}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground whitespace-nowrap">
                        {skill.label}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6 opacity-90">
                      {skill.desc}
                    </p>
                  </div>
                  
                  <div className="mt-auto min-w-[250px]">
                    <div className="flex justify-between items-end mb-2 max-w-[280px]">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">Proficiency</span>
                      <span className="text-sm font-semibold text-primary">{skill.value}%</span>
                    </div>
                    <div className="w-full max-w-[280px] h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? `${skill.value}%` : "0%" }}
                        transition={{ duration: 1, ease: "easeOut", delay: isActive ? 0.3 : 0 }}
                      >
                        <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 blur-[2px]" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
