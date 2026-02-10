import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CurrentMeSection from "@/components/CurrentMe.tsx";
import HobbiesSection from "@/components/HobbiesSection.tsx";
import FutureMeSection from "@/components/FutureMe.tsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
        <CurrentMeSection />
        <HobbiesSection />
        <FutureMeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
