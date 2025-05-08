// src/pages/Home.tsx
import React from 'react';
import { HeroSection } from '../components/hero/Hero';
import { DiagonalDivider } from '../components/SectionDivider';
import { ValuePropsSection } from '../components/value/ValuePropsSection';
import { ProcessSection } from '../components/process/ProcessSection';
import { ContactSection } from '../components/contact/ContactSection';

export function Home() {
  return (
    <>
      <HeroSection />
      <DiagonalDivider />
      <ValuePropsSection />
      <DiagonalDivider style={{ transform: 'rotate(180deg)' }} />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
