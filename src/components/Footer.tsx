import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../data/portfolioData';
import { XIcon, TelegramIcon, TelegramChannelIcon, EmailIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const contactIcons = [
    {
      name: 'X',
      href: 'https://x.com/Gemcoin20',
      icon: XIcon,
      ariaLabel: 'Visit Mirah on X',
      isExternal: true,
    },
    {
      name: 'Email',
      href: 'mailto:raregem12343@gmail.com',
      icon: EmailIcon,
      ariaLabel: 'Send email to Mirah',
      isExternal: false,
    },
    {
      name: 'Telegram',
      href: 'https://t.me/Mirah890',
      icon: TelegramIcon,
      ariaLabel: 'Message Mirah on Telegram',
      isExternal: true,
    },
    {
      name: 'Channel',
      href: 'https://t.me/mirahpow',
      icon: TelegramChannelIcon,
      ariaLabel: 'Join Mirah Web3 Telegram Channel',
      isExternal: true,
    },
  ];

  return (
    <footer className="pt-12 pb-10 border-t border-pink-100 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-pink-100/60">
          {/* Brand & Title */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-xl font-bold tracking-tight text-[#26142E] font-display">
              <span className="text-[#DB2777]">Mirah</span>
              <Heart className="w-4 h-4 fill-pink-500 text-pink-500 inline-block" />
            </div>
            <p className="text-xs text-[#6C5975] mt-1 font-medium">
              Web3 Community Manager | Moderator
            </p>
            <p className="text-xs text-[#DB2777] italic mt-0.5">
              Building better communities, one conversation at a time.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#6C5975]" aria-label="Footer Navigation">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="hover:text-[#DB2777] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Icons */}
          <div className="flex items-center gap-2.5">
            {contactIcons.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-full bg-pink-50 border border-pink-200/80 flex items-center justify-center text-[#6C5975] hover:text-[#DB2777] hover:bg-pink-100/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DB2777]"
                  title={item.name}
                  aria-label={item.ariaLabel}
                >
                  <IconComp className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6C5975]">
          <p>© {currentYear} Mirah. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-50 hover:bg-pink-100 text-xs text-[#26142E] transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
