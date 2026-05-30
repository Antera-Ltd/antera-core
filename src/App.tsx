import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection, ServicesSection } from './components/MainSections';
import { CommunicationSection, ApplicationSection, DataIntelligenceSection } from './components/MiddleSections';
import { OperationSection, DataScienceSection, WhySection } from './components/FinalSections';
import { Footer, FinalCTA } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1F1F1F] selection:bg-[#FA520F]/30">
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
  );
}

export default App;
