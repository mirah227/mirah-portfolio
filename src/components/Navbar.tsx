import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleConnectClick = () => {
    setIsMobileMenuOpen(false);
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      const navOffset = 80;
      const elementPosition = contactElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-pink-100/90 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-1.5 text-2xl font-bold tracking-tight text-[#26142E] whitespace-nowrap shrink-0 transition-transform duration-200 hover:scale-102"
          >
            <span className="font-display font-bold text-[#DB2777]">
              Mirah
            </span>
            <span className="text-[#DB2777] text-xl leading-none inline-block transition-transform duration-300 group-hover:scale-125">
              ♡
            </span>
          </a>

          {/* Simple Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium" aria-label="Main Navigation">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#DB2777] font-semibold'
                      : 'text-[#6C5975] hover:text-[#26142E]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DB2777] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Small "Let's Connect" Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={handleConnectClick}
              className="group flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-[#DB2777] hover:from-pink-600 hover:to-[#BE185D] rounded-full shadow-xs shadow-pink-500/20 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[#26142E] hover:bg-pink-100/50 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[62px] bg-[#FFF5F8]/98 border-b border-pink-200 px-6 py-6 backdrop-blur-xl shadow-xl transition-all animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-3">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium py-2.5 px-3.5 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-pink-100 text-[#DB2777] font-semibold'
                      : 'text-[#6C5975] hover:text-[#26142E] hover:bg-pink-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3 border-t border-pink-200/60 mt-1">
              <button
                onClick={handleConnectClick}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-[#DB2777] rounded-full shadow-sm cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
