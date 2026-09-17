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
  Sliders
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // JUDAM Mini Interactive Memory Game State
  const [judamCards, setJudamCards] = useState([
    { id: 0, label: 'Modak 🥮', match: 1, flipped: true },
    { id: 1, label: 'Diya 🪔', match: 2, flipped: true },
    { id: 2, label: 'Modak 🥮', match: 1, flipped: true },
    { id: 3, label: 'Diya 🪔', match: 2, flipped: true },
  ]);

  const toggleJudamCard = (id: number) => {
    setJudamCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, flipped: !c.flipped } : c))
    );
  };

  // Counter App Interactive State
  const [counterValue, setCounterValue] = useState<number>(5);

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-white/[0.08] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-[#3B82F6]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#8B5CF6]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Numbered Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#60A5FA] mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              <span>03 — PROJECTS</span>
            </div>
            <h2
              id="projects-section-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase"
            >
              THINGS I'VE BUILT
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2.5 max-w-2xl font-normal">
              A curated collection of full-stack ecosystems, marketplaces, informational web platforms, and interactive frontend applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xs font-mono font-bold text-white bg-[#121624] px-4 py-2 rounded-full border border-white/[0.08] flex items-center gap-2 w-fit shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-[#E2E8F0]">5 Architected Builds</span>
          </motion.div>
        </div>

        {/* Bento Editorial Projects Composition */}
        <div className="space-y-8">

          {/* ==========================================================
              PROJECT 1: FRESHVERSE (Hero Bento Card - Full Width / Large)
              ========================================================== */}
          <motion.div
            id="project-card-freshverse"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group rounded-3xl bg-[#111422] border border-white/[0.08] p-7 sm:p-9 lg:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.18)] hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
          >
            {/* Top decorative accent gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-black px-3 py-1 rounded-full bg-white text-[#090B10] shadow-sm">
                    01
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA] bg-blue-500/15 px-3 py-1 rounded-full border border-blue-500/30">
                    Full-Stack Ecosystem
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight group-hover:text-[#60A5FA] transition-colors leading-[1.05]">
                    FRESHVERSE
                  </h3>
                  <p className="text-sm font-semibold text-[#94A3B8] mt-1.5">
                    Connected Food & Grocery Supply Ecosystem Platform
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                  A full-stack platform built around a connected food and grocery supply ecosystem involving customers, suppliers, inventory, orders, deliveries, ratings, complaints and notifications.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React', 'Supabase', 'SQL', 'JavaScript/TypeScript'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3.5 py-1.5 text-xs font-mono font-semibold rounded-xl bg-[#171C2E] text-[#E2E8F0] border border-white/[0.08] hover:border-blue-400/50 hover:text-white transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-white/[0.08]">
                  <span className="text-xs font-mono text-[#94A3B8] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-ping" />
                    Full-Stack Ecosystem Architecture
                  </span>

                  <motion.button
                    id="btn-details-freshverse"
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedProject(PROJECTS[0])}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white hover:from-[#2563EB] hover:to-[#1D4ED8] text-xs font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.35)] group/btn border border-blue-400/30"
                  >
                    <span>View Architecture</span>
                    <Maximize2 className="w-3.5 h-3.5 group-hover/btn:rotate-45 transition-transform" />
                  </motion.button>
                </div>
              </div>

              {/* Right Abstract Visual: Multi-stakeholder ecosystem preview */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-[#161B2C] border border-white/[0.08] space-y-4 group-hover:border-blue-500/30 transition-colors shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono font-bold text-white">
                    <span className="flex items-center gap-2 text-[#60A5FA]">
                      <ShoppingBag className="w-4 h-4" />
                      <span>Ecosystem Flow</span>
                    </span>
                    <span className="text-[#94A3B8]">Supabase · SQL</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-[#121624] border border-white/[0.06] hover:border-blue-500/40 transition-colors">
                      <span className="block text-[10px] font-mono text-[#64748B] uppercase">Stakeholder</span>
                      <span className="font-bold text-white">Suppliers & Stock</span>
                      <span className="block text-[11px] text-[#94A3B8] mt-0.5">Inventory alerts</span>
                    </div>

                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                      <span className="block text-[10px] font-mono text-[#60A5FA] uppercase">Consumer</span>
                      <span className="font-bold text-[#60A5FA]">Order Pipeline</span>
                      <span className="block text-[11px] text-[#94A3B8] mt-0.5">Live cart & track</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#121624] border border-white/[0.06] hover:border-blue-500/40 transition-colors">
                      <span className="block text-[10px] font-mono text-[#64748B] uppercase">Operations</span>
                      <span className="font-bold text-white">Dispatch Nodes</span>
                      <span className="block text-[11px] text-[#94A3B8] mt-0.5">Doorstep delivery</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#121624] border border-white/[0.06] hover:border-blue-500/40 transition-colors">
                      <span className="block text-[10px] font-mono text-[#64748B] uppercase">Feedback</span>
                      <span className="font-bold text-white">Ratings & Issues</span>
                      <span className="block text-[11px] text-[#94A3B8] mt-0.5">Complaint triage</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#121624] border border-white/[0.06] text-[11px] text-[#94A3B8] flex items-center justify-between">
                    <span>Synchronized real-time notification layer</span>
                    <span className="font-mono text-[#34D399] font-bold">READY</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ==========================================================
              ROW 2: TWO COLUMNS (ERPATU & CARZIAN)
              ========================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* PROJECT 2: ERPATU */}
            <motion.div
              id="project-card-erpatu"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-3xl bg-[#111422] border border-white/[0.08] p-7 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(249,115,22,0.15)] hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black px-3 py-1 rounded-full bg-white text-[#090B10]">
                    02
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FB923C] bg-orange-500/15 px-3 py-1 rounded-full border border-orange-500/30">
                    Agri-Waste Marketplace
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#FB923C] transition-colors">
                    ERPATU
                  </h3>
                  <p className="text-xs font-semibold text-[#94A3B8] mt-0.5">
                    Sustainable Agricultural Residue Commerce
                  </p>
                </div>

                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  An agricultural-waste marketplace connecting farmers with buyers so agricultural waste can be sold instead of being burned or wasted.
                </p>

                {/* Interactive Concept Banner */}
                <div className="p-4 rounded-2xl bg-[#161B2C] border border-white/[0.06] space-y-2 text-xs">
                  <div className="flex items-center justify-between font-semibold text-white">
                    <span className="flex items-center gap-1.5 text-[#FB923C]">
                      <Leaf className="w-4 h-4" />
                      <span>Residue Monetization</span>
                    </span>
                    <span className="text-[11px] font-mono text-[#94A3B8]">Farmer & Buyer Roles</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-normal">
                    Helps prevent crop burning by bridging commercial biofuel/compost purchasers directly with local harvesting communities.
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React', 'Vite', 'Tailwind CSS'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 text-xs font-mono font-semibold rounded-lg bg-[#171C2E] text-[#E2E8F0] border border-white/[0.08] hover:border-orange-400/50 hover:text-white transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-5 mt-6 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono text-[#94A3B8]">
                  Architecture & Marketplace Scope
                </span>
                <motion.button
                  id="btn-details-erpatu"
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedProject(PROJECTS[1])}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#171C2E] border border-white/[0.15] text-white hover:bg-[#FB923C] hover:text-[#090B10] hover:border-transparent text-xs font-bold transition-all group/btn shadow-sm"
                >
                  <span>View Details</span>
                  <Maximize2 className="w-3.5 h-3.5 group-hover/btn:rotate-45 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* PROJECT 3: CARZIAN */}
            <motion.div
              id="project-card-carzian"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-3xl bg-[#111422] border border-white/[0.08] p-7 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(139,92,246,0.15)] hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black px-3 py-1 rounded-full bg-white text-[#090B10]">
                    03
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A5B4FC] bg-purple-500/15 px-3 py-1 rounded-full border border-purple-500/30">
                    Client Web Presence
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#A5B4FC] transition-colors">
                    CARZIAN
                  </h3>
                  <p className="text-xs font-semibold text-[#94A3B8] mt-0.5">
                    Informational Automotive Spa Digital Experience
                  </p>
                </div>

                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  A modern informational web experience for a car spa business, presenting services, contact information and social media presence.
                </p>

                {/* Direct features card */}
                <div className="p-4 rounded-2xl bg-[#161B2C] border border-white/[0.06] space-y-2 text-xs">
                  <div className="flex items-center justify-between font-semibold text-white">
                    <span className="flex items-center gap-1.5 text-[#60A5FA]">
                      <Car className="w-4 h-4" />
                      <span>Services & Contact</span>
                    </span>
                    <span className="text-[11px] font-mono text-[#94A3B8]">Verified Scope</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-[#94A3B8]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                      <span>Detailed ceramic, coating, and detailing service packages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                      <span>One-tap contact information, location details and social presence</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React', 'Tailwind CSS', 'Responsive Web Design'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 text-xs font-mono font-semibold rounded-lg bg-[#171C2E] text-[#E2E8F0] border border-white/[0.08] hover:border-purple-400/50 hover:text-white transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-5 mt-6 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono text-[#94A3B8]">
                  Web Structure & Scope
                </span>
                <motion.button
                  id="btn-details-carzian"
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedProject(PROJECTS[2])}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#171C2E] border border-white/[0.15] text-white hover:bg-[#6366F1] hover:text-white hover:border-transparent text-xs font-bold transition-all group/btn shadow-sm"
                >
                  <span>View Details</span>
                  <Maximize2 className="w-3.5 h-3.5 group-hover/btn:rotate-45 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

          </div>

          {/* ==========================================================
              ROW 3: TWO COLUMNS (JUDAM & COUNTER APP)
              ========================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* PROJECT 4: JUDAM */}
            <motion.div
              id="project-card-judam"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-3xl bg-[#111422] border border-white/[0.08] p-7 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(239,68,68,0.15)] hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black px-3 py-1 rounded-full bg-white text-[#090B10]">
                    04
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F87171] bg-red-500/15 px-3 py-1 rounded-full border border-red-500/30">
                    Interactive Game Logic
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#F87171] transition-colors">
                    JUDAM
                  </h3>
                  <p className="text-xs font-semibold text-[#94A3B8] mt-0.5">
                    Festive Memory Challenge Game
                  </p>
                </div>

                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  A festive memory challenge game inspired by Ganesh Chaturthi where players watch, remember and find matching cards while progressing through increasingly challenging rounds.
                </p>

                {/* Interactive Mini Playable Sandbox with Animated Card Flip */}
                <div className="p-4 rounded-2xl bg-[#161B2C] border border-white/[0.06] space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span className="flex items-center gap-1.5">
                      <Gamepad2 className="w-4 h-4 text-[#F87171]" />
                      <span>Mini Card Matcher Demo</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#60A5FA]">Tap to Flip</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {judamCards.map((card) => (
                      <motion.button
                        key={card.id}
                        type="button"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.94 }}
                        onClick={() => toggleJudamCard(card.id)}
                        className={`py-3.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 border ${
                          card.flipped
                            ? 'bg-[#1D243A] border-blue-500/50 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                            : 'bg-[#121624] border-white/[0.08] text-[#64748B]'
                        }`}
                      >
                        {card.flipped ? card.label : '❓ Hidden'}
                      </motion.button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#94A3B8] pt-1">
                    <span>Round progression logic & audio hooks</span>
                    <span className="font-mono text-[#34D399] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
                      Active
                    </span>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React', 'Vite', 'CSS Animation', 'JavaScript'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 text-xs font-mono font-semibold rounded-lg bg-[#171C2E] text-[#E2E8F0] border border-white/[0.08] hover:border-red-400/50 hover:text-white transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-5 mt-6 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono text-[#94A3B8]">
                  Game Rules & Architecture
                </span>
                <motion.button
                  id="btn-details-judam"
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedProject(PROJECTS[3])}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#171C2E] border border-white/[0.15] text-white hover:bg-[#EF4444] hover:text-white hover:border-transparent text-xs font-bold transition-all group/btn shadow-sm"
                >
                  <span>View Details</span>
                  <Maximize2 className="w-3.5 h-3.5 group-hover/btn:rotate-45 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* PROJECT 5: COUNTER APP */}
            <motion.div
              id="project-card-counter-app"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-3xl bg-[#111422] border border-white/[0.08] p-7 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(59,130,246,0.18)] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black px-3 py-1 rounded-full bg-white text-[#090B10]">
                    05
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA] bg-blue-500/15 px-3 py-1 rounded-full border border-blue-500/30">
                    Frontend Component Architecture
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#60A5FA] transition-colors">
                    COUNTER APP
                  </h3>
                  <p className="text-xs font-semibold text-[#94A3B8] mt-0.5">
                    Interactive State Management & Web Interaction
                  </p>
                </div>

                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  A clean interactive frontend project demonstrating predictable state changes, component boundaries and responsive user interaction.
                </p>

                {/* Interactive Counter Sandbox with Pulsing Scale Bounce */}
                <div className="p-4 rounded-2xl bg-[#161B2C] border border-white/[0.06] space-y-3 text-center">
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span className="flex items-center gap-1.5">
                      <Sliders className="w-4 h-4 text-[#60A5FA]" />
                      <span>Interactive State Counter</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#60A5FA]">Live Test</span>
                  </div>

                  <div className="py-2">
                    <motion.span
                      key={counterValue}
                      initial={{ scale: 0.8, opacity: 0.5 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                      className="inline-block text-5xl font-extrabold font-mono text-white tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                    >
                      {counterValue}
                    </motion.span>
                  </div>

                  <div className="flex items-center justify-center gap-2.5">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCounterValue((v) => Math.max(0, v - 1))}
                      className="w-10 h-10 rounded-xl bg-[#1D243A] border border-white/[0.1] text-lg font-bold text-white hover:bg-[#252E4B] hover:border-blue-400/50 transition-all shadow-md"
                      aria-label="Decrement"
                    >
                      -
                    </motion.button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCounterValue(0)}
                      className="px-4 h-10 rounded-xl bg-[#1D243A] border border-white/[0.1] text-xs font-semibold text-[#94A3B8] hover:text-white hover:bg-[#252E4B] transition-all shadow-md"
                    >
                      Reset
                    </motion.button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCounterValue((v) => v + 1)}
                      className="w-10 h-10 rounded-xl bg-[#3B82F6] text-white text-lg font-bold hover:bg-[#2563EB] shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all"
                      aria-label="Increment"
                    >
                      +
                    </motion.button>
                  </div>

                  <p className="text-[10px] text-[#94A3B8]">
                    Demonstrating zero unwanted re-renders & deterministic state boundaries
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React', 'JavaScript', 'CSS'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 text-xs font-mono font-semibold rounded-lg bg-[#171C2E] text-[#E2E8F0] border border-white/[0.08] hover:border-blue-400/50 hover:text-white transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-5 mt-6 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono text-[#94A3B8]">
                  State Model & Scope
                </span>
                <motion.button
                  id="btn-details-counter-app"
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedProject(PROJECTS[4])}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#171C2E] border border-white/[0.15] text-white hover:bg-[#3B82F6] hover:text-white hover:border-transparent text-xs font-bold transition-all group/btn shadow-sm"
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
