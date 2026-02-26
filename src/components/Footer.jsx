import { FaInstagram, FaTwitter, FaTiktok, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-deep)] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <a href="#" className="font-heading text-4xl tracking-wider text-white">
            FLOTR
          </a>
          <p className="font-body text-white/70 max-w-sm leading-relaxed">
            Travel that flows with you. Discover, connect, and book your next adventure seamlessly.
          </p>
          <div className="flex space-x-6 pt-4">
            <a href="#" className="text-white/70 hover:text-[var(--color-accent)] transition-colors">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/70 hover:text-[var(--color-accent)] transition-colors">
              <FaTiktok className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/70 hover:text-[var(--color-accent)] transition-colors">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/70 hover:text-[var(--color-accent)] transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h4 className="font-heading text-xl text-white">Company</h4>
          <ul className="space-y-4 font-body text-white/70">
            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-heading text-xl text-white">Legal</h4>
          <ul className="space-y-4 font-body text-white/70">
            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center font-body text-white/50 text-sm">
        &copy; {currentYear} Flotr Inc. All rights reserved.
      </div>
    </footer>
  );
}
