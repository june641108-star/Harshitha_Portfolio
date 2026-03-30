import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, Camera, Lightbulb, Plus } from "lucide-react";

const initiatives = [
  { icon: Calendar, title: "Event Coordination", desc: "Logistics, execution, and flow management for innovation events", tags: ["Planning", "Execution"] },
  { icon: Users, title: "Guest Engagement & Tours", desc: "Welcoming visitors and introducing the SNS iHub ecosystem", tags: ["Hospitality", "Networking"] },
  { icon: Camera, title: "Social Media Content", desc: "Creating reels and highlights for SNS iHub & SNS Square", tags: ["Content", "Branding"] },
  { icon: Lightbulb, title: "Employee Engagement", desc: "Programs that build team culture and drive participation", tags: ["Culture", "Team Building"] },
];

const WorkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-[15vh] relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          className="font-mono-label text-primary mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          // work & initiatives
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Building Experiences <span className="text-gradient-primary">That Matter</span>
        </motion.h2>

        {/* Hero card */}
        <motion.div
          className="glass-card rounded-2xl p-8 mb-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-cyan-500/10" />
          <div className="relative z-10">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="glass-card rounded-full px-3 py-1 text-xs text-primary font-mono-label">Current Role</span>
              <span className="glass-card rounded-full px-3 py-1 text-xs text-secondary font-mono-label">SNS iHub</span>
            </div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
              SNS iHub — Relationship & Engagement Executive
            </h3>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Since joining SNS iHub, Harshitha has been at the intersection of innovation, people,
              and events — creating experiences that leave a lasting impression on every visitor and team member.
            </p>
          </div>
        </motion.div>

        {/* Initiative cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card rounded-xl p-6 group cursor-default transition-all"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            >
              <item.icon size={24} className="text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
              <div className="flex gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="text-xs glass-card rounded-full px-3 py-1 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Placeholder card */}
          <motion.div
            className="rounded-xl p-6 border border-dashed border-primary/30 flex flex-col items-center justify-center text-center cursor-default"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            whileHover={{ borderColor: "rgba(124,58,237,0.6)" }}
          >
            <Plus size={24} className="text-primary mb-3" />
            <p className="font-display font-semibold text-foreground text-sm mb-1">More Coming Soon</p>
            <p className="text-xs text-muted-foreground">Open to collaboration</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
