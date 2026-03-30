import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Megaphone, Coins, Mic, CheckCircle2, ArrowRight } from "lucide-react";

const certs = [
  { icon: Package, title: "Product Management", issuer: "Industry Certification", year: "2024", color: "from-violet-600/20 to-violet-400/5" },
  { icon: Megaphone, title: "Digital Marketing", issuer: "Professional Development", year: "2024", color: "from-cyan-600/20 to-cyan-400/5" },
  { icon: Coins, title: "Financial Accounting", issuer: "Academic Excellence", year: "2023", color: "from-coral-500/20 to-coral-400/5" },
  { icon: Mic, title: "Communication & Leadership", issuer: "Leadership Program", year: "2024", color: "from-violet-600/20 to-cyan-400/5" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-[15vh] relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          className="font-mono-label text-primary mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          // certifications
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Always <span className="text-gradient-primary">Growing</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="glass-card rounded-xl p-6 relative overflow-hidden group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
              whileHover={{ y: -6 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="absolute top-3 right-3">
                <CheckCircle2 size={16} className="text-primary/60" />
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center mb-4">
                  <cert.icon size={18} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1 text-sm">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                <span className="font-mono-label text-muted-foreground">{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-sm text-muted-foreground mt-8 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          Continuously learning and growing <ArrowRight size={14} className="text-primary" />
        </motion.p>
      </div>
    </section>
  );
};

export default CertificationsSection;
