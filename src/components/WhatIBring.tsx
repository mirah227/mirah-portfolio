import React from 'react';
import { Heart, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { WHAT_I_BRING_VALUES } from '../data/projectsData';

export const WhatIBring: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'welcoming':
        return <Heart className="w-5 h-5 text-[#DB2777]" />;
      case 'safer-space':
        return <ShieldCheck className="w-5 h-5 text-[#DB2777]" />;
      case 'purposeful-engagement':
        return <Sparkles className="w-5 h-5 text-[#DB2777]" />;
      case 'team-user-connection':
        return <Users className="w-5 h-5 text-[#DB2777]" />;
      default:
        return <Heart className="w-5 h-5 text-[#DB2777]" />;
    }
  };

  return (
    <section id="what-i-bring" className="py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left max-w-2xl mb-14">
          <div className="text-xs font-semibold text-[#DB2777] uppercase tracking-wider mb-2">
            Value Proposition
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#26142E] font-display tracking-tight text-balance">
            What I Bring to Your Community
          </h2>
          <p className="text-sm sm:text-base text-[#6C5975] mt-3 leading-relaxed">
            Beyond keeping the chat active, I focus on the people, processes, and experiences that help a Web3 community thrive.
          </p>
        </div>

        {/* Four Refined Content Blocks in a Spacious 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          {WHAT_I_BRING_VALUES.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-[30px] bg-white border border-pink-200/80 shadow-xs hover:border-pink-300 hover:shadow-md hover:shadow-pink-500/5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header row: Index & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-pink-50 border border-pink-200 flex items-center justify-center">
                    {getIcon(item.id)}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#DB2777]/80 tracking-widest">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#26142E] font-display mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#6C5975] leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Value to a project block */}
              <div className="pt-4 border-t border-pink-100 flex items-start gap-2 text-xs">
                <span className="font-semibold text-[#DB2777] shrink-0">
                  Value to a project:
                </span>
                <span className="text-[#26142E] font-medium leading-snug">
                  {item.valueToProject}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Closing Statement */}
        <div className="max-w-2xl mx-auto text-center p-6 sm:p-8 rounded-[28px] bg-gradient-to-r from-pink-50 via-white to-pink-50 border border-pink-200/90 shadow-xs">
          <p className="text-base sm:text-lg font-medium text-[#26142E] font-display leading-relaxed">
            "My goal is not just to manage a chat. It's to help create a community people want to be part of."
          </p>
          <span className="inline-block mt-2 text-xs text-[#DB2777] font-semibold tracking-wider uppercase">
            — Mirah's Community Principle
          </span>
        </div>
      </div>
    </section>
  );
};
