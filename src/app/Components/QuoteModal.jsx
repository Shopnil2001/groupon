'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function QuoteModal({ isOpen, onClose }) {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    delivery: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setIsSubmitting(false);
    setSuccess(true);

    setTimeout(() => {
      onClose();
      setSuccess(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        product: '',
        quantity: '',
        delivery: '',
        message: '',
      });
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.88, y: 40 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, scale: 0.88, y: 40 }}
            transition={shouldReduceMotion ? {} : { type: 'spring', stiffness: 300, damping: 28 }}
            className="relative w-full max-w-2xl bg-white/95 backdrop-blur-3xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* === KEYBOARD-STYLE SKEWMORPHIC TEXTURE === */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/10 rounded-3xl" />
            <div className="absolute inset-0 shadow-[inset_0_14px_35px_rgba(0,0,0,0.35),inset_0_-10px_25px_rgba(255,255,255,0.25)] rounded-3xl" />
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/60 to-transparent rounded-t-3xl" />
            <div className="absolute inset-x-8 top-10 h-px bg-white/50" />

            {/* Header */}
            <div className="relative bg-[#0A3D62] px-6 sm:px-8 py-5 sm:py-6 text-white flex items-center justify-between z-10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tighter">GET INSTANT QUOTE</h3>
                <p className="text-[#00C853] text-sm mt-1">We reply within 2 hours</p>
              </div>
              <button onClick={onClose} className="text-white/70 hover:text-white">
                <X size={26} />
              </button>
            </div>

            <div className="relative p-6 sm:p-8 text-gray-900 z-10">
              {!success ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-3 outline-none text-base sm:text-lg placeholder:text-gray-500 focus:border-[#00C853] bg-transparent"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Business Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-3 outline-none text-base sm:text-lg placeholder:text-gray-500 focus:border-[#00C853] bg-transparent"
                    />
                  </div>

                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 pb-3 outline-none text-base sm:text-lg placeholder:text-gray-500 focus:border-[#00C853] bg-transparent"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <select
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-3 outline-none text-base sm:text-lg bg-transparent focus:border-[#00C853]"
                    >
                      <option value="">Select Product Type</option>
                      <option value="Drawstring">Drawstring</option>
                      <option value="Elastic Cords">Elastic Cords</option>
                      <option value="Poly & Printing">Poly & Printing</option>
                      <option value="Carton">Carton Packaging</option>
                      <option value="Metal Trims">Metal Accessories</option>
                      <option value="Other">Other</option>
                    </select>

                    <input
                      type="text"
                      name="quantity"
                      placeholder="Quantity Needed (e.g. 50,000 yards)"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-3 outline-none text-base sm:text-lg placeholder:text-gray-500 focus:border-[#00C853] bg-transparent"
                    />
                  </div>

                  <input
                    type="text"
                    name="delivery"
                    placeholder="Preferred Delivery Date"
                    value={formData.delivery}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 pb-3 outline-none text-base sm:text-lg placeholder:text-gray-500 focus:border-[#00C853] bg-transparent"
                  />

                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Any special requirements or specs?"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 pb-3 outline-none text-base sm:text-lg placeholder:text-gray-500 focus:border-[#00C853] bg-transparent resize-none"
                  />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-5 bg-[#00C853] hover:bg-[#00A43E] text-white font-semibold text-lg rounded-2xl flex items-center justify-center gap-3 disabled:opacity-70 shadow-xl relative overflow-hidden"
                  >
                    {isSubmitting ? 'SENDING QUOTE REQUEST...' : 'GET MY QUOTE NOW'}
                    {!isSubmitting && <Send className="w-6 h-6" />}
                  </motion.button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner"
                  >
                    <CheckCircle className="w-12 h-12 text-[#00C853]" />
                  </motion.div>
                  <h3 className="text-3xl font-black text-[#0A3D62]">Quote Request Sent!</h3>
                  <p className="text-gray-600 mt-3">Our team will contact you within 2 hours.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}