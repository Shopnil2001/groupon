'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

export default function Hero({ setQuoteOpen }) {
    const shouldReduceMotion = useReducedMotion();
    
    const services = [
        { text: 'Drawstring', color: '#00C853' },
        { text: 'Elastic Cords', color: '#00C853' },
        { text: 'Poly & Digital Printing', color: '#00C853' },
        { text: 'Carton Packaging', color: '#00C853' },
        { text: 'Metal Trims', color: '#00C853' },
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A3D62]"
        >
            {/* Background Image (add your best factory photo here) */}
            <div className="absolute inset-0 bg-[url('/Hero.png')] bg-cover bg-center opacity-40" />

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Stunning Animated Blobs (organic floating + morphing effect) */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Blob 1 - Large green */}
                <motion.div
                    className="absolute top-[15%] left-[10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[520px] lg:h-[520px] rounded-[60%_40%_70%_30%] bg-[#00C853] blur-[80px] sm:blur-[100px] lg:blur-[120px] opacity-20"
                    animate={shouldReduceMotion ? {} : {
                        scale: [1, 1.15, 1],
                        rotate: [0, 25, 0],
                        borderRadius: ['60% 40% 70% 30%', '40% 60% 30% 70%', '60% 40% 70% 30%'],
                    }}
                    transition={shouldReduceMotion ? {} : {
                        duration: 18,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Blob 2 - Navy accent */}
                <motion.div
                    className="absolute bottom-[20%] right-[8%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] rounded-[40%_70%_30%_60%] bg-[#0A3D62] blur-[60px] sm:blur-[80px] lg:blur-[100px] opacity-30"
                    animate={shouldReduceMotion ? {} : {
                        scale: [1.1, 0.95, 1.1],
                        rotate: [15, -20, 15],
                        borderRadius: ['40% 70% 30% 60%', '70% 30% 60% 40%', '40% 70% 30% 60%'],
                    }}
                    transition={shouldReduceMotion ? {} : {
                        duration: 22,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Blob 3 - Medium glowing green */}
                <motion.div
                    className="absolute top-[55%] left-[55%] w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] rounded-[50%_30%_65%_45%] bg-[#00C853] blur-[60px] sm:blur-[70px] lg:blur-[90px] opacity-15"
                    animate={shouldReduceMotion ? {} : {
                        x: [0, 80, -40, 0],
                        y: [0, -60, 70, 0],
                        scale: [0.9, 1.25, 0.9],
                    }}
                    transition={shouldReduceMotion ? {} : {
                        duration: 14,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Tiny floating accent blobs */}
                <motion.div
                    className="absolute top-[25%] right-[25%] w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full bg-white blur-xl opacity-10"
                    animate={shouldReduceMotion ? {} : { y: [-30, 30, -30], x: [20, -20, 20] }}
                    transition={shouldReduceMotion ? {} : { duration: 9, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-[35%] left-[20%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-[#00C853] blur-2xl opacity-10"
                    animate={shouldReduceMotion ? {} : { y: [40, -40, 40], x: [-30, 30, -30] }}
                    transition={shouldReduceMotion ? {} : { duration: 11, repeat: Infinity }}
                />
            </div>

            {/* Main Content - Glassmorphism Card */}
            <div className="relative z-10 max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'backOut' }}
                    className="backdrop-blur-2xl bg-white/10 border border-white/30 shadow-2xl rounded-2xl sm:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16"
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="flex justify-center mb-4 sm:mb-6"
                    >
                        <div className="flex items-center flex-wrap justify-center">
                            <span className="text-[60px] sm:text-[80px] lg:text-[92px] xl:text-[110px] font-black tracking-[-3px] sm:tracking-[-4px] lg:tracking-[-6px] leading-none text-white drop-shadow-xl">
                                Groupon
                            </span>
                            <span className="text-[60px] sm:text-[80px] lg:text-[92px] xl:text-[110px] font-black tracking-[-3px] sm:tracking-[-4px] lg:tracking-[-6px] leading-none text-[#00C853]">
                                BD
                            </span>
                        </div>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-white/90 text-xl sm:text-2xl lg:text-3xl font-medium tracking-wider mb-2 sm:mb-3"
                    >
                        TRUST IS OUR DRIVE TO GROW
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight sm:leading-none tracking-tighter mt-2 mb-6 sm:mb-8 px-2"
                    >
                        PREMIUM GARMENTS<br className="hidden sm:block" />ACCESSORIES &amp; TRIMS
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-white/80 font-light mb-8 sm:mb-12 px-4"
                    >
                        Since 2021 • 29 skilled team • 100% quality commitment
                    </motion.p>

                    {/* Animated Services (floating with blob connection feel) */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-14 px-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.6, y: 40 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                whileHover={{
                                    scale: 1.12,
                                    backgroundColor: '#ffffff',
                                    color: '#0A3D62',
                                }}
                                transition={{
                                    delay: 1.3 + index * 0.1,
                                    type: 'spring',
                                    stiffness: 200,
                                }}
                                className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 text-white font-semibold text-sm sm:text-base rounded-2xl sm:rounded-3xl border border-white/40 backdrop-blur-xl hover:border-white transition-all shadow-inner"
                                style={{
                                    boxShadow: `0 0 25px -5px ${service.color}30`,
                                }}
                            >
                                {service.text}
                            </motion.div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-4">
                        <motion.a
                            href="#capabilities"
                            className="group px-8 sm:px-10 lg:px-12 py-4 sm:py-5 bg-white text-[#0A3D62] font-semibold text-base sm:text-lg rounded-2xl flex items-center justify-center gap-3 hover:bg-[#00C853] hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            EXPLORE CAPABILITIES
                        </motion.a>

                        <motion.button
                            onClick={() => setQuoteOpen(true)}
                            className="group px-8 sm:px-10 lg:px-12 py-4 sm:py-5 border-2 border-white text-white font-semibold text-base sm:text-lg rounded-2xl flex items-center justify-center gap-3 hover:bg-white hover:text-[#0A3D62] transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            GET INSTANT QUOTE
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
            >
                <span className="text-xs tracking-[3px] font-medium">SCROLL TO DISCOVER</span>
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="w-px h-12 bg-gradient-to-b from-transparent via-white/60 to-transparent"
                />
            </motion.div>
        </section>
    );
}