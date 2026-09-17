import React from 'react';
import { Lightbulb, Code2, Compass, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ABOUT_CARDS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-white/[0.08] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-[#3B82F6]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Numbered Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#60A5FA] mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <span>01 — ABOUT</span>
          </div>
          <h2
            id="about-section-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase"
          >
            A LITTLE ABOUT ME
          </h2>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Short, Confident Personal Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 space-y-6 text-[#CBD5E1] text-base sm:text-lg leading-relaxed font-normal"
          >
            <p className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">
              I am an engineering undergraduate who enjoys the intersection of clean software architecture and practical user utility.
            </p>
            <p>
              My journey into tech began with a curiosity about how software systems operate behind the scenes. Rather than memorizing theoretical syntax in isolation, I learn best by building—writing code, debugging edge cases, and turning conceptual ideas into working applications.
            </p>
            <p className="text-base text-[#94A3B8]">
              Whether exploring connected grocery supply workflows in FreshVerse, designing agricultural waste monetization for farmers in ERPATU, or crafting memory game logic in JUDAM, I look for opportunities to solve real problems and strengthen my software foundations.
            </p>

            {/* Quick quote / motto pill with subtle animation */}
            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-[#121624] border border-blue-500/20 shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:border-blue-400/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                <Lightbulb className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-[#CBD5E1] italic leading-relaxed">
                "Approaching each project with an honest curiosity to learn, adapt quickly, and build software that feels straightforward and reliable."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Staggered Information Cards */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Card 1: CURRENTLY */}
            <motion.div
              id="about-card-currently"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-3xl bg-[#111422] border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-blue-500/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.08]">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#94A3B8]">
                  {ABOUT_CARDS.currently.label}
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-500/15 text-[#60A5FA] border border-blue-500/30">
                  Undergraduate
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                {ABOUT_CARDS.currently.value}
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {ABOUT_CARDS.currently.sub}
              </p>
            </motion.div>

            {/* Card 2: INTERESTS */}
            <motion.div
              id="about-card-interests"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-3xl bg-[#111422] border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-blue-500/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.08]">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#94A3B8]">
                  {ABOUT_CARDS.interests.label}
                </span>
                <span className="text-[11px] font-mono text-[#60A5FA]">
                  4 Focus Areas
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ABOUT_CARDS.interests.items.map((interest) => (
                  <div
                    key={interest}
                    className="p-3 rounded-xl bg-[#161B2C] border border-white/[0.06] flex items-center gap-2.5 group hover:bg-[#1C2238] hover:border-blue-500/30 transition-all duration-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.8)] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#F8FAFC]">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 3: MINDSET */}
            <motion.div
              id="about-card-mindset"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-3xl bg-[#111422] border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-blue-500/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.08]">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#94A3B8]">
                  {ABOUT_CARDS.mindset.label}
                </span>
                <span className="text-[11px] font-mono text-[#60A5FA]">
                  Core Attributes
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {ABOUT_CARDS.mindset.items.map((trait) => (
                  <motion.span
                    key={trait}
                    whileHover={{ scale: 1.06 }}
                    className="px-4 py-2 rounded-xl bg-[#161B2C] border border-white/[0.08] text-xs sm:text-sm font-bold text-white tracking-wide cursor-default transition-all hover:bg-[#1D243A] hover:border-blue-400/50 shadow-sm"
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
