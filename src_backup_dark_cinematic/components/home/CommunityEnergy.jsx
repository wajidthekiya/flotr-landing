import { motion } from 'framer-motion';

export default function CommunityEnergy() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2000&auto=format&fit=crop" 
        alt="Group of friends traveling" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 text-center text-white px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light tracking-wide"
        >
          Don't wait for friends.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-[var(--color-accent)] mt-6 tracking-wide"
        >
          Join verified community trips.
        </motion.p>
      </div>
    </section>
  );
}
