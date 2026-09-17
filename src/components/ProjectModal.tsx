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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090B10]/80 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      >
        <motion.div
          id="project-detail-modal-card"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#111422] rounded-3xl border border-white/[0.12] shadow-[0_25px_60px_rgba(0,0,0,0.8)] p-6 sm:p-8 md:p-10 space-y-6 text-[#F8FAFC]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Top Header */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-full bg-white text-[#090B10]">
                  {project.number}
                </span>
                <span className="text-xs font-mono font-bold text-[#60A5FA] bg-blue-500/15 px-2.5 py-0.5 rounded-full border border-blue-500/30">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-[#94A3B8]">
                {project.tagline}
              </p>
            </div>

            <motion.button
              id="btn-close-project-modal"
              type="button"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-full bg-[#171C2E] border border-white/[0.1] text-[#94A3B8] hover:text-white hover:bg-[#1E243D] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Overview & Purpose */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA]">
              Overview & Core Problem
            </h4>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              {project.description}
            </p>
            {project.problem && (
              <div className="p-4 rounded-2xl bg-[#161B2C] border border-white/[0.06] text-xs sm:text-sm text-[#94A3B8] space-y-1">
                <span className="font-bold text-white block">The Problem Statement:</span>
                <p>{project.problem}</p>
              </div>
            )}
          </div>

          {/* Technical Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA]">
              Key Architecture & Features
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#CBD5E1]">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Applied */}
          <div className="space-y-2 pt-2 border-t border-white/[0.08]">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA]">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-[#171C2E] border border-white/[0.08] text-[#E2E8F0]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-[#3B82F6] text-white hover:bg-[#2563EB] text-xs font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Close Window
            </motion.button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
