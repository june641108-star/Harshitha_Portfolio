import { Linkedin, Instagram, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-secondary" />
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-xl font-semibold text-gradient-primary tracking-wide">HKS</span>

          <nav className="flex gap-6">
            {["Home", "About", "Work", "Skills", "Contact"].map((link) => (
              <a
                key={link}
                href={link === "Home" ? "#" : `#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            <a href="https://linkedin.com/in/harshitha--k-s/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="mailto:june641108@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors">
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2025 Harshitha K S · Built with passion ✦
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
