import { motion } from 'framer-motion';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

const videos = [
  { id: 1, poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80', label: 'Beach Vibes', user: '@sarah_travels', likes: '12k' },
  { id: 2, poster: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80', label: 'Mountain Trek', user: '@alex_explores', likes: '8.4k' },
  { id: 3, poster: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=80', label: 'Group Travel', user: '@wanderlust_crew', likes: '24k' },
  { id: 4, poster: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&q=80', label: 'Adventure', user: '@mike_jumps', likes: '5.1k' },
  { id: 5, poster: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?w=600&q=80', label: 'Amalfi', user: '@bella_italia', likes: '19k' },
  { id: 6, poster: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac542?w=600&q=80', label: 'Santorini', user: '@greek_isles', likes: '32k' },
  { id: 7, poster: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', label: 'Bali', user: '@bali_daily', likes: '45k' },
  { id: 8, poster: 'https://images.unsplash.com/photo-1516483638261-f40af5edca57?w=600&q=80', label: 'Italy', user: '@pasta_lover', likes: '11k' },
];

function VideoCard({ video }) {
  return (
    <div className="relative shrink-0 w-[260px] md:w-[320px] h-[460px] md:h-[560px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 hover:border-[var(--color-primary)] transition-all duration-500">
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
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep)] via-transparent to-transparent opacity-90" />
      
      {/* App UI Overlay */}
      <div className="absolute right-4 bottom-24 flex flex-col gap-6 items-center z-20">
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
            <FaHeart className="text-white text-lg" />
          </div>
          <span className="text-white text-xs font-body font-medium">{video.likes}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-deep)] transition-colors">
            <FaComment className="text-white text-lg hover:text-[var(--color-deep)]" />
          </div>
          <span className="text-white text-xs font-body font-medium">1.2k</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-[var(--color-deep)] transition-colors">
          <FaShare className="text-white text-lg hover:text-[var(--color-deep)]" />
        </div>
      </div>

      {/* Label & User */}
      <div className="absolute bottom-6 left-6 z-10 pr-16">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)] p-[2px]">
            <div className="w-full h-full bg-[var(--color-deep)] rounded-full"></div>
          </div>
          <span className="font-body text-white/80 text-sm font-medium">{video.user}</span>
        </div>
        <span className="font-heading text-white text-2xl tracking-wide">{video.label}</span>
      </div>
    </div>
  );
}

export default function VideoGrid() {
  // Duplicate for seamless infinite loop
  const loopedVideos = [...videos, ...videos];

  return (
    <section className="py-32 bg-[var(--color-deep)] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-[var(--color-primary)] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="px-6 md:px-20 mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-7xl font-light text-white leading-tight"
        >
          Trips are meant <br />
          <span className="text-gradient font-bold">to be watched.</span>
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full font-body font-medium hover:bg-[var(--color-accent)] hover:text-[var(--color-deep)] hover:border-[var(--color-accent)] transition-all duration-300 self-start md:self-end"
        >
          Explore Feed
        </motion.button>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="flex relative z-10">
        <div className="marquee-track flex gap-6 md:gap-8 pl-6 md:pl-20" style={{ width: 'max-content' }}>
          {loopedVideos.map((video, index) => (
            <VideoCard key={`${video.id}-${index}`} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
