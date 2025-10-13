import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <BackToTop />
      
      <footer className="py-8 text-center border-t border-border/50 bg-card/20">
        <p className="text-muted-foreground">
          Designed & Built by Antronic A
        </p>
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </footer>
    </div>
  );
}
