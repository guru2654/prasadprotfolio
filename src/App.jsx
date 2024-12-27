import logo from './logo.svg';
import './App.css';
import NavbarSection from './components/NavbarSection';
import PortfolioSections from './components/PortfolioSections';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import FooterSection from './components/FooterSection';
import SocialSection from './components/SocialSection';
import { useRef } from "react";


function App() {
  const homeRef = useRef(null); // Specify type
  const aboutRef = useRef(null); // Specify type
  const projectsRef = useRef(null); // Specify type
  const skillsRef = useRef(null); // Specify type

  const contactRef = useRef(null); // Specify type
  return (
    <div className='container'>
      <NavbarSection 
      homeRef={homeRef}
      aboutRef={aboutRef}
      projectsRef={projectsRef}
      skillsRef={skillsRef}
      contactRef={contactRef}
      
      
      />
      <div ref={homeRef} id="home-section">
      <PortfolioSections />
      </div>
      <div ref={aboutRef} id="about-section">
      <AboutSection />
      </div>
      <div ref={projectsRef} id="projects-section">
      <ProjectSection />
      </div>
      <div ref={skillsRef} id="projects-section">
      <SkillsSection/>
      </div>
      <div ref={contactRef} id="contact-section"><FooterSection/></div>
      {/* <SocialSection/> */}
      
      
    </div>
    
  );
}

export default App;
