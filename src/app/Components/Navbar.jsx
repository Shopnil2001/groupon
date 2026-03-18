'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ setQuoteOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (isOpen && event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Mission & Vision', href: '#mission' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  // Your original smooth scroll logic (kept 100% intact)
  const handleScroll = (e, href) => {
    e.preventDefault();

    const target = document.querySelector(href);
    if (!target) {
      console.warn(`Element ${href} not found`);
      return;
    }

    const navbarHeight = window.innerWidth < 768 ? 100 : 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = window.pageYOffset + elementPosition - navbarHeight;

    requestAnimationFrame(() => {
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });

    // Update URL hash after animation starts
    setTimeout(() => {
      window.history.pushState(null, null, href);
    }, 150);

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-3xl border-b border-white/40 shadow-2xl">
      {/* 3D Keyboard-Key Texture Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_0_8px_20px_rgba(0,0,0,0.15)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'backOut' }}
            >
              <span className="text-4xl font-black tracking-[-2px] text-[#0A3D62]">Groupon</span>
              <span className="text-4xl font-black tracking-[-2px] text-[#00C853]">BD</span>
            </motion.div>
            <div className="hidden sm:block text-[10px] font-medium leading-none text-gray-500 mt-1 tracking-widest group-hover:text-[#00C853]">
              TRUST IS OUR<br />DRIVE TO GROW
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="relative text-[#0A3D62] hover:text-[#00C853] transition-colors py-2"
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C853] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA - 3D Keyboard Key Style */}
          <div className="hidden md:block">
            <motion.button
              onClick={() => setQuoteOpen(true)}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="relative px-9 py-3.5 bg-white text-[#0A3D62] font-semibold rounded-2xl shadow-[inset_0_8px_16px_rgba(0,0,0,0.25),inset_0_-6px_12px_rgba(255,255,255,0.6)] hover:shadow-[inset_0_6px_12px_rgba(0,0,0,0.35)] transition-all border border-white/60 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/60 to-transparent rounded-t-2xl" />
              Get a Quote
            </motion.button>
          </div>

          {/* Mobile Hamburger - 3D Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - 3D Glass Cards */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-3xl border-t border-white/40 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-3 text-lg font-medium">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="relative px-6 py-4 bg-white/90 border border-white/40 rounded-2xl hover:bg-white shadow-inner hover:shadow-xl transition-all group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl" />
                  <div className="absolute inset-0 shadow-[inset_0_6px_12px_rgba(0,0,0,0.15)] rounded-2xl" />
                  <span className="relative z-10">{link.name}</span>
                </motion.a>
              ))}

              {/* Mobile CTA - 3D Keyboard Style */}
              <motion.button
                onClick={() => {
                  setQuoteOpen(true);
                  setIsOpen(false);
                }}
                className="mt-6 w-full py-4 bg-[#00C853] text-white font-semibold rounded-2xl shadow-[inset_0_8px_16px_rgba(0,0,0,0.3),inset_0_-6px_12px_rgba(255,255,255,0.3)] hover:shadow-xl transition-all text-lg"
              >
                Get a Quote Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}