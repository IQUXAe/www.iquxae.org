import React from 'react';
import Hero from '../components/Hero';
import Button from '../components/Button';
import { ExternalLink, Shield, Globe, Users } from 'lucide-react';

const Matrix: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1b1f27] pb-16 transition-colors duration-300">
      <Hero 
        title="Private Matrix Homeserver" 
        subtitle="Secure, decentralized communication infrastructure."
      />
      
      <div className="container mx-auto px-4 max-w-[1140px]">
        
        {/* Registration Section */}
        <section className="bg-white dark:bg-card-bg-dark rounded-material shadow-material p-8 mb-8 border-l-[5px] border-primary transform transition-all hover:shadow-material-hover">
          <h2 className="text-[2.25rem] leading-[1.5em] text-gray-800 dark:text-white font-light mb-4 mt-0">Registration Policy</h2>
          <p className="text-[1.1875rem] leading-[1.75rem] text-gray-600 dark:text-gray-300 font-light mb-4">
            IQUXAe.org operates a private Matrix homeserver. Registration is by invitation only to maintain service quality, prevent abuse, and ensure a secure environment for community members.
          </p>
          <p className="text-[1rem] text-gray-500 dark:text-gray-400 font-light">
            To request access, contact us via email at iquxae@proton.me with your desired username and reason for joining.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          
          {/* Web Client */}
          <section className="bg-white dark:bg-card-bg-dark rounded-material shadow-material p-8 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-primary" size={28} />
              <h2 className="text-[2.25rem] leading-[1.5em] text-gray-800 dark:text-white font-light mt-0">Web Client</h2>
            </div>
            <p className="text-[1rem] text-gray-600 dark:text-gray-400 mb-6 font-light leading-relaxed flex-grow">
              Self-hosted Element Web instance optimized for IQUXAe homeserver. 
              Access full Matrix features including encrypted messaging, voice calls, and file sharing directly in your browser.
            </p>
            <div>
              <Button 
                href="https://element.iquxae.org" 
              >
                Launch Web Client
              </Button>
            </div>
          </section>

          {/* How to join */}
          <section className="bg-white dark:bg-card-bg-dark rounded-material shadow-material p-8 flex flex-col h-full">
             <div className="flex items-center gap-3 mb-4">
               <Users className="text-primary" size={28} />
               <h2 className="text-[2.25rem] leading-[1.5em] text-gray-800 dark:text-white font-light mt-0">Join the Community</h2>
             </div>
             <p className="text-[1rem] text-gray-600 dark:text-gray-400 mb-6 font-light leading-relaxed flex-grow">
               Interested in joining? Contribute to our open-source projects on GitHub, report issues, or reach out via email to introduce yourself and request access.
             </p>
             <div>
               <Button 
                 href="https://github.com/IQUXAe"
               >
                 Visit GitHub
               </Button>
             </div>
          </section>

        </div>

        {/* Technical Details / Why Matrix */}
        <section className="bg-white dark:bg-card-bg-dark rounded-material shadow-material p-8">
           <div className="flex items-center gap-3 mb-4">
              <Shield className="text-primary" size={28} />
              <h2 className="text-[2.25rem] leading-[1.5em] text-gray-800 dark:text-white font-light mt-0">Why Matrix?</h2>
           </div>
           <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-2">End-to-End Encryption</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light">
                  All private conversations use end-to-end encryption by default. Messages are encrypted on your device and can only be read by intended recipients.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-2">Federation</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light">
                  IQUXAe homeserver federates with the global Matrix network, enabling communication with users on other Matrix servers worldwide.
                </p>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default Matrix;