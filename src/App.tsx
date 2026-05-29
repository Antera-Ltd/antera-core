import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustSection, ServicesSection } from './components/MainSections'
import { CommunicationSection, ApplicationSection, DataIntelligenceSection } from './components/ExtraSections'
import { OperationSection, DataScienceSection, WhySection } from './components/FinalSections'
import { FinalCTA, Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30">
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
