import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { label: "Communication", emoji: "🗣️", value: 90 },
  { label: "Event Management", emoji: "🎪", value: 85 },
  { label: "Community Engagement", emoji: "🌐", value: 90 },
  { label: "Relationship Management", emoji: "🤝", value: 95 },
  { label: "Social Media Content", emoji: "📱", value: 80 },
  { label: "Coordination & Ops", emoji: "⚙️", value: 88 },
  { label: "Leadership & Teamwork", emoji: "👑", value: 85 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-[15vh] relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          className="font-mono-label text-primary mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          // skills & expertise
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          The Toolkit of a <span className="text-gradient-primary">Connector</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skill bars */}
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-foreground flex items-center gap-2">
                    <span>{skill.emoji}</span> {skill.label}
                  </span>
                  <motion.span
                    className="text-sm text-primary font-mono"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.08 }}
                  >
                    {skill.value}%
                  </motion.span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full rounded-full btn-gradient relative"
                    initial={{ width: "0%" }}
                    animate={inView ? { width: `${skill.value}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-2 rounded-full bg-foreground/50 animate-pulse-glow" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hexagonal skill web (SVG) */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <svg viewBox="0 0 400 400" className="w-full max-w-[380px]">
              {/* Background hexagon rings */}
              {[1, 0.75, 0.5, 0.25].map((scale, i) => (
                <motion.polygon
                  key={i}
                  points={hexPoints(200, 200, 150 * scale)}
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                />
              ))}
              {/* Skill polygon */}
              <motion.polygon
                points={skillHexPoints(200, 200, 150, skills.map(s => s.value / 100))}
                fill="url(#skillFill)"
                stroke="url(#skillStroke)"
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 0.6, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 1 }}
                style={{ transformOrigin: "200px 200px" }}
              />
              {/* Skill labels */}
              {skills.map((s, i) => {
                const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
                const x = 200 + Math.cos(angle) * 175;
                const y = 200 + Math.sin(angle) * 175;
                return (
                  <motion.text
                    key={s.label}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-muted-foreground text-[10px]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 + i * 0.05 }}
                  >
                    {s.emoji}
                  </motion.text>
                );
              })}
              <defs>
                <linearGradient id="skillFill" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(152,94,109,0.28)" />
                  <stop offset="100%" stopColor="rgba(152,135,143,0.28)" />
                </linearGradient>
                <linearGradient id="skillStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#985e6d" />
                  <stop offset="100%" stopColor="#98878f" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 7 }, (_, i) => {
    const angle = (Math.PI * 2 * i) / 7 - Math.PI / 2;
    return `${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`;
  }).join(" ");
}

function skillHexPoints(cx: number, cy: number, r: number, values: number[]): string {
  return values
    .map((v, i) => {
      const angle = (Math.PI * 2 * i) / values.length - Math.PI / 2;
      return `${cx + Math.cos(angle) * r * v},${cy + Math.sin(angle) * r * v}`;
    })
    .join(" ");
}

export default SkillsSection;
