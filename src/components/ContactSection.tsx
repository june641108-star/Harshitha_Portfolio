import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Copy, Check, Send, Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText("june641108@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Use environment variables first, but gracefully fallback to the actual IDs
    // since EmailJS keys are safely meant to be public in frontend applications.
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_duzm0t7";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_twh9m95";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "o0usOl12k5vUntJdP";

    setFormState("loading");

    // Connect to EmailJS
    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setFormState("success");
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error.text);
          setFormState("idle");
          alert("Oops! Something went wrong while sending your message. Please verify your EmailJS keys.");
        }
      );
  };

  return (
    <section id="contact" className="py-[15vh] relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Let's Connect
        </motion.p>
        <motion.h2
          className="font-mono-label tracking-widest font-display font-semibold text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Start a <span className="text-gradient-primary">Conversation</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether it's an opportunity, a collaboration, or simply a hello — my inbox is always open.
            </p>

            <div className="space-y-4 mb-8">
              <div className="glass-card rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <span className="text-foreground text-sm">june641108@gmail.com</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {copied ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
                </button>
              </div>

              <a
                href="https://linkedin.com/in/harshitha--k-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 flex items-center gap-3 hover:bg-[rgba(255,255,255,0.06)] transition-colors"
              >
                <Linkedin size={18} className="text-primary" />
                <span className="text-foreground text-sm">linkedin.com/in/harshitha--k-s/</span>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {formState === "success" ? (
              <motion.div
                className="glass-card rounded-2xl p-12 flex flex-col items-center justify-center text-center h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 size={48} className="text-primary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Message Sent! 🎉</h3>
                <p className="text-muted-foreground text-sm">Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full glass-card rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full glass-card rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full glass-card rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  rows={4}
                  className="w-full glass-card rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full btn-gradient py-3 rounded-xl font-medium text-primary-foreground flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 relative overflow-hidden shimmer-on-hover"
                >
                  {formState === "loading" ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;