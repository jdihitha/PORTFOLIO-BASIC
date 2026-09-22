import React, { useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <motion.footer
      id="main-portfolio-footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#F4EFEB] border-t border-[#781D29]/15 py-14 text-[#2D181C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#781D29]/10">
          
          {/* Identity */}
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-lg font-black tracking-tight text-[#2D181C] uppercase">
              DIHITHA JASTI
            </h4>
            <p className="text-xs font-bold text-[#781D29]">
              Third-Year B.Tech Student • Developer • Builder
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#781D29]/20 text-[#2D181C] flex items-center justify-center hover:bg-[#781D29] hover:text-white hover:border-[#781D29] transition-all shadow-xs"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </motion.a>

            <motion.a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#781D29]/20 text-[#2D181C] flex items-center justify-center hover:bg-[#781D29] hover:text-white hover:border-[#781D29] transition-all shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>

            <motion.button
              type="button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyEmail}
              className="px-4 h-10 rounded-full bg-[#FFFFFF] border border-[#781D29]/20 text-[#2D181C] flex items-center gap-2 text-xs font-mono font-bold hover:bg-[#781D29] hover:text-white hover:border-[#781D29] transition-all shadow-xs"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[#10B981] font-bold">Copied ✓</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Back to top */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#6E5D61] hover:text-[#781D29] transition-colors group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-[#781D29] group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8A777A] gap-3">
          <span>
            Crafted with precision · Maroon & Light Theme
          </span>
          <span>
            © {new Date().getFullYear()} Dihitha Jasti. All rights reserved.
          </span>
        </div>
      </div>
    </motion.footer>
  );
};
