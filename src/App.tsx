import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection, ServicesSection } from './components/MainSections';
import { PartnersSection } from './components/Partners';
import { CommunicationSection, ApplicationSection, DataIntelligenceSection } from './components/MiddleSections';
import { OperationSection, DataScienceSection, WhySection } from './components/FinalSections';
import { FinalCTAAndFooter } from './components/Footer';

// Placeholder Pages
const Products = () => <PageWrapper title="Products">Explore our cutting-edge AI and Data solutions.</PageWrapper>;
const Solutions = () => <PageWrapper title="Solutions">Tailored digital infrastructure for the modern enterprise.</PageWrapper>;
const SekelaApis = () => <PageWrapper title="Sekela APIS">Connect your business with our robust API network.</PageWrapper>;
const Developers = () => <PageWrapper title="Developers">Documentation and tools for engineering excellence.</PageWrapper>;
const Blog = () => <PageWrapper title="Blog">Insights from the forefront of Neural Technologies.</PageWrapper>;
const Customers = () => <PageWrapper title="Customers">Success stories from our global partners.</PageWrapper>;
const Company = () => <PageWrapper title="Company">About Advanced Neural Technologies & Engineering Research Agency.</PageWrapper>;

const PageWrapper = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="pt-24 pb-16 px-6 min-h-[60vh] flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#09090B]">{title}</h1>
    <p className="text-xl text-neutral-600 mb-8">{children}</p>
    <div className="w-full h-px bg-black/10 my-12" />
    <div className="mistral-grid h-40 w-full rounded-lg border border-black/5" />
  </div>
);

const Home = () => (
  <>
    <Hero />
    <PartnersSection />
    <TrustSection />
    <ServicesSection />
    <CommunicationSection />
    <ApplicationSection />
    <DataIntelligenceSection />
    <OperationSection />
    <DataScienceSection />
    <WhySection />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-[#1F1F1F] selection:bg-[#FA520F]/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/sekela-apis" element={<SekelaApis />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </main>
        <FinalCTAAndFooter />
      </div>
    </Router>
  );
}

export default App;
