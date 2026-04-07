import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Building2, Zap } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "BBA Graduate" },
  { icon: MapPin, label: "Coimbatore" },
  { icon: Building2, label: "SNS iHub" },
  { icon: Zap, label: "Engagement Specialist" },
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
        <div className="max-w-4xl mx-auto flex flex-col gap-8 mb-16">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={0}
          >
            <p className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-3">About Me</p>
            <h2 className="font-mono-label tracking-widest font-display font-medium italic text-foreground/95 mb-6 leading-snug tracking-tight">
              The Person Behind the Role
            </h2>

            <div className="flex flex-wrap gap-3 justify-start mb-8">
              {stats.map((s, i) => (
                <motion.span
                  key={s.label}
                  className="glass-card rounded-full px-4 py-2 flex items-center gap-2 text-sm text-muted-foreground"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                >
                  <s.icon size={14} className="text-primary" />
                  {s.label}
                </motion.span>
              ))}
            </div>

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


      </div>
    </section>
  );
};

export default AboutSection;
