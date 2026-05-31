import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection, ServicesSection } from './components/MainSections';
import { PartnersSection } from './components/Partners';
import { CommunicationSection, ApplicationSection, DataIntelligenceSection } from './components/MiddleSections';
import { OperationSection, DataScienceSection, WhySection } from './components/FinalSections';
import { FinalCTAAndFooter } from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Placeholder Pages
const Products = () => {
  const { t } = useLanguage();
  return <PageWrapper title={t('page.products.title')}>{t('page.products.desc')}</PageWrapper>;
};
const Solutions = () => {
  const { t } = useLanguage();
  return <PageWrapper title={t('page.solutions.title')}>{t('page.solutions.desc')}</PageWrapper>;
};
const SekelaApis = () => {
  const { t } = useLanguage();
  return <PageWrapper title={t('page.sekela.title')}>{t('page.sekela.desc')}</PageWrapper>;
};
const Developers = () => {
  const { t } = useLanguage();
  return <PageWrapper title={t('page.developers.title')}>{t('page.developers.desc')}</PageWrapper>;
};
const Blog = () => {
  const { t } = useLanguage();
  return <PageWrapper title={t('page.blog.title')}>{t('page.blog.desc')}</PageWrapper>;
};
const Customers = () => {
  const { t } = useLanguage();
  return <PageWrapper title={t('page.customers.title')}>{t('page.customers.desc')}</PageWrapper>;
};
const Company = () => {
  const { t } = useLanguage();
  return <PageWrapper title={t('page.company.title')}>{t('page.company.desc')}</PageWrapper>;
};

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
    <LanguageProvider>
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
    </LanguageProvider>
  );
}

export default App;
