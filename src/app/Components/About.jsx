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
      {/* Subtle connection gradient */}
      <div className="absolute top-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-b from-[#0A3D62] to-transparent opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text + Skewmorphic Highlight Cards */}
          <div className="space-y-8 sm:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-6 py-2 bg-[#00C853]/10 text-[#00C853] text-sm font-semibold tracking-widest rounded-full mb-4">
                OUR STORY
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0A3D62] tracking-tighter leading-tight">
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
              <p>GrouponBD started operating in April 2021. We began our endeavor to provide clients with a quality complete product and support with a promise.</p>
              <p>We produce and distribute clothing accessories and trims. Maintaining commitment and product purity is our top priority.</p>
              <p className="font-medium text-[#0A3D62]">Bangladesh’s RMG industry is growing in this millennium with pride in its promise of product quality. We are delighted to have contributed our quality and commitment to this supply chain.</p>
            </motion.div>

            {/* Skewmorphic Highlight Cards (Keyboard Key Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.04 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group relative bg-white/90 backdrop-blur-3xl border border-white/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
                >
                  {/* Keyboard Texture Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl" />
                  <div className="absolute inset-0 shadow-[inset_0_10px_25px_rgba(0,0,0,0.25),inset_0_-6px_12px_rgba(255,255,255,0.3)] rounded-3xl" />
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/50 to-transparent rounded-t-3xl" />

                  <div className="relative z-10">
                    <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-[#0A3D62] tracking-tighter mb-1">
                      {item.title}
                    </div>
                    <div className="uppercase text-xs font-semibold tracking-widest text-[#00C853] mb-4">
                      {item.subtitle}
                    </div>
                    <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Team Image with Full Skewmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "backOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-full max-w-[400px] sm:max-w-[480px] lg:max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/40 bg-white"
              whileHover={{ rotateX: -8, rotateY: 6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/About.png"
                alt="GrouponBD Team"
                fill
                className="object-cover"
                priority
              />

              {/* Keyboard-style texture overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/20" />
              <div className="absolute inset-0 shadow-[inset_0_12px_30px_rgba(0,0,0,0.35),inset_0_-8px_20px_rgba(255,255,255,0.25)]" />
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/60 to-transparent" />
              <div className="absolute inset-x-8 top-8 h-px bg-white/50" />

              {/* Floating badge */}
              <motion.div
                whileHover={{ rotate: -3, scale: 1.05 }}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-2xl border border-white z-10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#00C853] rounded-full animate-pulse" />
                  <div>
                    <p className="font-semibold text-[#0A3D62]">29 Team Members</p>
                    <p className="text-xs text-gray-500">Working with passion since 2021</p>
                  </div>
                </div>
              </motion.div>

              {/* EST. 2021 badge */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-[#00C853] text-white text-sm font-bold px-6 py-2 rounded-2xl shadow-lg rotate-12 z-10"
              >
                EST. 2021
              </motion.div>
            </motion.div>

            {/* Orbiting dots */}
            <motion.div className="absolute -bottom-4 -left-6 w-5 h-5 bg-[#00C853] rounded-full blur-sm" animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 7, repeat: Infinity }} />
            <motion.div className="absolute top-12 -right-8 w-3 h-3 bg-[#0A3D62] rounded-full" animate={{ x: [0, -25, 0], y: [0, 15, 0] }} transition={{ duration: 9, repeat: Infinity }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}