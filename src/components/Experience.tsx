import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Globe, Sparkles, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { CONTRIBUTED_PROJECTS } from '../data/projectsData';
import { ContributedProject, ProjectImage } from '../types';
import { ImageLightbox, LightboxImageItem } from './ImageLightbox';

export const Experience: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ContributedProject | null>(null);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: LightboxImageItem[];
    currentIndex: number;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxState.isOpen) {
          setLightboxState((prev) => ({ ...prev, isOpen: false }));
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, lightboxState.isOpen]);

  const openProjectLightbox = (project: ContributedProject, index: number) => {
    if (!project.images || project.images.length === 0) return;

    const formattedImages: LightboxImageItem[] = project.images.map((img: ProjectImage) => ({
      url: img.url,
      title: `${project.name} — ${img.title}`,
      subtitle: project.role || 'Project Visual Proof',
      caption: img.caption,
      category: img.category || 'Screenshot',
    }));

    setLightboxState({
      isOpen: true,
      images: formattedImages,
      currentIndex: index,
    });
  };

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#FFF5F8]/70 border-t border-b border-pink-100/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left max-w-2xl mb-14">
          <div className="text-xs font-semibold text-[#DB2777] uppercase tracking-wider mb-2">
            Work & Collaborations
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#26142E] font-display tracking-tight text-balance">
            Projects & Experience
          </h2>
          <p className="text-sm sm:text-base text-[#6C5975] mt-3 leading-relaxed">
            My Web3 journey includes contributing to projects across community management, moderation, social presence, and website development.
          </p>
        </div>

        {/* Project List / Restrained Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {CONTRIBUTED_PROJECTS.map((project, idx) => {
            const initial = project.name.charAt(0).toUpperCase();
            const hasImages = project.images && project.images.length > 0;

            return (
              <div
                key={project.id}
                className="group p-6 sm:p-7 rounded-[30px] bg-white border border-pink-200/80 shadow-xs hover:border-pink-300 hover:shadow-md hover:shadow-pink-500/5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Clean Typographic Logo Frame */}
                    <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-200 flex items-center justify-center font-display font-bold text-lg text-[#DB2777] shrink-0">
                      {initial}
                    </div>

                    <div className="flex items-center gap-2">
                      {hasImages && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#DB2777] bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200/60">
                          <ImageIcon className="w-3 h-3" />
                          <span>{project.images!.length} {project.images!.length === 1 ? 'Proof' : 'Proofs'}</span>
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-[#6C5975] px-2.5 py-1 rounded-full bg-pink-50/80">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Prominent Project Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#26142E] font-display mb-1.5 group-hover:text-[#DB2777] transition-colors">
                    {project.name}
                  </h3>

                  {/* Role if supplied */}
                  {project.role && project.role.trim().length > 0 ? (
                    <div className="text-xs font-semibold text-[#DB2777] mb-2.5">
                      {project.role}
                    </div>
                  ) : (
                    <div className="text-xs text-[#6C5975] mb-2.5 italic">
                      Role details pending verification
                    </div>
                  )}

                  {/* Prominent Highlight Stat Badge */}
                  {project.highlightStat && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-pink-50 via-rose-50 to-purple-50 border border-pink-300/80 text-[11px] font-bold text-[#DB2777] mb-3 shadow-2xs">
                      <Sparkles className="w-3 h-3 text-[#DB2777]" />
                      <span>{project.highlightStat}</span>
                    </div>
                  )}

                  {/* Brief Description if supplied */}
                  {project.description && project.description.trim().length > 0 ? (
                    <p className="text-xs text-[#6C5975] leading-relaxed line-clamp-3 mb-4 whitespace-pre-line">
                      {project.description}
                    </p>
                  ) : null}

                  {/* Thumbnail Preview Strip if images exist */}
                  {hasImages && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                        {project.images!.map((img, iIdx) => (
                          <div
                            key={img.id || iIdx}
                            onClick={() => openProjectLightbox(project, iIdx)}
                            className="relative w-16 h-12 rounded-xl overflow-hidden border border-pink-200/90 shrink-0 cursor-pointer group/thumb hover:border-[#DB2777] transition-all"
                            title={`Preview ${img.title}`}
                          >
                            <img
                              src={img.url}
                              alt={img.title}
                              className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity">
                              <Maximize2 className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer action */}
                <div className="pt-4 border-t border-pink-100 flex items-center justify-between">
                  <span className="text-[11px] text-[#6C5975]">
                    Web3 Project
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DB2777] hover:text-pink-600 transition-colors cursor-pointer"
                    aria-label={`View details for ${project.name}`}
                  >
                    <span>View Details & Proof</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Project Details */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-white border border-pink-200 p-6 sm:p-8 shadow-2xl text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-pink-50 hover:bg-pink-100 text-[#26142E] transition-colors cursor-pointer"
                aria-label="Close project details"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6 pr-8">
                <div className="w-14 h-14 rounded-2xl bg-pink-50 border border-pink-200 flex items-center justify-center font-display font-bold text-2xl text-[#DB2777] shrink-0">
                  {selectedProject.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#26142E] font-display">
                    {selectedProject.name}
                  </h3>
                  {selectedProject.role ? (
                    <div className="text-xs font-semibold text-[#DB2777]">
                      {selectedProject.role}
                    </div>
                  ) : (
                    <div className="text-xs text-[#6C5975]">
                      Web3 Ecosystem Contributor
                    </div>
                  )}
                </div>
              </div>

              {/* Highlight Stat Milestone Banner */}
              {selectedProject.highlightStat && (
                <div className="mb-5 p-4 rounded-2xl bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 border border-pink-200/90 flex items-center justify-between shadow-2xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#DB2777] block">
                      Growth Achievement
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#26142E] font-display">
                      {selectedProject.highlightStat}
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-pink-100 flex items-center justify-center text-[#DB2777] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              )}

              {/* Description */}
              {selectedProject.description && selectedProject.description.trim().length > 0 && (
                <div className="mb-5">
                  <h4 className="text-xs uppercase font-bold text-[#6C5975] tracking-wider mb-2">
                    Project Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-[#26142E] leading-relaxed p-4 rounded-2xl bg-pink-50/50 border border-pink-100 whitespace-pre-line">
                    {selectedProject.description}
                  </p>
                </div>
              )}

              {/* Contributions */}
              {selectedProject.contributions && selectedProject.contributions.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-xs uppercase font-bold text-[#6C5975] tracking-wider mb-2">
                    Key Contributions
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.contributions.map((contrib, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs text-[#26142E] bg-pink-50/40 p-2.5 rounded-xl border border-pink-100/60">
                        <CheckCircle2 className="w-4 h-4 text-[#DB2777] shrink-0 mt-0.5" />
                        <span className="font-medium">{contrib}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Responsibilities */}
              {selectedProject.responsibilities && selectedProject.responsibilities.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-xs uppercase font-bold text-[#6C5975] tracking-wider mb-2">
                    Scope of Work
                  </h4>
                  <div className="space-y-1.5">
                    {selectedProject.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-[#6C5975]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777] shrink-0 mt-1.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Screenshots Gallery */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs uppercase font-bold text-[#6C5975] tracking-wider mb-2.5 flex items-center justify-between">
                    <span>Project Screenshots & Visual Proof</span>
                    <span className="text-[10px] font-mono text-[#DB2777]">
                      {selectedProject.images.length} {selectedProject.images.length === 1 ? 'screenshot' : 'screenshots'} (click to enlarge)
                    </span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.images.map((img, iIdx) => (
                      <div
                        key={img.id || iIdx}
                        onClick={() => openProjectLightbox(selectedProject, iIdx)}
                        className="group/img relative rounded-2xl overflow-hidden border border-pink-200 bg-pink-50/50 aspect-[16/10] cursor-pointer shadow-2xs"
                      >
                        <img
                          src={img.url}
                          alt={img.title}
                          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover/img:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
                          <span className="text-xs font-semibold leading-tight">{img.title}</span>
                          {img.caption && (
                            <span className="text-[10px] text-pink-200 line-clamp-1 mt-0.5">
                              {img.caption}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1 text-[10px] text-white/90 font-mono mt-1">
                            <Maximize2 className="w-3 h-3" />
                            <span>Click for full size</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Placeholder when fields are pending entry */}
              {(!selectedProject.description || selectedProject.description.trim().length === 0) &&
                (!selectedProject.responsibilities || selectedProject.responsibilities.length === 0) &&
                (!selectedProject.contributions || selectedProject.contributions.length === 0) && (
                  <div className="p-4 rounded-2xl bg-pink-50/50 border border-pink-100 text-xs text-[#6C5975] leading-relaxed mb-5">
                    <p className="font-semibold text-[#26142E] mb-1">
                      Information Pending Verification
                    </p>
                    <p>
                      Mirah's specific responsibilities, contributions, screenshots, and verified outcomes for {selectedProject.name} can be added in <span className="font-mono text-[#DB2777]">src/data/projectsData.ts</span> without changing any code.
                    </p>
                  </div>
                )}

              {/* Footer bar */}
              <div className="pt-4 border-t border-pink-100 flex items-center justify-between text-xs">
                {selectedProject.projectUrl ? (
                  <a
                    href={selectedProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#DB2777] hover:underline font-semibold"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Official Project Link</span>
                  </a>
                ) : (
                  <span className="text-[11px] text-[#6C5975] italic">
                    Project links can be added in projectsData.ts
                  </span>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-full bg-pink-50 hover:bg-pink-100 text-[#26142E] font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox for Project Screenshots */}
      {lightboxState.isOpen && (
        <ImageLightbox
          isOpen={true}
          onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
          images={lightboxState.images}
          currentIndex={lightboxState.currentIndex}
          onNavigate={(newIdx) => setLightboxState((prev) => ({ ...prev, currentIndex: newIdx }))}
        />
      )}
    </section>
  );
};

