import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "glass-card py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <a href="#" className="font-display text-xl font-semibold text-gradient-primary tracking-wide">
            HKS
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <ThemeToggle />
            <a
              href="#contact"
              className="btn-gradient px-4 py-2 rounded-full text-sm font-medium text-primary-foreground transition-all hover:scale-105 active:scale-95"
            >
              Hire Me
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="text-foreground p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                className="text-foreground p-1"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-3xl font-display font-semibold text-foreground mb-6 hover:text-gradient-primary transition-colors"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
