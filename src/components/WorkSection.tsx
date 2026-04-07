import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const initiatives = [
  {
    title: "Front Office Management",
    desc: "Serving as the primary point of contact, ensuring a seamless, welcoming, and highly professional experience at the SNS iHub front desk.",
    tags: ["Operations", "Communication", "Service"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Guest Tours & Experience",
    desc: "Acting as the primary ambassador, warmly receiving VIP visitors, coordinating itineraries, and guiding them through the intricate SNS iHub ecosystem.",
    tags: ["Hospitality", "Networking", "Public Relations"],
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Event Coordination",
    desc: "Managing end-to-end logistics, seamless execution, and dynamic flow management for high-impact innovation events and professional gatherings.",
    tags: ["Planning", "Execution", "Logistics"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Social Media Content",
    desc: "Directing, capturing, and producing captivating digital reels and interactive highlights to amplify the brand vision of SNS iHub & SNS Square.",
    tags: ["Content Creation", "Brand Voice", "Digital Media"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Reporting & Management",
    desc: "Maintaining comprehensive operational records, analyzing daily engagement metrics, and providing actionable reports for continuous workflow improvement.",
    tags: ["Analytics", "Strategy", "Administration"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
];

const WorkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeImg, setActiveImg] = useState(initiatives[0].image);

  return (
    <section id="work" className="py-[10vh] relative" ref={ref}>
      <div className="container mx-auto px-6">

        {/* Header content */}
        <div className="mb-16 max-w-2xl">
          <motion.p
            className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Work & Initiatives
          </motion.p>
          <motion.h2
            className="font-mono-label tracking-widest text-foreground uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Building Experiences <span className="text-gradient-primary">That Matter</span>
          </motion.h2>
        </div>

        {/* Highlight Banner */}
        <motion.div
          className="glass-card rounded-3xl p-8 lg:p-10 mb-16 relative overflow-hidden border border-primary/20 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-transparent to-cyan-500/10 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold">Current Role</span>
                <span className="glass-card rounded-full px-4 py-1.5 text-xs text-secondary font-mono uppercase tracking-wider font-semibold">SNS iHub</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-3">
                Relationship & Engagement Executive
              </h3>
              <p className="text-muted-foreground max-w-2xl leading-relaxed text-base">
                Operating at the intersection of innovation, people, and events—creating immersive experiences that leave a lasting impression on every visitor, partner, and team member.
              </p>
            </div>
            <div className="hidden md:flex w-16 h-16 rounded-full bg-primary/10 border border-primary/20 items-center justify-center text-primary group cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300">
              <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>

        {/* Interactive Split Feature Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative items-start">

          {/* Left Column: Interactive List */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.title}
                onMouseEnter={() => setActiveImg(item.image)}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: "easeOut" }}
                className="group relative cursor-pointer py-8 lg:py-10 px-6 -mx-6 lg:px-8 lg:-mx-8 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:via-primary/5 hover:to-transparent border-b border-foreground/10 hover:border-transparent last:border-0"
              >
                {/* Mobile Image Overlay (Hidden on Desktop) */}
                <div className="lg:hidden w-full h-[250px] sm:h-[350px] rounded-3xl overflow-hidden mb-8 shadow-md">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-semibold transition-colors duration-300 group-hover:text-primary mb-4 flex items-center justify-between">
                  {item.title}
                  <span className="hidden lg:block opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary">
                    <ArrowRight size={24} strokeWidth={2} />
                  </span>
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6 max-w-xl opacity-90">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="glass-card text-[11px] font-mono tracking-widest uppercase px-4 py-1.5 rounded-full text-foreground/80 group-hover:border-primary/30 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Sticky Media Display (Desktop Only) */}
          <motion.div
            className="hidden lg:block w-1/2 sticky top-32 h-[650px] max-h-[80vh] rounded-[2.5rem] p-3 glass-card shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative border border-primary/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={activeImg}
                  alt="Work Initiative"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              {/* Soft overlay to make it look premium */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WorkSection;
