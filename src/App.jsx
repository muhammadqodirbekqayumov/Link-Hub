import React, { useState, useEffect } from 'react';
import {
  Instagram, Send, MapPin, Award, GraduationCap,
  Linkedin, Github, User, Mail, Briefcase,
  ExternalLink, Globe, Play, Code, Palette, Zap,
  Terminal, Cpu, ChevronRight
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
    name: "Muhammadqodirbek",
    surname: "Qayumov",
    role: "Oil & Gas Engineer",
    username: "@engineer_of_depth",
    avatar: "/avatar.jpg" // Removed random query param to prevent flickering
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, type: "spring" }
    })
  };

  return (
    <div className="relative min-h-screen w-full bg-[#000000] text-white p-4 py-12 md:p-8 flex flex-col items-center font-sans overflow-x-hidden selection:bg-blue-500/30">

      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
        <div className="absolute inset-0 bg-noise opacity-20 mixed-blend-overlay" />
      </div>

      {/* Mouse Spotlight (Subtle) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)] z-10">

        {/* 1. Main Profile Card (Big Block) */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="md:col-span-2 md:row-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-8">
              <div className="relative w-24 h-24 md:w-28 md:h-28">
                <div className="absolute inset-0 rounded-full bg-blue-500/50 blur-md animate-pulse" />
                <img
                  src={profile.avatar}
                  alt="Avatar"
                  className="relative w-full h-full rounded-full border-2 border-white/10 object-cover shadow-2xl"
                />
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#000] rounded-full flex items-center justify-center border border-white/10">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider mb-2"
                >
                  <Terminal size={12} />
                  AVAILABLE FOR WORK
                </motion.div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                  {profile.name} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {profile.surname}
                  </span>
                </h1>
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Raqamli texnologiyalar va energetika chorrahasida innovatsion yechimlar.
              <span className="text-gray-200 block mt-2 font-medium">
                Ma'lumotlar bilan ishlash, tahlil va kelajak muhandisligi.
              </span>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 relative z-10">
            <div className="group/tag flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
              <Briefcase size={16} className="text-blue-400 group-hover/tag:scale-110 transition-transform" />
              <span className="text-sm font-medium text-gray-300">Oil & Gas Engineer</span>
            </div>
            <div className="group/tag flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
              <MapPin size={16} className="text-purple-400 group-hover/tag:scale-110 transition-transform" />
              <span className="text-sm font-medium text-gray-300">Tashkent, UZ</span>
            </div>
          </div>
        </motion.div>

        {/* 2. Social & Contact Block */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="md:col-span-1 md:row-span-1 glass-card rounded-3xl p-6 flex flex-col justify-center gap-4 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Send size={80} />
          </div>

          <h3 className="text-xl font-bold text-white relative z-10">Aloqa</h3>
          <div className="flex gap-4 relative z-10">
            {[
              { icon: Github, href: "#", color: "hover:bg-gray-800" },
              { icon: Instagram, href: "https://instagram.com/engineer_of_depth", color: "hover:bg-pink-900/50" },
              { icon: Send, href: "https://t.me/QayumovMuhammadqodirbek", color: "hover:bg-blue-900/50" }
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 transition-colors ${s.color}`}
              >
                <s.icon size={22} className="text-gray-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 3. Resume / CV DL */}
        <BentoCard
          title="CV Yuklash"
          subtitle="Rezyume (PDF)"
          href="#"
          icon={ExternalLink}
          className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-blue-600 to-indigo-700 !border-none"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
          <div className="absolute bottom-4 right-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <ChevronRight className="text-white" />
            </div>
          </div>
        </BentoCard>


        {/* 4. Project: YukGO */}
        <BentoCard
          className="md:col-span-2 md:row-span-1 !bg-[#0f0f16] group overflow-hidden"
          title="YukGO Logistics"
          subtitle="Logistika tushunchasini o'zgartiruvchi platforma."
          href="https://t.me/YukGoLogistic/3"
        >
          <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/40 group-hover:scale-110 transition-transform">
            <Play fill="white" className="ml-1 text-white" />
          </div>
        </BentoCard>

        {/* 5. Education: Gubkin */}
        <BentoCard
          className="md:col-span-1 h-48 !bg-[#121212]"
          title="Gubkin University"
          subtitle="Neft va Gaz ishi (2021-2025)"
          icon={GraduationCap}
          header={
            <div className="mb-4 w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center border border-yellow-500/20">
              <GraduationCap size={20} />
            </div>
          }
        />

        {/* 6. Education: TDTU */}
        <BentoCard
          className="md:col-span-1 h-48 !bg-[#121212]"
          title="TDTU Masters"
          subtitle="Innovatsion texnologiyalar"
          icon={Zap}
          header={
            <div className="mb-4 w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center border border-red-500/20">
              <Zap size={20} />
            </div>
          }
        />

      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 text-gray-600 text-sm font-medium"
      >
        © 2026 Engineer of Depth. All rights reserved.
      </motion.footer>
    </div>
  );
}

export default App;

