import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[550px] sm:min-h-[650px] flex flex-col justify-between overflow-hidden bg-[#0C0C0C] w-full select-none">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-20">
        <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
          About
        </a>
        <a href="#skills" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
          Skills
        </a>
        <a href="#projects" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
          Projects
        </a>
        <a href="#contact" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
          Contact
        </a>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="w-full overflow-hidden z-0 pointer-events-none mt-6 sm:mt-4 md:-mt-5 flex items-center relative">
        <FadeIn delay={0.15} y={40} className="w-full">
          <div className="w-full overflow-hidden flex whitespace-nowrap">
            <div className="animate-hero-marquee pointer-events-auto flex whitespace-nowrap cursor-pointer">
              <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] pr-12 select-none">
                Hi, i&apos;m venkat &bull;
              </h1>
              <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] pr-12 select-none">
                Hi, i&apos;m venkat &bull;
              </h1>
              <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] pr-12 select-none">
                Hi, i&apos;m venkat &bull;
              </h1>
              <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] pr-12 select-none">
                Hi, i&apos;m venkat &bull;
              </h1>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Absolute Portrait Centering */}
      {/* top-1/2 -translate-y-1/2 on mobile; bottom-0 translate-y-0 on sm+ */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[80vw] xs:w-[300px] sm:w-[380px] md:w-[460px] lg:w-[540px] pointer-events-none flex justify-center">
        <FadeIn delay={0.6} y={30} className="pointer-events-auto w-full flex justify-center">
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <img 
              src="/portrait.png" 
              alt="Veera Venkat Satyanarayana circular cartoon portrait" 
              className="w-full h-auto object-contain select-none pointer-events-none animate-slow-rotate" 
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-4 sm:px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20 pointer-events-none">
        <FadeIn delay={0.35} y={20} className="pointer-events-auto">
          <p 
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[130px] xs:max-w-[180px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.7rem, 1.4vw, 1.5rem)' }}
          >
            B.Tech Data Science student building full-stack web apps powered by AI
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20} className="pointer-events-auto">
          <ContactButton label="Contact Me" />
        </FadeIn>
      </div>
    </section>
  );
};
