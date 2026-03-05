'use client';

import { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import MissionVision from './Components/MissionVision';
import Capabilities from './Components/Capabilities';
import Products from './Components/Products';

import Contact from './Components/Contact';
import QuoteModal from './Components/QuoteModal';


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
     <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)}></QuoteModal>
      {/* Quote Modal */}
      {/* <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} ></QuoteModal> */}
    </div>
  );
}