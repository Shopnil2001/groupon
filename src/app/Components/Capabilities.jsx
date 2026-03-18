'use client';

import { motion } from 'framer-motion';
import { Factory, Zap, Scissors, Printer, Box, Ruler, Hammer } from 'lucide-react';

export default function Capabilities() {
  const machines = [
    {
      name: "Drawstring",
      machines: "12 Set Auto",
      capacity: "10,000",
      unit: "yards/day",
      icon: Factory,
      color: "#00C853"
    },
    {
      name: "Elastic Draw Cord",
      machines: "10 Set",
      capacity: "3,000",
      unit: "yards/day",
      icon: Zap,
      color: "#00C853"
    },
    {
      name: "Plain Elastic",
      machines: "02 Set",
      capacity: "6,000",
      unit: "yards/day",
      icon: Scissors,
      color: "#00C853"
    },
    {
      name: "Poly & Printing",
      machines: "01 Set",
      capacity: "40,000",
      unit: "pcs/day",
      icon: Printer,
      color: "#00C853"
    },
    {
      name: "Digital Fabrics Printing",
      machines: "02 Set",
      capacity: "High Volume",
      unit: "pcs/day",
      icon: Printer,
      color: "#00C853"
    },
    {
      name: "Carton",
      machines: "Full 01 Set",
      capacity: "5,000",
      unit: "pcs/day",
      icon: Box,
      color: "#00C853"
    },
    {
      name: "Gum Tape",
      machines: "Sourcing",
      capacity: "5,000",
      unit: "rolls/day",
      icon: Ruler,
      color: "#00C853"
    },
    {
      name: "Metal Accessories",
      machines: "04 Set",
      capacity: "Custom",
      unit: "production",
      icon: Hammer,
      color: "#00C853"
    }
  ];

  return (
    <section id="capabilities" className="relative py-16 sm:py-20 lg:py-24 bg-[#f8fafd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-[#00C853]/10 text-[#00C853] text-sm font-semibold tracking-widest rounded-full mb-4"
          >
            PRODUCTION POWER
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0A3D62] tracking-tighter leading-tight">
            FACTORY CAPABILITIES
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            State-of-the-art machinery delivering unmatched daily capacity with 100% commitment to quality
          </p>
        </div>

        {/* 3D Keyboard-Key Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {machines.map((machine, index) => {
            const Icon = machine.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -14, scale: 1.04 }}
                className="group relative bg-white/90 backdrop-blur-3xl border border-white/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col"
              >
                {/* === KEYBOARD SKEWMORPHISM TEXTURE === */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-black/10 rounded-3xl" />
                <div className="absolute inset-0 shadow-[inset_0_12px_30px_rgba(0,0,0,0.35),inset_0_-8px_20px_rgba(255,255,255,0.25)] rounded-3xl" />
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/55 to-transparent rounded-t-3xl" />
                <div className="absolute inset-x-6 top-8 h-px bg-white/50" />

                {/* Icon + Capacity */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.15 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 bg-[#00C853]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#00C853] transition-all duration-500"
                  >
                    <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-[#00C853] group-hover:text-white transition-colors" />
                  </motion.div>

                  <div className="text-right">
                    <motion.div
                      initial={{ scale: 0.6 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="text-4xl sm:text-5xl font-black text-[#0A3D62] tracking-tighter group-hover:text-[#00C853] transition-colors"
                    >
                      {machine.capacity}
                    </motion.div>
                    <div className="text-xs font-medium text-gray-500 tracking-widest -mt-1">
                      {machine.unit}
                    </div>
                  </div>
                </div>

                {/* Machine Name */}
                <h3 className="text-lg sm:text-2xl font-semibold text-[#0A3D62] mb-2 group-hover:text-[#00C853] transition-colors relative z-10">
                  {machine.name}
                </h3>

                {/* Machines Count */}
                <div className="text-sm font-medium text-gray-500 mb-auto relative z-10">
                  {machine.machines} Machines
                </div>

                {/* Bottom Glow Bar */}
                <div className="h-1.5 bg-gradient-to-r from-[#00C853] to-transparent w-0 group-hover:w-full mt-6 transition-all duration-700 rounded-full relative z-10" />
              </motion.div>
            );
          })}
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 flex-wrap px-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00C853] rounded-full animate-pulse" /> 
            100% In-House Production
          </div>
          <div className="hidden sm:block">•</div>
          <div>Daily Output: Over 70,000+ units</div>
          <div className="hidden sm:block">•</div>
          <div>Modern Chinese & Local Machinery</div>
        </motion.div>
      </div>
    </section>
  );
}