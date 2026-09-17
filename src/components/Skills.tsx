import React, { useState } from 'react';
import { Terminal, Globe, Database, Wrench, CheckCircle2, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', ...SKILL_GROUPS.map((g) => g.category)];

  const displayedGroups =
    activeCategory === 'ALL'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'LANGUAGES':
        return <Terminal className="w-5 h-5 text-[#60A5FA]" />;
      case 'WEB':
        return <Globe className="w-5 h-5 text-[#A5B4FC]" />;
      case 'DATABASE':
        return <Database className="w-5 h-5 text-[#FB923C]" />;
      case 'TOOLS':
        return <Wrench className="w-5 h-5 text-[#34D399]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#60A5FA]" />;
    }
  };

  const getCategoryBadgeStyle = (cat: string) => {
    switch (cat) {
      case 'LANGUAGES':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'WEB':
        return 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30';
      case 'DATABASE':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      case 'TOOLS':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      default:
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 border-b border-white/[0.08] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#6366F1]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Numbered Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#60A5FA] mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              <span>02 — SKILLS</span>
            </div>
            <h2
              id="skills-section-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase"
            >
              TOOLS I BUILD WITH
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2.5 max-w-2xl font-normal">
              Practical technologies I use across academic coursework, full-stack projects, and problem-solving practice.
            </p>
          </motion.div>

          {/* Filter Pills with Animated Motion indicator */}
          <motion.div
            id="skills-category-filters"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-1.5 bg-[#121624] p-1.5 rounded-full border border-white/[0.08] w-fit shadow-lg"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                id={`skill-filter-${cat.toLowerCase()}`}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'text-white'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Categories Bento Grid with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedGroups.map((group, gIdx) => (
              <motion.div
                key={group.category}
                layout
                id={`skills-group-${group.category.toLowerCase()}`}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: gIdx * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-7 sm:p-8 rounded-3xl bg-[#111422] border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-blue-500/40 hover:shadow-[0_15px_45px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Group Title Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#171C2E] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 group-hover:border-blue-500/40 transition-all shadow-inner">
                        {getCategoryIcon(group.category)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {group.category}
                        </h3>
                        <span className="text-[11px] font-mono text-[#94A3B8]">
                          {group.skills.length} Technologies
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${getCategoryBadgeStyle(
                        group.category
                      )}`}
                    >
                      Active Stack
                    </span>
                  </div>

                  {/* Skill Pills Container with Interactive Micro-Animations */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        id={`skill-pill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className="px-4 py-2.5 rounded-xl bg-[#171C2E] border border-white/[0.06] text-xs sm:text-sm font-semibold text-[#E2E8F0] hover:bg-[#1E243D] hover:text-white hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-150 cursor-default flex items-center gap-2 group/pill"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shadow-[0_0_6px_rgba(59,130,246,0.9)] group-hover/pill:scale-125 transition-transform" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Honest Student Note */}
                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-2.5 text-xs text-[#94A3B8]">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span>Applied through hands-on project implementations and problem solving</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
