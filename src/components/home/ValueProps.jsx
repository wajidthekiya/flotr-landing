import { motion } from 'framer-motion';

export default function ValueProps() {
  const props = [
    {
      icon: "🍻",
      title: "Friends bailed again?",
      desc: "Stop waiting. See who's already joining the trip. Go solo, leave with a crew. All trips are led by professional Trip Captains.",
      color: "border-[var(--color-primary)]/30",
      bg: "bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-surface)]",
      iconBg: "bg-[var(--color-primary)]/20",
      iconColor: "text-[var(--color-primary)]",
      shadow: "shadow-[var(--color-primary)]/5"
    },
    {
      icon: "💸",
      title: "Tight Budget?",
      desc: "We get it. That's why our epic weekend getaways start at just ₹1500. Premium experiences without the premium price tag.",
      color: "border-[var(--color-accent)]/50",
      bg: "bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-surface)]",
      iconBg: "bg-[var(--color-accent)]/20",
      iconColor: "text-[var(--color-accent)]",
      shadow: "shadow-[var(--color-accent)]/10"
    },
    {
      icon: "⚡",
      title: "No time to plan?",
      desc: "Working professional? College student? Just scroll, watch a 15s video, check the itinerary, and book instantly. Zero planning required.",
      color: "border-[#6338CB]/30",
      bg: "bg-gradient-to-br from-[#6338CB]/10 to-[var(--color-surface)]",
      iconBg: "bg-[#6338CB]/20",
      iconColor: "text-[#6338CB]",
      shadow: "shadow-[#6338CB]/5"
    }
  ];

  return (
    <section className="py-16 md:pt-16 md:pb-32 bg-[var(--color-bg)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-7xl font-bold text-[var(--color-text)] mb-4 md:mb-6"
          >
            WHY <span className="text-gradient">FLOTR?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg md:text-xl text-[var(--color-text)]/70 max-w-2xl mx-auto"
          >
            We built the platform we wished existed when our own plans got cancelled.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {props.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`${prop.bg} backdrop-blur-md border ${prop.color} p-6 md:p-10 rounded-3xl md:rounded-[3rem] hover:-translate-y-2 transition-transform duration-500 shadow-xl ${prop.shadow} h-full flex flex-col`}
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 ${prop.iconBg} rounded-full flex items-center justify-center mb-6 md:mb-8 border ${prop.color} ${prop.iconColor} text-2xl md:text-3xl`}>
                {prop.icon}
              </div>
              <h3 className="font-heading text-2xl md:text-4xl text-[var(--color-text)] mb-3 md:mb-4">{prop.title}</h3>
              <p className="font-body text-base md:text-lg text-[var(--color-text)]/70 flex-grow leading-relaxed">
                {prop.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}