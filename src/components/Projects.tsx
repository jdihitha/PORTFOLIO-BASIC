import React, { useState } from 'react';
import { 
  Maximize2,
  Car,
  ShoppingBag,
  Leaf,
  ArrowUpRight,
  Layers,
  Sparkles,
  Gamepad2,
  Sliders,
  RotateCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // YAADRAKHO Mini Interactive 3D Memory Game State
  const [yaadrakhoCards, setYaadrakhoCards] = useState([
    { id: 0, icon: '🥮', label: 'Modak', pair: 'A', flipped: true },
    { id: 1, icon: '🪔', label: 'Diya', pair: 'B', flipped: true },
    { id: 2, icon: '🥮', label: 'Modak', pair: 'A', flipped: true },
    { id: 3, icon: '🪔', label: 'Diya', pair: 'B', flipped: true },
  ]);

  const toggleYaadrakhoCard = (id: number) => {
    setYaadrakhoCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, flipped: !c.flipped } : c))
    );
  };

  const resetYaadrakho = () => {
    setYaadrakhoCards((prev) => prev.map((c) => ({ ...c, flipped: true })));
  };

  // Counter App Interactive State with Spring Physics
  const [counterValue, setCounterValue] = useState<number>(5);
  const [counterEffectKey, setCounterEffectKey] = useState<number>(0);

  const incrementCounter = () => {
    setCounterValue((v) => v + 1);
    setCounterEffectKey((k) => k + 1);
  };

  const decrementCounter = () => {
    setCounterValue((v) => Math.max(0, v - 1));
    setCounterEffectKey((k) => k + 1);
  };

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-[#781D29]/10 bg-[#FBF8F6] relative overflow-hidden">
      {/* Ambient background glows */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-[#781D29]/15 blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#C0394B]/15 blur-[140px] pointer-events-none"
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
              <span>03 — PROJECTS</span>
            </div>
            <h2
              id="projects-section-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D181C] tracking-tight uppercase"
            >
              THINGS I'VE BUILT
            </h2>
            <div className="w-20 h-1 bg-[#781D29] mt-3 rounded-full" />
            <p className="text-sm sm:text-base text-[#6E5D61] mt-3.5 max-w-2xl font-normal">
              A curated collection of full-stack ecosystems, marketplaces, informational web platforms, and interactive frontend applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="text-xs font-mono font-bold text-[#781D29] bg-[#FFFFFF] px-4 py-2.5 rounded-full border border-[#781D29]/20 flex items-center gap-2 w-fit shadow-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#781D29] animate-pulse" />
            <span>5 Architected Builds</span>
          </motion.div>
        </div>

        {/* Bento Editorial Projects Composition with Distinct Section Animations */}
        <div className="space-y-8 perspective-1000">

          {/* ==========================================================
              PROJECT 1: FRESHVERSE (Deep Perspective Scale-In)
              ========================================================== */}
          <motion.div
            id="project-card-freshverse"
            initial={{ opacity: 0, scale: 0.92, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group rounded-3xl bg-[#FFFFFF] border-2 border-[#781D29]/15 p-7 sm:p-9 lg:p-10 shadow-[0_10px_35px_rgba(120,29,41,0.08)] hover:shadow-[0_20px_50px_rgba(120,29,41,0.18)] hover:border-[#781D29]/50 transition-all duration-300 relative overflow-hidden"
          >
            {/* Top decorative accent gradient line in rich maroon */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#781D29] via-[#C0394B] to-[#781D29] opacity-80 group-hover:opacity-100 transition-opacity" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono font-black px-3 py-1 rounded-full bg-[#781D29] text-white shadow-xs">
                    01
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10B981] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#10B981]/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    COMPLETED
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#781D29] bg-[#FDF2F4] px-3 py-1 rounded-full border border-[#781D29]/25">
                    Full-Stack Ecosystem
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D181C] tracking-tight group-hover:text-[#781D29] transition-colors leading-[1.05]">
                    FreshVerse — COMPLETED
                  </h3>
                  <p className="text-sm font-bold text-[#781D29] mt-1.5">
                    Connected Food & Grocery Supply Ecosystem Platform
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#4A3B3E] leading-relaxed font-normal">
                  A full-stack platform built around a connected food and grocery supply ecosystem involving customers, suppliers, inventory, orders, deliveries, ratings, complaints and notifications.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React', 'Supabase', 'SQL', 'JavaScript/TypeScript'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3.5 py-1.5 text-xs font-mono font-bold rounded-xl bg-[#F8F3EF] text-[#2D181C] border border-[#781D29]/15 hover:border-[#781D29] hover:bg-[#FDF2F4] hover:text-[#781D29] transition-all cursor-default shadow-2xs"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-[#781D29]/10">
                  <span className="text-xs font-mono text-[#6E5D61] flex items-center gap-2 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#781D29] animate-ping" />
                    Full-Stack Multi-Stakeholder Engine
                  </span>

                  <div className="flex flex-wrap items-center gap-3">
                    <motion.a
                      id="btn-live-demo-freshverse"
                      href="https://freshverse-vegies.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#781D29] via-[#8D1B2D] to-[#5C141E] text-white hover:shadow-[0_8px_25px_rgba(120,29,41,0.4)] text-xs font-extrabold transition-all shadow-md group/demo border border-[#C0394B]/30 tracking-wider uppercase"
                    >
                      <span>LIVE DEMO →</span>
                    </motion.a>

                    <motion.button
                      id="btn-details-freshverse"
                      type="button"
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(PROJECTS[0])}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F8F3EF] hover:bg-[#FDF2F4] text-[#2D181C] hover:text-[#781D29] border border-[#781D29]/20 hover:border-[#781D29] text-xs font-extrabold transition-all shadow-xs group/btn tracking-wider uppercase"
                    >
                      <span>View Architecture</span>
                      <Maximize2 className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Right Abstract Visual: Multi-stakeholder ecosystem preview */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-[#F8F3EF] border border-[#781D29]/15 space-y-4 group-hover:border-[#781D29]/30 transition-colors shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-[#781D29]/10 text-xs font-mono font-bold text-[#2D181C]">
                    <span className="flex items-center gap-2 text-[#781D29]">
                      <ShoppingBag className="w-4 h-4" />
                      <span>Ecosystem Flow</span>
                    </span>
                    <span className="text-[#8A777A]">Supabase · SQL</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <motion.div 
                      whileHover={{ scale: 1.04 }}
                      className="p-3 rounded-xl bg-[#FFFFFF] border border-[#781D29]/10 shadow-2xs hover:border-[#781D29]/30 transition-colors"
                    >
                      <span className="block text-[10px] font-mono text-[#8A777A] uppercase font-bold">Stakeholder</span>
                      <span className="font-extrabold text-[#2D181C]">Suppliers & Stock</span>
                      <span className="block text-[11px] text-[#6E5D61] mt-0.5">Inventory alerts</span>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.04 }}
                      className="p-3 rounded-xl bg-gradient-to-br from-[#781D29] to-[#8D1B2D] text-white border border-[#781D29] shadow-xs"
                    >
                      <span className="block text-[10px] font-mono text-[#FDF2F4] uppercase font-bold">Consumer</span>
                      <span className="font-extrabold text-white">Order Pipeline</span>
                      <span className="block text-[11px] text-[#FDF2F4]/90 mt-0.5">Live cart & track</span>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.04 }}
                      className="p-3 rounded-xl bg-[#FFFFFF] border border-[#781D29]/10 shadow-2xs hover:border-[#781D29]/30 transition-colors"
                    >
                      <span className="block text-[10px] font-mono text-[#8A777A] uppercase font-bold">Operations</span>
                      <span className="font-extrabold text-[#2D181C]">Dispatch Nodes</span>
                      <span className="block text-[11px] text-[#6E5D61] mt-0.5">Doorstep delivery</span>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.04 }}
                      className="p-3 rounded-xl bg-[#FFFFFF] border border-[#781D29]/10 shadow-2xs hover:border-[#781D29]/30 transition-colors"
                    >
                      <span className="block text-[10px] font-mono text-[#8A777A] uppercase font-bold">Feedback</span>
                      <span className="font-extrabold text-[#2D181C]">Ratings & Issues</span>
                      <span className="block text-[11px] text-[#6E5D61] mt-0.5">Complaint triage</span>
                    </motion.div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#781D29]/10 text-[11px] text-[#6E5D61] flex items-center justify-between">
                    <span>Synchronized real-time notification layer</span>
                    <span className="font-mono text-[#10B981] font-extrabold">READY</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ==========================================================
              ROW 2: TWO COLUMNS (ERPATU - SLIDES FROM LEFT, CARZIAN - SLIDES FROM RIGHT)
              ========================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* PROJECT 2: ERPATU (Slide-in from LEFT with elastic spring) */}
            <motion.div
              id="project-card-erpatu"
              initial={{ opacity: 0, x: -70, rotate: -1.5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-3xl bg-[#FFFFFF] border-2 border-[#781D29]/15 p-7 sm:p-8 shadow-[0_10px_35px_rgba(120,29,41,0.06)] hover:shadow-[0_20px_45px_rgba(120,29,41,0.16)] hover:border-[#781D29]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black px-3 py-1 rounded-full bg-[#781D29] text-white">
                    02
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#781D29] bg-[#FDF2F4] px-3 py-1 rounded-full border border-[#781D29]/25">
                    Agri-Waste Marketplace
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#2D181C] tracking-tight group-hover:text-[#781D29] transition-colors">
                    ERPATU
                  </h3>
                  <p className="text-xs font-bold text-[#781D29] mt-0.5">
                    Sustainable Agricultural Residue Commerce
                  </p>
                </div>

                <p className="text-sm text-[#4A3B3E] leading-relaxed">
                  An agricultural-waste marketplace connecting farmers with buyers so agricultural waste can be sold instead of being burned or wasted.
                </p>

                {/* Interactive Concept Banner */}
                <div className="p-4 rounded-2xl bg-[#F8F3EF] border border-[#781D29]/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-bold text-[#2D181C]">
                    <span className="flex items-center gap-1.5 text-[#781D29]">
                      <Leaf className="w-4 h-4" />
                      <span>Residue Monetization</span>
                    </span>
                    <span className="text-[11px] font-mono text-[#8A777A]">Farmer & Buyer Roles</span>
                  </div>
                  <p className="text-[11px] text-[#6E5D61] leading-normal">
                    Helps prevent crop burning by bridging commercial biofuel/compost purchasers directly with local harvesting communities.
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React', 'Vite', 'Tailwind CSS'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-[#F8F3EF] text-[#2D181C] border border-[#781D29]/15 hover:border-[#781D29] hover:text-[#781D29] transition-all cursor-default shadow-2xs"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-5 mt-6 border-t border-[#781D29]/10">
                <span className="text-[11px] font-mono text-[#8A777A] font-semibold">
                  Marketplace Architecture
                </span>
                <motion.button
                  id="btn-details-erpatu"
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedProject(PROJECTS[1])}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FDF2F4] border border-[#781D29]/30 text-[#781D29] hover:bg-[#781D29] hover:text-white text-xs font-bold transition-all group/btn shadow-xs"
                >
                  <span>View Details</span>
                  <Maximize2 className="w-3.5 h-3.5 group-hover/btn:rotate-45 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* PROJECT 3: CARZIAN (Slide-in from RIGHT with elastic spring) */}
            <motion.div
              id="project-card-carzian"
              initial={{ opacity: 0, x: 70, rotate: 1.5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-3xl bg-[#FFFFFF] border-2 border-[#781D29]/15 p-7 sm:p-8 shadow-[0_10px_35px_rgba(120,29,41,0.06)] hover:shadow-[0_20px_45px_rgba(120,29,41,0.16)] hover:border-[#781D29]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black px-3 py-1 rounded-full bg-[#781D29] text-white">
                    03
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#781D29] bg-[#FDF2F4] px-3 py-1 rounded-full border border-[#781D29]/25">
                    Client Web Presence
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#2D181C] tracking-tight group-hover:text-[#781D29] transition-colors">
                    CARZIAN
                  </h3>
                  <p className="text-xs font-bold text-[#781D29] mt-0.5">
                    Informational Automotive Spa Digital Experience
                  </p>
                </div>

                <p className="text-sm text-[#4A3B3E] leading-relaxed">
                  A modern informational web experience for a car spa business, presenting services, contact information and social media presence.
                </p>

                {/* Direct features card */}
                <div className="p-4 rounded-2xl bg-[#F8F3EF] border border-[#781D29]/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-bold text-[#2D181C]">
                    <span className="flex items-center gap-1.5 text-[#781D29]">
                      <Car className="w-4 h-4" />
                      <span>Services & Contact</span>
                    </span>
                    <span className="text-[11px] font-mono text-[#8A777A]">Verified Scope</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-[#6E5D61]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#781D29]" />
                      <span>Detailed ceramic, coating, and detailing service packages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#781D29]" />
                      <span>One-tap contact information, location details and social channels</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React', 'Tailwind CSS', 'Responsive Web Design'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-[#F8F3EF] text-[#2D181C] border border-[#781D29]/15 hover:border-[#781D29] hover:text-[#781D29] transition-all cursor-default shadow-2xs"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-5 mt-6 border-t border-[#781D29]/10">
                <span className="text-[11px] font-mono text-[#8A777A] font-semibold">
                  Web Structure & Scope
                </span>
                <motion.button
                  id="btn-details-carzian"
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedProject(PROJECTS[2])}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FDF2F4] border border-[#781D29]/30 text-[#781D29] hover:bg-[#781D29] hover:text-white text-xs font-bold transition-all group/btn shadow-xs"
                >
                  <span>View Details</span>
                  <Maximize2 className="w-3.5 h-3.5 group-hover/btn:rotate-45 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

          </div>

          {/* ==========================================================
              ROW 3: TWO COLUMNS (YAADRAKHO - REAL 3D CARD FLIP DEMO & COUNTER APP)
              ========================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* PROJECT 4: YAADRAKHO (True 3D Card Flip Game) */}
            <motion.div
              id="project-card-yaadrakho"
              initial={{ opacity: 0, scale: 0.9, y: 35 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-3xl bg-[#FFFFFF] border-2 border-[#781D29]/15 p-7 sm:p-8 shadow-[0_10px_35px_rgba(120,29,41,0.06)] hover:shadow-[0_20px_45px_rgba(120,29,41,0.16)] hover:border-[#781D29]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black px-3 py-1 rounded-full bg-[#781D29] text-white">
                    04
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10B981] bg-[#ECFDF5] px-2.5 py-1 rounded-full border border-[#10B981]/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      COMPLETED
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#781D29] bg-[#FDF2F4] px-3 py-1 rounded-full border border-[#781D29]/25">
                      Interactive Game Logic
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#2D181C] tracking-tight group-hover:text-[#781D29] transition-colors">
                    YAADRAKHO — COMPLETED
                  </h3>
                  <p className="text-xs font-bold text-[#781D29] mt-0.5">
                    Festive Memory Challenge Game
                  </p>
                </div>

                <p className="text-sm text-[#4A3B3E] leading-relaxed">
                  A festive memory challenge game inspired by Ganesh Chaturthi where players watch, remember and find matching cards while progressing through increasingly challenging rounds.
                </p>

                {/* Interactive True 3D Flip Card Sandbox */}
                <div className="p-4 rounded-2xl bg-[#F8F3EF] border border-[#781D29]/15 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[#2D181C]">
                    <span className="flex items-center gap-1.5 text-[#781D29]">
                      <Gamepad2 className="w-4 h-4" />
                      <span>Playable 3D Card Matcher</span>
                    </span>
                    <button
                      type="button"
                      onClick={resetYaadrakho}
                      className="text-[10px] font-mono text-[#781D29] hover:underline flex items-center gap-1 font-bold"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  </div>

                  {/* 3D Perspective Card Grid */}
                  <div className="grid grid-cols-2 gap-2.5 perspective-1000">
                    {yaadrakhoCards.map((card) => (
                      <div
                        key={card.id}
                        onClick={() => toggleYaadrakhoCard(card.id)}
                        className="cursor-pointer h-16 relative preserve-3d transition-transform duration-500 rounded-xl"
                        style={{
                          transform: card.flipped ? 'rotateY(0deg)' : 'rotateY(180deg)',
                        }}
                      >
                        {/* Front Face (Flipped / Revealed) */}
                        <div className="absolute inset-0 backface-hidden rounded-xl bg-[#FFFFFF] border-2 border-[#781D29]/40 flex items-center justify-center gap-1.5 font-bold text-xs text-[#2D181C] shadow-xs">
                          <span className="text-lg">{card.icon}</span>
                          <span>{card.label}</span>
                        </div>

                        {/* Back Face (Hidden) */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-gradient-to-br from-[#781D29] to-[#8D1B2D] text-white flex items-center justify-center text-xs font-mono font-bold shadow-xs">
                          <span>? TAP</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#6E5D61] pt-1">
                    <span>Click any card to flip in 3D</span>
                    <span className="font-mono text-[#10B981] font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      Active Game
                    </span>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React', 'Vite', 'CSS 3D Animation', 'JavaScript'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-[#F8F3EF] text-[#2D181C] border border-[#781D29]/15 hover:border-[#781D29] hover:text-[#781D29] transition-all cursor-default shadow-2xs"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-5 mt-6 border-t border-[#781D29]/10">
                <span className="text-[11px] font-mono text-[#8A777A] font-semibold">
                  Game Logic & Rules
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <motion.a
                    id="btn-live-demo-yaadrakho"
                    href="https://bossyaadrakho-game.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#781D29] via-[#8D1B2D] to-[#5C141E] text-white hover:shadow-[0_8px_25px_rgba(120,29,41,0.4)] text-xs font-extrabold transition-all shadow-md group/demo border border-[#C0394B]/30 tracking-wider uppercase"
                  >
                    <span>LIVE DEMO →</span>
                  </motion.a>

                  <motion.button
                    id="btn-details-yaadrakho"
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedProject(PROJECTS[3])}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#FDF2F4] border border-[#781D29]/30 text-[#781D29] hover:bg-[#781D29] hover:text-white text-xs font-bold transition-all group/btn shadow-xs"
                  >
                    <span>Details</span>
                    <Maximize2 className="w-3.5 h-3.5 group-hover/btn:rotate-45 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* PROJECT 5: COUNTER APP (Interactive State Counter with Bounce) */}
            <motion.div
              id="project-card-counter-app"
              initial={{ opacity: 0, scale: 0.9, y: 35 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-3xl bg-[#FFFFFF] border-2 border-[#781D29]/15 p-7 sm:p-8 shadow-[0_10px_35px_rgba(120,29,41,0.06)] hover:shadow-[0_20px_45px_rgba(120,29,41,0.16)] hover:border-[#781D29]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black px-3 py-1 rounded-full bg-[#781D29] text-white">
                    05
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#781D29] bg-[#FDF2F4] px-3 py-1 rounded-full border border-[#781D29]/25">
                    Frontend Architecture
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#2D181C] tracking-tight group-hover:text-[#781D29] transition-colors">
                    COUNTER APP
                  </h3>
                  <p className="text-xs font-bold text-[#781D29] mt-0.5">
                    Interactive State Management & Web Interaction
                  </p>
                </div>

                <p className="text-sm text-[#4A3B3E] leading-relaxed">
                  A clean interactive frontend project demonstrating predictable state changes, component boundaries and responsive user interaction.
                </p>

                {/* Interactive Counter Sandbox with Pulsing Maroon Spring */}
                <div className="p-4 rounded-2xl bg-[#F8F3EF] border border-[#781D29]/15 space-y-3 text-center">
                  <div className="flex items-center justify-between text-xs font-bold text-[#2D181C]">
                    <span className="flex items-center gap-1.5 text-[#781D29]">
                      <Sliders className="w-4 h-4" />
                      <span>Interactive State Sandbox</span>
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#781D29]">Live Test</span>
                  </div>

                  <div className="py-2">
                    <motion.span
                      key={counterEffectKey}
                      initial={{ scale: 0.6, y: -8 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                      className="inline-block text-5xl font-black font-mono text-[#781D29] tracking-tight"
                    >
                      {counterValue}
                    </motion.span>
                  </div>

                  <div className="flex items-center justify-center gap-2.5">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={decrementCounter}
                      className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#781D29]/20 text-lg font-bold text-[#781D29] hover:bg-[#FDF2F4] transition-all shadow-xs"
                      aria-label="Decrement"
                    >
                      -
                    </motion.button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setCounterValue(0);
                        setCounterEffectKey((k) => k + 1);
                      }}
                      className="px-4 h-10 rounded-xl bg-[#FFFFFF] border border-[#781D29]/20 text-xs font-bold text-[#6E5D61] hover:text-[#781D29] hover:bg-[#FDF2F4] transition-all shadow-xs"
                    >
                      Reset
                    </motion.button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={incrementCounter}
                      className="w-10 h-10 rounded-xl bg-[#781D29] text-white text-lg font-bold hover:bg-[#8D1B2D] shadow-[0_4px_15px_rgba(120,29,41,0.3)] transition-all"
                      aria-label="Increment"
                    >
                      +
                    </motion.button>
                  </div>

                  <p className="text-[10px] text-[#6E5D61] font-medium">
                    Demonstrating zero unwanted re-renders & deterministic state boundaries
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React', 'JavaScript', 'CSS'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-[#F8F3EF] text-[#2D181C] border border-[#781D29]/15 hover:border-[#781D29] hover:text-[#781D29] transition-all cursor-default shadow-2xs"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-5 mt-6 border-t border-[#781D29]/10">
                <span className="text-[11px] font-mono text-[#8A777A] font-semibold">
                  State Model & Scope
                </span>
                <motion.button
                  id="btn-details-counter-app"
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedProject(PROJECTS[4])}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FDF2F4] border border-[#781D29]/30 text-[#781D29] hover:bg-[#781D29] hover:text-white text-xs font-bold transition-all group/btn shadow-xs"
                >
                  <span>View Details</span>
                  <Maximize2 className="w-3.5 h-3.5 group-hover/btn:rotate-45 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Project Breakdown Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
