import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay, FaMapMarkerAlt } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[var(--color-deep)]">
      {/* Energetic Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--color-primary)] rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[var(--color-accent)] rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Background Video Container */}
      <div className="absolute inset-0 z-0 p-4 md:p-8">
        <div className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl glow-primary">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover scale-105"
            src="/hero-bg.mp4"
          />
          {/* Vibrant Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-deep)]/60 via-transparent to-[var(--color-deep)]/90"></div>
          <div className="absolute inset-0 bg-noise mix-blend-overlay"></div>
        </div>
      </div>

      {/* Floating UI Elements (App Feel) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, type: "spring" }}
        className="absolute top-1/4 left-8 md:left-16 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 shadow-xl"
      >
        <div className="w-3 h-3 rounded-full bg-[var(--color-accent)] animate-ping"></div>
        <span className="font-body font-medium text-white text-sm md:text-base">Live: Bali, Indonesia</span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="absolute bottom-1/3 right-8 md:right-16 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 shadow-xl"
      >
        <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
          <FaPlay className="text-white text-xs ml-1" />
        </div>
        <span className="font-body font-medium text-white text-sm md:text-base">Watch Stories</span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center mt-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="inline-block mb-6 bg-[var(--color-accent)] text-[var(--color-deep)] px-6 py-2 rounded-full font-body font-bold text-sm tracking-widest uppercase shadow-[0_0_20px_rgba(214,244,88,0.5)]"
        >
          The New Way to Travel
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-heading font-light text-6xl md:text-8xl lg:text-[8rem] tracking-widest leading-[1] mb-8"
        >
          DON'T JUST <br />
          <span className="text-gradient font-bold">LIVE IT.</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 pointer-events-auto"
        >
          <button className="bg-[var(--color-primary)] text-white px-10 py-4 rounded-full font-medium text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(151,123,242,0.6)] transition-all duration-300">
            Get the App
          </button>
          <Link 
            to="/agencies" 
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-[var(--color-deep)] transition-all duration-300"
          >
            For Creators & Agencies
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
