import React from 'react';
import Hero from '../components/Hero';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1b1f27] pb-16 transition-colors duration-300">
      <Hero 
        title="About IQUXAe" 
        subtitle="The philosophy behind the project."
      />
      
      <div className="container mx-auto px-4 max-w-[960px]">
        <div className="bg-white dark:bg-card-bg-dark rounded-material shadow-material p-8 md:p-12">
          
          <div className="mb-12 text-center">
            <h2 className="text-[2.25rem] leading-[1.5em] text-gray-800 dark:text-white font-light mb-4">What is IQUXAe.org?</h2>
            <p className="text-[1.1875rem] leading-[1.75rem] text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
              IQUXAe.org is a personal infrastructure project hosting privacy-focused services and open-source experiments. 
              Home to a private Matrix homeserver and QuikxChat development.
            </p>
          </div>

          <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 mx-auto rounded-full mb-12"></div>

          <div className="mb-12 text-center">
            <h2 className="text-[2.25rem] leading-[1.5em] text-gray-800 dark:text-white font-light mb-4">The Philosophy</h2>
            <p className="text-[1.1875rem] leading-[1.75rem] text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
              Built on principles of decentralization, privacy, and open-source software. 
              IQUXAe promotes protocol-based communication over centralized platforms, running independent infrastructure and sharing knowledge with the community.
            </p>
          </div>

          <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 mx-auto rounded-full mb-12"></div>

          <div className="text-center">
            <h2 className="text-[2.25rem] leading-[1.5em] text-gray-800 dark:text-white font-light mb-4">Who runs it?</h2>
            <p className="text-[1.1875rem] leading-[1.75rem] text-gray-600 dark:text-gray-300 font-light">
              IQUXAe.org is maintained as a hobby project by one person passionate about privacy, decentralization, and open-source development.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;