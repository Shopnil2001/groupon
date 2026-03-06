'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const highlights = [
    {
      title: "2021",
      subtitle: "Founded",
      desc: "Started operations in April 2021 with a clear promise of quality and complete support.",
      icon: "🚀"
    },
    {
      title: "Quality",
      subtitle: "First Priority",
      desc: "We produce & distribute premium clothing accessories and trims with 100% product purity.",
      icon: "⭐"
    },
    {
      title: "RMG Pride",
      subtitle: "Bangladesh",
      desc: "Proud contributor to the growing Ready-Made Garments supply chain of Bangladesh.",
      icon: "🇧🇩"
    }
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-[#f8fafd] overflow-hidden">
      {/* Subtle connection gradient to Hero */}
      <div className="absolute top-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-b from-[#0A3D62] to-transparent opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content with Interactive Highlights */}
          <div className="space-y-8 sm:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 sm:px-6 py-2 bg-[#00C853]/10 text-[#00C853] text-sm font-semibold tracking-widest rounded-full mb-4">
                OUR STORY
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0A3D62] tracking-tighter leading-tight lg:leading-none">
                ABOUT US
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl space-y-4 sm:space-y-6"
            >
              <p>
                GrouponBD started operating in April 2021. We began our endeavor to provide clients 
                with a quality complete product and support with a promise.
              </p>
              <p>
                We produce and distribute clothing accessories and trims. Maintaining commitment 
                and product purity is our top priority.
              </p>
              <p className="font-medium text-[#0A3D62]">
                Bangladesh’s RMG industry is growing in this millennium with pride in its promise of 
                product quality. We are delighted to have contributed our quality and commitment to 
                this supply chain.
              </p>
            </motion.div>

            {/* Interactive Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                    boxShadow: "0 25px 50px -12px rgb(0 200 83 / 0.15)"
                  }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#00C853]/30 transition-all duration-500 cursor-pointer"
                >
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-[#0A3D62] tracking-tighter mb-1">
                    {item.title}
                  </div>
                  <div className="uppercase text-xs font-semibold tracking-widest text-[#00C853] mb-3 sm:mb-4">
                    {item.subtitle}
                  </div>
                  <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Team Illustration with Tilt Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "backOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[400px] sm:max-w-[480px] lg:max-w-[520px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white">
              <Image
                src="/About.png"
                alt="GrouponBD Team - Dedicated professionals"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/70 via-transparent to-transparent" />
              
              <motion.div
                whileHover={{ rotate: -2, scale: 1.02 }}
                className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 bg-white/95 backdrop-blur-xl px-4 sm:px-6 lg:px-7 py-3 sm:py-4 rounded-2xl shadow-xl border border-white"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-3 h-3 bg-[#00C853] rounded-full animate-pulse" />
                  <div>
                    <p className="font-semibold text-[#0A3D62] text-sm sm:text-base">29 Team Members</p>
                    <p className="text-xs text-gray-500">Working with passion since 2021</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-[#00C853] text-white text-sm font-bold px-4 sm:px-6 py-2 rounded-2xl shadow-lg rotate-12"
              >
                EST. 2021
              </motion.div>
            </div>

            {/* Orbiting accent dots */}
            <motion.div
              className="absolute -bottom-3 sm:-bottom-4 -left-4 sm:-left-6 w-4 h-4 sm:w-5 sm:h-5 bg-[#00C853] rounded-full blur-sm"
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-8 sm:top-12 -right-6 sm:-right-8 w-3 h-3 bg-[#0A3D62] rounded-full"
              animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
              transition={{ duration: 9, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}