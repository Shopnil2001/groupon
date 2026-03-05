'use client';

import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Users, Target } from 'lucide-react';

export default function MissionVision() {
  const missionPoints = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      desc: "We focus on timely delivery to ensure your production never stops.",
      number: "01"
    },
    {
      icon: ShieldCheck,
      title: "Quality & Integrity",
      desc: "Committed to the highest quality standards and product purity.",
      number: "02"
    },
    {
      icon: Users,
      title: "Ethical Practices",
      desc: "We believe in transparency, fairness, and sustainable business ethics.",
      number: "03"
    }
  ];

  return (
    <section id="mission" className="relative py-24 bg-[#f8fafd]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#00C853] font-semibold tracking-[4px] text-sm"
          >
            OUR COMMITMENT
          </motion.span>
          <h2 className="text-6xl md:text-7xl font-black text-[#0A3D62] tracking-tighter mt-3">
            MISSION &amp; VISION
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* MISSION - Interactive Cards */}
          <div>
            <h3 className="text-3xl font-bold text-[#0A3D62] mb-10 flex items-center gap-3">
              <Target className="text-[#00C853]" size={32} />
              OUR MISSION
            </h3>
            
            <div className="space-y-6">
              {missionPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ 
                      scale: 1.04, 
                      y: -8,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="group bg-white rounded-3xl p-8 border border-transparent hover:border-[#00C853]/30 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                  >
                    {/* Number Badge */}
                    <div className="absolute top-8 right-8 text-7xl font-black text-[#0A3D62]/5 group-hover:text-[#00C853]/10 transition-all duration-500">
                      {point.number}
                    </div>

                    <div className="flex gap-6">
                      <div className="mt-1 flex-shrink-0">
                        <motion.div 
                          className="w-16 h-16 bg-[#00C853]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#00C853] transition-all duration-500"
                          whileHover={{ rotate: 12 }}
                        >
                          <Icon 
                            className="w-9 h-9 text-[#00C853] group-hover:text-white transition-colors" 
                            strokeWidth={2}
                          />
                        </motion.div>
                      </div>

                      <div className="flex-1 pt-1">
                        <h4 className="text-2xl font-semibold text-[#0A3D62] mb-3 group-hover:text-[#00C853] transition-colors">
                          {point.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {point.desc}
                        </p>
                      </div>
                    </div>

                    {/* Animated Hover Glow Line */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#00C853] via-[#00C853] to-transparent w-0 group-hover:w-full transition-all duration-700" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* VISION - Elegant Statement with Interactive Element */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:pt-12"
          >
            <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-xl border border-gray-100 h-full flex flex-col">
              <div className="mb-8">
                <span className="uppercase text-[#00C853] font-bold tracking-widest text-sm">OUR VISION</span>
              </div>
              
              <blockquote className="text-3xl md:text-4xl font-light leading-tight text-[#0A3D62] mb-10">
                To gain trust and grow sustainable relationships with our business partners. 
                We believe a trusted environment creates the best foundation for long-term success.
              </blockquote>

              <div className="border-l-4 border-[#00C853] pl-6 mt-auto">
                <p className="text-xl font-medium text-gray-700">
                  In the future, we want to be recognized globally as a symbol of{' '}
                  <span className="text-[#00C853] font-semibold">quality</span> and{' '}
                  <span className="text-[#00C853] font-semibold">reliability</span>.
                </p>
              </div>

              {/* Cool Interactive Rotating Trust Ring */}
              <motion.div 
                className="mt-14 flex justify-end"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              >
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 border-4 border-[#00C853]/20 rounded-full" />
                  <div className="absolute inset-0 border-4 border-transparent border-t-[#00C853] rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center text-3xl">🤝</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}