import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-40 pb-32 px-6 md:px-20 bg-[var(--color-deep)] min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-[-10%] w-[40vw] h-[40vw] bg-[var(--color-accent)] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[-10%] w-[40vw] h-[40vw] bg-[var(--color-primary)] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl w-full relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-16 tracking-wide text-center leading-[0.9]"
        >
          TRAVEL THAT <br />
          <span className="text-gradient">FLOWS WITH YOU.</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12 font-body text-xl md:text-2xl text-white/80 leading-relaxed"
        >
          <p className="text-2xl md:text-4xl font-medium text-white">
            Flotr exists because the old way of travel is broken.
          </p>
          <p>
            Jumping between ten different apps to find inspiration, plan an itinerary, and book a trip kills the excitement before you even pack your bags. We believe travel should be as fluid as the experiences themselves. It should be visual, social, and effortless.
          </p>
          
          <div className="pt-20">
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-12">Core Values</h2>
            
            <div className="space-y-8">
              <div className="p-10 rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10 hover:border-[var(--color-primary)] hover:bg-white/10 transition-all duration-500 shadow-xl">
                <h3 className="font-heading text-4xl text-[var(--color-primary)] mb-4">Freedom through simplicity</h3>
                <p>
                  We strip away the noise. No endless text reviews, no confusing booking flows. Just real videos from real trips, and a direct line to the people who make them happen.
                </p>
              </div>
              
              <div className="p-10 rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10 hover:border-[var(--color-accent)] hover:bg-white/10 transition-all duration-500 shadow-xl">
                <h3 className="font-heading text-4xl text-[var(--color-accent)] mb-4">Connection through community</h3>
                <p>
                  Travel is better together. Whether you're joining a group of strangers who become friends, or connecting directly with a local creator, Flotr is built on human connection.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
