import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

// ✅ IMPORT VIDEO
import womensDayVideo from "../videos/womensday-celebration.mp4";

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

  const filtered =
    activeFilter === "All"
      ? mediaItems
      : mediaItems.filter((m) => m.category === activeFilter);

  return (
    <section id="media" className="py-[15vh] relative" ref={ref}>
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.p className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-4">
          Moments & Memories
        </motion.p>

        <motion.h2 className="font-mono-label tracking-widest font-display font-semibold text-foreground mb-3">
          Events, Engagement & <span className="text-gradient-primary">Everything In Between</span>
        </motion.h2>

        <motion.p className="text-muted-foreground mb-8">
          A glimpse into the people, places, and experiences that shape my journey.
        </motion.p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm ${activeFilter === f
                ? "btn-gradient text-primary-foreground"
                : "glass-card text-muted-foreground"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">

          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                className="break-inside-avoid glass-card rounded-xl p-2 cursor-pointer group"
                onClick={() => setLightboxIndex(mediaItems.indexOf(item))}
              >
                <div
                  className={`rounded-lg bg-gradient-to-br ${gradients[i % gradients.length]
                    } ${item.aspect === "portrait"
                      ? "aspect-[3/4]"
                      : item.aspect === "landscape"
                        ? "aspect-[4/3]"
                        : "aspect-square"
                    } flex items-center justify-center`}
                >
                  <span className="text-3xl opacity-50">📸</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* ✅ VIDEO CARD (PORTRAIT FIXED) */}
          <motion.div className="break-inside-avoid glass-card rounded-xl p-2 group">
            <div className="rounded-lg bg-gradient-to-br from-violet-600/30 to-cyan-500/20 aspect-[3/4] relative overflow-hidden">

              <video
                src={womensDayVideo}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                autoPlay   // ✅ IMPORTANT FIX
              />

              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition">
                <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
                  ▶
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-2 text-center">
              Womensday celebration
            </p>
          </motion.div>

        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80"
            onClick={() => setLightboxIndex(null)}
          >
            <div className="bg-white p-4 rounded">
              <p>{mediaItems[lightboxIndex].caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MediaSection;