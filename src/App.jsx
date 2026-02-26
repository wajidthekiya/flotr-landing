import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Movement from './components/Movement'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Agencies from './components/Agencies'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-cloud)] font-body text-[var(--color-deep)]">
      <Navbar />
      <main>
        <Hero />
        <Movement />
        <Problem />
        <HowItWorks />
        <Agencies />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
