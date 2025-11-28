import React from 'react';
import Hero from '../components/Hero';
import Button from '../components/Button';
import { Heart, ExternalLink, Server, Coffee, Globe } from 'lucide-react';

const Donate: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1b1f27] pb-16 transition-colors duration-300">
      <Hero 
        title="Support IQUXAe" 
        subtitle="All donations keep the servers running and fund future open-source improvements."
      />
      
      <div className="container mx-auto px-4 max-w-[960px]">
        
        {/* Main Donation CTA */}
        <div className="bg-white dark:bg-card-bg-dark rounded-material shadow-material p-8 md:p-12 flex flex-col items-center text-center mb-12">
          <div className="mb-6 p-4 bg-pink-50 dark:bg-pink-500/10 rounded-full text-pink-500 dark:text-pink-400">
            <Heart size={48} strokeWidth={1.5} />
          </div>
          
          <h2 className="text-[2.25rem] leading-[1.5em] text-gray-800 dark:text-white font-light mb-4">
            Donate via Donation Alerts
          </h2>
          
          <p className="text-[1.1875rem] leading-[1.75rem] text-gray-600 dark:text-gray-300 font-light mb-8 max-w-lg">
            IQUXAe.org is a non-commercial hobby project. Donations directly cover server hosting, domain renewals, and infrastructure costs.
          </p>

          <Button 
            href="https://dalink.to/iquxae" 
          >
            Donate Now <ExternalLink size={14} className="ml-2" />
          </Button>
        </div>

        {/* Where money goes */}
        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-card-bg-dark rounded-material shadow-material p-6 text-center">
               <div className="flex justify-center mb-4 text-gray-400">
                  <Server size={32} />
               </div>
               <h3 className="text-lg text-gray-800 dark:text-white font-normal mb-2">Infrastructure</h3>
               <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                 VPS hosting costs for Matrix homeserver, web services, storage, and bandwidth for media uploads and federation.
               </p>
            </div>

            <div className="bg-white dark:bg-card-bg-dark rounded-material shadow-material p-6 text-center">
               <div className="flex justify-center mb-4 text-gray-400">
                  <Globe size={32} />
               </div>
               <h3 className="text-lg text-gray-800 dark:text-white font-normal mb-2">Domains</h3>
               <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                 Annual domain registration fees and SSL certificates to ensure secure, verified access to all services.
               </p>
            </div>

            <div className="bg-white dark:bg-card-bg-dark rounded-material shadow-material p-6 text-center">
               <div className="flex justify-center mb-4 text-gray-400">
                  <Coffee size={32} />
               </div>
               <h3 className="text-lg text-gray-800 dark:text-white font-normal mb-2">Development</h3>
               <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                 Time and resources for developing QuikxChat, maintaining infrastructure, and contributing to open-source projects.
               </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Donate;