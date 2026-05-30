import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustSection, ServicesSection } from './components/MainSections'
import { CommunicationSection, ApplicationSection, DataIntelligenceSection } from './components/ExtraSections'
import { OperationSection, DataScienceSection, WhySection } from './components/FinalSections'
import { FinalCTA, Footer } from './components/Footer'
import { motion, useScroll, useSpring } from 'framer-motion'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-orange/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-brand-orange z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <TrustSection />
        <ServicesSection />
        <CommunicationSection />
        <ApplicationSection />
        <DataIntelligenceSection />
        <OperationSection />
        <DataScienceSection />
        <WhySection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
