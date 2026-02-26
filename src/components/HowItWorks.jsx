import { motion } from 'framer-motion';
import { FiPlayCircle, FiMessageCircle, FiCheckCircle } from 'react-icons/fi';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FiPlayCircle className="w-10 h-10 text-[var(--color-primary)]" />,
      title: 'Watch',
      desc: 'Discover trips through immersive, short-form videos from real travelers.',
    },
    {
      icon: <FiMessageCircle className="w-10 h-10 text-[var(--color-accent)]" />,
      title: 'Connect',
      desc: 'Chat directly with agencies and fellow travelers to plan your perfect trip.',
    },
    {
      icon: <FiCheckCircle className="w-10 h-10 text-[var(--color-deep)]" />,
      title: 'Book',
      desc: 'Secure your spot seamlessly within the app, no external links needed.',
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading font-light text-4xl md:text-5xl text-[var(--color-deep)] mb-4">
            How Flotr Works
          </h2>
          <p className="font-body text-lg text-[var(--color-deep)]/80 max-w-2xl mx-auto">
            Three simple steps to your next adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-[15%] right-[15%] h-0.5 bg-[var(--color-lav)] -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-[var(--color-cloud)] flex items-center justify-center mb-8 shadow-sm border-4 border-white relative z-10">
                {step.icon}
              </div>
              <h3 className="font-heading text-3xl text-[var(--color-deep)] mb-4">
                {step.title}
              </h3>
              <p className="font-body text-[var(--color-deep)]/70 leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
