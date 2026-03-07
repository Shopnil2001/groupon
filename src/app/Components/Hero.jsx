'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

export default function Hero({ setQuoteOpen }) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const particlesRef = useRef([]);

  // Generate stable particle positions only once on client mount
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
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A3D62] mt-16 md:mt-20"
    >
      {/* Background Image */}
      <Image
        src="/Hero.png"
        alt="Garments accessories manufacturing facility"
        fill
        priority
        className="object-cover opacity-40"
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Animated Blobs */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute -top-20 -left-20 w-[500px] lg:w-[900px] h-[500px] lg:h-[900px] rounded-full bg-[#00C853]/15 blur-3xl will-change-transform"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 120, -60, 0],
              y: [0, -80, 100, 0],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute -bottom-40 -right-40 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] rounded-full bg-[#0A3D62]/25 blur-3xl will-change-transform"
            animate={{
              scale: [1.15, 0.95, 1.15],
              x: [0, -140, 70, 0],
              y: [0, 90, -110, 0],
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
        </div>
      )}

      {/* Floating particles – only render if generated */}
      {!shouldReduceMotion &&
        particlesRef.current.length > 0 &&
        particlesRef.current.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 lg:w-3 lg:h-3 bg-[#00C853]/50 rounded-full blur-sm"
            initial={{
              x: `${p.x}%`,
              y: `${p.y}%`,
              opacity: p.opacity,
            }}
            animate={{
              y: ['0%', '-80%', '0%'],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'easeInOut',
            }}
          />
        ))}

      {/* Main Glass Card */}
      <div className="relative z-10 max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: 'backOut' }}
          className="backdrop-blur-3xl bg-white/10 border border-white/30 shadow-2xl rounded-3xl px-5 sm:px-10 lg:px-16 py-10 sm:py-14 lg:py-20"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="flex flex-wrap justify-center items-center gap-x-1">
              {'Groupon'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.06 }}
                  className="text-4xl sm:text-6xl lg:text-9xl xl:text-[110px] font-black tracking-[-3px] lg:tracking-[-6px] text-white drop-shadow-xl"
                >
                  {char}
                </motion.span>
              ))}

              {'BD'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.06 }}
                  className="text-4xl sm:text-6xl lg:text-9xl xl:text-[110px] font-black tracking-[-3px] lg:tracking-[-6px] text-[#00C853] drop-shadow-xl"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-white/90 text-lg sm:text-xl lg:text-3xl font-medium tracking-wider mb-4"
          >
            TRUST IS OUR DRIVE TO GROW
          </motion.p>

          {/* Fixed Headline – better mobile handling */}
          <motion.h1
            className="
              text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              font-black text-white leading-[1.05] tracking-[-0.02em] mb-8
              break-words hyphens-auto
              max-w-[92vw] xs:max-w-[88vw] sm:max-w-[80vw] md:max-w-4xl mx-auto px-2
            "
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
            }}
          >
            {'PREMIUM GARMENTS ACCESSORIES & TRIMS'.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Stats */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-white/80 font-light mb-10"
          >
            Since 2021 • 29 skilled team • 100% quality commitment
          </motion.p>

          {/* Services */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 lg:mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 40px -5px rgba(0,200,83,0.6)',
                }}
                transition={{
                  delay: 1.5 + index * 0.1,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                className="px-6 sm:px-10 py-3 sm:py-4 text-white font-semibold text-sm sm:text-base rounded-2xl sm:rounded-3xl border border-white/40 backdrop-blur-xl hover:bg-white hover:text-[#0A3D62] transition-all cursor-pointer shadow-lg"
              >
                {service}
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.a
              href="#capabilities"
              onClick={scrollToCapabilities}
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="px-10 sm:px-14 py-5 bg-white text-[#0A3D62] font-semibold text-lg rounded-2xl shadow-xl hover:bg-[#00C853] hover:text-white transition-all duration-300"
            >
              EXPLORE CAPABILITIES
            </motion.a>

            <motion.button
              aria-label="Get instant quote"
              onClick={() => setQuoteOpen(true)}
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="px-10 sm:px-14 py-5 border-2 border-white text-white font-semibold text-lg rounded-2xl hover:bg-white hover:text-[#0A3D62] transition-all duration-300 shadow-xl"
            >
              GET INSTANT QUOTE
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/70 pointer-events-none"
      >
        <span className="text-xs sm:text-sm tracking-[4px] uppercase font-medium">
          Scroll to discover
        </span>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-transparent via-white/80 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}