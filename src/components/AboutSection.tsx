import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative 3D corner images (opacity adapted to screen size to avoid ocluding text) */}
      {/* Top-Left Moon */}
      <FadeIn 
        delay={0.1} 
        x={-80} 
        y={0} 
        duration={0.9} 
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[70px] xs:w-[100px] sm:w-[140px] md:w-[180px] lg:w-[210px] pointer-events-none select-none z-0"
      >
        <img 
          src="/moon.jpg" 
          alt="Abstract 3D rendered cresent moon" 
          className="w-full h-auto object-contain opacity-20 xs:opacity-30 sm:opacity-40 blur-[0.5px]" 
        />
      </FadeIn>
      
      {/* Bottom-Left Loop */}
      <FadeIn 
        delay={0.25} 
        x={-80} 
        y={0} 
        duration={0.9} 
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[60px] xs:w-[85px] sm:w-[120px] md:w-[150px] lg:w-[180px] pointer-events-none select-none z-0"
      >
        <img 
          src="/abstract_object.jpg" 
          alt="Abstract 3D metallic loop sculpture" 
          className="w-full h-auto object-contain opacity-20 xs:opacity-30 sm:opacity-40 blur-[0.5px]" 
        />
      </FadeIn>

      {/* Top-Right Lego */}
      <FadeIn 
        delay={0.15} 
        x={80} 
        y={0} 
        duration={0.9} 
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[70px] xs:w-[100px] sm:w-[140px] md:w-[180px] lg:w-[210px] pointer-events-none select-none z-0"
      >
        <img 
          src="/lego_block.jpg" 
          alt="Abstract 3D lego block" 
          className="w-full h-auto object-contain opacity-20 xs:opacity-30 sm:opacity-40 blur-[0.5px]" 
        />
      </FadeIn>

      {/* Bottom-Right Group */}
      <FadeIn 
        delay={0.3} 
        x={80} 
        y={0} 
        duration={0.9} 
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[75px] xs:w-[110px] sm:w-[140px] md:w-[185px] lg:w-[220px] pointer-events-none select-none z-0"
      >
        <img 
          src="/geometric_group.jpg" 
          alt="Abstract 3D geometric group" 
          className="w-full h-auto object-contain opacity-20 xs:opacity-30 sm:opacity-40 blur-[0.5px]" 
        />
      </FadeIn>

      {/* Content wrapper */}
      <div className="flex flex-col items-center justify-center z-10 max-w-4xl text-center select-none pointer-events-none">
        {/* Title */}
        <div className="pointer-events-auto">
          <FadeIn delay={0} y={40}>
            <h2 
              className="hero-heading font-black uppercase leading-none tracking-tight mb-10 sm:mb-14 md:mb-16"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>
        </div>

        {/* Animated paragraph & Academic Info */}
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 pointer-events-auto">
          <AnimatedText text="I'm a B.Tech (Data Science) student at Aditya University, currently in my 2nd year (2025-2029 batch). I enjoy building full-stack web apps that mix practical problem-solving with AI, and I'm always experimenting with new tools and technologies to sharpen my skills." />
          
          {/* Education Strip */}
          <FadeIn delay={0.4} y={20} className="w-full flex flex-col items-center">
            <ul className="text-[#D7E2EA] opacity-60 font-light uppercase tracking-wide text-xs sm:text-sm flex flex-col gap-2.5 max-w-2xl text-center list-none">
              <li className="flex flex-col sm:flex-row sm:gap-2 justify-center items-center">
                <span className="font-semibold text-[#D7E2EA]">- B.Tech -- Data Science, Aditya University</span>
                <span className="opacity-80">2025-2029 (Currently 2nd year)</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-2 justify-center items-center">
                <span className="font-semibold text-[#D7E2EA]">- Intermediate (12th), Sri Prakash</span>
                <span className="opacity-80">2023-2025</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-2 justify-center items-center">
                <span className="font-semibold text-[#D7E2EA]">- LKG-10th, Sri Ravi Convent</span>
                <span className="opacity-80">up to 2023</span>
              </li>
            </ul>
          </FadeIn>
        </div>

        {/* Action Button */}
        <div className="pointer-events-auto mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.5} y={20}>
            <ContactButton label="Contact Me" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
