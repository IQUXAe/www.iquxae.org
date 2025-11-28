import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#eee] dark:bg-[#202626] py-12 mt-auto text-gray-600 dark:text-gray-400 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1 - Services */}
          <div>
            <h4 className="text-[1.125rem] font-light mb-[15px] dark:text-gray-200">Services</h4>
            <ul className="list-none p-0 space-y-3">
              <li>
                <Link to="/matrix" className="text-primary hover:text-[#12676a] dark:hover:text-white transition-colors text-base font-light">
                  Matrix
                </Link>
              </li>
              <li>
                <Link to="/quikxchat" className="text-primary hover:text-[#12676a] dark:hover:text-white transition-colors text-base font-light">
                  QuikxChat
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Community */}
          <div>
            <h4 className="text-[1.125rem] font-light mb-[15px] dark:text-gray-200">Community</h4>
            <ul className="list-none p-0 space-y-3">
              <li>
                <a 
                  href="https://github.com/IQUXAe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-[#12676a] dark:hover:text-white transition-colors text-base font-light"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h4 className="text-[1.125rem] font-light mb-[15px] dark:text-gray-200">Support</h4>
            <ul className="list-none p-0 space-y-3">
              <li>
                <Link to="/donate" className="text-primary hover:text-[#12676a] dark:hover:text-white transition-colors text-base font-light">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h4 className="text-[1.125rem] font-light mb-[15px] dark:text-gray-200">Legal</h4>
            <ul className="list-none p-0 space-y-3 mb-6">
              <li>
                <Link to="/legal" className="text-primary hover:text-[#12676a] dark:hover:text-white transition-colors text-base font-light">
                  Terms & Privacy
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-3 mb-4 text-primary">
                {/* Logo SVG */}
                <svg 
                  className="h-8 w-8" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 2l9 4.9V17l-9 4.9L3 17V6.9l9-4.9z" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-[1.1rem] font-bold tracking-tight">IQUXAe</span>
                  <span className="text-[0.65rem] tracking-[0.2em] uppercase font-light opacity-80">.org</span>
                </div>
             </div>
             <p className="text-[0.875rem] mb-2 leading-relaxed font-light">
               &copy; 2025 IQUXAe <br/>
               All rights reserved.
             </p>
             <p className="text-[0.75rem] opacity-70 mt-2">
               Designed with privacy in mind.
             </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;