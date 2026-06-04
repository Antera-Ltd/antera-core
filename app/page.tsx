import React from 'react';
import { Hero } from '@/src/components/Hero';
import { TrustSection, ServicesSection } from '@/src/components/MainSections';
import { PartnersSection } from '@/src/components/Partners';
import { CommunicationSection, ApplicationSection, DataIntelligenceSection } from '@/src/components/MiddleSections';
import { OperationSection, DataScienceSection, WhySection } from '@/src/components/FinalSections';

export default function Home() {
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
}
