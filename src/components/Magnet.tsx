import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      
      // Calculate the center coordinates of the element
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distances from mouse cursor to center of element
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      // Absolute distance from mouse cursor to center of element
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      // The threshold is the half-diagonal of the element + padding
      // This ensures we activate when near the edge of the element
      const maxDistance = Math.max(rect.width, rect.height) / 2 + padding;

      if (distance < maxDistance) {
        // Move towards the cursor, scaled by strength
        const transX = distX / strength;
        const transY = distY / strength;
        setTransform(`translate3d(${transX}px, ${transY}px, 0px)`);
        setTransition(activeTransition);
      } else {
        // Smoothly return to original position
        setTransform('translate3d(0px, 0px, 0px)');
        setTransition(inactiveTransition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      style={{
        transform,
        transition,
        willChange: 'transform',
      }}
      className="inline-block"
    >
      {children}
    </div>
  );
};
