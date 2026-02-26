import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="py-32 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="font-heading font-light text-5xl md:text-6xl text-[var(--color-deep)] leading-tight">
            Ready to flow with us?
          </h2>
          <p className="font-body text-xl text-[var(--color-deep)]/80 max-w-2xl mx-auto">
            Download the Flotr app today and start discovering your next adventure.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <a
              href="#"
              className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <FaApple className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs font-body opacity-80">Download on the</div>
                <div className="text-xl font-heading font-medium">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <FaGooglePlay className="w-7 h-7" />
              <div className="text-left">
                <div className="text-xs font-body opacity-80">GET IT ON</div>
                <div className="text-xl font-heading font-medium">Google Play</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
