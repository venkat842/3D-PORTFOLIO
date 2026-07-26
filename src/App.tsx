import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactFooter } from './components/ContactFooter';

function App() {
  return (
    <div className="bg-[#0C0C0C] text-[#D7E2EA] font-kanit min-h-screen w-full overflow-x-clip select-none">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactFooter />
    </div>
  );
}

export default App;
