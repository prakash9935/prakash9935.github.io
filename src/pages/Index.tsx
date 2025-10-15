import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import SkillsCarousel from "@/components/SkillsCarousel";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import EnhancedCertifications from "@/components/EnhancedCertifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Education from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <SkillsCarousel />
        <EnhancedCertifications />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
