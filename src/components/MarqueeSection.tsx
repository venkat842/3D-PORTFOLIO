import React, { useRef, useEffect } from 'react';

interface SkillItem {
  name: string;
  icon: string;
  color: string;
}

const row1Skills: SkillItem[] = [
  { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB' },
  { name: 'C', icon: 'devicon-c-plain', color: '#A8B9CC' },
  { name: 'SQL', icon: 'devicon-mysql-plain', color: '#4479A1' },
  { name: 'HTML', icon: 'devicon-html5-plain', color: '#E34F26' },
];

const row2Skills: SkillItem[] = [
  { name: 'CSS', icon: 'devicon-css3-plain', color: '#1572B6' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', color: '#7952B3' },
  { name: 'Flexbox / Grid', icon: 'devicon-css3-plain', color: '#38B2AC' },
  { name: 'Generative AI', icon: 'fa-solid fa-robot', color: '#B600A8' },
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Triple for seamless scrolling loop
  const tripledRow1 = [...row1Skills, ...row1Skills, ...row1Skills, ...row1Skills];
  const tripledRow2 = [...row2Skills, ...row2Skills, ...row2Skills, ...row2Skills];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      
      // Calculate offset based on scroll position
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      // Apply GPU-accelerated translates directly to DOM elements to bypass React rendering lag
      if (row1Ref.current) {
        row1Ref.current.style.transform = `translate3d(${offset - 250}px, 0px, 0px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translate3d(${-(offset - 250)}px, 0px, 0px)`;
      }
    };

    // Calculate initial positions
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const renderTile = (skill: SkillItem, index: number) => {
    return (
      <div
        key={`${skill.name}-${index}`}
        className="w-[180px] h-[140px] flex-shrink-0 bg-[#1A1A1A] rounded-2xl flex flex-col items-center justify-center gap-3 border border-white/5 hover:border-white/20 transition-all duration-300 group"
      >
        <i
          className={`${skill.icon} text-4xl group-hover:scale-110 transition-transform duration-300`}
          style={{ color: skill.color }}
        />
        <span className="text-[#D7E2EA] text-xs font-semibold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          {skill.name}
        </span>
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-[#0C0C0C] w-full pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-6"
    >
      {/* Row 1: Python, C, SQL, HTML (Moves RIGHT) */}
      <div className="w-full overflow-hidden py-1">
        <div
          ref={row1Ref}
          className="flex gap-4 w-max"
          style={{ willChange: 'transform' }}
        >
          {tripledRow1.map((skill, index) => renderTile(skill, index))}
        </div>
      </div>

      {/* Row 2: CSS, Bootstrap, Flexbox/Grid, Generative AI (Moves LEFT) */}
      <div className="w-full overflow-hidden py-1">
        <div
          ref={row2Ref}
          className="flex gap-4 w-max"
          style={{ willChange: 'transform' }}
        >
          {tripledRow2.map((skill, index) => renderTile(skill, index))}
        </div>
      </div>
    </section>
  );
};
