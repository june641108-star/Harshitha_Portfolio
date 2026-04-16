import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { Package, Megaphone, Coins, Mic, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const certs = [
  {
    icon: Package,
    title: "Product Management",
    issuer: "Great Learning Academy",
    year: "2024",
    color: "from-violet-600/20 to-violet-400/5",
    // Put your image here: public/certificates/product-management.jpeg
    certificateUrl: "/certificates/product-management.jpeg?v=1",
    description:
      "Certificate of Completion from Great Learning Academy for successfully completing the free online course “Product Management” (Aug 2024).",
  },
  {
    icon: Megaphone,
    title: "Affiliate Marketing",
    issuer: "Great Learning Academy",
    year: "2024",
    color: "from-cyan-600/20 to-cyan-400/5",
    // Put your image here: public/certificates/digital-marketing.jpeg
    certificateUrl: "/certificates/digital-marketing.jpeg?v=1",
    description:
      "Certificate of Completion from Great Learning Academy for successfully completing the free online course “Affiliate Marketing” (Jun 2024).",
  },
  {
    icon: Coins,
    title: "Financial Accounting",
    issuer: "Great Learning Academy",
    year: "2024",
    color: "from-coral-500/20 to-coral-400/5",
    // Put your image here: public/certificates/financial-accounting.jpeg
    certificateUrl: "/certificates/financial-accounting.jpeg?v=1",
    description:
      "Certificate of Completion from Great Learning Academy for successfully completing the free online course “Financial Accounting” (Jun 2024).",
  },
  {
    icon: Mic,
    title: "Data Visualization with Power BI",
    issuer: "Great Learning Academy",
    year: "2024",
    color: "from-violet-600/20 to-cyan-400/5",
    // Put your image here: public/certificates/communication-leadership.jpeg
    certificateUrl: "/certificates/communication-leadership.jpeg?v=1",
    description:
      "Certificate of Completion from Great Learning Academy for successfully completing the free online course “Data Visualization With Power BI” (May 2024).",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const selectedCert = useMemo(() => {
    if (!selectedKey) return null;
    return certs.find((c) => `${c.title}-${c.year}` === selectedKey) ?? null;
  }, [selectedKey]);

  const isImageUrl = (url: string) => /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(url);

  return (
    <section className="py-[15vh] relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Certifications
        </motion.p>
        <motion.h2
          className="font-mono-label tracking-widest font-display font-semibold text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Always <span className="text-gradient-primary">Growing</span>
        </motion.h2>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>
                {selectedCert ? `${selectedCert.title} Certificate` : "Certificate"}
              </DialogTitle>
            </DialogHeader>

            {selectedCert ? (
              <div className="grid gap-4">
                {selectedCert.description ? (
                  <p className="text-sm text-muted-foreground">{selectedCert.description}</p>
                ) : null}

                {selectedCert.certificateUrl && isImageUrl(selectedCert.certificateUrl) ? (
                  <div className="relative w-full rounded-lg overflow-hidden bg-black/20">
                    <img
                      src={selectedCert.certificateUrl}
                      alt={`${selectedCert.title} certificate`}
                      className="w-full max-h-[70vh] object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : selectedCert.certificateUrl ? (
                  <Button asChild className="w-full">
                    <a href={selectedCert.certificateUrl} target="_blank" rel="noreferrer">
                      Open certificate <ExternalLink size={16} />
                    </a>
                  </Button>
                ) : (
                  <div className="text-sm text-muted-foreground">
                    No certificate image/link set yet for this certificate.
                  </div>
                )}
              </div>
            ) : null}
          </DialogContent>
        </Dialog>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              onClick={() => {
                setSelectedKey(`${cert.title}-${cert.year}`);
                setOpen(true);
              }}
              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full glass-card p-6 flex flex-col items-center justify-center text-center cursor-pointer group overflow-hidden border border-white/10"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.2 + i * 0.1, 
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                rotate: i % 2 === 0 ? 2 : -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Badge/Check Icon */}
              <div className="absolute top-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                <CheckCircle2 size={16} className="text-primary" />
              </div>

              <div className="relative z-10">
                <h3 className="font-display font-bold text-foreground mb-2 text-sm sm:text-base leading-tight">
                  {cert.title}
                </h3>
                <div className="h-0.5 w-6 bg-primary/40 mx-auto mb-2 rounded-full" />
                <span className="font-mono-label text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">
                  {cert.year}
                </span>
              </div>

              {/* View Hint */}
              <motion.div 
                className="absolute bottom-4 opacity-0 group-hover:opacity-40 transition-opacity"
              >
                <ArrowRight size={14} />
              </motion.div>
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
