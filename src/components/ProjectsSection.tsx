import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  link: string;
  gradient: string;
  logo: string;
}

const projectsData: Project[] = [
  {
    id: '01',
    name: 'AUpulse',
    tagline: 'Gold & Silver Price Tracker',
    description: "A gold and silver price tracking web app built around personal interest in digital gold investing. Features a live price dashboard, a 'what if I invested' calculator, alert history, and prices calculated in INR including Indian import duty and GST. Sends alerts via Telegram and email.",
    tech: ['Flask', 'SQLite', 'MetalpriceAPI', 'SerpAPI', 'Telegram Bot API', 'Gmail SMTP', 'GitHub Actions', 'Render'],
    link: 'https://aupulse.onrender.com',
    gradient: 'linear-gradient(135deg, #18011F 0%, #7621B0 50%, #B600A8 100%)',
    logo: '/aupulse-logo.png'
  },
  {
    id: '02',
    name: 'WealthifyAI',
    tagline: 'Smart Wealth, Powered by AI',
    description: "An AI-powered fintech web app that helps first-time investors build personalized savings plans. Users enter income, savings goal, and timeline, then pick investment types. Gemini AI recommends asset allocation with interactive charts and Telegram notifications.",
    tech: ['Python', 'Flask', 'SQLite', 'Gunicorn', 'Google Gemini API', 'MetalpriceAPI', 'Chart.js', 'Render'],
    link: 'https://wealthify-ai.onrender.com',
    gradient: 'linear-gradient(135deg, #0C0C0C 0%, #BE4C00 50%, #7721B1 100%)',
    logo: '/wealthifyai-logo.png'
  }
];

interface ProjectCardProps {
  project: Project;
  index: number;
  scrollYProgress: MotionValue<number>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, scrollYProgress }) => {
  const [logoError, setLogoError] = useState(false);

  // Card 0 scales down as Card 1 scrolls up.
  // Card 1 stays at scale 1.0.
  const targetScale = 1 - (projectsData.length - 1 - index) * 0.03;
  
  // Map scroll progress to scale value
  // Since we have 2 cards, Card 0 scales down in the range [0.1, 0.7] of the scroll track
  const scaleRange = index === 0 ? [0.1, 0.7] : [0.7, 1];
  const scale = useTransform(scrollYProgress, scaleRange, [1, targetScale]);

  // Slightly dim older cards
  const opacityRange = index === 0 ? [0.1, 0.7] : [0.7, 1];
  const opacity = useTransform(scrollYProgress, opacityRange, [1, 0.85]);

  return (
    <div className="sticky top-24 md:top-32 min-h-[480px] h-[78vh] md:h-[82vh] lg:h-[85vh] w-full flex flex-col justify-start">
      <motion.div
        style={{
          scale,
          opacity,
          top: `${index * 28}px`,
        }}
        className="w-full h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-4 xs:p-6 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#D7E2EA]/60 transition-colors duration-300"
      >
        {/* Top Row: Number, Name, Tags, Button */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4">
            {/* Left: Number, Name, and Tags */}
            <div className="flex items-center gap-3 sm:gap-6">
              {/* Huge Number */}
              <div 
                className="font-black text-[#D7E2EA]/30 leading-none select-none"
                style={{ fontSize: 'clamp(2rem, 5vw, 80px)' }}
              >
                {project.id}
              </div>
              
              {/* Name and Tagline */}
              <div className="flex flex-col">
                <h3 className="font-bold text-lg sm:text-2xl md:text-3xl text-[#D7E2EA] uppercase tracking-wide">
                  {project.name}
                </h3>
                <span className="text-[10px] sm:text-sm text-[#D7E2EA] opacity-60 font-medium">
                  {project.tagline}
                </span>
              </div>
            </div>

            {/* Right: Live Link Button */}
            <LiveProjectButton href={project.link} />
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tech.map((tag) => (
              <span 
                key={tag}
                className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-xs font-semibold bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 text-[#D7E2EA] uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description Paragraph */}
          <p className="text-[#D7E2EA] opacity-80 font-light text-[11px] sm:text-sm md:text-base leading-relaxed max-w-4xl mt-1.5 sm:mt-2">
            {project.description}
          </p>
        </div>

        {/* Bottom Row: Gorgeous Abstract Placeholder Panel */}
        <div 
          className="w-full h-[120px] xs:h-[160px] sm:h-[220px] md:h-[280px] lg:h-[320px] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] flex flex-col justify-center items-center relative overflow-hidden mt-4 sm:mt-6"
          style={{ background: project.gradient }}
        >
          {/* Decorative glassmorphic card inside panel */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/0" />
          
          <div className="z-10 text-center px-4 flex flex-col items-center justify-center gap-3 md:gap-4">
            {!logoError ? (
              <img 
                src={project.logo} 
                alt={`${project.name} logo`} 
                className="max-h-[100px] sm:max-h-[130px] md:max-h-[160px] object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
                onError={() => setLogoError(true)}
              />
            ) : null}
            <div className="flex flex-col gap-1 sm:gap-2">
              <h4 className="text-[#D7E2EA] font-black uppercase tracking-widest text-xl sm:text-2xl md:text-3xl">
                {project.name}
              </h4>
              <p className="text-[#D7E2EA]/85 font-light uppercase tracking-wider text-[10px] sm:text-xs md:text-sm">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position over the entire Projects container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section 
      ref={containerRef}
      id="projects"
      className="relative bg-[#0C0C0C] -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] z-10 px-5 sm:px-8 md:px-10 py-20 pb-32 w-full flex flex-col items-center"
    >
      <div className="w-full max-w-5xl">
        {/* Title */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-24">
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* Stacking Card List Container */}
        <div className="flex flex-col gap-[35vh] w-full">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
