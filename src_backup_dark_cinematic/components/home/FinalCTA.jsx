import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-40 bg-[var(--color-deep)] text-center flex flex-col items-center px-6">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-heading text-6xl md:text-8xl lg:text-9xl font-light text-white mb-16 tracking-widest"
      >
        READY TO MOVE?
      </motion.h2>
      
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-[var(--color-accent)] text-[var(--color-deep)] px-16 py-6 rounded-full font-medium text-2xl hover:bg-[var(--color-primary)] hover:text-white hover:scale-105 hover:shadow-2xl transition-all duration-300"
      >
        Get the App
      </motion.button>
    </section>
  );
}
