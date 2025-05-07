
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DemoSection from "@/components/home/DemoSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import LanguagesSection from "@/components/home/LanguagesSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

const Index = () => {
  // No need for useState and useEffect here as they're moved to child components

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <DemoSection />
      <FeaturesSection />
      <LanguagesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
