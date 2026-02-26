import { motion } from 'framer-motion';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      style={{
        background: 'linear-gradient(120deg, var(--color-primary) 0%, #7E67F0 60%)',
      }}
    >
      {/* Background Flow Shape */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-0 right-0 w-full h-full opacity-20"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,400 C320,200 420,600 720,400 C1020,200 1120,600 1440,400 L1440,800 L0,800 Z"
            fill="var(--color-accent)"
            opacity="0.1"
          />
          <path
            d="M0,500 C320,300 420,700 720,500 C1020,300 1120,700 1440,500 L1440,800 L0,800 Z"
            fill="var(--color-lav)"
            opacity="0.05"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white space-y-8"
        >
          <h1 className="font-heading font-light text-5xl md:text-7xl lg:text-8xl tracking-wide leading-tight">
            Travel that flows with you.
          </h1>
          <p className="font-body text-lg md:text-xl text-[var(--color-lav)] max-w-lg leading-relaxed">
            Flotr is a community-driven, video-first travel marketplace. Discover, connect, and book your next adventure seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary" className="text-lg px-8 py-4">
              Download App
            </Button>
            <Button variant="ghost" className="text-lg px-8 py-4">
              Explore Trips
            </Button>
          </div>
        </motion.div>

        {/* Right Content (Mockup) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-[500px] md:w-80 md:h-[600px] bg-[var(--color-deep)] rounded-[3rem] border-8 border-[var(--color-lav)] shadow-2xl overflow-hidden flex items-center justify-center">
            {/* Placeholder for Phone Mockup */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-deep)] opacity-50"></div>
            <span className="font-heading text-white text-2xl opacity-50 z-10">FLOTR APP</span>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[var(--color-lav)] rounded-b-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
