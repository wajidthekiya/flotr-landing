import { motion } from 'framer-motion';

export default function CommunityEnergy() {
  return (
    <section className="relative py-40 w-full flex items-center justify-center overflow-hidden bg-[var(--color-deep)]">
      {/* Vibrant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-deep)] to-[var(--color-accent)] opacity-40"></div>
      <div className="absolute inset-0 bg-noise mix-blend-overlay"></div>
      
      {/* Floating Avatars (Simulated Community) */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-20 left-10 md:left-32 w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-[var(--color-accent)] overflow-hidden shadow-[0_0_30px_rgba(214,244,88,0.5)]"
      >
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80" alt="User" className="w-full h-full object-cover" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 md:right-32 w-20 h-20 md:w-32 md:h-32 rounded-full border-4 border-[var(--color-primary)] overflow-hidden shadow-[0_0_30px_rgba(151,123,242,0.5)]"
      >
        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80" alt="User" className="w-full h-full object-cover" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block mb-8 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full font-body font-bold text-sm tracking-widest uppercase text-[var(--color-accent)]"
        >
          Join the Movement
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-wide leading-[0.9]"
        >
          DON'T WAIT <br />
          <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px var(--color-accent)' }}>FOR FRIENDS.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xl md:text-3xl text-white/80 mt-10 max-w-2xl mx-auto leading-relaxed"
        >
          Drop into verified community trips. Meet your new travel crew. Live the stories you've been watching.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-[var(--color-accent)] text-[var(--color-deep)] px-12 py-5 rounded-full font-bold text-xl hover:scale-105 hover:shadow-[0_0_40px_rgba(214,244,88,0.6)] transition-all duration-300"
        >
          Find Your Crew
        </motion.button>
      </div>
    </section>
  );
}
