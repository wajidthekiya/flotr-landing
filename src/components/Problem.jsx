import { motion } from 'framer-motion';
import { FiSearch, FiUsers, FiBriefcase } from 'react-icons/fi';

export default function Problem() {
  const problems = [
    {
      icon: <FiSearch className="w-8 h-8 text-[var(--color-primary)]" />,
      title: 'Too many travel platforms',
      desc: 'Jumping between apps to find inspiration, plan, and book is exhausting.',
    },
    {
      icon: <FiUsers className="w-8 h-8 text-[var(--color-accent)]" />,
      title: 'No real community',
      desc: 'Reviews are static and impersonal. You want to see real experiences from real people.',
    },
    {
      icon: <FiBriefcase className="w-8 h-8 text-[var(--color-deep)]" />,
      title: 'No direct connection to agencies',
      desc: 'Booking through middlemen adds friction and cost. Connect directly with local experts.',
    },
  ];

  return (
    <section className="py-24 bg-[var(--color-lav)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-light text-4xl md:text-5xl text-[var(--color-deep)] mb-4">
            The old way is broken.
          </h2>
          <p className="font-body text-lg text-[var(--color-deep)]/80 max-w-2xl mx-auto">
            Travel planning shouldn't feel like work. We're fixing the fragmentation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[var(--color-cloud)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-cloud)] flex items-center justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="font-heading text-2xl text-[var(--color-deep)] mb-3">
                {problem.title}
              </h3>
              <p className="font-body text-[var(--color-deep)]/70 leading-relaxed">
                {problem.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
