import React, { useState } from 'react';
import { MessageSquareHeart, Maximize2, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { COMMUNITY_REVIEWS } from '../data/projectsData';
import { ImageLightbox, LightboxImageItem } from './ImageLightbox';

export const Reviews: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxImages: LightboxImageItem[] = COMMUNITY_REVIEWS.map((review) => ({
    url: review.screenshotUrl,
    title: review.reviewerName || 'Community Review',
    subtitle: review.roleOrProject,
    caption: review.caption,
    category: 'Feedback',
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FFF5F8]/70 border-t border-b border-pink-100/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DB2777] uppercase tracking-wider mb-2">
            <MessageSquareHeart className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>Testimonials & Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#26142E] font-display tracking-tight text-balance">
            Kind Words & Community Feedback
          </h2>
          <p className="text-sm sm:text-base text-[#6C5975] mt-3 leading-relaxed">
            Genuine feedback and appreciation from project collaborators, founders, and community teams.
          </p>
        </div>

        {/* Reviews Grid */}
        {COMMUNITY_REVIEWS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {COMMUNITY_REVIEWS.map((review, idx) => (
              <div
                key={review.id}
                className="group p-6 sm:p-7 rounded-[30px] bg-white border border-pink-200/80 shadow-xs hover:border-pink-300 hover:shadow-md hover:shadow-pink-500/5 transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-pink-50 border border-pink-200 flex items-center justify-center text-[#DB2777] shrink-0 font-display font-bold text-sm">
                        {review.reviewerName ? review.reviewerName.charAt(0) : 'W'}
                      </div>
                      <div>
                        {review.reviewerName && (
                          <h3 className="text-sm sm:text-base font-bold text-[#26142E] font-display leading-tight">
                            {review.reviewerName}
                          </h3>
                        )}
                        {review.roleOrProject && (
                          <p className="text-xs text-[#DB2777] font-medium">
                            {review.roleOrProject}
                          </p>
                        )}
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/70">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  </div>

                  {/* Screenshot Card with Clickable Lightbox */}
                  <div
                    onClick={() => openLightbox(idx)}
                    className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl bg-pink-50/50 border border-pink-200/90 overflow-hidden cursor-pointer group/img mb-4"
                  >
                    <img
                      src={review.screenshotUrl}
                      alt={review.caption || 'Community feedback screenshot'}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover/img:scale-102"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-xs font-semibold text-[#26142E] shadow-sm transform translate-y-1 group-hover/img:translate-y-0 transition-transform">
                        <Maximize2 className="w-3.5 h-3.5 text-[#DB2777]" />
                        <span>Enlarge Screenshot</span>
                      </span>
                    </div>
                  </div>

                  {/* Caption */}
                  {review.caption && (
                    <p className="text-xs sm:text-sm text-[#6C5975] leading-relaxed italic p-3 rounded-xl bg-pink-50/40 border border-pink-100/70">
                      "{review.caption}"
                    </p>
                  )}
                </div>

                {/* Footer Action */}
                <div className="pt-4 mt-4 border-t border-pink-100 flex items-center justify-between">
                  <span className="text-[11px] text-[#6C5975]">
                    Direct Feedback Proof
                  </span>
                  <button
                    onClick={() => openLightbox(idx)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#DB2777] hover:underline cursor-pointer"
                  >
                    <span>View full image</span>
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 sm:p-12 text-center rounded-[30px] bg-white border border-pink-200/80 mb-12 shadow-xs">
            <HeartHandshake className="w-10 h-10 text-pink-300 mx-auto mb-3" />
            <h3 className="text-base sm:text-lg font-bold text-[#26142E] mb-1 font-display">
              Reviews & Recommendations Coming Soon
            </h3>
            <p className="text-xs sm:text-sm text-[#6C5975] max-w-md mx-auto">
              Screenshots of client feedback and peer recommendations will be published here as ongoing Web3 milestones complete.
            </p>
          </div>
        )}

        {/* Tasteful note about review authenticity */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-pink-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6C5975]">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#DB2777] shrink-0" />
            <span>
              <strong>Authenticity First:</strong> Only authentic, unedited screenshots of genuine feedback are shared. No fabricated testimonials.
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#DB2777] shrink-0">
            More proof added continuously
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <ImageLightbox
          isOpen={true}
          onClose={closeLightbox}
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </section>
  );
};
