import React from 'react';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const ContactFooter: React.FC = () => {
  const contactLinks = [
    {
      label: 'Email',
      value: 'venkatveera042@gmail.com',
      href: 'mailto:venkatveera042@gmail.com',
      icon: <Mail className="w-5 h-5" />,
    },
    {
      label: 'Phone',
      value: '9948774102',
      href: 'tel:9948774102',
      icon: <Phone className="w-5 h-5" />,
    },
    {
      label: 'Instagram',
      value: 'venkat77s',
      href: 'https://instagram.com/venkat77s',
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      label: 'LinkedIn',
      value: 'vvenkatsn',
      href: 'https://www.linkedin.com/in/vvenkatsn/',
      icon: <Linkedin className="w-5 h-5" />,
    },
  ];

  return (
    <footer 
      id="contact" 
      className="bg-[#0C0C0C] w-full py-20 sm:py-24 md:py-32 flex flex-col items-center justify-between min-h-[400px] border-t border-white/5 relative z-20"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-12 sm:gap-16 px-6">
        {/* Title */}
        <FadeIn delay={0} y={30}>
          <h2 
            className="hero-heading font-black uppercase tracking-tight text-center leading-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Let&apos;s Connect
          </h2>
        </FadeIn>

        {/* Links Grid */}
        <FadeIn delay={0.2} y={30} className="w-full">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' && link.label !== 'Phone' ? '_blank' : undefined}
                rel={link.label !== 'Email' && link.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 text-[#D7E2EA] font-medium uppercase tracking-wide text-sm sm:text-base hover:opacity-75 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <div className="p-2 bg-[#1A1A1A] rounded-full border border-white/5 shadow-md flex items-center justify-center">
                  {link.icon}
                </div>
                <span>{link.label}: {link.value}</span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Footer copyright */}
      <div className="w-full text-center mt-16 sm:mt-24">
        <p className="text-[#D7E2EA] opacity-40 text-xs sm:text-sm tracking-widest font-light uppercase select-none">
          veera-venkat.me
        </p>
      </div>
    </footer>
  );
};
