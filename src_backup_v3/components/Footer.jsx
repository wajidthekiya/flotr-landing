import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-deep)] text-white py-20 border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[20vw] bg-[var(--color-primary)] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" className="font-heading text-5xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
            FLOTR
          </Link>
          <p className="font-body text-white/60 font-medium">Don't just travel. Live it.</p>
        </div>

        <div className="flex gap-8 font-body font-medium">
          <Link to="/about" className="hover:text-[var(--color-accent)] transition-colors">About</Link>
          <Link to="/agencies" className="hover:text-[var(--color-accent)] transition-colors">Creators</Link>
          <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Privacy</a>
        </div>

        <div className="flex gap-6 text-2xl text-white/80">
          <a href="#" className="hover:text-[var(--color-accent)] hover:scale-110 transition-all"><FaInstagram /></a>
          <a href="#" className="hover:text-[var(--color-accent)] hover:scale-110 transition-all"><FaTiktok /></a>
          <a href="#" className="hover:text-[var(--color-accent)] hover:scale-110 transition-all"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}
