import React, { useState } from 'react';
import { Terminal, Globe, Database, Wrench, CheckCircle2, Cpu, Sparkles } from 'lucide-react';
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
        return <Terminal className="w-5 h-5 text-[#781D29]" />;
      case 'WEB':
        return <Globe className="w-5 h-5 text-[#8D1B2D]" />;
      case 'DATABASE':
        return <Database className="w-5 h-5 text-[#A22338]" />;
      case 'TOOLS':
        return <Wrench className="w-5 h-5 text-[#C0394B]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#781D29]" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 border-b border-[#781D29]/10 bg-[#FBF8F6] relative overflow-hidden">
      {/* Subtle background ambient blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#781D29]/10 blur-[130px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Numbered Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#781D29] mb-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#781D29] shadow-[0_0_10px_rgba(120,29,41,0.6)]" />
              <span>02 — SKILLS</span>
            </div>
            <h2
              id="skills-section-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D181C] tracking-tight uppercase"
            >
              TOOLS I BUILD WITH
            </h2>
            <div className="w-20 h-1 bg-[#781D29] mt-3 rounded-full" />
            <p className="text-sm sm:text-base text-[#6E5D61] mt-3.5 max-w-2xl font-normal">
              Practical technologies I use across academic coursework, full-stack projects, and problem-solving practice.
            </p>
          </motion.div>

          {/* Filter Pills with Animated Motion indicator */}
          <motion.div
            id="skills-category-filters"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="flex flex-wrap items-center gap-1.5 bg-[#FFFFFF] p-1.5 rounded-full border border-[#781D29]/15 w-fit shadow-md"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                id={`skill-filter-${cat.toLowerCase()}`}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-extrabold tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'text-white font-black'
                    : 'text-[#6E5D61] hover:text-[#781D29] hover:bg-[#FDF2F4]'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#781D29] to-[#8D1B2D] rounded-full shadow-[0_4px_15px_rgba(120,29,41,0.35)] -z-10"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Categories Bento Grid with Elastic Spring Overshoot Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedGroups.map((group, gIdx) => (
              <motion.div
                key={group.category}
                layout
                id={`skills-group-${group.category.toLowerCase()}`}
                initial={{ opacity: 0, scale: 0.85, y: 35 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 20,
                  delay: gIdx * 0.08,
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-7 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#781D29]/15 shadow-[0_10px_35px_rgba(120,29,41,0.06)] hover:border-[#781D29]/40 hover:shadow-[0_15px_45px_rgba(120,29,41,0.14)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Group Title Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#781D29]/10 mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-[#FDF2F4] border border-[#781D29]/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all shadow-xs">
                        {getCategoryIcon(group.category)}
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-[#2D181C] tracking-tight">
                          {group.category}
                        </h3>
                        <span className="text-[11px] font-mono text-[#8A777A] font-medium">
                          {group.skills.length} Core Technologies
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border bg-[#FDF2F4] text-[#781D29] border-[#781D29]/25">
                      Active Stack
                    </span>
                  </div>

                  {/* Skill Pills Container with Interactive Elastic Wobble */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <motion.div
                        key={skill}
                        id={`skill-pill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        whileHover={{
                          scale: 1.1,
                          y: -3,
                          rotate: sIdx % 2 === 0 ? 2 : -2,
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2.5 rounded-xl bg-[#F8F3EF] border border-[#781D29]/10 text-xs sm:text-sm font-bold text-[#2D181C] hover:bg-[#FDF2F4] hover:text-[#781D29] hover:border-[#781D29]/40 hover:shadow-[0_4px_15px_rgba(120,29,41,0.15)] transition-all duration-150 cursor-default flex items-center gap-2 group/pill"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#781D29] shadow-[0_0_6px_rgba(120,29,41,0.8)] group-hover/pill:scale-125 transition-transform" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Honest Student Note & Animated Progress Indicator */}
                <div className="mt-6 pt-4 border-t border-[#781D29]/10 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#6E5D61]">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#781D29] shrink-0" />
                      <span>Applied through coursework & projects</span>
                    </span>
                    <span className="font-mono text-[11px] font-bold text-[#781D29]">100% Practical</span>
                  </div>
                  {/* Subtle animated bar */}
                  <div className="w-full h-1.5 bg-[#F4EFEB] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-[#781D29] to-[#C0394B] rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
