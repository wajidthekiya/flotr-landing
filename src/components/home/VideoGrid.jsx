import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const videos = [
  { id: 1, poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=60', label: 'Shimla-Manali', agency: 'Wanderlust Co.', price: '₹4,500', joining: 12, src: '/videos/Shimla-Manali.MP4' },
  { id: 2, poster: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=60', label: 'Kashmir Magic', agency: 'Himalayan High', price: '₹6,200', joining: 8, src: '/videos/Kashmir.MP4' },
  { id: 3, poster: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&q=60', label: 'Rishikesh Escape', agency: 'Nomad Trips', price: '₹1,500', joining: 24, src: '/videos/Rishikesh.MP4' },
  { id: 4, poster: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=400&q=60', label: 'Himachal Vibe', agency: 'Adventure Monks', price: '₹3,500', joining: 5, src: '/videos/Himachal.MP4' },
  { id: 5, poster: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?w=400&q=60', label: 'Meghalaya Trek', agency: 'East Bums', price: '₹5,800', joining: 19, src: '/videos/Meghalya.MP4' },
  { id: 6, poster: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac542?w=400&q=60', label: 'Manali Party', agency: 'Parvati Vibes', price: '₹3,000', joining: 32, src: '/videos/Manali.MP4' },
  { id: 7, poster: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=60', label: 'Epic Getaway', agency: 'Flotr Escapes', price: '₹4,200', joining: 15, src: '/videos/IMG_2836.MP4' },
  { id: 8, poster: 'https://images.unsplash.com/photo-1516483638261-f40af5edca57?w=400&q=60', label: 'Weekend Trip', agency: 'Mountain Echo', price: '₹3,500', joining: 11, src: '/videos/IMG_2837.MP4' },
];

function VideoCard({ video }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);

  // Only play video when card is visible in viewport
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="relative shrink-0 w-[240px] md:w-[340px] h-[400px] md:h-[600px] rounded-3xl md:rounded-[3rem] overflow-hidden group cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.1)] border-[3px] md:border-4 border-white hover:border-[var(--color-primary)] hover:-translate-y-2 transition-all duration-500 bg-white will-change-transform">
      {/* Container inside border */}
      <div className="absolute inset-0 m-1 rounded-[1.2rem] md:rounded-[2.5rem] overflow-hidden">
        {/* Autoplay video with poster fallback */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          poster={video.poster}
          src={video.src || "/hero-bg.mp4"}
          className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 will-change-transform"
        />
        {/* Lighter Gradient overlay to match light theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
        
        {/* App UI Overlay - Top */}
        <div className="absolute top-3 md:top-4 left-3 md:left-4 right-3 md:right-4 flex justify-between items-center z-20">
          <div className="bg-white/20 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-white/30 flex items-center gap-1.5 md:gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,1)]"></div>
            <span className="text-white text-[10px] md:text-xs font-body font-bold">{video.joining} Joining</span>
          </div>
          <div className="bg-[var(--color-accent)] text-[#090514] px-3 py-1 md:px-4 md:py-1.5 rounded-full font-bold text-xs md:text-sm shadow-md">
            {video.price}
          </div>
        </div>

        {/* Label & User */}
        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 z-10">
          <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3 bg-black/30 w-max px-2 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-md border border-white/10">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[10px] md:text-[12px] font-bold text-white shadow-sm">
                V
            </div>
            <span className="font-body text-white text-xs md:text-sm font-medium pr-1">{video.agency}</span>
          </div>
          
          <span className="font-heading text-white text-2xl md:text-4xl tracking-tight block mb-3 md:mb-4 font-bold drop-shadow-md">{video.label}</span>
          
          <a 
            href="https://play.google.com/store/apps/details?id=ai.flotr.flotr&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[var(--color-primary)] text-white py-2.5 md:py-4 rounded-full font-body font-bold text-sm md:text-lg hover:bg-[var(--color-accent)] hover:text-black transition-colors shadow-lg flex items-center justify-center gap-1.5 md:gap-2 group-hover:scale-[1.02]"
          >
            View Itinerary <span className="opacity-80">👀</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function VideoGrid() {
  // Duplicate for seamless infinite loop
  const loopedVideos = [...videos, ...videos];

  return (
    <section className="py-10 md:py-16 bg-[var(--color-bg)] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>
      
      <style>{`
        @keyframes marquee {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-20 mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-6xl md:text-8xl font-bold text-[var(--color-text)] leading-[0.9]"
        >
          TRIPS ARE MEANT <br />
          <span className="text-gradient">TO BE WATCHED.</span>
        </motion.h2>
        <motion.a
          href="https://play.google.com/store/apps/details?id=ai.flotr.flotr&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white hover:bg-[var(--color-primary)] hover:text-white text-black shadow-lg hover:shadow-xl border border-gray-200 px-8 py-4 rounded-full font-body font-bold text-lg transition-all duration-300 self-start md:self-end flex items-center gap-3"
        >
          Explore Feed <span className="text-2xl">🚀</span>
        </motion.a>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="flex relative z-10 mt-10">
        <div className="marquee-track flex gap-6 md:gap-8 pl-6 md:pl-20 py-4" style={{ width: 'max-content' }}>
          {loopedVideos.map((video, index) => (
            <VideoCard key={`${video.id}-${index}`} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}