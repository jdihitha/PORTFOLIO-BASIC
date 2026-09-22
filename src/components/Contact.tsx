import React, { useState } from 'react';
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FBF8F6] relative overflow-hidden">
      {/* Glowing ambient maroon orb */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#781D29]/15 blur-[160px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Numbered Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#781D29] mb-3.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#781D29] shadow-[0_0_10px_rgba(120,29,41,0.6)]" />
            <span>06 — CONTACT</span>
          </div>
          <h2
            id="contact-section-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#2D181C] tracking-tight uppercase leading-[0.95]"
          >
            LET'S CONNECT.
          </h2>
          <div className="w-20 h-1 bg-[#781D29] mt-3 rounded-full" />
          <p className="text-base sm:text-lg text-[#6E5D61] mt-4 font-normal max-w-2xl leading-relaxed">
            Have an opportunity, project idea, or just want to connect? Feel free to reach out.
          </p>
        </motion.div>

        {/* 3 Premium Interactive Contact Cards with Distinct Spring Stagger & Shimmer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 perspective-1000">
          
          {/* Card 1: EMAIL (Copy Only, Zero Mailto) */}
          <motion.div
            id="contact-card-email"
            initial={{ opacity: 0, y: 35, rotateZ: -1 }}
            whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.05 }}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
            onClick={handleCopyEmail}
            className="cursor-pointer relative p-7 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#781D29]/15 shadow-[0_10px_35px_rgba(120,29,41,0.06)] hover:shadow-[0_20px_50px_rgba(120,29,41,0.18)] hover:border-[#781D29] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
          >
            {/* Corner highlight */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#781D29]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FDF2F4] text-[#781D29] border border-[#781D29]/25 flex items-center justify-center transition-all group-hover:scale-110 shadow-[0_4px_15px_rgba(120,29,41,0.15)]">
                  <Mail className="w-6 h-6 stroke-[2.2]" />
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyEmail();
                  }}
                  id="btn-copy-email-top"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    copied
                      ? 'bg-[#10B981] text-white shadow-[0_4px_15px_rgba(16,185,129,0.4)]'
                      : 'bg-[#FDF2F4] text-[#781D29] border border-[#781D29]/30 group-hover:bg-[#781D29] group-hover:text-white group-hover:border-transparent'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Copied ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-[11px] font-mono font-black uppercase tracking-widest text-[#8A777A] block mb-2">
                EMAIL
              </span>
              <h3 className="text-lg sm:text-xl font-black text-[#2D181C] group-hover:text-[#781D29] transition-colors break-all leading-snug">
                {PERSONAL_INFO.email}
              </h3>
              <p className="text-xs text-[#6E5D61] mt-2.5 leading-relaxed">
                Click anywhere on this card to copy my email address.
              </p>
            </div>

            {/* Bottom tactile copy bar */}
            <div className="relative z-10 pt-6 mt-6 border-t border-[#781D29]/10 flex items-center justify-between">
              <span className="text-xs font-bold text-[#2D181C] group-hover:text-[#781D29] transition-colors flex items-center gap-1.5">
                {copied ? 'Copied to clipboard ✓' : 'Click to Copy'}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                  copied
                    ? 'bg-[#10B981] text-white shadow-[0_0_10px_rgba(16,185,129,0.6)]'
                    : 'bg-[#F8F3EF] text-[#781D29] group-hover:bg-[#781D29] group-hover:text-white'
                }`}
              >
                {copied ? (
                  <Check className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </div>
            </div>
          </motion.div>

          {/* Card 2: LINKEDIN */}
          <motion.a
            id="contact-card-linkedin"
            href="https://www.linkedin.com/in/dihitha-chowdary-jasti"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.12 }}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
            className="relative p-7 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#781D29]/15 shadow-[0_10px_35px_rgba(120,29,41,0.06)] hover:shadow-[0_20px_50px_rgba(120,29,41,0.18)] hover:border-[#781D29] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
          >
            {/* Corner highlight */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#781D29]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FDF2F4] text-[#781D29] border border-[#781D29]/25 flex items-center justify-center transition-all group-hover:scale-110 shadow-[0_4px_15px_rgba(120,29,41,0.15)]">
                  <Linkedin className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#F8F3EF] text-[#6E5D61] group-hover:bg-[#781D29] group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-2xs">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>

              <span className="text-[11px] font-mono font-black uppercase tracking-widest text-[#8A777A] block mb-2">
                LINKEDIN
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#2D181C] group-hover:text-[#781D29] transition-colors break-all leading-snug">
                www.linkedin.com/in/dihitha-chowdary-jasti
              </h3>
              <p className="text-xs text-[#6E5D61] mt-2.5 leading-relaxed">
                Connect for professional updates, internship opportunities, and messaging.
              </p>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-[#781D29]/10 flex items-center justify-between">
              <span className="text-xs font-bold text-[#2D181C] group-hover:text-[#781D29] transition-colors">
                Open Profile
              </span>
              <span className="text-xs font-mono font-bold text-[#781D29] flex items-center gap-1">
                <span>View</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </div>
          </motion.a>

          {/* Card 3: GITHUB */}
          <motion.a
            id="contact-card-github"
            href="https://github.com/jdihitha"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 35, rotateZ: 1 }}
            whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.18 }}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
            className="relative p-7 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#781D29]/15 shadow-[0_10px_35px_rgba(120,29,41,0.06)] hover:shadow-[0_20px_50px_rgba(120,29,41,0.18)] hover:border-[#781D29] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
          >
            {/* Corner highlight */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#781D29]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FDF2F4] text-[#781D29] border border-[#781D29]/25 flex items-center justify-center transition-all group-hover:scale-110 shadow-[0_4px_15px_rgba(120,29,41,0.15)]">
                  <Github className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#F8F3EF] text-[#6E5D61] group-hover:bg-[#781D29] group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-2xs">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>

              <span className="text-[11px] font-mono font-black uppercase tracking-widest text-[#8A777A] block mb-2">
                GITHUB
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#2D181C] group-hover:text-[#781D29] transition-colors break-all leading-snug">
                github.com/jdihitha
              </h3>
              <p className="text-xs text-[#6E5D61] mt-2.5 leading-relaxed">
                Explore project source code, architectures, and engineering commits.
              </p>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-[#781D29]/10 flex items-center justify-between">
              <span className="text-xs font-bold text-[#2D181C] group-hover:text-[#781D29] transition-colors">
                Explore Repositories
              </span>
              <span className="text-xs font-mono font-bold text-[#781D29] flex items-center gap-1 transition-colors">
                <span>Browse</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </div>
          </motion.a>

        </div>

        {/* Opportunity Callout Banner: MUST PRESERVE 7672080116 EXACTLY */}
        <motion.div
          id="contact-status-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border-2 border-[#781D29]/20 shadow-[0_10px_35px_rgba(120,29,41,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm hover:border-[#781D29] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#781D29] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#781D29]"></span>
            </span>
            <span className="font-bold text-[#2D181C]">
              Currently open to Summer 2025/2026 Internships & collaborative engineering opportunities.
            </span>
          </div>
          <motion.a
            id="contact-phone-link"
            href="tel:7672080116"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#781D29] via-[#8D1B2D] to-[#5C141E] text-white font-bold text-xs hover:shadow-[0_6px_20px_rgba(120,29,41,0.35)] transition-all self-start sm:self-auto shrink-0 font-mono tracking-wider shadow-md border border-[#C0394B]/30"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>7672080116</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
