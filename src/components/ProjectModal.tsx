import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-detail-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2D181C]/50 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      >
        <motion.div
          id="project-detail-modal-card"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF] rounded-3xl border-2 border-[#781D29]/25 shadow-[0_25px_60px_rgba(120,29,41,0.25)] p-6 sm:p-8 md:p-10 space-y-6 text-[#2D181C]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Top Header */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#781D29]/15">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-full bg-[#781D29] text-white">
                  {project.number}
                </span>
                <span className="text-xs font-mono font-bold text-[#781D29] bg-[#FDF2F4] px-2.5 py-0.5 rounded-full border border-[#781D29]/25">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2D181C]">
                {project.title}
              </h3>
              <p className="text-sm font-bold text-[#781D29]">
                {project.tagline}
              </p>
            </div>

            <motion.button
              id="btn-close-project-modal"
              type="button"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#FDF2F4] border border-[#781D29]/20 text-[#781D29] hover:text-white hover:bg-[#781D29] transition-colors shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Overview & Purpose */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-black uppercase tracking-wider text-[#781D29]">
              Overview & Core Problem
            </h4>
            <p className="text-sm sm:text-base text-[#4A3B3E] leading-relaxed">
              {project.description}
            </p>
            {project.problem && (
              <div className="p-4 rounded-2xl bg-[#F8F3EF] border border-[#781D29]/15 text-xs sm:text-sm text-[#4A3B3E] space-y-1">
                <span className="font-bold text-[#2D181C] block">The Problem Statement:</span>
                <p>{project.problem}</p>
              </div>
            )}
          </div>

          {/* Technical Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-black uppercase tracking-wider text-[#781D29]">
              Key Architecture & Features
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A3B3E]">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#781D29] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Applied */}
          <div className="space-y-2 pt-2 border-t border-[#781D29]/15">
            <h4 className="text-xs font-mono font-black uppercase tracking-wider text-[#781D29]">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-[#F8F3EF] border border-[#781D29]/15 text-[#2D181C]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-4 border-t border-[#781D29]/15 flex items-center justify-between">
            {project.liveUrl ? (
              <motion.a
                id="modal-btn-live-demo"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#781D29] via-[#8D1B2D] to-[#5C141E] text-white hover:shadow-[0_8px_25px_rgba(120,29,41,0.4)] text-xs font-black tracking-wider uppercase transition-all shadow-md"
              >
                <span>LIVE DEMO →</span>
              </motion.a>
            ) : (
              <div />
            )}
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#F8F3EF] hover:bg-[#FDF2F4] text-[#2D181C] hover:text-[#781D29] border border-[#781D29]/20 text-xs font-black tracking-wider uppercase transition-all shadow-xs"
            >
              Close Window
            </motion.button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
