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

                <div className="mt-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      setSelectedKey(`${cert.title}-${cert.year}`);
                      setOpen(true);
                    }}
                  >
                    View Certificate <ExternalLink size={16} />
                  </Button>
                </div>
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
