import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export interface LightboxImageItem {
  url: string;
  title: string;
  caption?: string;
  category?: string;
  subtitle?: string;
}

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxImageItem[];
  currentIndex: number;
  onNavigate?: (newIndex: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && images.length > 1 && onNavigate) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight' && images.length > 1 && onNavigate) {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onNavigate) {
      onNavigate((currentIndex - 1 + images.length) % images.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onNavigate) {
      onNavigate((currentIndex + 1) % images.length);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview lightbox"
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center bg-[#171B25]/95 border border-pink-200/30 rounded-3xl overflow-hidden shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Title & Close button */}
        <div className="w-full flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#12151D]/90 text-white">
          <div className="flex items-center gap-2.5 truncate pr-4">
            <span className="w-2 h-2 rounded-full bg-[#DB2777]" />
            <span className="text-xs sm:text-sm font-semibold truncate text-[#F5F7FA]">
              {currentImage.title}
            </span>
            {currentImage.category && (
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                {currentImage.category}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {images.length > 1 && (
              <span className="text-xs text-[#A2A9B8] font-mono mr-2">
                {currentIndex + 1} / {images.length}
              </span>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F5F7FA] transition-colors cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center Image Stage */}
        <div className="relative w-full flex-1 min-h-[300px] max-h-[68vh] flex items-center justify-center p-2 sm:p-4 bg-black/60 overflow-hidden">
          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="max-h-[62vh] max-w-full object-contain rounded-xl shadow-lg"
          />

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Bottom Details Caption */}
        <div className="w-full px-5 py-3.5 bg-[#12151D] border-t border-white/10 text-xs text-[#A2A9B8] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-0.5 max-w-2xl">
            {currentImage.subtitle && (
              <p className="font-semibold text-[#F5F7FA]">
                {currentImage.subtitle}
              </p>
            )}
            {currentImage.caption ? (
              <p className="text-[11px] sm:text-xs text-[#A2A9B8] leading-relaxed">
                {currentImage.caption}
              </p>
            ) : null}
          </div>

          <a
            href={currentImage.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] text-[#DB2777] hover:underline self-start sm:self-auto shrink-0 font-medium"
          >
            <span>Open Original</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
