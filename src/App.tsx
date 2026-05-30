import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoCloud } from './components/LogoCloud';
import { TrustSection, ServicesSection } from './components/MainSections';
import { CommunicationSection, ApplicationSection, DataIntelligenceSection } from './components/MiddleSections';
import { OperationSection, DataScienceSection, WhySection } from './components/FinalSections';
import { Footer, FinalCTA } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
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
  );
}

export default App;
