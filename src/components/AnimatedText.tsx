import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Track scroll position targeting the paragraph element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.3'],
  });

  const words = text.split(' ');
  
  // Count total characters to compute sequential offsets
  let charCounter = 0;
  const totalChars = text.length;

  return (
    <p
      ref={containerRef}
      className="relative text-center leading-relaxed text-[#D7E2EA] font-medium max-w-[620px] text-[clamp(1rem,2vw,1.35rem)] flex flex-wrap justify-center gap-x-[0.25em] gap-y-1 select-none"
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIndex) => {
              const currentIndex = charCounter;
              charCounter += 1;
              
              // Calculate start and end percentages for this character
              const start = currentIndex / totalChars;
              const end = Math.min(1.0, (currentIndex + 5) / totalChars);
              
              // Map the container scroll progress to character opacity [0.2 -> 1]
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1.0]);

              return (
                <span key={charIndex} className="relative inline-block">
                  {/* Invisible low-opacity base placeholder */}
                  <span className="opacity-[0.2] text-[#D7E2EA]">{char}</span>
                  {/* Absolutely positioned active text */}
                  <motion.span
                    style={{ opacity }}
                    className="absolute left-0 top-0 text-[#D7E2EA] font-semibold"
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
