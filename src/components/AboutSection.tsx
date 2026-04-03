import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Building2, Zap, Users, Camera, Globe, Lightbulb, Calendar, Layout } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "BBA Graduate" },
  { icon: MapPin, label: "Coimbatore" },
  { icon: Building2, label: "SNS iHub" },
  { icon: Zap, label: "Engagement Specialist" },
];

const responsibilities = [
  { icon: Building2, title: "Front Office Operations", desc: "Managing day-to-day front office activities with precision", color: "border-violet-500/40" },
  { icon: Users, title: "Guest Coordination", desc: "Welcoming and guiding visitors through the SNS iHub ecosystem", color: "border-cyan-500/40" },
  { icon: Globe, title: "Tours & Walkthroughs", desc: "Conducting engaging facility tours for stakeholders", color: "border-coral-500/40" },
  { icon: Calendar, title: "Event Management", desc: "Planning and executing innovation events end-to-end", color: "border-violet-500/40" },
  { icon: Camera, title: "Social Media Content", desc: "Creating reels and highlights for SNS iHub & SNS Square", color: "border-cyan-500/40" },
  { icon: Layout, title: "2nd Floor Events", desc: "Coordinating specialized events and programs", color: "border-coral-500/40" },
  { icon: Lightbulb, title: "Employee Engagement", desc: "Building team culture through creative programs", color: "border-violet-500/40" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
  }),
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-[15vh] relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left — portrait placeholder + stats */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={0}
          >
            <div className="glass-card rounded-2xl aspect-[3/4] max-w-sm mx-auto lg:mx-0 mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-display font-semibold text-gradient-primary opacity-[0.28] tracking-wide">HKS</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {stats.map((s, i) => (
                <motion.span
                  key={s.label}
                  className="glass-card rounded-full px-4 py-2 flex items-center gap-2 text-sm text-muted-foreground"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                >
                  <s.icon size={14} className="text-primary" />
                  {s.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={1}
          >
            <p className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-3">About Me</p>
            <h2 className="font-mono-label tracking-widest font-display font-medium italic text-foreground/95 mb-4 leading-snug tracking-tight">
              The Person Behind the Role
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p className="text italic text-lg">
                I'm Harshitha K S — a relationship builder, event orchestrator, and
                community connector at SNS iHub in Coimbatore. With a BBA background
                and a passion for people, I thrive at the intersection of innovation
                and human connection.
              </p>
              <p className="text italic text-lg">
                From coordinating large-scale events to creating compelling social media
                content, I bring energy and intention to everything I do. My goal is to
                make every interaction meaningful and every experience memorable.
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 border-l-2 border-primary">
              <p className="text-foreground italic text-lg">
                "I believe every interaction is an opportunity to create something meaningful."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bento responsibilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {responsibilities.map((r, i) => (
            <motion.div
              key={r.title}
              className={`glass-card rounded-xl p-5 border-t-2 ${r.color} group cursor-default transition-all duration-400 hover:bg-[rgba(255,255,255,0.06)]`}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.08, type: "spring", stiffness: 120 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
            >
              <r.icon size={20} className="text-primary mb-3" strokeWidth={1.5} />
              <h3 className="font-display font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
