import { motion } from 'framer-motion';

export default function MovementTypography() {
  const words = [
    { 
      text: 'MOVE', 
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1000&auto=format&fit=crop',
      color: 'hover:text-[var(--color-primary)]'
    },
    { 
      text: 'DISCOVER', 
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop',
      color: 'hover:text-[var(--color-accent)]'
    },
    { 
      text: 'CONNECT', 
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1000&auto=format&fit=crop',
      color: 'hover:text-[var(--color-primary)]'
    },
  ];

  return (
    <section className="py-40 bg-[var(--color-deep)] relative overflow-hidden group/section">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-4 md:space-y-8">
        {words.map((word, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative group cursor-crosshair w-full flex justify-center"
          >
            {/* Floating Image Reveal on Hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[150px] md:h-[250px] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0 scale-90 group-hover:scale-100 rotate-[-2deg] group-hover:rotate-2">
              <img 
                src={word.image} 
                alt={word.text} 
                className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/20 rounded-[2rem]"></div>
            </div>
            
            {/* Typography */}
            <h2 className={`font-heading text-[5rem] md:text-[10rem] lg:text-[13rem] leading-[0.85] tracking-tighter text-white transition-colors duration-300 relative z-10 ${word.color}`}>
              {word.text}
            </h2>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-center mt-32"
      >
        <p className="font-body text-xl md:text-2xl text-white/60 max-w-md mx-auto leading-relaxed">
          Experience travel that flows with your rhythm.
        </p>
      </motion.div>
    </section>
  );
}
