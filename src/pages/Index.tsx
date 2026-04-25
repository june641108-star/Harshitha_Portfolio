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

const GlobalBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#FDFBF7] dark:bg-[#1C1816] transition-colors duration-700">
    
    {/* --- Top Left Elements --- */}
    
    {/* Light Beige Soft Blob */}
    <svg viewBox="0 0 200 200" className="absolute top-[-25%] left-[-15%] w-[80vw] max-w-[700px] text-[#F3Ebe1] dark:text-[#2A231F] transition-colors duration-700">
      <path fill="currentColor" d="M42.7,-73.4C55.9,-65.7,67.6,-53.5,76.6,-39.7C85.5,-25.8,91.8,-10.3,90.2,4.6C88.6,19.4,79.1,33.5,68.4,45.4C57.7,57.3,45.8,67,31.7,74.1C17.6,81.1,1.3,85.5,-14.2,83.9C-29.6,82.3,-44.2,74.7,-55.8,63.6C-67.4,52.4,-76,37.8,-81.9,21.8C-87.7,5.8,-90.7,-11.5,-84.9,-25.9C-79.1,-40.3,-64.4,-51.7,-50.2,-59.6C-35.9,-67.5,-22,-71.9,-6.2,-68.1C9.6,-64.4,29.5,-81.1,42.7,-73.4Z" transform="translate(100 100) scale(1.1) rotate(20)" />
    </svg>

    {/* Dark Brown Main Blob */}
    <svg viewBox="0 0 200 200" className="absolute top-[-30%] left-[-20%] w-[70vw] max-w-[600px] text-[#8C624E] dark:text-[#4A3329] transition-colors duration-700">
      <path fill="currentColor" d="M37.8,-63.9C51.6,-57.8,67.3,-53.4,76.9,-42.6C86.5,-31.8,90.1,-14.6,88.7,2C87.3,18.6,81.1,34.6,70.5,47.1C59.9,59.6,45,68.5,30.3,73.4C15.6,78.3,1.1,79.2,-13.6,77.6C-28.3,76,-43.2,71.9,-55.1,62.3C-67,52.7,-75.9,37.6,-80.6,21.6C-85.3,5.6,-85.9,-11.3,-79.8,-25.7C-73.7,-40.1,-61,-52,-47,-58.3C-33,-64.6,-17.7,-65.4,-2.4,-61C12.9,-56.6,24.1,-70,37.8,-63.9Z" transform="translate(100 100) scale(1) rotate(-10)" />
    </svg>

    {/* Top Left Botanical Line Art */}
    <svg viewBox="0 0 100 150" className="absolute top-[-5%] left-[-5%] w-[45vw] max-w-[350px] text-[#241B15] dark:text-[#f0e6e0] opacity-80 z-10 transition-colors duration-700">
      {/* Main Stems */}
      <path d="M 5,-10 C 20,40 25,100 -5,160" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M 35,-10 C 45,30 50,80 30,140" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round"/>
      
      {/* 1st Stem Leaves (Right) */}
      <path d="M 12,30 C 25,20 30,22 35,32 C 25,37 15,35 12,30 Z" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M 16,70 C 35,60 40,62 45,72 C 35,77 20,75 16,70 Z" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M 14,110 C 35,100 40,102 45,112 C 35,117 20,115 14,110 Z" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      {/* 1st Stem Leaves (Left) */}
      <path d="M 8,45 C -15,40 -20,42 -25,52 C -15,57 -5,55 8,45 Z" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M 10,85 C -15,80 -20,82 -25,92 C -15,97 -5,95 10,85 Z" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      
      {/* 2nd Stem Leaves (Right) */}
      <path d="M 39,20 C 55,10 60,12 65,22 C 55,27 45,25 39,20 Z" fill="none" stroke="currentColor" strokeWidth="0.6"/>
      <path d="M 43,65 C 65,55 70,57 75,67 C 65,72 50,70 43,65 Z" fill="none" stroke="currentColor" strokeWidth="0.6"/>
      {/* 2nd Stem Leaves (Left) */}
      <path d="M 35,40 C 15,35 10,37 5,47 C 15,52 25,50 35,40 Z" fill="none" stroke="currentColor" strokeWidth="0.6"/>
      <path d="M 40,95 C 15,90 10,92 5,102 C 15,107 25,105 40,95 Z" fill="none" stroke="currentColor" strokeWidth="0.6"/>
    </svg>

    {/* --- Bottom Right Elements --- */}
    
    {/* Large Soft Beige/Pink Blob */}
    <svg viewBox="0 0 200 200" className="absolute bottom-[-10%] right-[-10%] w-[60vw] max-w-[550px] text-[#D8BCA8] dark:text-[#5E4232] transition-colors duration-700">
      <path fill="currentColor" opacity="0.65" d="M42.7,-73.4C55.9,-65.7,67.6,-53.5,76.6,-39.7C85.5,-25.8,91.8,-10.3,90.2,4.6C88.6,19.4,79.1,33.5,68.4,45.4C57.7,57.3,45.8,67,31.7,74.1C17.6,81.1,1.3,85.5,-14.2,83.9C-29.6,82.3,-44.2,74.7,-55.8,63.6C-67.4,52.4,-76,37.8,-81.9,21.8C-87.7,5.8,-90.7,-11.5,-84.9,-25.9C-79.1,-40.3,-64.4,-51.7,-50.2,-59.6C-35.9,-67.5,-22,-71.9,-6.2,-68.1C9.6,-64.4,29.5,-81.1,42.7,-73.4Z" transform="translate(100 100) scale(1) rotate(180)" />
    </svg>

    {/* Thin Outlined Line Art Blob */}
    <svg viewBox="0 0 200 200" className="absolute bottom-[-5%] right-[10%] w-[50vw] max-w-[450px] text-[#8C624E] dark:text-[#4A3329] transition-colors duration-700">
      <path fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" d="M37.8,-63.9C51.6,-57.8,67.3,-53.4,76.9,-42.6C86.5,-31.8,90.1,-14.6,88.7,2C87.3,18.6,81.1,34.6,70.5,47.1C59.9,59.6,45,68.5,30.3,73.4C15.6,78.3,1.1,79.2,-13.6,77.6C-28.3,76,-43.2,71.9,-55.1,62.3C-67,52.7,-75.9,37.6,-80.6,21.6C-85.3,5.6,-85.9,-11.3,-79.8,-25.7C-73.7,-40.1,-61,-52,-47,-58.3C-33,-64.6,-17.7,-65.4,-2.4,-61C12.9,-56.6,24.1,-70,37.8,-63.9Z" transform="translate(100 100) scale(0.9) rotate(45)" />
    </svg>

    {/* Bottom Right Fern Leaf Silhouette */}
    <svg viewBox="0 0 100 150" className="absolute bottom-[-5%] right-[-5%] w-[40vw] max-w-[350px] text-[#694833] dark:text-[#A07050] z-10 transition-colors duration-700">
       {/* Main Arc Stem */}
       <path d="M 90,150 C 90,100 65,50 15,0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
       
       {/* Top/Right Leaves */}
       <path d="M 78,110 C 90,95 105,90 105,90 C 95,105 85,110 78,110 Z" fill="currentColor" />
       <path d="M 68,85 C 85,70 100,65 100,65 C 90,80 75,85 68,85 Z" fill="currentColor" />
       <path d="M 56,60 C 75,45 90,40 90,40 C 80,55 65,60 56,60 Z" fill="currentColor" />
       <path d="M 44,35 C 65,20 80,15 80,15 C 70,30 55,35 44,35 Z" fill="currentColor" />
       <path d="M 30,12 C 55,-3 70,-8 70,-8 C 60,7 45,12 30,12 Z" fill="currentColor" />
       
       {/* Bottom/Left Leaves */}
       <path d="M 83,123 C 55,128 45,140 45,140 C 60,135 75,130 83,123 Z" fill="currentColor" />
       <path d="M 72,98 C 45,103 35,115 35,115 C 50,110 65,105 72,98 Z" fill="currentColor" />
       <path d="M 61,73 C 35,78 25,90 25,90 C 40,85 55,80 61,73 Z" fill="currentColor" />
       <path d="M 49,48 C 25,53 15,65 15,65 C 30,60 45,55 49,48 Z" fill="currentColor" />
       <path d="M 36,22 C 15,27 5,39 5,39 C 20,34 35,29 36,22 Z" fill="currentColor" />
    </svg>

    {/* Central Focus Soft Illumination */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[800px] rounded-full bg-[#E5D5C5]/30 dark:bg-[#3D2C23]/20 blur-[120px]" />
  </div>
);

const Index = () => {
  return (
    <div className="relative min-h-screen font-sans text-foreground">
      <GlobalBackground />
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
