import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HowItWorks() {
  const [activeVideo, setActiveVideo] = useState(0);

  const mockFeed = [
    { src: '/videos/Rishikesh.MP4', title: 'Rishikesh Escape', price: '₹1500', joining: '+24' },
    { src: '/videos/Shimla-Manali.MP4', title: 'Shimla-Manali', price: '₹4500', joining: '+12' },
    { src: '/videos/Manali.MP4', title: 'Manali Party', price: '₹3000', joining: '+32' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % mockFeed.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      num: "1",
      emoji: "📱",
      title: "Scroll & Watch",
      desc: "Swipe through a TikTok-style feed of real trip videos posted by verified travel agencies."
    },
    {
      num: "2",
      emoji: "👀",
      title: "Check the Vibe",
      desc: "View the full itinerary and see exactly who else is joining the trip before you commit."
    },
    {
      num: "3",
      emoji: "⚡",
      title: "Book Instantly",
      desc: "Directly connect with the agency and secure your spot in under 60 seconds."
    }
  ];

  return (
    <section className="pt-32 pb-16 bg-[var(--color-bg)] relative overflow-hidden">
      {/* Colorful Background Blurs */}
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-[var(--color-accent)] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vw] bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-[120px] opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-20">
          
          {/* Left: Text Content & Sticker Cards */}
          <div className="w-full md:w-1/2 space-y-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-5xl md:text-8xl font-bold text-[var(--color-text)] leading-[0.9]"
            >
              HOW IT <br />
              <span className="text-gradient">WORKS.</span>
            </motion.h2>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-surface)] backdrop-blur-md p-8 rounded-[2rem] border border-[var(--color-border)] hover:-translate-y-2 transition-transform duration-500 shadow-xl flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[var(--color-primary)]/20 border border-[var(--color-primary)] flex items-center justify-center text-3xl">
                    {step.emoji}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <span className="text-[var(--color-primary)] font-heading font-bold text-xl opacity-60">0{step.num}</span>
                       <h3 className="font-heading text-2xl md:text-3xl text-[var(--color-text)] font-bold">{step.title}</h3>
                    </div>
                    <p className="font-body text-[var(--color-text)]/70 text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual Mockup */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-[320px] h-[640px] bg-[var(--color-surface)] rounded-[3rem] border-[8px] border-[var(--color-border)] shadow-[0_0_50px_rgba(151,123,242,0.3)] overflow-hidden"
            >
              {/* Mock Video Background */}
              <div className="absolute inset-0 bg-black overflow-hidden z-0">
                <AnimatePresence initial={false}>
                  <motion.video 
                    key={activeVideo}
                    src={mockFeed[activeVideo].src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                  />
                </AnimatePresence>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-black/40 to-transparent z-10 pointer-events-none"></div>
              
              {/* Mock UI Elements matching sticker theme */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4 z-20">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full w-max border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[10px] font-bold text-white">V</div>
                  <span className="text-white font-body font-medium text-xs">Verified Agency</span>
                </div>
                
                <AnimatePresence mode="popLayout">
                  <motion.h4 
                    key={activeVideo}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-white font-heading text-3xl font-bold"
                  >
                    {mockFeed[activeVideo].title}
                  </motion.h4>
                </AnimatePresence>
                
                {/* Who's joining mock */}
                <div className="flex items-center gap-3 bg-[var(--color-surface)]/80 backdrop-blur-md p-2 pl-3 rounded-full border border-[var(--color-border)] w-max max-w-full">
                  <div className="flex -space-x-3">
                    <img src="https://i.pravatar.cc/100?img=1" className="w-8 h-8 rounded-full border-2 border-[var(--color-surface)]" alt="user" />
                    <img src="https://i.pravatar.cc/100?img=2" className="w-8 h-8 rounded-full border-2 border-[var(--color-surface)]" alt="user" />
                    <img src="https://i.pravatar.cc/100?img=3" className="w-8 h-8 rounded-full border-2 border-[var(--color-surface)]" alt="user" />
                  </div>
                  <AnimatePresence mode="popLayout">
                    <motion.span 
                      key={activeVideo}
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }}
                      className="text-[var(--color-text)] text-sm font-body font-bold pr-3 inline-block"
                    >
                      {mockFeed[activeVideo].joining} Joining
                    </motion.span>
                  </AnimatePresence>
                </div>

                <a 
                  href="https://play.google.com/store/apps/details?id=ai.flotr.flotr&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-[var(--color-primary)] text-white py-4 rounded-full font-bold font-body mt-2 text-lg hover:bg-[var(--color-accent)] hover:text-black transition-colors shadow-lg shadow-[var(--color-primary)]/30 overflow-hidden relative"
                >
                  <AnimatePresence mode="popLayout">
                    <motion.span 
                      key={activeVideo}
                      initial={{ y: 20, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      exit={{ y: -20, opacity: 0 }}
                      className="block"
                    >
                      Book for {mockFeed[activeVideo].price}
                    </motion.span>
                  </AnimatePresence>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}