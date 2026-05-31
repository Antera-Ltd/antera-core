
import React from 'react';
import { Hero } from '../components/Hero';
import { TrustSection, ServicesSection } from '../components/MainSections';
import { PartnersSection } from '../components/Partners';
import { CommunicationSection, ApplicationSection, DataIntelligenceSection } from '../components/MiddleSections';
import { OperationSection, DataScienceSection, WhySection } from '../components/FinalSections';

export const Home = () => {
  return (
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
};
