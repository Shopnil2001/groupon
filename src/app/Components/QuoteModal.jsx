'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function QuoteModal({ isOpen, onClose }) {
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

  const inputStyle =
    "w-full border-b border-gray-300 pb-3 outline-none text-lg text-black placeholder:text-black focus:border-[#00C853] transition bg-white";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80">
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0A3D62] px-8 py-6 text-white flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-black tracking-tighter">
                  GET INSTANT QUOTE
                </h3>
                <p className="text-[#00C853] text-sm mt-1">
                  We reply within 2 hours
                </p>
              </div>

              <button
                onClick={onClose}
                className="text-white/70 hover:text-white"
              >
                <X size={28} />
              </button>
            </div>

            <div className="p-8 lg:p-12 text-gray-900">
              {!success ? (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputStyle}
                    />

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Business Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputStyle}
                    />
                  </div>

                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputStyle}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <select
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className={inputStyle}
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
                      className={inputStyle}
                    />
                  </div>

                  <input
                    type="text"
                    name="delivery"
                    placeholder="Preferred Delivery Date"
                    value={formData.delivery}
                    onChange={handleChange}
                    className={inputStyle}
                  />

                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Any special requirements or specs?"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputStyle} resize-none`}
                  />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-[#00C853] hover:bg-[#00A43E] py-5 rounded-2xl text-white font-semibold text-xl flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {isSubmitting
                      ? 'SENDING QUOTE REQUEST...'
                      : 'GET MY QUOTE NOW'}

                    {!isSubmitting && <Send className="w-6 h-6" />}
                  </motion.button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-12 h-12 text-[#00C853]" />
                  </motion.div>

                  <h3 className="text-3xl font-black text-[#0A3D62]">
                    Quote Request Sent!
                  </h3>

                  <p className="text-gray-600 mt-3">
                    Our team will contact you within 2 hours.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
