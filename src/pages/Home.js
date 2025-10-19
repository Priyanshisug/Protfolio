import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillsSection";
import StartBackground from "../components/StartBackground";

const Home =() =>{
    return (
        <div className="home-container">
            <StartBackground />
            <main>
                <Navbar />
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectSection />
                <ContactSection />
                
            </main>
        </div>
    )
}
export default Home;