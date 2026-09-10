import dynamic from 'next/dynamic';
import { Hero } from '@/components/Hero';
// import { NewProductsMarquee } from '@/components/NewProductsMarquee';

const TrustSection = dynamic(() => import('@/components/MainSections').then(mod => mod.TrustSection));
const ServicesSection = dynamic(() => import('@/components/MainSections').then(mod => mod.ServicesSection));
const PartnersSection = dynamic(() => import('@/components/Partners').then(mod => mod.PartnersSection));
const CommunicationSection = dynamic(() => import('@/components/MiddleSections').then(mod => mod.CommunicationSection));
const ApplicationSection = dynamic(() => import('@/components/MiddleSections').then(mod => mod.ApplicationSection));
const DataIntelligenceSection = dynamic(() => import('@/components/MiddleSections').then(mod => mod.DataIntelligenceSection));
const OperationSection = dynamic(() => import('@/components/FinalSections').then(mod => mod.OperationSection));
const DataScienceSection = dynamic(() => import('@/components/FinalSections').then(mod => mod.DataScienceSection));
const WhySection = dynamic(() => import('@/components/FinalSections').then(mod => mod.WhySection));

export default function Home() {
  return (
    <>
      <Hero />
      {/* <NewProductsMarquee /> */}
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
}
