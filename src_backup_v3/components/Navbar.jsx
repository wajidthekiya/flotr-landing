import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine text and background colors based on route and scroll position
  const isDarkText = false; // Always light text on dark theme
  const navBg = isScrolled ? 'bg-[var(--color-deep)]/80 backdrop-blur-xl shadow-lg border-b border-white/5' : 'bg-transparent';
  const textColor = 'text-white';
  const logoColor = 'text-white';

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'For Creators', href: '/agencies' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg} py-4 md:py-6`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className={`font-heading text-3xl md:text-4xl tracking-widest transition-colors duration-500 ${logoColor} hover:text-[var(--color-accent)]`}>
          FLOTR
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-body font-medium hover:text-[var(--color-accent)] transition-colors duration-300 ${textColor}`}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-[var(--color-primary)] text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(151,123,242,0.5)] hover:bg-[var(--color-accent)] hover:text-[var(--color-deep)]">
            Get the App
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden text-2xl focus:outline-none transition-colors duration-500 ${textColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[var(--color-deep)] shadow-xl md:hidden flex flex-col items-center py-8 space-y-8 border-t border-white/10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white font-body text-xl font-medium hover:text-[var(--color-primary)] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button 
              className="bg-[var(--color-accent)] text-[var(--color-deep)] font-medium px-10 py-4 rounded-full text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get the App
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
