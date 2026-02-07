import React, { useState, useEffect } from 'react';
import {
  Instagram, Send, MapPin, Award, GraduationCap,
  Linkedin, Github, User, Mail, Briefcase,
  ExternalLink, Globe, Play, Code, Palette, Zap,
  Terminal, Cpu, ChevronRight, FileText, Twitter, Youtube,
  Framer, Atom, Database
} from 'lucide-react';
import { BentoCard } from './components/BentoCard';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const profile = {
    name: "M.Qodirbek",
    role: "Oil & Gas Engineer & Creative Developer",
    username: "@engineer_of_depth",
    avatar: "/avatar.jpg"
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#020205] text-white p-6 md:p-12 font-sans overflow-x-hidden selection:bg-purple-500/30">

      {/* Aurora Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[160px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Mouse Spotlight */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.08), transparent 80%)`
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Left Column (Logo & Nav, Profile, Primary Action) */}
        <div className="md:col-span-5 flex flex-col gap-6">

          {/* Logo & Simple Nav */}
          <motion.div {...fadeInUp} className="glass-card rounded-[40px] p-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-500/20">
                M
              </div>
              <span className="text-2xl font-bold tracking-tight">Qayumov</span>
            </div>
            <nav className="hidden sm:flex flex-col text-right text-white/50 font-medium text-sm">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Work</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </nav>
          </motion.div>

          {/* Profile Card */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="glass-card rounded-[40px] p-8 flex flex-col gap-6 relative overflow-hidden group">
            <div className="flex items-center gap-6">
              <div className="relative w-32 h-32 flex-shrink-0">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-xl group-hover:blur-2xl transition-all" />
                <img src={profile.avatar} className="relative w-full h-full rounded-3xl object-cover border border-white/10 shadow-2xl" alt="Profile" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                  Oil & Gas Engineer & <br /> Creative Developer
                </h1>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">available for work</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Large Action Card (Resume) */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-[40px] p-10 flex items-center justify-between group hover:bg-white/[0.05] transition-all"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">Mening Rezyumem.</h2>
              <p className="text-white/40 font-medium">To'liq CV yuklab olish uchun bosing.</p>
            </div>
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
              <ChevronRight size={28} />
            </div>
          </motion.a>
        </div>

        {/* Right Column (Featured, Recent, Skills, Contact) */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-max">

          {/* Featured Projects */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="sm:col-span-2 glass-card rounded-[40px] p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Asosiy Loyihalar</h3>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Barchasi</a>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 relative overflow-hidden group cursor-pointer hover:border-purple-500/30 transition-all">
                  <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {i === 1 && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <Play fill="currentColor" className="w-8 h-8 opacity-40 mb-2" />
                      <span className="text-[10px] font-bold uppercase tracking-tighter opacity-30">YukGO</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education / Blog Posts (Adapted) */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="glass-card rounded-[40px] p-8 flex flex-col justify-between min-h-[180px]">
            <h4 className="font-bold text-white/40 uppercase text-xs tracking-widest mb-4">Ta'lim</h4>
            <div>
              <p className="font-bold text-lg leading-tight">Gubkin University</p>
              <p className="text-white/40 text-sm mt-1">Oil & Gas (2021-2025)</p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="glass-card rounded-[40px] p-8 flex flex-col justify-between min-h-[180px]">
            <h4 className="font-bold text-white/40 uppercase text-xs tracking-widest mb-4">Daraja</h4>
            <div>
              <p className="font-bold text-lg leading-tight">Master's Degree</p>
              <p className="text-white/40 text-sm mt-1">Innovatsion texnologiyalar @ TDTU</p>
            </div>
          </motion.div>

          {/* Skills & Tools */}
          <motion.div {...fadeInUp} transition={{ delay: 0.6 }} className="glass-card rounded-[40px] p-8 flex flex-col gap-6">
            <h3 className="text-xl font-bold">Ko'nikmalar</h3>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group hover:bg-white hover:text-black transition-all">
                <Atom size={20} />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group hover:bg-white hover:text-black transition-all">
                <Cpu size={20} />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group hover:bg-white hover:text-black transition-all">
                <Database size={20} />
              </div>
            </div>
          </motion.div>

          {/* Get in Touch */}
          <motion.div {...fadeInUp} transition={{ delay: 0.7 }} className="glass-card rounded-[40px] p-8 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-glow">Bog'lanish</h3>
            <p className="text-sm text-white/40 font-medium">qayumov@example.com</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Send size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-20 text-center text-white/10 text-xs font-bold uppercase tracking-[0.2em]"
      >
        Designed with Love & code by Qayumov • 2026
      </motion.footer>
    </div>
  );
}

export default App;
