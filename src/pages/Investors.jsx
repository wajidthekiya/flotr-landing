import { motion } from 'framer-motion';

export default function Investors() {
  return (
    <div className="pt-40 pb-32 px-6 md:px-20 bg-[var(--color-deep)] min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-[150px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[var(--color-accent)] rounded-full mix-blend-multiply filter blur-[150px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-block mb-6 bg-[var(--color-surface)] backdrop-blur-md border border-[var(--color-border)] px-6 py-2 rounded-full font-body font-bold text-sm tracking-widest uppercase text-[var(--color-primary)]"
        >
          Investor Relations
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-8xl lg:text-9xl font-bold text-[var(--color-text)] mb-8 tracking-wide leading-[0.9]"
        >
          THE FUTURE OF <br />
          <span className="text-gradient">TRAVEL IS VIDEO.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-2xl md:text-3xl text-[var(--color-text)]/70 max-w-3xl mb-24 leading-relaxed"
        >
          Flotr is the first video-first trip marketplace. We connect Gen-Z and working professionals with verified travel agencies for instant, frictionless bookings.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-surface)] backdrop-blur-md border border-[var(--color-primary)]/30 p-10 rounded-[3rem] shadow-xl shadow-[var(--color-primary)]/5 hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col"
          >
            <div className="w-16 h-16 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mb-8 border border-[var(--color-primary)]/30 text-[var(--color-primary)] text-3xl">
              🔥
            </div>
            <h3 className="font-heading text-4xl md:text-5xl text-[var(--color-text)] mb-4">150M+</h3>
            <p className="font-body text-[var(--color-text)]/70 text-lg flex-grow">Gen-Z & Millennials in India looking for affordable, social travel experiences.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-surface)] backdrop-blur-md border border-[var(--color-accent)]/50 p-10 rounded-[3rem] shadow-xl shadow-[var(--color-accent)]/10 hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col"
          >
            <div className="w-16 h-16 bg-[var(--color-accent)]/20 rounded-full flex items-center justify-center mb-8 border border-[var(--color-accent)]/50 text-[#090514] text-3xl">
              🤯
            </div>
            <h3 className="font-heading text-4xl md:text-5xl text-[var(--color-text)] mb-4">₹1500</h3>
            <p className="font-body text-[var(--color-text)]/70 text-lg flex-grow">Starting price for our weekend getaways, making travel accessible to college students.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-[#6338CB]/10 to-[var(--color-surface)] backdrop-blur-md border border-[#6338CB]/30 p-10 rounded-[3rem] shadow-xl shadow-[#6338CB]/5 hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col"
          >
            <div className="w-16 h-16 bg-[#6338CB]/20 rounded-full flex items-center justify-center mb-8 border border-[#6338CB]/30 text-[#6338CB] text-3xl">
              ⚡
            </div>
            <h3 className="font-heading text-4xl md:text-5xl text-[var(--color-text)] mb-4">0%</h3>
            <p className="font-body text-[var(--color-text)]/70 text-lg flex-grow">Friction. Users watch a video, see who's joining, and book in under 60 seconds.</p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {/* The Problem */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 md:pr-12">
              <h2 className="font-heading text-4xl md:text-6xl text-[var(--color-text)] font-bold">The Problem</h2>
              <ul className="space-y-4 font-body text-xl text-[var(--color-text)]/70">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)]">✕</span>
                  Friends always cancel at the last minute.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)]">✕</span>
                  Traditional OTAs are boring, text-heavy, and lack social proof.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)]">✕</span>
                  Travel is perceived as too expensive and time-consuming.
                </li>
              </ul>
            </div>
            <div className="aspect-video bg-[var(--color-cloud)] rounded-[3rem] overflow-hidden border border-[var(--color-border)] flex items-center justify-center p-8">
               <h3 className="font-heading text-4xl text-[var(--color-text)]/30 text-center">Legacy Booking Apps</h3>
            </div>
          </motion.div>

          {/* The Solution */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="aspect-video bg-[var(--color-lav)] rounded-[3rem] overflow-hidden border border-[var(--color-accent)] flex items-center justify-center p-8 order-2 md:order-1 shadow-[0_0_40px_rgba(214,244,88,0.2)]">
               <h3 className="font-heading text-4xl text-[var(--color-primary)] text-center">Video-First Marketplace</h3>
            </div>
            <div className="space-y-6 md:pl-12 order-1 md:order-2">
              <h2 className="font-heading text-4xl md:text-6xl text-[var(--color-text)] font-bold">The Flotr Solution</h2>
              <ul className="space-y-4 font-body text-xl text-[var(--color-text)]/70">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)]">✓</span>
                  Don't wait for friends. See who's joining and go with a crew.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)]">✓</span>
                  Scrollable, TikTok-style video feed of real trips.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)]">✓</span>
                  Weekend getaways starting at ₹1500.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-[var(--color-text)] mb-8">Ready to build the future of travel?</h2>
          <a 
            href="https://www.linkedin.com/in/mohammad-wajid-thekiya/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--color-primary)] text-[var(--color-text)] px-12 py-6 rounded-full font-bold text-2xl hover:bg-[var(--color-accent)] hover:text-[#090514] transition-all duration-500 shadow-[0_0_30px_rgba(151,123,242,0.5)] hover:shadow-[0_0_50px_rgba(214,244,88,0.6)] hover:scale-105"
          >
            Contact Founders
          </a>
        </motion.div>
      </div>
    </div>
  );
}