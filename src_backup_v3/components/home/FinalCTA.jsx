import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-40 bg-[var(--color-deep)] text-center flex flex-col items-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-[var(--color-primary)] rounded-full mix-blend-screen filter blur-[150px] opacity-30 pointer-events-none"></div>

      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-bold text-white mb-16 tracking-widest leading-none"
      >
        READY TO <br />
        <span className="text-gradient">DROP IN?</span>
      </motion.h2>
      
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-[var(--color-primary)] text-white px-16 py-6 rounded-full font-bold text-2xl hover:bg-[var(--color-accent)] hover:text-[var(--color-deep)] hover:scale-110 hover:shadow-[0_0_50px_rgba(214,244,88,0.6)] transition-all duration-500 relative z-10"
      >
        Get the App Now
      </motion.button>
    </section>
  );
}
