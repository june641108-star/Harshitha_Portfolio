import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

// ✅ IMPORT VIDEO
import womensDayVideo from "../videos/womensday-celebration.mp4";
import internVibesVideo from "../videos/Intern Vibes Only....mp4";
import togetherWeConnectVideo from "../videos/Your paragraph text (3) (1).mp4";

const filters = ["All", "Initiatives", "Social Media", "Event Coordination"];

const mediaItems = [
  { id: 1, caption: "IMUN Conference", category: "Event Coordination", aspect: "portrait", image: "/imun-conference.jpg", subCategory: "Creative Content", link: "https://www.linkedin.com/posts/subiksha-vasudevan_leadership-growth-teamwork-activity-7447502888345595904-VpmT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD206S8BCbTaAsJczP4iKB5IfQf0q0gGWXs" },
  { id: 11, caption: "womensday celebration", category: "Initiatives", aspect: "portrait", videoFile: womensDayVideo },
  { id: 4, caption: "AI Explainer Shorts 1", category: "Social Media", aspect: "square", image: "/yt_thumbs/5k4mXxOxGGk.jpg", subCategory: "AI Explainers", link: "https://www.youtube.com/shorts/5k4mXxOxGGk" },
  { id: 17, caption: "Employee engagement", category: "Initiatives", aspect: "landscape", image: "/initiatives-office.jpg" },
  { id: 7, caption: "Tool Demo Shorts 1", category: "Social Media", aspect: "landscape", image: "/yt_thumbs/8is5xqlV_ds.jpg", subCategory: "Tool Demos", link: "https://www.youtube.com/shorts/8is5xqlV_ds" },
  { id: 12, caption: "together we connect", category: "Initiatives", aspect: "portrait", videoFile: togetherWeConnectVideo },
  { id: 10, caption: "Trend Content Shorts", category: "Social Media", aspect: "portrait", image: "/yt_thumbs/b82chYLAk1o.jpg", subCategory: "Trend Content", link: "https://www.youtube.com/shorts/b82chYLAk1o" },
  { id: 13, caption: "interns vibe", category: "Initiatives", aspect: "portrait", videoFile: internVibesVideo },
  { id: 14, caption: "AI Explainer Shorts 2", category: "Social Media", aspect: "landscape", image: "/yt_thumbs/YJEaIZrI_g0.jpg", subCategory: "AI Explainers", link: "https://www.youtube.com/shorts/YJEaIZrI_g0" },
  { id: 15, caption: "Tool Demo Shorts 2", category: "Social Media", aspect: "square", image: "/yt_thumbs/9ahjyTYy2ak.jpg", subCategory: "Tool Demos", link: "https://www.youtube.com/shorts/9ahjyTYy2ak" },
  { id: 9, caption: "Startup meet", category: "Event Coordination", aspect: "square", image: "/startup-meet.jpg" },
  { id: 16, caption: "Creative Content Shorts", category: "Social Media", aspect: "portrait", image: "/yt_thumbs/LN7ua7ua0AQ.jpg", subCategory: "Creative Content", link: "https://www.youtube.com/shorts/LN7ua7ua0AQ" },
];

const subCategoryColors: Record<string, string> = {
  "AI Explainers": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "Trend Content": "bg-violet-500/20 text-violet-300 border-violet-500/30",
  "Trend-Based": "bg-violet-500/20 text-violet-300 border-violet-500/30",
  "Tool Demos": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "Creative Content": "bg-rose-500/20 text-rose-300 border-rose-500/30",
};

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
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter
    ? (activeFilter === "All"
        ? mediaItems
        : mediaItems.filter((m) => m.category === activeFilter))
    : [];

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

        {/* Top Container Message */}
        <AnimatePresence>
          {!activeFilter && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, overflow: 'hidden', filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-secondary/40 border border-border/50 backdrop-blur-md shadow-sm">
                <span className="text-xl">👉</span>
                <span className="text-sm font-medium text-foreground/90">Select a category to explore the moments</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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

        {/* WATERFALL MASONRY LAYOUT */}
        <motion.div layout className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-3 md:gap-5 w-full">

          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => {
              // Waterfall Masonry Height Strategy based on aspect ratio
              let heightClass = "h-[180px]";
              if (item.aspect === "landscape") {
                heightClass = "h-[140px] md:h-[160px]";
              } else if (item.aspect === "portrait") {
                heightClass = "h-[260px] md:h-[300px]";
              } else {
                heightClass = "h-[200px] md:h-[220px]";
              }
              
              // Clean, Professional Container Shapes
              const shapes = [
                "rounded-3xl", 
                "rounded-[2rem]", 
                "rounded-2xl rounded-tr-[2.5rem] rounded-bl-[2.5rem]", 
                "rounded-[2.5rem] rounded-tl-[2rem]", 
                "rounded-3xl rounded-br-[3rem]"
              ];
              const shapeStyle = shapes[i % shapes.length];
              
              // Natural hover variation
              const hoverRotate = i % 2 === 0 ? 1 : -1;

              return (
              <motion.div
                layout
                initial={{ opacity: 0, y: -60 - (i % 3) * 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)", y: 30 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.05 + (i % 4) * 0.03, // smooth varied waterfall effect
                  type: "spring", 
                  bounce: 0.3 
                }}
                whileHover={{ scale: 1.02, rotate: hoverRotate, zIndex: 20 }}
                key={item.id}
                className={`glass-card p-2 cursor-pointer group relative shadow-md hover:shadow-xl transition-all duration-300 w-full break-inside-avoid flex flex-col mb-3 md:mb-5 ${heightClass} ${shapeStyle}`}
                onClick={() => {
                  if (item.link) {
                    window.open(item.link, "_blank", "noopener,noreferrer");
                  } else {
                    setLightboxIndex(mediaItems.indexOf(item));
                  }
                }}
              >
                <div
                  className={`w-full flex-1 min-h-0 bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center relative overflow-hidden ${shapeStyle}`}
                >
                  {item.videoFile ? (
                    <video
                      src={item.videoFile}
                      className="w-full h-full object-cover cursor-pointer"
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      onClick={(e) => {
                        const video = e.currentTarget;
                        video.muted = false;
                        video.controls = true;
                        video.play();
                      }}
                    />
                  ) : item.image ? (
                    <img src={item.image} alt={item.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <span className="text-3xl opacity-50">📸</span>
                  )}

                  {/* Sub-category tag */}
                  {item.subCategory && (
                    <span
                      className={`absolute bottom-3 left-3 px-3 py-1 text-[10px] font-bold tracking-wider rounded-full border backdrop-blur-md shadow-sm ${subCategoryColors[item.subCategory] || "bg-white/10 text-white/70 border-white/20"}`}
                    >
                      {item.subCategory}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-3 mb-1 text-center font-medium shrink-0 group-hover:text-primary transition-colors">
                  {item.caption}
                </p>
              </motion.div>
              );
            })}
          </AnimatePresence>

        </motion.div>
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