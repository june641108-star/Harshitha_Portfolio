import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Inner page data (pages 2–6 of the book) ─── */
const innerPages = [
  {
    title: "Front Office Management",
    desc: "Serving as the primary point of contact, ensuring a seamless, welcoming, and highly professional experience at the SNS iHub front desk.",
    tags: ["Operations", "Communication", "Service"],
    image: "/sns-ihub-cover.png"
  },
  {
    title: "Guest Tours & Experience",
    desc: "Acting as the primary ambassador, warmly receiving VIP visitors, coordinating itineraries, and guiding them through the intricate SNS iHub ecosystem.",
    tags: ["Hospitality", "Networking", "Public Relations"],
    image: "/guest-tours.jpg"
  },
  {
    title: "Event Coordination",
    desc: "Managing end-to-end logistics, seamless execution, and dynamic flow management for high-impact innovation events and professional gatherings.",
    tags: ["Planning", "Execution", "Logistics"],
    image: "/event-coordination.jpg"
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

const TOTAL_PAGES = 1 + innerPages.length; // 1 cover + 5 inner = 6

/* ═══════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════ */

/* Cover page — flips open/closed from the LEFT spine like a real hardcover */
const coverVariants = {
  enter: (direction: number) => ({
    rotateY: direction < 0 ? -120 : 0,
    rotateX: direction < 0 ? 8 : 0,
    skewY: direction < 0 ? 3 : 0,
    z: direction < 0 ? 80 : 0,
    opacity: direction < 0 ? 0 : 1,
    transformOrigin: "left center",
  }),
  center: {
    rotateY: 0,
    rotateX: 0,
    skewY: 0,
    z: 0,
    opacity: 1,
    transformOrigin: "left center",
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -120 : 0,
    rotateX: direction > 0 ? 8 : 0,
    skewY: direction > 0 ? 3 : 0,
    z: direction > 0 ? 80 : 0,
    opacity: direction > 0 ? 0 : 1,
    transformOrigin: "left center",
  }),
};

/* Inner pages — wrapper fades */
const innerWrapperVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { staggerChildren: 0 } },
  exit: { opacity: 0 },
};

/* Left panel of inner pages — hinged at right edge (spine side) */
const leftVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 90 : 0,
    rotateX: direction > 0 ? 12 : 0,
    skewY: direction > 0 ? -5 : 0,
    z: direction > 0 ? 50 : 0,
    transformOrigin: "right center",
  }),
  center: {
    rotateY: 0, rotateX: 0, skewY: 0, z: 0,
    transformOrigin: "right center",
  },
  exit: (direction: number) => ({
    rotateY: direction < 0 ? 90 : 0,
    rotateX: direction < 0 ? 12 : 0,
    skewY: direction < 0 ? -5 : 0,
    z: direction < 0 ? 50 : 0,
    transformOrigin: "right center",
  }),
};

/* Right panel of inner pages — hinged at left edge (spine side) */
const rightVariants = {
  enter: (direction: number) => ({
    rotateY: direction < 0 ? -90 : 0,
    rotateX: direction < 0 ? 12 : 0,
    skewY: direction < 0 ? 5 : 0,
    z: direction < 0 ? 50 : 0,
    transformOrigin: "left center",
  }),
  center: {
    rotateY: 0, rotateX: 0, skewY: 0, z: 0,
    transformOrigin: "left center",
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -90 : 0,
    rotateX: direction > 0 ? 12 : 0,
    skewY: direction > 0 ? 5 : 0,
    z: direction > 0 ? 50 : 0,
    transformOrigin: "left center",
  }),
};

/* ═══════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════ */
const WorkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < TOTAL_PAGES) {
      setPage([newPage, newDirection]);
    }
  };

  const isCover = page === 0;

  return (
    <section id="work" className="py-[10vh] relative" ref={ref}>
      <div className="container mx-auto px-6">

        {/* Section Header - Only visible when book is open for a cleaner initial cover view */}
        <AnimatePresence>
          {!isCover && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8 lg:mb-12 text-center"
            >
              <h2 className="font-mono-label tracking-[0.2em] text-foreground/60 uppercase text-xs mb-2">
                Experience & Impact
              </h2>
              <div className="h-px w-12 bg-primary/30 mx-auto" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══════ THE BOOK ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="w-full"
        >
          <div
            className="relative w-full max-w-5xl mx-auto min-h-[650px] sm:min-h-[600px] lg:h-[600px] xl:h-[650px]"
            style={{ perspective: "2000px" }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              {isCover ? (
                /* ══════════════════════════════
                   COVER PAGE — closed book
                   ══════════════════════════════ */
                <motion.div
                  key="cover"
                  custom={direction}
                  variants={coverVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-x-0 mx-auto w-full max-w-sm sm:max-w-md h-full rounded-[2.5rem] shadow-2xl overflow-hidden cursor-pointer group"
                  style={{ transformStyle: "preserve-3d" }}
                  onClick={() => paginate(1)}
                >
                  {/* ── Background ── */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

                  {/* ── Decorative elements for a minimal cover ── */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent" />
                  <div className="absolute bottom-12 left-8 w-12 h-1 bg-primary/30" />

                  {/* ── Cover Content ── */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-8 sm:p-10">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Current Role", "SNS iHub"].map((t) => (
                        <span
                          key={t}
                          className="bg-primary/5 border border-primary/10 text-primary/70 rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3 leading-tight">
                      Relationship &amp;<br />Engagement Executive
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm max-w-xs mb-8">
                      Creating immersive experiences that leave a lasting impression on every visitor.
                    </p>
                  </div>

                  {/* ── Book-edge details (right side) ── */}
                  <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />

                  {/* ── Subtle border ── */}
                  <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 pointer-events-none" />
                </motion.div>
              ) : (
                /* ══════════════════════════════
                   INNER PAGES — open book
                   ══════════════════════════════ */
                <motion.div
                  key={page}
                  custom={direction}
                  variants={innerWrapperVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full flex flex-col lg:flex-row glass-card rounded-[2.5rem] shadow-2xl border border-primary/20 overflow-hidden"
                >
                  {/* Left Page — Text */}
                  <motion.div
                    variants={leftVariants}
                    custom={direction}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative bg-card/50"
                  >
                    {/* Spine shadow */}
                    <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />

                    <div className="flex flex-wrap gap-2 mb-6">
                      {innerPages[page - 1].tags.map((t) => (
                        <span key={t} className="bg-primary/10 border border-primary/20 text-primary rounded-full px-3 py-1.5 text-[10px] sm:text-xs font-mono uppercase tracking-wider font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-foreground mb-6">
                      {innerPages[page - 1].title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      {innerPages[page - 1].desc}
                    </p>

                    <div className="absolute bottom-8 left-8 sm:left-12 lg:left-14 text-xs font-mono tracking-widest uppercase text-muted-foreground/60">
                      Page {page + 1}
                    </div>
                  </motion.div>

                  {/* Right Page — Image */}
                  <motion.div
                    variants={rightVariants}
                    custom={direction}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full h-64 sm:h-80 lg:w-1/2 lg:h-full relative overflow-hidden bg-muted"
                  >
                    {/* Spine shadow */}
                    <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/20 via-black/5 to-transparent z-10 pointer-events-none" />

                    <img src={innerPages[page - 1].image} alt={innerPages[page - 1].title} className="w-full h-full object-contain transition-transform duration-700 hover:scale-105" />

                    {/* Multi-stage blending overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent pointer-events-none lg:hidden" />
                    <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background/20 to-transparent pointer-events-none" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            {/* ═══════ SIDE ARROWS (inside book container) ═══════ */}
            <AnimatePresence>
              {page > 0 && (
                <motion.button
                  key="arrow-left"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => paginate(-1)}
                  className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-6 lg:-left-12 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-primary/20 bg-background shadow-xl text-primary hover:bg-primary hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label="Previous Page"
                >
                  <ChevronLeft size={28} />
                </motion.button>
              )}

              {page < TOTAL_PAGES - 1 && (
                <motion.button
                  key="arrow-right"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => paginate(1)}
                  className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-6 lg:-right-12 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-primary/20 bg-background shadow-xl text-primary hover:bg-primary hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label="Next Page"
                >
                  <ChevronRight size={28} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* ═══════ DOT INDICATORS (below the book) ═══════ */}
          <AnimatePresence>
            {!isCover && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex justify-center items-center mt-10 sm:mt-14"
              >
                <div className="flex gap-2">
                  {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage([i, i > page ? 1 : -1])}
                      className={`h-2.5 rounded-full transition-all duration-300 ${i === page
                        ? "bg-primary w-8"
                        : "bg-primary/30 w-2.5 hover:bg-primary/60"
                        }`}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
