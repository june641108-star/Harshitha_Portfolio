import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const filters = ["All", "Events", "SNS iHub", "Engagement", "Content"];

const mediaItems = [
  { id: 1, caption: "Innovation Summit 2024", category: "Events", aspect: "portrait" },
  { id: 2, caption: "SNS iHub Team Day", category: "SNS iHub", aspect: "landscape" },
  { id: 3, caption: "Community Engagement Drive", category: "Engagement", aspect: "square" },
  { id: 4, caption: "Content Creation BTS", category: "Content", aspect: "portrait" },
  { id: 5, caption: "Guest Welcome Session", category: "SNS iHub", aspect: "landscape" },
  { id: 6, caption: "Team Building Workshop", category: "Engagement", aspect: "square" },
  { id: 7, caption: "Social Media Campaign", category: "Content", aspect: "landscape" },
  { id: 8, caption: "Annual Celebration", category: "Events", aspect: "portrait" },
  { id: 9, caption: "Startup Showcase", category: "SNS iHub", aspect: "square" },
];

const gradients = [
  "from-violet-600/30 to-cyan-500/20",
  "from-cyan-500/30 to-coral-500/20",
  "from-coral-500/30 to-violet-600/20",
  "from-violet-500/20 to-cyan-600/30",
  "from-cyan-600/20 to-violet-500/30",
  "from-coral-500/20 to-cyan-500/30",
  "from-violet-600/20 to-coral-500/30",
  "from-cyan-500/20 to-violet-600/30",
  "from-coral-500/30 to-violet-500/20",
];

const MediaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? mediaItems
    : mediaItems.filter((m) => m.category === activeFilter);

  return (
    <section id="media" className="py-[15vh] relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Moments & Memories
        </motion.p>
        <motion.h2
          className="font-mono-label tracking-widest font-display font-semibold text-foreground mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Events, Engagement & <span className="text-gradient-primary">Everything In Between</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          A glimpse into the people, places, and experiences that shape my journey.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${activeFilter === f
                  ? "btn-gradient text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
                }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                className={`break-inside-avoid glass-card rounded-xl p-2 cursor-pointer group ${i % 3 === 0 ? "rotate-[-1deg]" : i % 3 === 1 ? "rotate-[1deg]" : ""
                  }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05, type: "spring" }}
                whileHover={{ rotate: 0, scale: 1.03, zIndex: 10 }}
                onClick={() => setLightboxIndex(mediaItems.indexOf(item))}
              >
                <div
                  className={`rounded-lg bg-gradient-to-br ${gradients[i % gradients.length]} ${item.aspect === "portrait" ? "aspect-[3/4]" : item.aspect === "landscape" ? "aspect-[4/3]" : "aspect-square"
                    } flex items-center justify-center group-hover:brightness-110 transition-all`}
                >
                  <span className="text-3xl opacity-50">📸</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2 px-1 pb-1 text-center">{item.caption}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setLightboxIndex(null)}
            >
              <X size={28} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground hover:text-primary p-2"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((p) => (p! > 0 ? p! - 1 : mediaItems.length - 1));
              }}
            >
              <ChevronLeft size={32} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground hover:text-primary p-2"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((p) => (p! < mediaItems.length - 1 ? p! + 1 : 0));
              }}
            >
              <ChevronRight size={32} />
            </button>
            <motion.div
              className="max-w-2xl w-full mx-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`rounded-2xl bg-gradient-to-br ${gradients[lightboxIndex % gradients.length]} aspect-video flex items-center justify-center`}>
                <span className="text-6xl opacity-50">📸</span>
              </div>
              <p className="text-center text-foreground mt-4 font-display">{mediaItems[lightboxIndex].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MediaSection;
