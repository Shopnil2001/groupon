'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Capabilities from './components/Capabilities';
import Products from './components/Products';

import Contact from './components/Contact';
import QuoteModal from './components/QuoteModal';

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <Navbar setQuoteOpen={setQuoteOpen} />
      <Hero setQuoteOpen={setQuoteOpen} />
      <About />
      <MissionVision />
      <Capabilities />
      <Products />
   
      <Contact />

      {/* Quote Modal */}
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}