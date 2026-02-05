import React from 'react';
import {
  Instagram, Send, MapPin, Award, GraduationCap,
  Linkedin, Github, User, Mail, Briefcase,
  ExternalLink, Globe, Play, Code, Palette, Zap
} from 'lucide-react';
import { BentoCard } from './components/BentoCard';
import { motion } from 'framer-motion';

function App() {
  const profile = {
    name: "Qayumov Muhammadqodirbek",
    role: "Oil & Gas Engineer",
    username: "@engineer_of_depth",
    avatar: "/avatar.jpg?v=" + Math.random(),
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white p-4 py-8 md:p-8 flex flex-col items-center md:justify-center font-sans selection:bg-blue-500/30">

      {/* Grid Container */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">

        {/* 1. Main Profile Card (Big Block) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 md:row-span-2 bg-[#121212] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group border border-white/5"
        >
          {/* Gradient Overlay */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-blue-900/20 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          {/* Top Content */}
          <div className="relative z-10">
            <div className="relative w-24 h-24 mb-6">
              <div className="absolute inset-0 rounded-full bg-blue-500 blur opacity-50 animate-pulse" />
              <img
                src={profile.avatar}
                alt="Avatar"
                className="relative w-full h-full rounded-full border-2 border-white/10 object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {profile.name}
            </h1>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Raqamli olamda energetika sohasini parvoz qildiruvchi premium yechimlar.
              Shunchaki muhandis emas, kelajakni quraman.
            </p>
          </div>

          {/* Bottom Tags */}
          <div className="mt-8 flex flex-wrap gap-3 relative z-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-purple-300 text-sm font-medium">
              <Briefcase size={16} />
              <span>Oil & Gas Engineer</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-blue-300 text-sm font-medium">
              <MapPin size={16} />
              <span>Tashkent, Uzbekistan</span>
            </div>
          </div>
        </motion.div>


        {/* 2. Top Right Card (Vibe Coding Style) */}
        <BentoCard
          className="md:col-span-1 md:row-span-2 bg-[#1e1e2e] !border-none relative"
          title="YukGO Logistics"
          subtitle="Logistika va yuk tashish xizmatlari."
          href="https://t.me/YukGoLogistic/3"
          header={
            <div className="absolute top-4 right-4 text-white/20">
              <ExternalLink size={24} />
            </div>
          }
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-[#121212] z-0" />
          <div className="relative z-10 mt-auto flex items-center justify-center h-full">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 hover:scale-110 transition-transform cursor-pointer">
              <Play fill="white" className="ml-1" />
            </div>
          </div>
        </BentoCard>


        {/* 3. Bottom Row Cards */}

        {/* Card 3: Gubkin */}
        <BentoCard
          className="md:col-span-1 h-48 bg-[#13131f] hover:bg-[#1c1c2e]"
          title="Gubkin University"
          subtitle="Neft va Gaz ishi (2021-2025)"
          icon={GraduationCap}
          header={
            <div className="mb-4 w-10 h-10 rounded-xl bg-blue-900/30 text-blue-400 flex items-center justify-center">
              <GraduationCap size={20} />
            </div>
          }
        />

        {/* Card 4: TDTU */}
        <BentoCard
          className="md:col-span-1 h-48 bg-[#1f1313] hover:bg-[#2e1c1c]"
          title="TDTU Masters"
          subtitle="Innovatsion texnologiyalar"
          icon={Zap}
          header={
            <div className="mb-4 w-10 h-10 rounded-xl bg-orange-900/30 text-orange-400 flex items-center justify-center">
              <Zap size={20} />
            </div>
          }
        />

        {/* Card 5: Portfolio */}
        <BentoCard
          className="md:col-span-1 h-48 bg-[#131f13] hover:bg-[#1c2e1c]"
          title="Portfolio"
          subtitle="Eng sara ishlarim jamlanmasi."
          icon={Briefcase}
          href="#"
          header={
            <div className="mb-4 w-10 h-10 rounded-xl bg-green-900/30 text-green-400 flex items-center justify-center">
              <Briefcase size={20} />
            </div>
          }
        />

      </div>

      {/* Footer Socials */}
      <div className="mt-12 flex gap-6 p-4 rounded-full bg-[#121212] border border-white/5">
        {[
          { icon: Github, href: "#" },
          { icon: Instagram, href: "https://instagram.com/engineer_of_depth" },
          { icon: Send, href: "https://t.me/QayumovMuhammadqodirbek" }
        ].map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            whileHover={{ y: -3, color: "#fff" }}
            className="text-gray-500 transition-colors"
            target="_blank"
          >
            <s.icon size={24} />
          </motion.a>
        ))}
      </div>

    </div>
  );
}

export default App;
