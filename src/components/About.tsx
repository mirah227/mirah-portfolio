import React from 'react';
import { Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 md:p-14 rounded-[32px] bg-white border border-pink-200/80 shadow-sm shadow-pink-500/5 relative overflow-hidden">
          {/* Subtle decorative background gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-100/50 to-transparent rounded-full blur-2xl pointer-events-none -mr-20 -mt-20" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-200 flex items-center justify-center text-[#DB2777] shrink-0 shadow-xs">
                <Heart className="w-5 h-5 fill-pink-500 text-pink-500" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#DB2777] uppercase tracking-wider block">
                  Background
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#26142E] font-display">
                  A Little About Me
                </h2>
              </div>
            </div>

            {/* Exact Three Paragraphs */}
            <div className="space-y-5 text-base sm:text-lg text-[#6C5975] leading-relaxed font-normal">
              <p>
                I'm interested in the human side of Web3: how people discover projects, connect with one another, and become part of a community.
              </p>
              <p>
                My approach combines communication, organization, moderation, and engagement. I value clear information, respectful conversations, and communities where members can participate with confidence.
              </p>
              <p>
                I'm continuing to grow my experience across the Web3 ecosystem and looking for opportunities to contribute to projects that value their communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
