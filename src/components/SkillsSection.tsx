import React from 'react';
import { FadeIn } from './FadeIn';

interface SkillDetail {
  id: string;
  name: string;
  description: string;
}

const skillsList: SkillDetail[] = [
  { id: '01', name: 'Python', description: 'Primary language for scripting, backend logic, and AI-driven features.' },
  { id: '02', name: 'C', description: 'Core language used to build strong fundamentals in programming and logic.' },
  { id: '03', name: 'SQL', description: 'Writing queries across joins, aggregations, subqueries, and views for real data problems.' },
  { id: '04', name: 'HTML', description: 'Structuring clean, semantic web pages as the foundation of every project.' },
  { id: '05', name: 'CSS', description: 'Styling responsive, modern interfaces with attention to layout and detail.' },
  { id: '06', name: 'Bootstrap', description: 'Building consistent, responsive UI quickly using a component-based framework.' },
  { id: '07', name: 'Flexbox / Grid', description: 'Laying out complex responsive designs with modern CSS layout systems.' },
  { id: '08', name: 'Generative AI', description: 'Integrating AI models into full-stack apps to power smart, adaptive features.' },
];

export const SkillsSection: React.FC = () => {
  return (
    <section 
      id="skills"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-20"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2 
            className="font-black text-[#0C0C0C] uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Skills
          </h2>
        </FadeIn>

        {/* Skill Items List */}
        <div className="flex flex-col w-full">
          {skillsList.map((skill, index) => (
            <FadeIn 
              key={skill.id} 
              delay={index * 0.1} 
              y={30} 
              className="w-full"
            >
              <div className="flex items-center gap-4 xs:gap-6 sm:gap-10 md:gap-16 py-6 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 last:border-b-0">
                {/* Number */}
                <div 
                  className="font-black text-[#0C0C0C] leading-none select-none min-w-[45px] xs:min-w-[60px] sm:min-w-[120px] md:min-w-[160px]"
                  style={{ fontSize: 'clamp(2rem, 10vw, 140px)' }}
                >
                  {skill.id}
                </div>

                {/* Text Block */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <h3 
                    className="font-medium text-[#0C0C0C] uppercase tracking-wide leading-none"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {skill.name}
                  </h3>
                  <p 
                    className="font-light text-[#0C0C0C] opacity-60 leading-relaxed max-w-2xl"
                    style={{ fontSize: 'clamp(0.8rem, 1.6vw, 1.25rem)' }}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
