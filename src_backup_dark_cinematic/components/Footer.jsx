import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-deep)] text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" className="font-heading text-4xl tracking-widest text-[var(--color-primary)]">
            FLOTR
          </Link>
          <p className="font-body text-white/60">Travel that flows with you.</p>
        </div>

        <div className="flex gap-8 font-body font-medium">
          <Link to="/about" className="hover:text-[var(--color-primary)] transition-colors">About</Link>
          <Link to="/agencies" className="hover:text-[var(--color-primary)] transition-colors">Agencies</Link>
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy</a>
        </div>

        <div className="flex gap-6 text-2xl text-white/60">
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors"><FaInstagram /></a>
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors"><FaTiktok /></a>
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}
