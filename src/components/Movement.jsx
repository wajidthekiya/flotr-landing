import { motion } from 'framer-motion';

export default function Movement() {
  const words = [
    { text: 'MOVE', color: 'text-[var(--color-primary)]', desc: 'Experience travel that flows with your rhythm.' },
    { text: 'DISCOVER', color: 'text-[var(--color-accent)]', desc: 'Find hidden gems through video-first exploration.' },
    { text: 'CONNECT', color: 'text-[var(--color-primary)]', desc: 'Join a community of passionate travelers.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="py-32 bg-[var(--color-cloud)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col items-center text-center space-y-16"
        >
          {words.map((word, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
              <h2
                className={`font-heading uppercase text-7xl md:text-9xl lg:text-[12rem] leading-none tracking-tighter ${word.color}`}
                style={{ WebkitTextStroke: word.color === 'text-[var(--color-accent)]' ? '2px var(--color-deep)' : 'none' }}
              >
                {word.text}
              </h2>
              <p className="font-body text-xl md:text-2xl text-[var(--color-deep)] mt-4 max-w-md">
                {word.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
