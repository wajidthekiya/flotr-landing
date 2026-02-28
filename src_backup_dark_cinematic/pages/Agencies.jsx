import { motion } from 'framer-motion';

export default function Agencies() {
  return (
    <div className="pt-40 pb-32 px-6 md:px-20 bg-[var(--color-deep)] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-light text-white mb-8 tracking-wide"
        >
          Turn your trips<br />into stories.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-2xl md:text-3xl text-white/70 max-w-3xl mb-24 leading-relaxed"
        >
          Join the video-first travel marketplace. Connect directly with travelers who are ready to move.
        </motion.p>

        <div className="space-y-32">
          {/* Section 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="aspect-square bg-[var(--color-cloud)] rounded-[3rem] overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1516483638261-f40af5edca57?q=80&w=1000&auto=format&fit=crop" alt="Post videos" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-6 md:pl-12">
              <h2 className="font-heading text-5xl md:text-6xl text-white">Post trip videos</h2>
              <p className="font-body text-xl text-white/70">Showcase your itineraries through immersive, short-form content that captures the real energy of your trips.</p>
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
              <h2 className="font-heading text-5xl md:text-6xl text-white">Get direct inquiries</h2>
              <p className="font-body text-xl text-white/70">No middlemen. Chat directly with travelers who are inspired by your content and ready to book.</p>
            </div>
            <div className="aspect-square bg-[var(--color-lav)] rounded-[3rem] overflow-hidden order-1 md:order-2 shadow-xl">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" alt="Direct inquiries" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="aspect-square bg-[var(--color-primary)] rounded-[3rem] overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1000&auto=format&fit=crop" alt="Build brand" className="w-full h-full object-cover opacity-90 mix-blend-overlay hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-6 md:pl-12">
              <h2 className="font-heading text-5xl md:text-6xl text-white">Build your brand</h2>
              <p className="font-body text-xl text-white/70">Grow a following of passionate travelers. Your profile becomes a living portfolio of your best experiences.</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <button className="bg-[var(--color-accent)] text-[var(--color-deep)] px-12 py-6 rounded-full font-medium text-2xl hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            Download Agency App
          </button>
        </motion.div>
      </div>
    </div>
  );
}
