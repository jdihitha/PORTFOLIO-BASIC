import React from 'react';
import { Calendar, Tag, CheckCircle2, PlusCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 border-b border-white/[0.08] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-[#3B82F6]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Numbered Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#60A5FA] mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              <span>05 — EXPERIENCE</span>
            </div>
            <h2
              id="experience-section-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase"
            >
              EXPERIENCE & ACTIVITIES
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2.5 max-w-2xl font-normal">
              Practical milestones across academic coursework, innovation competitions, client web delivery, and technical community engagement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xs font-mono text-[#CBD5E1] bg-[#121624] px-4 py-2 rounded-full border border-white/[0.08] shadow-lg flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span>Undergraduate Timeline</span>
          </motion.div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              id={`experience-item-${exp.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-7 sm:p-9 rounded-3xl bg-[#111422] border border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:border-blue-500/40 hover:shadow-[0_15px_45px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Left meta info */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#60A5FA] bg-blue-500/15 px-3 py-1 rounded-full border border-blue-500/30">
                      {exp.category}
                    </span>
                    <span className="text-xs font-mono text-[#94A3B8]">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#CBD5E1]">
                    {exp.role}
                  </p>
                  <div className="pt-1">
                    <span className="text-[11px] font-mono text-[#94A3B8] bg-[#161B2C] px-3 py-1 rounded-lg border border-white/[0.06]">
                      {exp.statusTag}
                    </span>
                  </div>
                </div>

                {/* Right details & highlights */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm text-[#CBD5E1] leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2E8F0]">
                        <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies / Skills */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.08]">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-[#171C2E] text-[#CBD5E1] border border-white/[0.08] hover:border-blue-400/50 hover:text-white cursor-default transition-all"
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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 sm:p-8 rounded-3xl bg-[#121624]/60 border border-dashed border-white/[0.15] text-center space-y-2.5 hover:border-blue-500/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-[#171C2E] border border-blue-500/30 text-[#60A5FA] flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <PlusCircle className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">
              More Experience in Active Progress
            </h4>
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-lg mx-auto leading-relaxed">
              As a 3rd year undergraduate, upcoming technical internships, hackathon milestones, and open-source contributions will be reflected here as they are completed.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
