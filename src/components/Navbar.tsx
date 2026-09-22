import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'nav-link-home' },
    { label: 'About', href: '#about', id: 'nav-link-about' },
    { label: 'Skills', href: '#skills', id: 'nav-link-skills' },
    { label: 'Projects', href: '#projects', id: 'nav-link-projects' },
    { label: 'Exploring', href: '#exploring', id: 'nav-link-exploring' },
    { label: 'Experience', href: '#experience', id: 'nav-link-experience' },
    { label: 'Contact', href: '#contact', id: 'nav-link-contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF8F6]/90 backdrop-blur-xl border-b border-[#781D29]/10 py-3.5 shadow-[0_4px_30px_rgba(120,29,41,0.06)]'
          : 'bg-[#FBF8F6]/40 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Name */}
          <a
            id="brand-logo-link"
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#781D29] rounded-xl"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#781D29] via-[#8D1B2D] to-[#4A0E17] text-white flex items-center justify-center font-black text-xs tracking-wider shadow-[0_4px_15px_rgba(120,29,41,0.35)] border border-[#C0394B]/30"
            >
              <span>DJ</span>
            </motion.div>
            <div className="flex items-baseline gap-2">
              <span className="font-extrabold text-[#2D181C] tracking-tight text-base sm:text-lg uppercase group-hover:text-[#781D29] transition-colors">
                DIHITHA JASTI
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono text-[#781D29] bg-[#FDF2F4] px-2 py-0.5 rounded-full border border-[#781D29]/20 font-bold">
                CS '26
              </span>
            </div>
          </a>

          {/* Center Desktop Navigation with Animated Highlight */}
          <nav id="desktop-navbar-nav" className="hidden md:flex items-center gap-1 bg-[#F3ECE7]/80 p-1.5 rounded-full border border-[#781D29]/10 backdrop-blur-md shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-[#6E5D61] hover:text-[#781D29] hover:bg-[#781D29]/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#781D29] rounded-full shadow-[0_2px_12px_rgba(120,29,41,0.35)] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-3">
            <motion.a
              id="nav-cta-connect-button"
              href="#contact"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-gradient-to-r from-[#781D29] to-[#8D1B2D] hover:from-[#5C141E] hover:to-[#781D29] text-white transition-all duration-200 shadow-[0_4px_18px_rgba(120,29,41,0.25)] tracking-wide border border-[#C0394B]/30"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </motion.a>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-[#6E5D61] hover:text-[#781D29] hover:bg-[#F3ECE7] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#781D29]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#781D29]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu with Motion AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation-dropdown"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 p-4 bg-[#FFFFFF] border border-[#781D29]/15 rounded-2xl shadow-[0_20px_50px_rgba(120,29,41,0.15)] space-y-1 backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#781D29]/10 px-2 text-[11px] font-mono uppercase tracking-wider text-[#6E5D61]">
                <span>Navigation</span>
                <span className="flex items-center gap-1.5 text-[#781D29] font-sans font-semibold normal-case">
                  <span className="w-2 h-2 rounded-full bg-[#781D29] animate-ping" />
                  Third-Year B.Tech
                </span>
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={`mobile-${link.id}`}
                    id={`mobile-${link.id}`}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[#781D29] text-white shadow-[0_4px_15px_rgba(120,29,41,0.3)]'
                        : 'text-[#6E5D61] hover:bg-[#FDF2F4] hover:text-[#781D29]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#781D29]/10">
                <a
                  id="mobile-nav-cta-connect"
                  href="#contact"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#781D29] to-[#8D1B2D] text-white font-bold text-xs tracking-wide shadow-[0_4px_18px_rgba(120,29,41,0.25)]"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};
