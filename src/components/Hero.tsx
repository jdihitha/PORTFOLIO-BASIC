import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Code2, Compass, Layers, Terminal, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const nameLetters = "DIHITHA JASTI".split("");

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden border-b border-[#781D29]/10 bg-[#FBF8F6]"
    >
      {/* Heavy Section Animation: Floating Morphing Maroon & Rose Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 0.95, 1.15, 1],
          x: [0, 35, -20, 15, 0],
          y: [0, -30, 20, -10, 0],
          opacity: [0.3, 0.5, 0.35, 0.45, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-10 right-10 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#781D29]/20 via-[#C0394B]/15 to-transparent blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 35, 0],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute -bottom-10 -left-10 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#8D1B2D]/18 via-[#F28482]/15 to-transparent blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-[#781D29]/10 pointer-events-none"
      />

      {/* Subtle fine dot texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#781D29 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Bold Typography & Confident Voice */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Top Status Pill with Animated Maroon Beacon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              whileHover={{ scale: 1.04, y: -2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#781D29]/20 text-[#2D181C] text-xs font-semibold w-fit shadow-[0_4px_20px_rgba(120,29,41,0.08)] cursor-default"
            >
              <span className="relative flex h-3 w-3">
                <motion.span
                  animate={{ scale: [1, 2.4, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inline-flex h-full w-full rounded-full bg-[#781D29]"
                />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#781D29]"></span>
              </span>
              <span className="tracking-wider font-mono text-[#781D29] font-bold">B.TECH CS '26</span>
              <span className="text-[#781D29]/30">|</span>
              <span className="text-[#6E5D61] font-medium">Summer '25/'26 Opportunities</span>
            </motion.div>

            {/* Editorial Greeting & Animated Letter Stagger */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg sm:text-xl font-semibold text-[#781D29] tracking-tight flex items-center gap-2"
              >
                <span>Hi, I'm</span>
                <motion.span
                  animate={{ rotate: [0, 18, -10, 18, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.5 }}
                  className="inline-block origin-bottom-right"
                >
                  👋
                </motion.span>
              </motion.p>

              {/* Dynamic Staggered Letter Entrance for "DIHITHA JASTI" */}
              <h1
                id="hero-person-name"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-[#2D181C] leading-[0.92] uppercase flex flex-wrap"
                aria-label="DIHITHA JASTI"
              >
                {nameLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 35, rotateZ: 5 }}
                    animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      scale: 1.15,
                      color: '#781D29',
                      y: -4,
                      transition: { duration: 0.15 },
                    }}
                    className={`inline-block cursor-default select-none ${char === " " ? "mr-4 sm:mr-6" : ""}`}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Sub-headline / Role Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="space-y-1 pt-1"
            >
              <p className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-[#781D29] via-[#8D1B2D] to-[#C0394B] bg-clip-text text-transparent tracking-tight">
                Third-Year B.Tech Student
              </p>
              <p className="text-base sm:text-lg font-semibold text-[#6E5D61] tracking-tight">
                Developer • Builder • Curious Learner
              </p>
            </motion.div>

            {/* Natural Short Intro */}
            <motion.p
              id="hero-introduction-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg text-[#4A3B3E] max-w-2xl leading-relaxed font-normal"
            >
              "I enjoy turning ideas into practical digital products while continuously learning through projects, problem solving and experimentation."
            </motion.p>

            {/* Call to Actions with tactile motion and rich maroon glows */}
            <motion.div
              id="hero-actions-container"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                id="hero-cta-explore-work"
                href="#projects"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#781D29] via-[#8D1B2D] to-[#5C141E] text-white font-bold text-xs sm:text-sm shadow-[0_8px_25px_rgba(120,29,41,0.35)] hover:shadow-[0_12px_35px_rgba(120,29,41,0.5)] transition-all duration-200 tracking-wider uppercase border border-[#C0394B]/40"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </motion.a>

              <motion.a
                id="hero-cta-lets-connect"
                href="#contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FFFFFF] text-[#781D29] border-2 border-[#781D29]/30 font-bold text-xs sm:text-sm hover:bg-[#FDF2F4] hover:border-[#781D29] transition-all duration-200 tracking-wider uppercase shadow-[0_4px_18px_rgba(120,29,41,0.08)] hover:shadow-[0_8px_25px_rgba(120,29,41,0.18)]"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-[#781D29]" />
              </motion.a>
            </motion.div>

            {/* High-Contrast Bold Metric Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="pt-6 border-t border-[#781D29]/10 grid grid-cols-3 gap-4 max-w-md"
            >
              <motion.div 
                whileHover={{ y: -3, scale: 1.03 }}
                className="p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#781D29]/15 shadow-xs"
              >
                <span className="block text-[10px] font-mono uppercase tracking-wider text-[#8A777A] font-bold">Focus</span>
                <span className="text-sm font-extrabold text-[#2D181C]">Full-Stack & DSA</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -3, scale: 1.03 }}
                className="p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#781D29]/15 shadow-xs"
              >
                <span className="block text-[10px] font-mono uppercase tracking-wider text-[#8A777A] font-bold">Projects</span>
                <span className="text-sm font-extrabold text-[#2D181C]">5 Key Builds</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -3, scale: 1.03 }}
                className="p-3.5 rounded-2xl bg-[#FDF2F4] border border-[#781D29]/25 shadow-xs"
              >
                <span className="block text-[10px] font-mono uppercase tracking-wider text-[#781D29] font-bold">Status</span>
                <span className="text-sm font-extrabold text-[#781D29]">3rd Year Active</span>
              </motion.div>
            </motion.div>

          </div>

          {/* Right Column: Confident Interactive 3D Parallax Builder Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
            className="lg:col-span-5 w-full flex items-center justify-center perspective-1000"
          >
            <motion.div
              id="hero-abstract-art-composition"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateY: mousePosition.x * 16,
                rotateX: -mousePosition.y * 16,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-md aspect-square rounded-3xl bg-[#FFFFFF] border-2 border-[#781D29]/15 p-7 sm:p-8 shadow-[0_20px_50px_rgba(120,29,41,0.12)] overflow-hidden flex flex-col justify-between hover:border-[#781D29]/40 hover:shadow-[0_25px_60px_rgba(120,29,41,0.22)] transition-colors duration-300 group"
            >
              {/* Background ambient accents */}
              <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-[#781D29]/10 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#C0394B]/10 blur-2xl pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-dashed border-[#781D29]/15 pointer-events-none" />

              {/* Composition Header */}
              <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#781D29]/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#781D29] shadow-[0_0_8px_rgba(120,29,41,0.5)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C0394B] shadow-[0_0_8px_rgba(192,57,75,0.5)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <span className="ml-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#6E5D61]">
                    Console · Builder
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#781D29] bg-[#FDF2F4] px-2.5 py-0.5 rounded-md border border-[#781D29]/25">
                  2024 – 2026
                </span>
              </div>

              {/* Central Abstract Interactive Visual Cards & Heavy Floating Action Labels */}
              <div className="relative z-10 my-auto py-3 space-y-3.5">
                
                {/* Staggered Oscillating Floating Action Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <motion.span
                    animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.15, rotate: -4 }}
                    className="px-3.5 py-1 rounded-full bg-[#781D29] text-white text-[11px] font-black tracking-wider shadow-[0_4px_15px_rgba(120,29,41,0.35)] cursor-default"
                  >
                    BUILD
                  </motion.span>
                  <motion.span
                    animate={{ y: [0, -9, 0], rotate: [0, 2, 0] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    className="px-3.5 py-1 rounded-full bg-[#8D1B2D] text-white text-[11px] font-black tracking-wider shadow-[0_4px_15px_rgba(141,27,45,0.35)] cursor-default"
                  >
                    LEARN
                  </motion.span>
                  <motion.span
                    animate={{ y: [0, -7, 0], rotate: [0, -2, 0] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                    whileHover={{ scale: 1.15, rotate: -3 }}
                    className="px-3.5 py-1 rounded-full bg-[#2D181C] text-white text-[11px] font-black tracking-wider shadow-[0_4px_15px_rgba(45,24,28,0.3)] cursor-default"
                  >
                    SOLVE
                  </motion.span>
                  <motion.span
                    animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                    transition={{ duration: 4.0, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                    whileHover={{ scale: 1.15, rotate: 4 }}
                    className="px-3.5 py-1 rounded-full bg-[#C0394B] text-white text-[11px] font-black tracking-wider shadow-[0_4px_15px_rgba(192,57,75,0.35)] cursor-default"
                  >
                    CREATE
                  </motion.span>
                </div>

                {/* Central Canvas Card with Creative Graphic Elements */}
                <div className="p-4 rounded-2xl bg-[#F8F3EF] border border-[#781D29]/15 space-y-3 shadow-inner group-hover:border-[#781D29]/35 transition-colors">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#2D181C] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#781D29] animate-spin" style={{ animationDuration: '6s' }} />
                      <span>Product Craft & Engineering</span>
                    </span>
                    <span className="font-mono text-[10px] font-bold text-[#781D29]">Architecture</span>
                  </div>

                  {/* Visual Progress Steps: Concept -> Build -> Deliver */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="p-2 rounded-xl bg-[#FFFFFF] border border-[#781D29]/10 hover:border-[#781D29]/30 transition-colors">
                      <span className="block text-[9px] font-mono text-[#8A777A] uppercase font-bold">Phase 01</span>
                      <span className="font-bold text-[#2D181C]">Concept</span>
                    </div>
                    <div className="p-2 rounded-xl bg-gradient-to-br from-[#781D29] to-[#8D1B2D] text-white border border-[#781D29] shadow-[0_4px_15px_rgba(120,29,41,0.3)]">
                      <span className="block text-[9px] font-mono text-[#FDF2F4] uppercase font-bold">Phase 02</span>
                      <span className="font-bold text-white">Build</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#FFFFFF] border border-[#781D29]/10 hover:border-[#781D29]/30 transition-colors">
                      <span className="block text-[9px] font-mono text-[#8A777A] uppercase font-bold">Phase 03</span>
                      <span className="font-bold text-[#2D181C]">Deliver</span>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                    {['C++', 'React', 'SQL', 'TypeScript', 'Node.js', 'Supabase'].map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1, y: -1 }}
                        className="px-2.5 py-0.5 rounded-lg bg-[#FFFFFF] border border-[#781D29]/15 text-[10px] font-mono font-bold text-[#4A3B3E] hover:border-[#781D29] hover:text-[#781D29] transition-colors cursor-default shadow-2xs"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Composition Footer Banner */}
              <div className="relative z-10 pt-3 border-t border-[#781D29]/10 flex items-center justify-between text-xs text-[#6E5D61]">
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  Real Projects · Clean Foundations
                </span>
                <span className="font-mono text-[11px] text-[#781D29] font-bold">B.Tech Undergraduate</span>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
