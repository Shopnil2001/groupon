'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

export default function Hero({ setQuoteOpen }) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const particlesRef = useRef([]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Particles
  useEffect(() => {
    if (particlesRef.current.length === 0 && typeof window !== 'undefined') {
      particlesRef.current = Array.from({ length: 10 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: 0.2 + Math.random() * 0.4,
        duration: 8 + Math.random() * 6,
      }));
    }
  }, []);

  // Mouse tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (shouldReduceMotion || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const services = [
    'Drawstring',
    'Elastic Cords',
    'Poly & Digital Printing',
    'Carton Packaging',
    'Metal Trims',
  ];

  const scrollToCapabilities = (e) => {
    e.preventDefault();
    const el = document.getElementById('capabilities');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A3D62] mt-16 md:mt-20"
    >
      {/* <Image src="/Hero.png" alt="Factory" fill priority className="object-cover opacity-40" quality={85} /> */}

      {/* Grid & Blobs & Particles (unchanged) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

      {!shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div className="absolute -top-20 -left-20 w-[500px] lg:w-[900px] h-[500px] lg:h-[900px] rounded-full bg-[#00C853]/15 blur-3xl" animate={{ scale: [1, 1.3, 1], x: [0, 120, -60, 0], y: [0, -80, 100, 0] }} transition={{ duration: 28, repeat: Infinity }} />
          <motion.div className="absolute -bottom-40 -right-40 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] rounded-full bg-[#0A3D62]/25 blur-3xl" animate={{ scale: [1.15, 0.95, 1.15], x: [0, -140, 70, 0], y: [0, 90, -110, 0] }} transition={{ duration: 32, repeat: Infinity }} />
        </div>
      )}

      {/* Particles */}
      {!shouldReduceMotion && particlesRef.current.length > 0 && particlesRef.current.map((p, i) => (
        <motion.div key={i} className="absolute w-2 h-2 lg:w-3 lg:h-3 bg-[#00C853]/50 rounded-full blur-sm" initial={{ x: `${p.x}%`, y: `${p.y}%` }} animate={{ y: ['0%', '-80%', '0%'], opacity: [0.3, 0.9, 0.3] }} transition={{ duration: p.duration, repeat: Infinity, delay: i * 0.6 }} />
      ))}

      {/* MAIN SKEWMORPHIC CARD */}
      <div className="relative z-10 max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={cardRef}
          style={{ transform: `perspective(1600px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)` }}
          className="relative backdrop-blur-3xl bg-white/10 border border-white/30 rounded-3xl px-5 sm:px-10 lg:px-16 py-10 sm:py-14 lg:py-20 overflow-hidden shadow-2xl"
        >
          {/* Keyboard-Key Texture Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-black/10 rounded-3xl" />
          <div className="absolute inset-0 shadow-[inset_0_12px_30px_rgba(0,0,0,0.45),inset_0_-8px_20px_rgba(255,255,255,0.25)] rounded-3xl" />
          <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-white/60 to-transparent rounded-t-3xl" />
          <div className="absolute inset-x-8 top-8 h-px bg-white/50" />

          {/* Content */}
          <div className="relative z-10">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="flex flex-wrap justify-center items-center gap-x-1">
                {'Groupon'.split('').map((char, i) => (
                  <motion.span key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.06 }} className="text-4xl sm:text-6xl lg:text-9xl xl:text-[110px] font-black tracking-[-3px] text-white drop-shadow-2xl">
                    {char}
                  </motion.span>
                ))}
                {'BD'.split('').map((char, i) => (
                  <motion.span key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.06 }} className="text-4xl sm:text-6xl lg:text-9xl xl:text-[110px] font-black tracking-[-3px] text-[#00C853] drop-shadow-2xl">
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="text-white/95 text-lg sm:text-xl lg:text-3xl font-medium tracking-wider mb-4">
              TRUST IS OUR DRIVE TO GROW
            </motion.p>

            {/* Headline */}
            <motion.h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-[-0.02em] mb-8 break-words hyphens-auto max-w-[92vw] xs:max-w-[88vw] sm:max-w-[80vw] md:max-w-4xl mx-auto px-2" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } }}>
              {'PREMIUM GARMENTS ACCESSORIES & TRIMS'.split('').map((char, i) => (
                <motion.span key={i} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} className="inline-block">
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Stats */}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-white/85 font-light mb-10">
              Since 2021 • 29 skilled team • 100% quality commitment
            </motion.p>

            {/* Services - Keyboard Key Style */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 lg:mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.7, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ scale: 1.08, y: -6 }}
                  className="relative px-7 sm:px-11 py-3.5 sm:py-4 text-white font-semibold text-sm sm:text-base rounded-2xl border border-white/40 backdrop-blur-xl shadow-[inset_0_8px_16px_rgba(0,0,0,0.3),inset_0_-4px_8px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_6px_12px_rgba(0,0,0,0.35)] transition-all cursor-pointer overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white/50 to-transparent" />
                  <span className="relative z-10">{service}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons - Full Keyboard Key Style */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.a
                href="#capabilities"
                onClick={scrollToCapabilities}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="relative px-12 py-5 bg-white text-[#0A3D62] font-bold text-lg rounded-2xl shadow-[inset_0_10px_20px_rgba(0,0,0,0.25),inset_0_-6px_12px_rgba(255,255,255,0.6)] hover:shadow-[inset_0_8px_16px_rgba(0,0,0,0.3)] transition-all border border-white/60 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/70 to-transparent" />
                EXPLORE CAPABILITIES
              </motion.a>

              <motion.button
                onClick={() => setQuoteOpen(true)}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="relative px-12 py-5 border-2 border-white/80 bg-white/10 backdrop-blur-xl text-white font-bold text-lg rounded-2xl shadow-[inset_0_10px_20px_rgba(0,0,0,0.35),inset_0_-6px_12px_rgba(255,255,255,0.25)] hover:bg-white hover:text-[#0A3D62] transition-all overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/30 to-transparent" />
                GET INSTANT QUOTE
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div style={{ opacity: scrollIndicatorOpacity }} className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/70 pointer-events-none">
        <span className="text-xs sm:text-sm tracking-[4px] uppercase font-medium">Scroll to discover</span>
        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 2.2, repeat: Infinity }} className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-transparent via-white/80 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}