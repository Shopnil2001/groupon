'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ setQuoteOpen }) {
    const [isOpen, setIsOpen] = useState(false);
    

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
        if (target) {
            const offset = 80; // navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition - bodyRect - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
        setIsOpen(false); // close mobile menu
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
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
                        className="md:hidden text-[#0A3D62] p-2"
                        aria-label="Toggle menu"
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
                        className="md:hidden bg-white border-t overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6 text-lg font-medium">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * index }}
                                    className="text-[#0A3D62] hover:text-[#00C853] transition-colors py-2"
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            {/* Mobile CTA */}
                            <motion.button
                                onClick={() => setQuoteOpen(true)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                className="mt-4 w-full text-center py-4 bg-[#00C853] text-white font-semibold rounded-2xl text-lg shadow-lg"
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