import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: React.ReactNode;
  fullHeight?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, fullHeight = false }) => {
  return (
    <div 
      className={`w-full bg-primary text-white relative mb-8
        ${fullHeight ? 'min-h-[55vh] flex flex-col justify-center items-center py-20' : 'pt-[85px] pb-[24px]'}`}
    >
      {/* Background Pattern - subtle noise/dots similar to LineageOS if desired, otherwise flat teal */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ 
               backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
               backgroundSize: '20px 20px' 
           }}>
      </div>

      <div className="container mx-auto px-4 max-w-[1140px] relative z-10 text-center">
        <h1 className={`${fullHeight ? 'text-5xl md:text-[3rem]' : 'text-[2.5rem] md:text-[3rem]'} leading-[1.15em] font-light mb-4`}>
          {title}
        </h1>
        {subtitle && (
          <div className="text-[1.125rem] leading-[1.75rem] font-light opacity-90">
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;