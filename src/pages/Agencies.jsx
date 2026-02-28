import { motion } from 'framer-motion';

export default function Agencies() {
  const benefits = [
    { emoji: "🚀", title: "Fill Trips Faster", desc: "Our 'See who's joining' feature creates FOMO. Solo travelers join when they see others." },
    { emoji: "📹", title: "Post the Vibe", desc: "Upload short-form videos. Let travelers see exactly what they're paying for." },
    { emoji: "💬", title: "Direct Connect", desc: "No hidden fees. Travelers watch, check the itinerary, and connect directly." }
  ];

  return (
    <div className="pt-40 pb-32 px-6 md:px-20 bg-[var(--color-bg)] min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-[150px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[var(--color-accent)] rounded-full mix-blend-multiply filter blur-[150px] opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-block mb-6 bg-[var(--color-surface)] backdrop-blur-md border border-[var(--color-border)] px-6 py-2 rounded-full font-body font-bold text-sm tracking-widest uppercase text-[var(--color-primary)] shadow-sm"
        >
          For Verified Travel Agencies
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-8xl lg:text-9xl font-bold text-[var(--color-text)] mb-8 tracking-wide leading-[0.9]"
        >
          SELL TRIPS.<br />
          <span className="text-gradient">NOT BROCHURES.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xl md:text-3xl text-[var(--color-text)]/70 max-w-3xl mb-16 leading-relaxed"
        >
          Join India's first video-first trip marketplace. Post your weekend getaways, show the vibe, and get direct bookings from Gen-Z and working professionals.
        </motion.p>

        {/* New Sticker Cards Grid for Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-surface)] backdrop-blur-md p-10 rounded-[3rem] border border-[var(--color-border)] hover:-translate-y-2 transition-transform duration-500 shadow-xl"
            >
              <div className="w-16 h-16 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center text-3xl mb-8 border border-[var(--color-primary)]/30">
                {benefit.emoji}
              </div>
              <h3 className="font-heading text-2xl font-bold text-[var(--color-text)] mb-4">{benefit.title}</h3>
              <p className="font-body text-[var(--color-text)]/70 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Restructured Zig Zag into larger feature cards so it looks better */}
        <div className="space-y-12">
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-accent)]/10 rounded-full mix-blend-multiply filter blur-[80px] pointer-events-none"></div>
             <div className="flex-1 space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/20 text-[var(--color-accent)] px-4 py-2 rounded-full font-bold text-sm">
                  <span>📸</span> Stop Boring Texts
                </div>
                <h2 className="font-heading text-4xl md:text-6xl text-[var(--color-text)] font-bold leading-tight">Post the Vibe</h2>
                <p className="font-body text-xl text-[var(--color-text)]/80">Ditch the boring text itineraries. Upload short-form videos of your trips. Let travelers see exactly what they are paying for before they book.</p>
             </div>
             <div className="flex-1 w-full h-[400px] rounded-[3rem] overflow-hidden relative group border border-[var(--color-border)]">
                <img src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=1000&auto=format&fit=crop" alt="Post videos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row-reverse gap-12 items-center shadow-2xl relative overflow-hidden"
          >
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full mix-blend-multiply filter blur-[80px] pointer-events-none"></div>
             <div className="flex-1 space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-4 py-2 rounded-full font-bold text-sm">
                  <span>🤝</span> Zero Middlemen
                </div>
                <h2 className="font-heading text-4xl md:text-6xl text-[var(--color-text)] font-bold leading-tight">Direct Connect</h2>
                <p className="font-body text-xl text-[var(--color-text)]/80">No hidden fees or complex booking engines. Travelers watch your video, check the itinerary, and connect directly with you to book their spot.</p>
             </div>
             <div className="flex-1 w-full h-[400px] rounded-[3rem] overflow-hidden relative group border border-[var(--color-border)]">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" alt="Direct inquiries" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
             </div>
          </motion.div>
        </div>


        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfzFeMtI1dLMdNi3IC4xiLqDabZB_4thf0V85DL8tL-Kk6Qaw/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-primary)] text-white px-12 py-6 rounded-full font-bold text-2xl hover:bg-[var(--color-accent)] hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(151,123,242,0.5)] hover:shadow-[0_0_50px_rgba(214,244,88,0.6)] hover:scale-105 inline-flex items-center gap-4 group"
          >
             Apply as Verified Agency
             <span className="text-3xl group-hover:translate-x-2 transition-transform">👉</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}