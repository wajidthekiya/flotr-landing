import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

export default function DestinationFlow() {
  const destinations = [
    { id: 1, name: 'BALI', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, name: 'TOKYO', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop' },
    { id: 3, name: 'SANTORINI', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac542?q=80&w=1000&auto=format&fit=crop' },
    { id: 4, name: 'AMALFI', image: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1000&auto=format&fit=crop' },
    { id: 5, name: 'TULUM', image: 'https://images.unsplash.com/photo-1516483638261-f40af5edca57?q=80&w=1000&auto=format&fit=crop' },
  ];

  return (
    <section className="py-32 bg-[var(--color-deep)] overflow-hidden">
      <div className="px-6 md:px-20 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-6xl font-light text-white"
        >
          Find your next story.
        </motion.h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto hide-scrollbar gap-8 px-6 md:px-20 pb-20 pt-10 cursor-grab active:cursor-grabbing">
        {destinations.map((dest) => (
          <Tilt 
            key={dest.id}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            className="shrink-0 w-[300px] md:w-[400px] h-[450px] md:h-[600px] rounded-3xl overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
            <img 
              src={dest.image} 
              alt={dest.name} 
              className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col justify-end h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <h3 className="font-heading text-white text-4xl md:text-5xl tracking-wider mb-4">{dest.name}</h3>
              <button className="self-start bg-white/20 backdrop-blur-md text-white border border-white/50 px-6 py-2 rounded-full font-body text-sm hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors">
                Get the App
              </button>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
