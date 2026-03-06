'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ setQuoteOpen }) {
    const [isOpen, setIsOpen] = useState(false);

    // Close mobile menu when clicking outside or on escape
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

    // Focus management for mobile menu
    useEffect(() => {
        if (isOpen) {
            // Focus the first link when menu opens
            const firstLink = document.querySelector('nav a[href]');
            if (firstLink) {
                firstLink.focus();
            }
        }
    }, [isOpen]);

    // Prevent menu from closing when clicking on nav elements
    const handleNavClick = (e) => {
        // Don't close menu if clicking on hamburger button
        if (e.target.closest('button[aria-label="Toggle menu"]')) {
            return;
        }
    };


    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Mission & Vision', href: '#mission' },
        { name: 'Capabilities', href: '#capabilities' },
        { name: 'Products', href: '#products' },

        { name: 'Contact', href: '#contact' },
    ];

    // Smooth scroll helper
 const handleScroll = (e, href) => {
  e.preventDefault();
  
  const target = document.querySelector(href);
  if (!target) {
    console.warn(`Element ${href} not found`);
    return;
  }

  // Increased mobile-safe offset
  const navbarHeight = window.innerWidth < 768 ? 100 : 80;
  
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = window.pageYOffset + elementPosition - navbarHeight;

  // Use requestAnimationFrame for layout settling
  requestAnimationFrame(() => {
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });

  // Update URL after small delay (mobile menu animation)
  setTimeout(() => {
    window.history.pushState(null, null, href);
  }, 150);

  setIsOpen(false);
};


    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm" onClick={handleNavClick}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: 'backOut' }}
                            className="flex items-center"
                        >
                            <span className="text-4xl font-black tracking-[-2px] text-[#0A3D62]">
                                Groupon
                            </span>
                            <span className="text-4xl font-black tracking-[-2px] text-[#00C853]">
                                BD
                            </span>
                        </motion.div>
                        <div className="hidden sm:block text-[10px] font-medium leading-none text-gray-500 mt-1 tracking-widest group-hover:text-[#00C853] transition-colors">
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
                                className="relative text-[#0A3D62] hover:text-[#00C853] transition-colors duration-300"
                                whileHover={{ y: -2 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 * index }}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C853] group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Button (Desktop) */}
                    <div className="hidden md:block">
                        <motion.button
                            onClick={() => setQuoteOpen(true)}   // ← add this
                            whileHover={{ scale: 1.05 }}
                            className="px-8 py-3 bg-[#00C853] text-white font-semibold rounded-full hover:bg-[#00A43E] ...">
                            Get a Quote
                        </motion.button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-[#0A3D62] p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu with Framer Motion */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden relative z-40"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6 text-lg font-medium max-h-[70vh] overflow-y-auto">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * index }}
                                >
                                    <button
                                        onClick={(e) => {
                                            handleScroll(e, link.href);
                                            // Manually update URL hash
                                            window.history.pushState(null, null, link.href);
                                        }}
                                        className="w-full text-left text-[#0A3D62] hover:text-[#00C853] transition-colors py-3 px-2 -mx-2 rounded-lg hover:bg-gray-50"
                                    >
                                        {link.name}
                                    </button>
                                </motion.div>
                            ))}

                            {/* Mobile CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <button
                                    onClick={() => {
                                        setQuoteOpen(true);
                                        setIsOpen(false);
                                    }}
                                    className="w-full text-center py-4 bg-[#00C853] text-white font-semibold rounded-2xl text-lg shadow-lg hover:bg-[#00A43E] transition-colors"
                                >
                                    Get a Quote Now
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}