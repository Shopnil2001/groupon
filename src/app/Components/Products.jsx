'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function Products() {
  const [activeTab, setActiveTab] = useState('products');
  const [selectedImage, setSelectedImage] = useState(null);

  // ====================== PRODUCT IMAGES (from your PDF) ======================
  const products = [
    {
      id: 1,
      src: '/p1.jpeg',
      name: 'Digital Fabric Printing',
      desc: 'High-precision Epson industrial printer'
    },
    {
      id: 2,
      src: '/p3.jpeg',
      name: 'Gum Tape Rolls',
      desc: 'Premium packaging tape'
    },
    {
      id: 3,
      src: '/p4.jpeg',
      name: 'Colored Elastics & Webbing',
      desc: 'Vibrant draw cords & elastics'
    },
    {
      id: 4,
      src: '/p5.jpeg',
      name: 'Poly & Protective Sheets',
      desc: 'High-quality plastic packaging'
    },
    {
      id: 5,
      src: '/p6.jpeg',
      name: 'Cord Locks & Adjusters',
      desc: 'Black & colored plastic toggles'
    },
    {
      id: 6,
      src: '/p7.jpeg',
      name: 'Multi-color Cord Locks',
      desc: 'Vibrant range of toggles'
    },
    {
      id: 7,
      src: '/p8.jpeg',
      name: 'Heavy-Duty Buckles',
      desc: 'Durable plastic buckles'
    }
  ];

  // ====================== FACTORY INSIGHT IMAGES (from your PDF) ======================
  const factoryImages = [
    {
      id: 1,
      src: '/f1.jpeg',
      name: 'Factory Exterior',
      desc: 'Modern production facility in Demra, Dhaka'
    },
    {
      id: 2,
      src: '/f2.jpeg',
      name: 'Textile Machine',
      desc: 'High-speed yarn & elastic production'
    },
    {
      id: 3,
      src: '/f3.jpeg',
      name: 'GrouponBD Facility',
      desc: 'Our dedicated manufacturing plant'
    },
    {
      id: 4,
      src: '/f4.jpeg',
      name: 'Draw Cord Machine',
      desc: 'Automated drawstring & elastic line'
    }
  ];

  const currentImages = activeTab === 'products' ? products : factoryImages;

  return (
    <section id="products" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-[#00C853]/10 text-[#00C853] text-sm font-semibold tracking-widest rounded-full mb-4"
          >
            VISUAL SHOWCASE
          </motion.span>
          <h2 className="text-6xl md:text-7xl font-black text-[#0A3D62] tracking-tighter">
            PRODUCT GALLERY
          </h2>
        </div>

        {/* Premium Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-3xl p-1.5 shadow-inner">
            {['products', 'factory'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-4 text-lg font-semibold rounded-3xl transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-white shadow text-[#0A3D62]' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab === 'products' ? '🛍️ Products' : '🏭 Factory Insight'}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with Staggered Animation */}
        <motion.div 
          key={activeTab} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {currentImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -12 }}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer bg-white border border-gray-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Green Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-2xl font-semibold tracking-tight mb-1 drop-shadow">
                    {item.name}
                  </h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <span className="text-[#00C853] text-xl">↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* LIGHTBOX MODAL - Stunning Fullscreen View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 z-10 bg-white text-[#0A3D62] w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl hover:bg-red-50 transition-colors"
              >
                <X size={28} />
              </button>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.name}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>

              <div className="text-center mt-6">
                <h3 className="text-white text-3xl font-semibold tracking-tighter">
                  {selectedImage.name}
                </h3>
                <p className="text-white/70 mt-2 text-lg">{selectedImage.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}