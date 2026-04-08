import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const pages = [
  {
    title: "Relationship & Engagement Executive",
    desc: "Operating at the intersection of innovation, people, and events—creating immersive experiences that leave a lasting impression on every visitor, partner, and team member.",
    tags: ["Current Role", "SNS iHub"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
  },
  ...initiatives
];

const flipVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 90 : -90,
    opacity: 0,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    rotateY: direction < 0 ? 90 : -90,
    opacity: 0,
  })
};

const WorkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < pages.length) {
      setPage([newPage, newDirection]);
    }
  };

  const currentPage = pages[page];

  return (
    <section id="work" className="py-[10vh] relative" ref={ref}>
      <div className="container mx-auto px-6">

        {/* Header content */}
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <motion.p
            className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Experience & Impact
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

        {/* Book Layout */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 0.2, duration: 0.7 }}
           className="w-full"
        >
          <div className="relative w-full max-w-5xl mx-auto min-h-[650px] sm:min-h-[600px] lg:h-[600px] xl:h-[650px] perspective-[2000px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={flipVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full flex flex-col lg:flex-row glass-card rounded-[2.5rem] shadow-2xl border border-primary/20 overflow-hidden"
              >
                {/* Left Page (Text) */}
                <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative bg-card/50">
                  {/* Subtle Spine Shadow for Book Effect on Desktop */}
                  <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentPage.tags.map((t) => (
                      <span key={t} className="bg-primary/10 border border-primary/20 text-primary rounded-full px-3 py-1.5 text-[10px] sm:text-xs font-mono uppercase tracking-wider font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-foreground mb-6">
                    {currentPage.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    {currentPage.desc}
                  </p>

                  <div className="absolute bottom-8 left-8 sm:left-12 lg:left-14 text-xs font-mono tracking-widest uppercase text-muted-foreground/60">
                    Page {page + 1}
                  </div>
                </div>

                {/* Right Page (Image) */}
                <div className="w-full h-64 sm:h-80 lg:w-1/2 lg:h-full relative overflow-hidden bg-muted">
                  {/* Subtle Spine Shadow for Book Effect on Desktop */}
                  <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/10 to-transparent z-10 pointer-events-none" />
                  
                  <img src={currentPage.image} alt={currentPage.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Book Controls */}
          <div className="flex justify-center items-center mt-12 sm:mt-16 gap-6 sm:gap-8">
            <button 
              onClick={() => paginate(-1)}
              disabled={page === 0}
              className="p-3 sm:p-4 rounded-full border border-primary/20 text-foreground hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Previous Page"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage([i, i > page ? 1 : -1])}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === page ? 'bg-primary w-8' : 'bg-primary/30 w-2.5 hover:bg-primary/60'}`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={() => paginate(1)}
              disabled={page === pages.length - 1}
              className="p-3 sm:p-4 rounded-full border border-primary/20 text-foreground hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Next Page"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
