import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skills = [
  {
    label: "Crafting Experiences",
    tagline: "Managing front office interactions and ensuring a smooth, welcoming experience for every visitor.",
    subSkills: ["Guest Handling", "Front Office Management", "Visitor Experience", "Hospitality"],
    color: "from-primary/20 to-transparent",
  },
  {
    label: "Bringing Events to Life",
    tagline: "Coordinating event requirements and executing employee engagement activities seamlessly.",
    subSkills: ["Event Coordination", "Event Execution", "Employee Engagement Activities", "Requirement Gathering"],
    color: "from-cyan-500/20 to-transparent",
  },
  {
    label: "Building Connections",
    tagline: "Guiding guests through iHub spaces and creating meaningful interactions during visits.",
    subSkills: ["Guest Tours & Walkthroughs", "Networking", "Public Interaction", "Community Experience"],
    color: "from-secondary/20 to-transparent",
  },
  {
    label: "Voice & Presence",
    tagline: "Hosting events, presenting confidently, and engaging audiences on stage and on camera.",
    subSkills: ["Public Speaking", "Anchoring / Event Hosting (MC)", "On-Camera Presentation", "Verbal Communication"],
    color: "from-primary/20 to-transparent",
  },
  {
    label: "Making Things Happen",
    tagline: "Coordinating with teams, handling requirements, and ensuring smooth day-to-day operations.",
    subSkills: ["Task Coordination", "Team Collaboration", "Requirement Handling", "Tool Usage (VS Code, Cursor, Antigravity)"],
    color: "from-cyan-500/20 to-transparent",
  },
  {
    label: "Leading with Impact",
    tagline: "Taking initiative in team activities and contributing to collaborative execution.",
    subSkills: ["Team Support", "Initiative Taking", "Activity Management", "Responsibility Handling"],
    color: "from-secondary/20 to-transparent",
  },
  {
    label: "Stories in Motion",
    tagline: "Creating and featuring in video content for SNS iHub and SNS Square across social media.",
    subSkills: ["Video Creation", "On-Camera Presence", "Voice Over", "Basic Editing & Content Tools"],
    color: "from-primary/20 to-transparent",
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
          className="flex flex-col md:flex-row w-full min-h-[550px] md:min-h-[380px] gap-3 outline-none rounded-3xl"
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
                  <span className="text-xl md:text-lg lg:text-xl font-mono font-bold text-primary/40 mb-0 md:mb-6">0{i + 1}</span>
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
                  className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-center transition-all duration-500 delay-100 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}
                >
                  <div className="min-w-[250px]">
                    <div className="mb-6">
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-tight mb-2">
                        {skill.label}
                      </h3>
                      <p className="text-sm font-medium text-primary/80 tracking-wide border-l-2 border-primary/30 pl-3">
                        {skill.tagline}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8 max-w-sm">
                      {skill.subSkills.map((sub) => (
                        <div 
                          key={sub}
                          className="px-3 py-2 rounded-xl bg-background/40 backdrop-blur-md border border-primary/10 text-[11px] sm:text-xs font-medium text-foreground/80 shadow-sm transition-transform duration-300 hover:scale-[1.03] hover:border-primary/30"
                        >
                          {sub}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills tags area */}
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
