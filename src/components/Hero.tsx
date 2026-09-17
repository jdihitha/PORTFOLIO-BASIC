import React from 'react';
import { ArrowUpRight, Sparkles, Code2, Compass, Layers, Terminal, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden border-b border-white/[0.08]"
    >
      {/* Animated glowing orbs for bold ambiance */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 25, 0],
          y: [0, -20, 0],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 right-10 w-96 h-96 rounded-full bg-[#3B82F6]/25 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -20, 0],
          y: [0, 25, 0],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-10 left-10 w-96 h-96 rounded-full bg-[#6366F1]/20 blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-[#38BDF8]/15 blur-[140px] pointer-events-none"
      />

      {/* Subtle grid line overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Bold Typography & Confident Voice */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Top Status Pill with Animated Beacon */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121624] border border-blue-500/30 text-[#F8FAFC] text-xs font-semibold w-fit shadow-[0_0_20px_rgba(59,130,246,0.2)] cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3B82F6]"></span>
              </span>
              <span className="tracking-wider font-mono text-[#60A5FA]">B.TECH CS '26</span>
              <span className="text-white/20">|</span>
              <span className="text-[#94A3B8] font-medium">Summer '25/'26 Internships</span>
            </motion.div>

            {/* Editorial Greeting & Bold Name */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg sm:text-xl font-medium text-[#94A3B8] tracking-tight flex items-center gap-2"
              >
                <span>Hi, I'm</span>
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block origin-bottom-right"
                >
                  👋
                </motion.span>
              </motion.p>
              <motion.h1
                id="hero-person-name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-black tracking-tight text-white leading-[0.92] uppercase"
              >
                DIHITHA JASTI
              </motion.h1>
            </div>

            {/* Sub-headline / Role Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="space-y-1 pt-1"
            >
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#A5B4FC] bg-clip-text text-transparent tracking-tight">
                Third-Year B.Tech Student
              </p>
              <p className="text-base sm:text-lg font-medium text-[#94A3B8] tracking-tight">
                Developer • Builder • Curious Learner
              </p>
            </motion.div>

            {/* Natural Short Intro */}
            <motion.p
              id="hero-introduction-text"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl leading-relaxed font-normal"
            >
              "I enjoy turning ideas into practical digital products while continuously learning through projects, problem solving and experimentation."
            </motion.p>

            {/* Call to Actions with tactile motion and bold glows */}
            <motion.div
              id="hero-actions-container"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                id="hero-cta-explore-work"
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-200 tracking-wider uppercase border border-blue-400/40"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </motion.a>

              <motion.a
                id="hero-cta-lets-connect"
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#121624] text-white border border-white/[0.15] font-bold text-xs sm:text-sm hover:bg-[#181E32] hover:border-blue-400/50 transition-all duration-200 tracking-wider uppercase shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-[#60A5FA]" />
              </motion.a>
            </motion.div>

            {/* High-Contrast Bold Metric Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-md"
            >
              <div className="p-3 rounded-2xl bg-[#121624]/60 border border-white/[0.06]">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-[#64748B]">Focus</span>
                <span className="text-sm font-bold text-white">Full-Stack & DSA</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#121624]/60 border border-white/[0.06]">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-[#64748B]">Projects</span>
                <span className="text-sm font-bold text-white">5 Key Builds</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#121624]/60 border border-white/[0.06]">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-[#64748B]">Status</span>
                <span className="text-sm font-bold text-[#60A5FA]">3rd Year Active</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Confident Interactive Builder Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full flex items-center justify-center"
          >
            <div
              id="hero-abstract-art-composition"
              className="relative w-full max-w-md aspect-square rounded-3xl bg-[#111422] border border-white/[0.1] p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group"
            >
              {/* Background ambient accents */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#3B82F6]/20 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[#8B5CF6]/20 blur-2xl pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-dashed border-white/[0.08] pointer-events-none" />

              {/* Composition Header */}
              <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444] shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  <span className="ml-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#94A3B8]">
                    Console · Builder
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#60A5FA] bg-blue-500/15 px-2.5 py-0.5 rounded-md border border-blue-500/30">
                  2024 – 2026
                </span>
              </div>

              {/* Central Abstract Interactive Visual Cards & Floating Action Labels with Animations */}
              <div className="relative z-10 my-auto py-4 space-y-4">
                
                {/* Floating Action Pills with Motion Flotation */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 rounded-full bg-white text-[#090B10] text-[11px] font-black tracking-wider shadow-md cursor-default"
                  >
                    BUILD
                  </motion.span>
                  <motion.span
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 rounded-full bg-[#3B82F6] text-white text-[11px] font-black tracking-wider shadow-[0_0_15px_rgba(59,130,246,0.5)] cursor-default"
                  >
                    LEARN
                  </motion.span>
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 rounded-full bg-[#6366F1] text-white text-[11px] font-black tracking-wider shadow-[0_0_15px_rgba(99,102,241,0.4)] cursor-default"
                  >
                    SOLVE
                  </motion.span>
                  <motion.span
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 rounded-full bg-[#EC4899] text-white text-[11px] font-black tracking-wider shadow-[0_0_15px_rgba(236,72,153,0.4)] cursor-default"
                  >
                    CREATE
                  </motion.span>
                </div>

                {/* Central Canvas Card with Creative Graphic Elements */}
                <div className="p-4 rounded-2xl bg-[#161B2C] border border-white/[0.08] space-y-3 shadow-xl group-hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#3B82F6] animate-spin" style={{ animationDuration: '6s' }} />
                      <span>Product Craft & Engineering</span>
                    </span>
                    <span className="font-mono text-[10px] text-[#60A5FA]">Architecture</span>
                  </div>

                  {/* Visual Progress Steps: Concept -> Build -> Deliver */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="p-2 rounded-xl bg-[#121624] border border-white/[0.06] hover:border-blue-500/40 transition-colors">
                      <span className="block text-[9px] font-mono text-[#94A3B8] uppercase">Phase 01</span>
                      <span className="font-bold text-white">Concept</span>
                    </div>
                    <div className="p-2 rounded-xl bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.25)]">
                      <span className="block text-[9px] font-mono text-[#60A5FA] uppercase">Phase 02</span>
                      <span className="font-bold text-[#60A5FA]">Build</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#121624] border border-white/[0.06] hover:border-blue-500/40 transition-colors">
                      <span className="block text-[9px] font-mono text-[#94A3B8] uppercase">Phase 03</span>
                      <span className="font-bold text-white">Deliver</span>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                    {['C++', 'React', 'SQL', 'TypeScript', 'Node.js', 'Supabase'].map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.08 }}
                        className="px-2.5 py-0.5 rounded-lg bg-[#1D243A] border border-white/[0.08] text-[10px] font-mono font-medium text-[#CBD5E1] hover:border-blue-400/50 hover:text-white transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Composition Footer Banner */}
              <div className="relative z-10 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#94A3B8]">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  Real Projects · Clean Foundations
                </span>
                <span className="font-mono text-[11px] text-[#60A5FA]">B.Tech Undergraduate</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
