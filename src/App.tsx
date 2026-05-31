import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection, ServicesSection } from './components/MainSections';
import { PartnersSection } from './components/Partners';
import { CommunicationSection, ApplicationSection, DataIntelligenceSection } from './components/MiddleSections';
import { OperationSection, DataScienceSection, WhySection } from './components/FinalSections';
import { FinalCTAAndFooter } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

// Real Pages
import { ProductsPage } from './pages/ProductsPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ModelsPage } from './pages/ModelsPage';
import { SekelaAPIsPage } from './pages/SekelaAPIsPage';
import { DevelopersPage } from './pages/DevelopersPage';
import { BlogPage } from './pages/BlogPage';
import { CustomersPage } from './pages/CustomersPage';
import { CompanyPage } from './pages/CompanyPage';

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
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white text-[#1F1F1F] selection:bg-[#FA520F]/30">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/models" element={<ModelsPage />} />
              <Route path="/sekela-apis" element={<SekelaAPIsPage />} />
              <Route path="/developers" element={<DevelopersPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/customers" element={<CustomersPage />} />
              <Route path="/company" element={<CompanyPage />} />
            </Routes>
          </main>
          <FinalCTAAndFooter />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
