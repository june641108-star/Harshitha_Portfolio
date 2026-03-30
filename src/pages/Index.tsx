import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import LanguagesSection from "@/components/LanguagesSection";
import MediaSection from "@/components/MediaSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="noise-overlay">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <CertificationsSection />
      <LanguagesSection />
      <MediaSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
