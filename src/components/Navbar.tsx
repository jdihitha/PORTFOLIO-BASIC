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
          ? 'bg-[#090B10]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-[#090B10]/40 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Name */}
          <a
            id="brand-logo-link"
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-xl"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] text-white flex items-center justify-center font-black text-xs tracking-wider shadow-[0_0_15px_rgba(59,130,246,0.4)] border border-blue-400/30"
            >
              <span>DJ</span>
            </motion.div>
            <div className="flex items-baseline gap-2">
              <span className="font-extrabold text-white tracking-tight text-base sm:text-lg uppercase group-hover:text-[#60A5FA] transition-colors">
                DIHITHA JASTI
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono text-[#60A5FA] bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                CS '26
              </span>
            </div>
          </a>

          {/* Center Desktop Navigation with Animated Highlight */}
          <nav id="desktop-navbar-nav" className="hidden md:flex items-center gap-1 bg-[#121624]/80 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#3B82F6] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] -z-10"
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
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.35)] tracking-wide border border-blue-400/30"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </motion.a>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              className="md:hidden mt-3 p-4 bg-[#111420] border border-white/[0.1] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-1 backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-white/[0.08] px-2 text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                <span>Navigation</span>
                <span className="flex items-center gap-1.5 text-[#60A5FA] font-sans font-semibold normal-case">
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-ping" />
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
                        ? 'bg-[#3B82F6] text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                        : 'text-[#94A3B8] hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/[0.08]">
                <a
                  id="mobile-nav-cta-connect"
                  href="#contact"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl bg-[#3B82F6] text-white font-bold text-xs tracking-wide shadow-[0_0_20px_rgba(59,130,246,0.35)]"
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
