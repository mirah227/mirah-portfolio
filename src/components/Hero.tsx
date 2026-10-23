import React, { useState } from 'react';
import { ArrowRight, Sparkles, Image as ImageIcon } from 'lucide-react';
import { XIcon, TelegramIcon, TelegramChannelIcon, EmailIcon } from './BrandIcons';

export const Hero: React.FC = () => {
  // Portrait image source - easily replaceable by Mirah
  // Defaults to the reference image or avatar
  const [portraitUrl, setPortraitUrl] = useState<string>('/mirah1.jpg');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const socialLinks = [
    {
      name: 'X',
      href: 'https://x.com/Gemcoin20',
      icon: XIcon,
      ariaLabel: 'Visit Mirah on X',
    },
    {
      name: 'Email',
      href: 'mailto:raregem12343@gmail.com',
      icon: EmailIcon,
      ariaLabel: 'Send email to Mirah',
    },
    {
      name: 'Telegram',
      href: 'https://t.me/Mirah890',
      icon: TelegramIcon,
      ariaLabel: 'Message Mirah on Telegram',
    },
    {
      name: 'Channel',
      href: 'https://t.me/mirahpow',
      icon: TelegramChannelIcon,
      ariaLabel: 'Join Mirah Telegram Channel',
    },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Soft Ambient Pastel Background Accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-pink-200/40 via-rose-100/30 to-purple-100/20 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* LEFT SIDE: Clean Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pink-200/80 shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[#DB2777]" />
              <span className="text-[11px] font-semibold tracking-wider text-[#DB2777] uppercase">
                WEB3 COMMUNITY PROFESSIONAL
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#26142E] font-display leading-[1.12] mb-6 text-balance">
              Building Communities.{' '}
              <span className="bg-gradient-to-r from-[#DB2777] to-pink-500 bg-clip-text text-transparent">
                Growing Together.
              </span>
            </h1>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-[#6C5975] leading-relaxed max-w-xl mb-8">
              I'm Mirah, a Web3 Community Manager and Moderator passionate about building engaged communities and creating positive experiences for members.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              {/* Primary: View My Experience */}
              <button
                onClick={() => scrollToSection('experience')}
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-[#DB2777] hover:from-pink-600 hover:to-[#BE185D] shadow-sm shadow-pink-500/20 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View My Experience</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary: Let's Connect */}
              <button
                onClick={() => scrollToSection('contact')}
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-[#26142E] bg-white hover:bg-pink-50/80 border border-pink-200 shadow-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DB2777] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Below Buttons: Small Clickable Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-medium text-[#6C5975] mr-1">Direct channels:</span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.name !== 'Email' ? '_blank' : undefined}
                      rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="w-9 h-9 rounded-full bg-white border border-pink-200/80 flex items-center justify-center text-[#6C5975] hover:text-[#DB2777] hover:border-pink-300 hover:bg-pink-50/50 shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DB2777]"
                      aria-label={link.ariaLabel}
                      title={link.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Portrait Placement & Composition */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] flex items-center justify-center">
              {/* Soft Pink Organic Aura Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-pink-200/60 via-pink-100/40 to-white/20 rounded-[42px] blur-xl scale-95 pointer-events-none -z-10" />

              {/* Portrait Frame Container */}
              <div className="relative w-full h-full rounded-[38px] p-2.5 bg-gradient-to-b from-pink-200/70 via-white to-pink-100/40 border border-pink-200/80 shadow-lg shadow-pink-500/5 flex items-center justify-center overflow-hidden">
                <img
                  src={portraitUrl}
                  alt="Mirah - Web3 Community Manager"
                  className="w-full h-full object-cover object-top rounded-[32px] transition-transform duration-700 hover:scale-103"
                  onError={() => {
                    // Fallback to reference design image if custom image errors
                    setPortraitUrl('/assets/aistudio/image_7845450f.png');
                  }}
                />

                {/* Subtle bottom gradient overlay for depth */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-b-[32px]" />

                {/* Replaceable Image Control Switcher */}
                <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-pink-200 text-[10px] text-[#6C5975] shadow-xs">
                  <ImageIcon className="w-3 h-3 text-[#DB2777]" />
                  <button
                    onClick={() =>
                      setPortraitUrl((prev) =>
                        prev === '/mirah1.jpg'
                          ? '/assets/aistudio/image_7845450f.png'
                          : '/mirah1.jpg'
                      )
                    }
                    className="hover:text-[#DB2777] font-medium transition-colors cursor-pointer"
                    title="Toggle between portrait reference styles"
                  >
                    {portraitUrl === '/mirah1.jpg' ? 'View Photo Style' : 'View Illustration'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
