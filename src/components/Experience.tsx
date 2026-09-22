import React from 'react';
import { Calendar, Tag, CheckCircle2, PlusCircle, ArrowUpRight, Award, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 border-b border-[#781D29]/10 bg-[#FBF8F6] relative overflow-hidden">
      {/* Background ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-[#781D29]/15 blur-[130px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Numbered Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#781D29] mb-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#781D29] shadow-[0_0_10px_rgba(120,29,41,0.6)]" />
              <span>05 — EXPERIENCE</span>
            </div>
            <h2
              id="experience-section-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D181C] tracking-tight uppercase"
            >
              EXPERIENCE & ACTIVITIES
            </h2>
            <div className="w-20 h-1 bg-[#781D29] mt-3 rounded-full" />
            <p className="text-sm sm:text-base text-[#6E5D61] mt-3.5 max-w-2xl font-normal">
              Practical milestones across academic coursework, innovation competitions, client web delivery, and technical community engagement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="text-xs font-mono font-bold text-[#781D29] bg-[#FFFFFF] px-4 py-2.5 rounded-full border border-[#781D29]/20 shadow-md flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#781D29] animate-pulse" />
            <span>Undergraduate Timeline</span>
          </motion.div>
        </div>

        {/* Experience Timeline Cards with Distinct Horizontal Pop & Radar Beacon Animation */}
        <div className="space-y-7 relative">
          
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              id={`experience-item-${exp.id}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 22,
                delay: idx * 0.1,
              }}
              whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
              className="p-7 sm:p-9 rounded-3xl bg-[#FFFFFF] border-2 border-[#781D29]/15 shadow-[0_10px_35px_rgba(120,29,41,0.06)] hover:border-[#781D29] hover:shadow-[0_18px_45px_rgba(120,29,41,0.16)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Radar beacon accent on each card */}
              <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <motion.span
                    animate={{ scale: [1, 2.2], opacity: [0.8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                    className="absolute inline-flex h-full w-full rounded-full bg-[#781D29]"
                  />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#781D29]"></span>
                </span>
                <span className="text-[10px] font-mono font-bold text-[#781D29] uppercase">
                  Verified Record
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Left meta info */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-mono font-black uppercase tracking-wider text-[#781D29] bg-[#FDF2F4] px-3 py-1 rounded-full border border-[#781D29]/25">
                      {exp.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#8A777A]">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#2D181C] tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#781D29]">
                    {exp.role}
                  </p>
                  <div className="pt-1">
                    <span className="text-[11px] font-mono font-bold text-[#6E5D61] bg-[#F8F3EF] px-3 py-1 rounded-lg border border-[#781D29]/15">
                      {exp.statusTag}
                    </span>
                  </div>
                </div>

                {/* Right details & highlights */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm text-[#4A3B3E] leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2D181C]">
                        <CheckCircle2 className="w-4 h-4 text-[#781D29] shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies / Skills */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-[#781D29]/10">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.08, y: -1 }}
                        className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-[#F8F3EF] text-[#2D181C] border border-[#781D29]/15 hover:border-[#781D29] hover:bg-[#FDF2F4] hover:text-[#781D29] cursor-default transition-all shadow-2xs"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

          {/* Clean "More In Progress" Box */}
          <motion.div
            id="experience-more-coming-soon"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -3 }}
            className="p-7 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-dashed border-[#781D29]/30 text-center space-y-2.5 hover:border-[#781D29] transition-colors shadow-sm"
          >
            <div className="w-11 h-11 rounded-full bg-[#FDF2F4] border border-[#781D29]/30 text-[#781D29] flex items-center justify-center mx-auto shadow-[0_4px_15px_rgba(120,29,41,0.15)]">
              <PlusCircle className="w-5 h-5" />
            </div>
            <h4 className="text-base font-black text-[#2D181C]">
              More Experience in Active Progress
            </h4>
            <p className="text-xs sm:text-sm text-[#6E5D61] max-w-lg mx-auto leading-relaxed">
              As a 3rd year undergraduate, upcoming technical internships, hackathon milestones, and open-source contributions will be reflected here as they are completed.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
