import React from 'react';
import { BookOpen, Clock, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';

export const CurrentlyExploring: React.FC = () => {
  return (
    <section id="exploring" className="py-24 md:py-32 border-b border-white/[0.08] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#3B82F6]/10 blur-[130px] pointer-events-none" />

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
              <span>04 — EXPLORING</span>
            </div>
            <h2
              id="exploring-section-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase"
            >
              CURRENTLY EXPLORING
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2.5 max-w-2xl font-normal">
              Active study subjects and engineering domains I am currently learning through structured coursework, coding challenges, and guided experimentation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-3.5 rounded-2xl bg-[#121624] border border-white/[0.08] flex items-center gap-3.5 w-fit text-xs shadow-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] text-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white block">Student Learning Track</span>
              <span className="text-[#94A3B8]">In-progress exploration, not claimed mastery</span>
            </div>
          </motion.div>
        </div>

        {/* Notebook-Style Cards Grid with Progressive Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CURRENTLY_EXPLORING.map((item, idx) => (
            <motion.div
              key={item.id}
              id={`exploring-card-${item.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative p-7 sm:p-8 rounded-3xl bg-[#111422] border border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:border-blue-500/50 hover:shadow-[0_15px_45px_rgba(59,130,246,0.18)] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Notebook Top Accent Line with Glowing Blue Shimmer */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-blue-500/40 group-hover:bg-[#3B82F6] group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all rounded-b-full" />

              <div className="space-y-4 pt-1">
                {/* Status & Topic Tag */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                  <span className="text-[11px] font-mono font-bold text-[#94A3B8] uppercase">
                    Topic 0{idx + 1}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#60A5FA] bg-blue-500/15 px-3 py-1 rounded-full border border-blue-500/30">
                    <Clock className="w-3 h-3 animate-spin" style={{ animationDuration: '4s' }} />
                    <span>In Progress</span>
                  </span>
                </div>

                {/* Heading */}
                <div>
                  <span className="text-[11px] font-mono text-[#60A5FA] uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#60A5FA] transition-colors leading-snug">
                    {item.topic}
                  </h3>
                </div>

                {/* Learning Summary */}
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                  {item.description}
                </p>

                {/* Specific Focus Bullet Points */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#94A3B8] block">
                    Current Study Focus:
                  </span>
                  <div className="space-y-1.5">
                    {item.learningFocus.map((focus, fIdx) => (
                      <div
                        key={fIdx}
                        className="text-xs text-[#CBD5E1] flex items-center gap-2.5 p-2.5 rounded-xl bg-[#161B2C] border border-white/[0.06] group-hover:border-blue-500/30 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shadow-[0_0_6px_rgba(59,130,246,0.9)] shrink-0" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#94A3B8]">
                <span className="font-mono text-[11px]">Active Study Track</span>
                <span className="text-[#60A5FA] font-semibold text-[11px] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>In Depth</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
