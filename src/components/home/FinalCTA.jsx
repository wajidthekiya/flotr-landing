import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-40 bg-[var(--color-primary)] text-center flex flex-col items-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[var(--color-accent)] rounded-full mix-blend-overlay filter blur-[150px] opacity-40 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-white rounded-full mix-blend-overlay filter blur-[150px] opacity-30 pointer-events-none"></div>

      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="font-heading text-4xl md:text-8xl lg:text-[10rem] font-bold text-white mb-10 md:mb-16 tracking-widest leading-[0.9] drop-shadow-xl"
      >
        READY TO <br />
        <span className="text-[var(--color-accent)]">PACK?</span>
      </motion.h2>
      
      <motion.a 
        href="https://play.google.com/store/apps/details?id=ai.flotr.flotr&pcampaignid=web_share"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white text-black px-6 py-4 md:px-16 md:py-6 rounded-full font-bold text-base md:text-2xl hover:bg-[var(--color-accent)] hover:scale-110 hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] transition-all duration-500 relative z-10 flex items-center gap-3 md:gap-4 w-full md:w-auto justify-center"
      >
        Get the App Now <span>🚀</span>
      </motion.a>
    </section>
  );
}