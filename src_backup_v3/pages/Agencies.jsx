import { motion } from 'framer-motion';

export default function Agencies() {
  return (
    <div className="pt-40 pb-32 px-6 md:px-20 bg-[var(--color-deep)] min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-[var(--color-primary)] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[var(--color-accent)] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-block mb-6 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full font-body font-bold text-sm tracking-widest uppercase text-[var(--color-primary)]"
        >
          For Creators & Agencies
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-wide leading-[0.9]"
        >
          TURN TRIPS<br />
          <span className="text-gradient">INTO STORIES.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-2xl md:text-3xl text-white/70 max-w-3xl mb-24 leading-relaxed"
        >
          Join the video-first travel marketplace. Connect directly with travelers who are ready to drop in.
        </motion.p>

        <div className="space-y-32">
          {/* Section 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="aspect-square bg-[var(--color-cloud)] rounded-[3rem] overflow-hidden shadow-[0_0_40px_rgba(151,123,242,0.2)] border border-white/10 relative group">
              <img src="https://images.unsplash.com/photo-1516483638261-f40af5edca57?q=80&w=1000&auto=format&fit=crop" alt="Post videos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep)] to-transparent opacity-60"></div>
            </div>
            <div className="space-y-6 md:pl-12">
              <h2 className="font-heading text-5xl md:text-6xl text-white font-bold">Drop your content</h2>
              <p className="font-body text-xl text-white/70">Showcase your itineraries through immersive, short-form content that captures the real energy of your trips. No boring text descriptions.</p>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 md:pr-12 order-2 md:order-1">
              <h2 className="font-heading text-5xl md:text-6xl text-white font-bold">Direct DMs</h2>
              <p className="font-body text-xl text-white/70">No middlemen. Chat directly with travelers who are inspired by your content and ready to book their next adventure.</p>
            </div>
            <div className="aspect-square bg-[var(--color-lav)] rounded-[3rem] overflow-hidden order-1 md:order-2 shadow-[0_0_40px_rgba(214,244,88,0.2)] border border-white/10 relative group">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" alt="Direct inquiries" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep)] to-transparent opacity-60"></div>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="aspect-square bg-[var(--color-primary)] rounded-[3rem] overflow-hidden shadow-[0_0_40px_rgba(151,123,242,0.4)] border border-white/10 relative group">
              <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1000&auto=format&fit=crop" alt="Build brand" className="w-full h-full object-cover opacity-90 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="space-y-6 md:pl-12">
              <h2 className="font-heading text-5xl md:text-6xl text-white font-bold">Build your cult</h2>
              <p className="font-body text-xl text-white/70">Grow a following of passionate travelers. Your profile becomes a living, breathing portfolio of your best experiences.</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <button className="bg-[var(--color-primary)] text-white px-12 py-6 rounded-full font-bold text-2xl hover:bg-[var(--color-accent)] hover:text-[var(--color-deep)] transition-all duration-500 shadow-[0_0_30px_rgba(151,123,242,0.5)] hover:shadow-[0_0_50px_rgba(214,244,88,0.6)] hover:scale-105">
            Get Creator Access
          </button>
        </motion.div>
      </div>
    </div>
  );
}
