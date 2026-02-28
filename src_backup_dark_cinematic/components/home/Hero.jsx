import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[var(--color-deep)]">
      {/* Background Video — local file in /public, guaranteed to load */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero-bg.mp4"
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-heading font-light text-6xl md:text-8xl lg:text-[7rem] tracking-widest leading-[1.1] mb-12"
        >
          TRAVEL<br />THAT FLOWS<br />WITH YOU.
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="bg-[var(--color-accent)] text-[var(--color-deep)] px-10 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300">
            Get the App
          </button>
          <Link 
            to="/agencies" 
            className="border border-white text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors duration-300"
          >
            For Agencies
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-white/70 text-sm tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-white/50"
        />
      </motion.div>
    </section>
  );
}
