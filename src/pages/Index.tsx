
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CustomerSection from '@/components/CustomerSection';
import DriverSection from '@/components/DriverSection';
import DriverRegistration from '@/components/DriverRegistration';
import SafetySection from '@/components/SafetySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CustomerSection />
        <DriverSection />
        <DriverRegistration />
        <SafetySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
