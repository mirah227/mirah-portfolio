/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIBring } from './components/WhatIBring';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'what-i-bring', 'experience', 'about', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF5F8] text-[#26142E] selection:bg-pink-200 selection:text-pink-900">
      {/* 1. Header Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content: The Five Core Sections */}
      <main>
        {/* 1. Home / Hero Section */}
        <Hero />

        {/* 2. What I Bring to Your Community */}
        <WhatIBring />

        {/* 3. Projects & Experience Section */}
        <Experience />

        {/* 4. About Section */}
        <About />

        {/* 5. Contact Section */}
        <Contact />
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
