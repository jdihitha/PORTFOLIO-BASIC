import React from 'react';
import { BookOpen, Clock, ArrowUpRight, Sparkles, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';

export const CurrentlyExploring: React.FC = () => {
  return (
    <section id="exploring" className="py-24 md:py-32 border-b border-[#781D29]/10 bg-[#FBF8F6] relative overflow-hidden">
      {/* Background ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#781D29]/15 blur-[130px] pointer-events-none"
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
              <span>04 — EXPLORING</span>
            </div>
            <h2
              id="exploring-section-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D181C] tracking-tight uppercase"
            >
              CURRENTLY EXPLORING
            </h2>
            <div className="w-20 h-1 bg-[#781D29] mt-3 rounded-full" />
            <p className="text-sm sm:text-base text-[#6E5D61] mt-3.5 max-w-2xl font-normal">
              Active study subjects and engineering domains I am currently learning through structured coursework, coding challenges, and guided experimentation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#781D29]/20 flex items-center gap-3.5 w-fit text-xs shadow-md"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#781D29] to-[#8D1B2D] text-white flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(120,29,41,0.3)]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-[#2D181C] block">Student Learning Track</span>
              <span className="text-[#6E5D61]">In-progress exploration, not claimed mastery</span>
            </div>
          </motion.div>
        </div>

        {/* Notebook-Style Cards Grid with Distinct Floating Wave Bobbing Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CURRENTLY_EXPLORING.map((item, idx) => (
            <motion.div
              key={item.id}
              id={`exploring-card-${item.id}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.09 }}
              animate={{
                y: [0, -8, 0],
              }}
              whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.2 } }}
              className="relative p-7 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#781D29]/15 shadow-[0_10px_35px_rgba(120,29,41,0.06)] hover:border-[#781D29] hover:shadow-[0_18px_45px_rgba(120,29,41,0.18)] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Notebook Top Accent Line with Maroon Shimmer */}
              <div className="absolute top-0 left-8 right-8 h-1.5 bg-[#781D29]/30 group-hover:bg-[#781D29] group-hover:shadow-[0_0_10px_rgba(120,29,41,0.6)] transition-all rounded-b-full" />

              <div className="space-y-4 pt-1">
                {/* Status & Topic Tag */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#781D29]/10">
                  <span className="text-[11px] font-mono font-black text-[#8A777A] uppercase">
                    Topic 0{idx + 1}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#781D29] bg-[#FDF2F4] px-3 py-1 rounded-full border border-[#781D29]/25">
                    <Clock className="w-3 h-3 animate-spin" style={{ animationDuration: '4s' }} />
                    <span>In Progress</span>
                  </span>
                </div>

                {/* Heading */}
                <div>
                  <span className="text-[11px] font-mono text-[#781D29] uppercase tracking-wider block mb-1 font-bold">
                    {item.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#2D181C] tracking-tight group-hover:text-[#781D29] transition-colors leading-snug">
                    {item.topic}
                  </h3>
                </div>

                {/* Learning Summary */}
                <p className="text-xs sm:text-sm text-[#4A3B3E] leading-relaxed">
                  {item.description}
                </p>

                {/* Specific Focus Bullet Points */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#8A777A] block">
                    Current Study Focus:
                  </span>
                  <div className="space-y-1.5">
                    {item.learningFocus.map((focus, fIdx) => (
                      <div
                        key={fIdx}
                        className="text-xs text-[#2D181C] font-semibold flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8F3EF] border border-[#781D29]/10 group-hover:border-[#781D29]/30 transition-colors shadow-2xs"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#781D29] shadow-[0_0_6px_rgba(120,29,41,0.6)] shrink-0" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#781D29]/10 flex items-center justify-between text-xs text-[#6E5D61]">
                <span className="font-mono text-[11px] font-medium">Active Study Track</span>
                <span className="text-[#781D29] font-extrabold text-[11px] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
