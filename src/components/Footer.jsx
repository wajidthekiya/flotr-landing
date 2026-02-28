import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-deep)] text-[var(--color-text)] py-8 md:py-12 border-t border-[var(--color-border)] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[20vw] bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-[200px] opacity-40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
          <Link to="/" className="flex items-center group">
            <img 
              src="/Logo/Logo_3.svg" 
              alt="FLOTR Logo" 
              className="w-24 md:w-40 h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <p className="font-body text-[var(--color-text)]/60 font-medium md:mt-2 text-xs md:text-sm text-center md:text-left">Don't just travel. Live it.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-body font-medium text-xs md:text-sm">
          <Link to="/about" className="hover:text-[var(--color-primary)] transition-colors">About</Link>
          <Link to="/agencies" className="hover:text-[var(--color-primary)] transition-colors">Agencies</Link>
          <Link to="/investors" className="hover:text-[var(--color-primary)] transition-colors">Investors</Link>
          <Link to="/privacy" className="hover:text-[var(--color-primary)] transition-colors">Privacy</Link>
        </div>

        <div className="flex gap-4 md:gap-6 text-xl md:text-2xl text-[var(--color-text)]/80">
          <a href="https://www.instagram.com/flotr_india?igsh=MmloajZ4Y2p6cGE4&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] hover:scale-110 transition-all"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/flotr/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] hover:scale-110 transition-all"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}
