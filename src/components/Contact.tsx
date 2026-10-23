import React, { useState } from 'react';
import { ExternalLink, Check, Copy } from 'lucide-react';
import { XIcon, TelegramIcon, TelegramChannelIcon, EmailIcon } from './BrandIcons';

export const Contact: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const contactMethods = [
    {
      id: 'x',
      name: 'X',
      handle: '@Gemcoin20',
      href: 'https://x.com/Gemcoin20',
      description: 'Follow & message on X',
      icon: XIcon,
      isExternal: true,
      ariaLabel: 'Visit Mirah on X (formerly Twitter)',
    },
    {
      id: 'email',
      name: 'Email',
      handle: 'raregem12343@gmail.com',
      href: 'mailto:raregem12343@gmail.com',
      description: 'Send a direct email message',
      icon: EmailIcon,
      isExternal: false,
      ariaLabel: 'Send email to raregem12343@gmail.com',
    },
    {
      id: 'telegram-personal',
      name: 'Personal Telegram',
      handle: '@Mirah890',
      href: 'https://t.me/Mirah890',
      description: 'Direct message on Telegram',
      icon: TelegramIcon,
      isExternal: true,
      ariaLabel: 'Message Mirah on Telegram',
    },
    {
      id: 'telegram-channel',
      name: 'Telegram Channel',
      handle: '@mirahpow',
      href: 'https://t.me/mirahpow',
      description: 'Community updates & announcements',
      icon: TelegramChannelIcon,
      isExternal: true,
      ariaLabel: 'Join Mirah Web3 Telegram Channel',
    },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto sm:mx-0 mb-12">
          <div className="text-xs font-semibold text-[#DB2777] uppercase tracking-wider mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#26142E] font-display tracking-tight text-balance">
            Let's Build Something Meaningful.
          </h2>
          <p className="text-sm sm:text-base text-[#6C5975] mt-3 leading-relaxed">
            Looking for someone to support your Web3 community? I'd love to hear about your project and what you're building.
          </p>
        </div>

        {/* 4 Clickable Icon Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const isCopied = copiedItem === method.id;

            return (
              <div
                key={method.id}
                className="group p-5 rounded-[28px] bg-white border border-pink-200/80 hover:border-pink-300 shadow-xs hover:shadow-md hover:shadow-pink-500/5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-pink-50 border border-pink-200 flex items-center justify-center text-[#DB2777] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    <button
                      onClick={() => handleCopy(method.handle, method.id)}
                      className="p-2 rounded-xl text-[#6C5975] hover:text-[#DB2777] hover:bg-pink-50 transition-colors cursor-pointer"
                      title={`Copy ${method.handle}`}
                      aria-label={`Copy ${method.name} address`}
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-[#26142E] font-display mb-0.5">
                    {method.name}
                  </h3>
                  <p className="text-xs text-[#6C5975] mb-3 leading-relaxed">
                    {method.description}
                  </p>
                  <p className="font-mono text-xs text-[#26142E] font-medium break-all">
                    {method.handle}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-pink-100">
                  <a
                    href={method.href}
                    target={method.isExternal ? '_blank' : undefined}
                    rel={method.isExternal ? 'noopener noreferrer' : undefined}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-[#DB2777] hover:from-pink-600 hover:to-[#BE185D] shadow-xs transition-all min-h-[44px]"
                    aria-label={method.ariaLabel}
                  >
                    <span>Connect</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
