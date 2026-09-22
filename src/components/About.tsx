import React from 'react';
import { Lightbulb, Code2, Compass, Layers, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { ABOUT_CARDS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-[#781D29]/10 bg-[#FBF8F6] relative overflow-hidden">
      {/* Background ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-[#781D29]/15 blur-[130px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Numbered Label */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotateZ: -1 }}
          whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#781D29] mb-3.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#781D29] shadow-[0_0_10px_rgba(120,29,41,0.6)]" />
            <span>01 — ABOUT</span>
          </div>
          <h2
            id="about-section-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D181C] tracking-tight uppercase"
          >
            A LITTLE ABOUT ME
          </h2>
          <div className="w-20 h-1 bg-[#781D29] mt-3 rounded-full" />
        </motion.div>

        {/* Two-Column Layout with Distinct Skew & 3D Perspective Flip Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start perspective-1000">
          
          {/* Left Column: Horizontal Elastic Skew Entrance */}
          <motion.div
            initial={{ opacity: 0, x: -60, skewY: 1.5 }}
            whileInView={{ opacity: 1, x: 0, skewY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-[#4A3B3E] text-base sm:text-lg leading-relaxed font-normal"
          >
            <p className="text-xl sm:text-2xl font-extrabold text-[#2D181C] leading-snug tracking-tight">
              I am an engineering undergraduate who enjoys the intersection of clean software architecture and practical user utility.
            </p>
            <p>
              My journey into tech began with a curiosity about how software systems operate behind the scenes. Rather than memorizing theoretical syntax in isolation, I learn best by building—writing code, debugging edge cases, and turning conceptual ideas into working applications.
            </p>
            <p className="text-base text-[#6E5D61]">
              Whether exploring connected grocery supply workflows in FreshVerse, designing agricultural waste monetization for farmers in ERPATU, or crafting memory game logic in YAADRAKHO, I look for opportunities to solve real problems and strengthen my software foundations.
            </p>

            {/* Quick quote / motto pill with interactive shimmer and glow */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-[#FFFFFF] border-2 border-[#781D29]/20 shadow-[0_8px_30px_rgba(120,29,41,0.08)] hover:border-[#781D29] hover:shadow-[0_12px_35px_rgba(120,29,41,0.18)] transition-all flex items-start gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#781D29] to-[#8D1B2D] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-[0_4px_15px_rgba(120,29,41,0.35)] group-hover:rotate-6 transition-transform">
                <Lightbulb className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-[#2D181C] font-medium italic leading-relaxed">
                "Approaching each project with an honest curiosity to learn, adapt quickly, and build software that feels straightforward and reliable."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Perspective Flip-In Cards with Stagger */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Card 1: CURRENTLY - 3D Flip In */}
            <motion.div
              id="about-card-currently"
              initial={{ opacity: 0, rotateY: 30, y: 35 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, rotateY: -3, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#781D29]/15 shadow-[0_10px_35px_rgba(120,29,41,0.06)] hover:border-[#781D29]/40 hover:shadow-[0_15px_45px_rgba(120,29,41,0.14)] transition-all duration-300"
            >
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#781D29]/10">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#8A777A]">
                  {ABOUT_CARDS.currently.label}
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#FDF2F4] text-[#781D29] border border-[#781D29]/25">
                  Undergraduate
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-[#2D181C] tracking-tight mb-1">
                {ABOUT_CARDS.currently.value}
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5D61] leading-relaxed">
                {ABOUT_CARDS.currently.sub}
              </p>
            </motion.div>

            {/* Card 2: INTERESTS - 3D Flip In */}
            <motion.div
              id="about-card-interests"
              initial={{ opacity: 0, rotateY: -30, y: 35 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, rotateY: 3, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#781D29]/15 shadow-[0_10px_35px_rgba(120,29,41,0.06)] hover:border-[#781D29]/40 hover:shadow-[0_15px_45px_rgba(120,29,41,0.14)] transition-all duration-300"
            >
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#781D29]/10">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#8A777A]">
                  {ABOUT_CARDS.interests.label}
                </span>
                <span className="text-[11px] font-mono font-bold text-[#781D29]">
                  4 Focus Areas
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ABOUT_CARDS.interests.items.map((interest) => (
                  <motion.div
                    key={interest}
                    whileHover={{ scale: 1.04, x: 2 }}
                    className="p-3 rounded-xl bg-[#F8F3EF] border border-[#781D29]/10 flex items-center gap-2.5 group hover:bg-[#FDF2F4] hover:border-[#781D29]/30 transition-all duration-200 shadow-2xs"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-[#781D29] shadow-[0_0_8px_rgba(120,29,41,0.6)] shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-[#2D181C]">
                      {interest}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Card 3: MINDSET - 3D Flip In + Interactive Wobble */}
            <motion.div
              id="about-card-mindset"
              initial={{ opacity: 0, rotateY: 25, y: 35 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#781D29]/15 shadow-[0_10px_35px_rgba(120,29,41,0.06)] hover:border-[#781D29]/40 hover:shadow-[0_15px_45px_rgba(120,29,41,0.14)] transition-all duration-300"
            >
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#781D29]/10">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#8A777A]">
                  {ABOUT_CARDS.mindset.label}
                </span>
                <span className="text-[11px] font-mono font-bold text-[#781D29]">
                  Core Attributes
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {ABOUT_CARDS.mindset.items.map((trait, tIdx) => (
                  <motion.span
                    key={trait}
                    whileHover={{ scale: 1.12, rotate: tIdx % 2 === 0 ? 3 : -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-xl bg-[#FDF2F4] border border-[#781D29]/25 text-xs sm:text-sm font-black text-[#781D29] tracking-wide cursor-default transition-all hover:bg-[#781D29] hover:text-white shadow-xs"
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
