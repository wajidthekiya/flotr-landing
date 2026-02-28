import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="pt-40 pb-32 px-6 md:px-20 bg-[var(--color-bg)] min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[var(--color-accent)] rounded-full mix-blend-multiply filter blur-[150px] opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 bg-white/60 backdrop-blur-xl p-8 md:p-16 rounded-[3rem] border border-white/40 shadow-xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center text-3xl mb-8 border border-[var(--color-primary)]/30">
            🔒
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-[var(--color-text)] mb-6 leading-tight">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="font-body text-[var(--color-text)]/60 mb-12 text-lg">Last updated: February 2026</p>

          <div className="space-y-12 font-body text-[var(--color-text)]/80 text-lg leading-relaxed">
            <section className="space-y-4">
              <h2 className="font-heading text-3xl font-bold text-[var(--color-text)]">1. Information We Collect</h2>
              <p>
                When you use FLOTR, we collect information that helps us provide you with the best travel experiences. This includes basic account information (like your email and phone number), profile photos, and travel preferences.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-3xl font-bold text-[var(--color-text)]">2. How We Use It</h2>
              <p>
                We use your data to facilitate bookings with verified agencies, match you with relevant travel groups ("See who's joining" features), and ensure the safety and security of all platform members. Your payments are processed securely through trusted third-party gateways.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-3xl font-bold text-[var(--color-text)]">3. Information Sharing</h2>
              <p>
                We do not sell your personal data. We only share necessary details (like your name and booking status) with the Verified Agencies running the specific trips you have joined to ensure your booking is handled properly.
              </p>
            </section>

             <section className="space-y-4">
              <h2 className="font-heading text-3xl font-bold text-[var(--color-text)]">4. Your Rights</h2>
              <p>
                You have full control over your data. You can request account deletion, data modification, or access to the information we have on file directly through your app settings or by contacting our support team.
              </p>
            </section>

            <section className="bg-[var(--color-primary)]/10 p-6 rounded-2xl border border-[var(--color-primary)]/30 mt-12">
              <p className="font-bold text-[var(--color-text)]">Contact Us</p>
              <p className="text-sm mt-2">If you have any questions about this Privacy Policy, please reach out to us at: <a href="mailto:privacy@flotr.ai" className="text-[var(--color-primary)] hover:underline">privacy@flotr.ai</a></p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}