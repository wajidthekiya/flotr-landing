import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[var(--color-bg)] pt-20 pb-10">
      {/* Energetic Glowing Orbs for Light/Vibrant Theme */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[var(--color-accent)] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] right-[20%] w-[30vw] h-[30vw] bg-[#FF90E8] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Background Video Container with Thick Border (Sticker Layout) */}
      <div className="absolute inset-0 z-0 p-4 md:p-8 pt-24 md:pt-32">
        <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/40">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform"
            src="/optimized-hero-bg.mp4"
          />
          {/* Vibrant Light Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-[var(--color-bg)]/80"></div>
          <div className="absolute inset-0 bg-[var(--color-primary)] mix-blend-overlay opacity-20"></div>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
        </div>
      </div>

      {/* Floating UI Elements (App Feel - Sticker Vibe) */}
      <motion.div 
        initial={{ opacity: 0, x: -50, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1, type: "spring", bounce: 0.5 }}
        whileHover={{ scale: 1.05, rotate: -2 }}
        className="hidden md:flex absolute top-1/4 md:left-16 z-20 bg-white/90 backdrop-blur-xl border border-white rounded-[2rem] px-6 py-4 items-center gap-4 shadow-xl cursor-default"
      >
        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center text-xl md:text-2xl shadow-inner border border-green-200">
           💸
        </div>
        <div className="flex flex-col">
           <span className="font-heading font-bold text-[var(--color-primary)] text-xs uppercase tracking-wider">Prices Drop</span>
           <span className="font-body font-bold text-gray-800 text-sm md:text-base">Trips from ₹1500</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.2, type: "spring", bounce: 0.5 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        className="hidden md:flex absolute bottom-[25%] right-16 z-20 bg-white/90 backdrop-blur-xl border border-white rounded-[2rem] px-6 py-4 items-center gap-4 shadow-xl cursor-default"
      >
        <div className="flex -space-x-3 md:-space-x-4">
          <img src="https://i.pravatar.cc/100?img=5" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm" alt="user" />
          <img src="https://i.pravatar.cc/100?img=6" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm" alt="user" />
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm bg-[var(--color-accent)] flex items-center justify-center text-xs md:text-sm font-bold text-black">+24</div>
        </div>
        <div className="flex flex-col">
           <span className="font-heading font-bold text-[var(--color-primary)] text-xs uppercase tracking-wider">Social Proof</span>
           <span className="font-body font-bold text-gray-800 text-sm md:text-base">See who's joining</span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center mt-10 md:mt-20 pointer-events-none">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 bg-white/80 backdrop-blur-md border border-[var(--color-accent)] text-[#090514] px-6 py-2.5 rounded-full font-body font-bold text-sm md:text-base tracking-widest uppercase shadow-[0_10px_30px_rgba(214,244,88,0.3)] pointer-events-auto hover:-translate-y-1 transition-transform"
        >
          <span className="text-xl">🔥</span> The Video-First Trip App
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-heading font-extrabold text-[#111] text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tight leading-[0.9] mb-8 drop-shadow-2xl"
          style={{ textShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
        >
          SCROLL. <br className="hidden md:block"/> BOOK. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[#FF90E8] filter drop-shadow-lg">PACK.</span>
        </motion.h1>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 md:gap-6 pointer-events-auto"
        >
          <a
            href="https://play.google.com/store/apps/details?id=ai.flotr.flotr&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[var(--color-primary)] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-black hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(151,123,242,0.4)] transition-all duration-300 flex items-center justify-center gap-3"
          >
            Get the App <span className="text-xl sm:text-2xl">⚡</span>
          </a>
          
          <Link 
            to="/agencies" 
            className="w-full sm:w-auto bg-white/90 backdrop-blur-md border border-gray-200 text-black px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-[var(--color-accent)] hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_20px_40px_rgba(214,244,88,0.4)] transition-all duration-300 flex items-center justify-center gap-3"
          >
            For verified agencies <span className="text-xl sm:text-2xl">🤝</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}