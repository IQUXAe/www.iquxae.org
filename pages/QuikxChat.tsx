import React from 'react';
import Hero from '../components/Hero';
import Button from '../components/Button';
import { Github, Zap, Code, Layout } from 'lucide-react';

const QuikxChat: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1b1f27] pb-16 transition-colors duration-300">
      <Hero 
        title="QuikxChat" 
        subtitle="Lightweight real-time chat layer built on the Matrix protocol."
      />
      
      <div className="container mx-auto px-4 max-w-[960px]">
        
        {/* Main Intro Card */}
        <div className="bg-white dark:bg-card-bg-dark rounded-material shadow-material p-8 md:p-12 text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-500/10 rounded-full text-blue-500 dark:text-blue-400 mb-6">
            <Zap size={48} strokeWidth={1.5} />
          </div>
          
          <h2 className="text-[2.25rem] leading-[1.5em] text-gray-800 dark:text-white font-light mb-6">Fast. Simple. Open.</h2>
          
          <p className="text-[1.1875rem] leading-[1.75rem] text-gray-600 dark:text-gray-300 font-light mb-8 max-w-2xl mx-auto">
            QuikxChat is a Flutter-based Matrix client focused on speed and simplicity. Built to provide essential communication features without the bloat of traditional clients.
          </p>

          <Button 
            href="https://github.com/IQUXAe" 
          >
            <Github size={16} className="mr-2" />
            Source code and updates
          </Button>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-card-bg-dark rounded-material shadow-material p-8">
               <div className="mb-4 text-primary">
                 <Code size={32} />
               </div>
               <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-3">Developer Focused</h3>
               <p className="text-gray-600 dark:text-gray-400 font-light">
                 Built with Flutter and matrix-dart-sdk for cross-platform compatibility. Clean architecture enables easy customization and extension.
               </p>
            </div>

            <div className="bg-white dark:bg-card-bg-dark rounded-material shadow-material p-8">
               <div className="mb-4 text-primary">
                 <Layout size={32} />
               </div>
               <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-3">Minimalist UI</h3>
               <p className="text-gray-600 dark:text-gray-400 font-light">
                 Distraction-free interface focused on conversations. Minimal resource usage with fast load times and smooth animations.
               </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default QuikxChat;