import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

export default function DestinationFlow() {
  const destinations = [
    { id: 1, name: 'BALI', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop', color: 'var(--color-accent)' },
    { id: 2, name: 'TOKYO', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop', color: 'var(--color-primary)' },
    { id: 3, name: 'SANTORINI', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac542?q=80&w=1000&auto=format&fit=crop', color: 'var(--color-accent)' },
    { id: 4, name: 'AMALFI', image: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1000&auto=format&fit=crop', color: 'var(--color-primary)' },
    { id: 5, name: 'TULUM', image: 'https://images.unsplash.com/photo-1516483638261-f40af5edca57?q=80&w=1000&auto=format&fit=crop', color: 'var(--color-accent)' },
  ];

  return (
    <section className="py-32 bg-[var(--color-deep)] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--color-accent)] rounded-full mix-blend-multiply filter blur-[150px] opacity-40 pointer-events-none"></div>

      <div className="px-6 md:px-20 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-7xl font-light text-[var(--color-text)]"
        >
          Find your <br />
          <span className="text-gradient font-bold">next story.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 text-[var(--color-primary)] font-body font-medium"
        >
          <span>Swipe to explore</span>
          <span className="animate-bounce text-xl">👉</span>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto hide-scrollbar gap-8 px-6 md:px-20 pb-20 pt-10 cursor-grab active:cursor-grabbing relative z-10">
        {destinations.map((dest) => (
          <Tilt 
            key={dest.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            className="shrink-0 w-[300px] md:w-[400px] h-[450px] md:h-[600px] rounded-[3rem] overflow-hidden relative group border-2 border-transparent hover:border-[var(--color-accent)] transition-all duration-500 shadow-2xl"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
            <img 
              src={dest.image} 
              alt={dest.name} 
              className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col justify-end h-full bg-gradient-to-t from-[var(--color-deep)] via-[var(--color-deep)]/40 to-transparent">
              <h3 className="font-heading text-[var(--color-text)] text-5xl md:text-6xl tracking-wider mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">{dest.name}</h3>
              <button className="self-start bg-[var(--color-primary)] text-[var(--color-text)] px-8 py-3 rounded-full font-body font-medium hover:bg-[var(--color-accent)] hover:text-[#090514] transition-colors shadow-[0_0_20px_rgba(151,123,242,0.4)]">
                Explore Drops
              </button>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
