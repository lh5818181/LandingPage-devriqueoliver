// src/pages/Home.tsx
import React from 'react';
import { HeroSection } from '../components/hero/Hero';
import { DiagonalDivider } from '../components/SectionDivider';
import { ValuePropsSection } from '../components/value/ValuePropsSection';
import { ProcessSection } from '../components/process/ProcessSection';
import { ContactSection } from '../components/contact/ContactSection';
import { ServicesSection } from '../components/services/ServicesSection';
import { Navbar } from '../components/navbar/Navbar';

export function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <DiagonalDivider />
      <ValuePropsSection />
      <DiagonalDivider style={{ transform: 'rotate(180deg)' }} />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
