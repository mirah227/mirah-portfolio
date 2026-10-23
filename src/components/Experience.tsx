import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Globe, Sparkles, FileEdit } from 'lucide-react';
import { CONTRIBUTED_PROJECTS } from '../data/projectsData';
import { ContributedProject } from '../types';

export const Experience: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ContributedProject | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

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
            My Web3 journey includes contributing to projects across community-focused environments.
          </p>
        </div>

        {/* Project List / Restrained Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {CONTRIBUTED_PROJECTS.map((project, idx) => {
            const initial = project.name.charAt(0).toUpperCase();

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

                    <span className="text-[11px] font-mono text-[#6C5975] px-2.5 py-1 rounded-full bg-pink-50/80">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Prominent Project Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#26142E] font-display mb-1.5 group-hover:text-[#DB2777] transition-colors">
                    {project.name}
                  </h3>

                  {/* Role if supplied */}
                  {project.role && project.role.trim().length > 0 ? (
                    <div className="text-xs font-semibold text-[#DB2777] mb-3">
                      {project.role}
                    </div>
                  ) : (
                    <div className="text-xs text-[#6C5975] mb-3 italic">
                      Role details pending verification
                    </div>
                  )}

                  {/* Brief Description if supplied */}
                  {project.description && project.description.trim().length > 0 ? (
                    <p className="text-xs text-[#6C5975] leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>
                  ) : null}
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
                    <span>View Details</span>
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
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[32px] bg-white border border-pink-200 p-6 sm:p-8 shadow-2xl text-left"
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

              {/* Description */}
              {selectedProject.description && selectedProject.description.trim().length > 0 && (
                <div className="mb-5">
                  <h4 className="text-xs uppercase font-bold text-[#6C5975] tracking-wider mb-2">
                    Project Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-[#26142E] leading-relaxed p-4 rounded-2xl bg-pink-50/50 border border-pink-100">
                    {selectedProject.description}
                  </p>
                </div>
              )}

              {/* Responsibilities */}
              {selectedProject.responsibilities && selectedProject.responsibilities.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-xs uppercase font-bold text-[#6C5975] tracking-wider mb-2">
                    Key Responsibilities
                  </h4>
                  <div className="space-y-1.5">
                    {selectedProject.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-[#6C5975]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#DB2777] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contributions */}
              {selectedProject.contributions && selectedProject.contributions.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-xs uppercase font-bold text-[#6C5975] tracking-wider mb-2">
                    Contributions
                  </h4>
                  <div className="space-y-1.5">
                    {selectedProject.contributions.map((contrib, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-[#6C5975]">
                        <Sparkles className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                        <span>{contrib}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Results if available */}
              {selectedProject.results && selectedProject.results.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-xs uppercase font-bold text-[#6C5975] tracking-wider mb-2">
                    Verified Results
                  </h4>
                  <div className="space-y-1.5">
                    {selectedProject.results.map((res, resIdx) => (
                      <div key={resIdx} className="flex items-start gap-2 text-xs text-[#26142E] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{res}</span>
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
                      Mirah's specific responsibilities, contributions, and verified project outcomes for {selectedProject.name} can be updated in <span className="font-mono text-[#DB2777]">projectsData.ts</span> without modifying the page layout.
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
                    className="inline-flex items-center gap-1.5 text-[#DB2777] hover:underline font-medium"
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
    </section>
  );
};
