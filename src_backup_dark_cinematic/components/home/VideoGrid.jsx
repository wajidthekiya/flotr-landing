import { motion } from 'framer-motion';

const videos = [
  { id: 1, poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80', label: 'Beach Vibes' },
  { id: 2, poster: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80', label: 'Mountain Trek' },
  { id: 3, poster: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=80', label: 'Group Travel' },
  { id: 4, poster: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&q=80', label: 'Adventure' },
  { id: 5, poster: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?w=600&q=80', label: 'Amalfi' },
  { id: 6, poster: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac542?w=600&q=80', label: 'Santorini' },
  { id: 7, poster: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', label: 'Bali' },
  { id: 8, poster: 'https://images.unsplash.com/photo-1516483638261-f40af5edca57?w=600&q=80', label: 'Italy' },
];

function VideoCard({ video }) {
  return (
    <div className="relative shrink-0 w-[220px] md:w-[280px] h-[380px] md:h-[480px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500">
      {/* Autoplay video with poster fallback */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={video.poster}
        src="/hero-bg.mp4"
        className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      {/* Label */}
      <div className="absolute bottom-6 left-6 z-10">
        <span className="font-heading text-white text-xl tracking-wide">{video.label}</span>
      </div>
    </div>
  );
}

export default function VideoGrid() {
  // Duplicate for seamless infinite loop
  const loopedVideos = [...videos, ...videos];

  return (
    <section className="py-32 bg-[var(--color-deep)] overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="px-6 md:px-20 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-6xl font-light text-white"
        >
          Trips are meant to be watched.
        </motion.h2>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="flex">
        <div className="marquee-track flex gap-6 md:gap-8 pl-6 md:pl-20" style={{ width: 'max-content' }}>
          {loopedVideos.map((video, index) => (
            <VideoCard key={`${video.id}-${index}`} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
