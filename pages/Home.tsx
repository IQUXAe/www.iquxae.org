import React from 'react';
import Hero from '../components/Hero';
import Button from '../components/Button';
import { Server, MessageCircle, Heart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#1b1f27] transition-colors duration-300">
      <Hero 
        title="IQUXAe.org"
        subtitle={
          <div className="flex flex-col gap-4 items-center animate-fade-in">
            <p>Private services & open-source projects for the digital age</p>
            <p className="text-[0.75rem] font-medium uppercase tracking-widest opacity-80 mt-2">
              Matrix homeserver • QuikxChat • Personal playground
            </p>
          </div>
        }
        fullHeight={true}
      />

      <section className="py-12 bg-gray-50 dark:bg-[#1b1f27] -mt-16 relative z-20 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Matrix Card */}
            <div className="bg-white dark:bg-card-bg-dark rounded-material shadow-material hover:shadow-material-hover transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-center mb-6 mt-2">
                   <div className="p-4 bg-gray-100 dark:bg-[#202626] rounded-full text-primary transition-colors">
                      <Server size={32} />
                   </div>
                </div>
                <h3 className="text-[1.5625rem] font-light text-center text-gray-800 dark:text-white mb-3">Matrix</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4 font-light leading-relaxed">
                  Decentralized, secure communication network. Private homeserver ensuring your metadata and conversations remain strictly yours.
                </p>
              </div>
              <div className="px-6 pb-6 text-center">
                 <Button to="/matrix">
                    Learn more
                 </Button>
              </div>
            </div>

            {/* QuikxChat Card */}
            <div className="bg-white dark:bg-card-bg-dark rounded-material shadow-material hover:shadow-material-hover transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-center mb-6 mt-2">
                   <div className="p-4 bg-gray-100 dark:bg-[#202626] rounded-full text-blue-500 dark:text-blue-400 transition-colors">
                      <MessageCircle size={32} />
                   </div>
                </div>
                <h3 className="text-[1.5625rem] font-light text-center text-gray-800 dark:text-white mb-3">QuikxChat</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4 font-light leading-relaxed">
                  Flutter-based mobile application built on Matrix protocol. Optimized for speed, minimalism, and efficient resource usage.
                </p>
              </div>
              <div className="px-6 pb-6 text-center">
                 <Button to="/quikxchat">
                    Explore
                 </Button>
              </div>
            </div>

            {/* Donate Card */}
            <div className="bg-white dark:bg-card-bg-dark rounded-material shadow-material hover:shadow-material-hover transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
              <div className="p-6 flex-grow">
                 <div className="flex items-center justify-center mb-6 mt-2">
                   <div className="p-4 bg-gray-100 dark:bg-[#202626] rounded-full text-pink-500 dark:text-pink-400 transition-colors">
                      <Heart size={32} />
                   </div>
                </div>
                <h3 className="text-[1.5625rem] font-light text-center text-gray-800 dark:text-white mb-3">Donate</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4 font-light leading-relaxed">
                  Independent hobby project. Your support covers server hosting costs and enables continued open-source development.
                </p>
              </div>
              <div className="px-6 pb-6 text-center">
                 <Button to="/donate">
                    Support Us
                 </Button>
              </div>
            </div>

          </div>

          {/* Added "Latest News" or "Updates" section to fill space like LineageOS */}
          <div className="mt-16">
            <h2 className="text-[2.25rem] text-gray-800 dark:text-white font-light mb-6">Latest Updates</h2>
            <div className="bg-white dark:bg-card-bg-dark rounded-material shadow-material p-6 md:p-8">
               <h3 className="text-xl text-primary font-normal mb-2">Website Redesign Complete</h3>
               <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">November 2025</p>
               <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                 IQUXAe.org has been redesigned with a clean, modern interface inspired by LineageOS. 
                 The new design emphasizes simplicity and readability while maintaining full functionality. 
                 We've also improved mobile responsiveness and added dark mode support throughout the site.
               </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;