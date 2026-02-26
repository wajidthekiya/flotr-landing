import { motion } from 'framer-motion';
import { FiVideo, FiInbox, FiTrendingUp } from 'react-icons/fi';
import Button from './ui/Button';

export default function Agencies() {
  const features = [
    {
      icon: <FiVideo className="w-8 h-8 text-[var(--color-accent)]" />,
      title: 'Post Trip Videos',
      desc: 'Showcase your best itineraries through engaging short-form content.',
    },
    {
      icon: <FiInbox className="w-8 h-8 text-[var(--color-accent)]" />,
      title: 'Receive Inquiries',
      desc: 'Get direct messages from interested travelers right in the app.',
    },
    {
      icon: <FiTrendingUp className="w-8 h-8 text-[var(--color-accent)]" />,
      title: 'Increase Bookings',
      desc: 'Convert viewers into customers with seamless in-app booking.',
    },
  ];

  return (
    <section className="py-32 bg-[var(--color-primary)] text-white relative overflow-hidden">
      {/* Background Flow Shape */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,800 C320,600 420,200 720,400 C1020,600 1120,200 1440,400 L1440,0 L0,0 Z"
            fill="var(--color-accent)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading font-light text-4xl md:text-5xl mb-6">
            Get Direct Travel Leads
          </h2>
          <p className="font-body text-lg text-white/80 max-w-2xl mx-auto">
            Join the platform where travelers are actively looking for their next adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-heading text-2xl mb-3">{feature.title}</h3>
              <p className="font-body text-white/70 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="primary" className="text-lg px-10 py-5">
            List Your Trips
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
