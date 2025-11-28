import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, Moon, Sun } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Matrix', path: '/matrix' },
  { label: 'QuikxChat', path: '/quikxchat' },
  { label: 'Donate', path: '/donate' },
  { label: 'About', path: '/about' },
  { label: 'IQUXAe', path: 'https://iquxae.iquxae.org', isExternal: true },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isDark, setIsDark] = useState(true); // Default to dark as per original request, but toggleable
  const location = useLocation();

  // Scroll Logic for Hiding/Showing Navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If at top, always show
      if (currentScrollY < 10) {
        setIsVisible(true);
        setIsTop(true);
      } else {
        setIsTop(false);
        // If scrolling down and past header, hide
        if (currentScrollY > lastScrollY && currentScrollY > 70) {
          setIsVisible(false);
        } else {
          // Scrolling up, show
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Dark Mode Logic
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        !isTop 
          ? 'bg-white/95 dark:bg-[#1b1f27]/95 shadow-md backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="flex justify-between items-center py-[10px]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center h-[50px]">
            <Link 
              to="/" 
              className={`group flex items-center gap-3 transition-colors ${
                !isTop 
                  ? 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary' 
                  : 'text-white hover:text-white/90'
              }`}
            >
              {/* Logo SVG */}
              <svg 
                className="h-8 w-8 transition-transform duration-500 ease-in-out group-hover:rotate-180" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {/* Hexagon Shape */}
                <path d="M12 2l9 4.9V17l-9 4.9L3 17V6.9l9-4.9z" />
                {/* Inner connection lines/dot */}
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 2v3" strokeWidth="1.5" />
                <path d="M12 22v-3" strokeWidth="1.5" />
              </svg>

              {/* Logo Text */}
              <div className="flex flex-col leading-none">
                <span className="text-[1.1rem] font-bold tracking-tight">IQUXAe</span>
                <span className={`text-[0.65rem] tracking-[0.2em] uppercase font-light opacity-80 ${!isTop ? 'text-primary' : 'text-white/80'}`}>.org</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center ml-auto gap-1">
            {navItems.map((item) => (
              <React.Fragment key={item.label}>
                {item.isExternal ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`ripple-container px-[15px] py-[10px] text-[12px] uppercase font-normal tracking-wide transition-colors flex items-center gap-1 rounded-[3px] ${
                      !isTop 
                        ? 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-black/5 dark:hover:bg-white/5' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                    <ExternalLink size={10} className="-mt-1" />
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`ripple-container px-[15px] py-[10px] text-[12px] uppercase font-normal tracking-wide transition-colors rounded-[3px] ${
                      location.pathname === item.path
                        ? !isTop 
                           ? 'bg-black/5 dark:bg-white/10 font-medium text-primary dark:text-primary' 
                           : 'bg-white/20 font-medium text-white'
                        : ''
                    } ${
                      !isTop 
                        ? 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-black/5 dark:hover:bg-white/5' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
            
            {/* Theme Toggle Button */}
            <button 
               onClick={toggleTheme}
               className={`ml-2 p-2 rounded-full transition-colors ${
                 !isTop 
                    ? 'text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5' 
                    : 'text-white hover:bg-white/10'
               }`}
               aria-label="Toggle Dark Mode"
            >
               {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button 
               onClick={toggleTheme}
               className={`p-2 rounded-full transition-colors ${
                 !isTop ? 'text-gray-600 dark:text-gray-300' : 'text-white'
               }`}
            >
               {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded focus:outline-none ${
                !isTop ? 'text-gray-600 dark:text-gray-300' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute w-full bg-white dark:bg-[#202626] shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 border-t dark:border-gray-700' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <React.Fragment key={item.label}>
              {item.isExternal ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-3 text-sm uppercase font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-white/5 rounded"
                >
                  <div className="flex items-center gap-2">
                    {item.label} <ExternalLink size={12} />
                  </div>
                </a>
              ) : (
                <Link
                  to={item.path}
                  className={`block px-3 py-3 text-sm uppercase font-medium rounded ${
                    location.pathname === item.path
                      ? 'text-primary bg-gray-100 dark:bg-white/10'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;