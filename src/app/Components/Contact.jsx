'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (replace with Formspree / EmailJS in production)
    await new Promise(resolve => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSuccess(false);
    }, 2800);
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+880 1768-983865",
      link: "tel:+8801768983865",
      color: "#00C853"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@grouponbd.com",
      link: "mailto:info@grouponbd.com",
      color: "#00C853"
    },
    {
      icon: MapPin,
      title: "Factory",
      value: "115/80, Matuail Kaborastan Road, Demra, Dhaka",
      link: "#",
      color: "#00C853"
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#0A3D62] overflow-hidden text-white">
      {/* Background accent blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-[#00C853] rounded-full blur-[120px] opacity-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-80 h-80 bg-white rounded-full blur-[100px] opacity-5"
          animate={{ scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN - CONTACT INFO + MAPS */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#00C853] font-semibold tracking-[4px] text-sm"
              >
                GET IN TOUCH
              </motion.span>
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter mt-3">
                LET'S GROW<br />TOGETHER
              </h2>
            </div>

            {/* Interactive Contact Cards */}
            <div className="space-y-6">
              {contactCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.a
                    key={index}
                    href={card.link}
                    target={card.link.startsWith('http') ? '_blank' : undefined}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, y: -6 }}
                    className="group flex items-center gap-6 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-7 transition-all duration-500"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-[#00C853] transition-all">
                      <Icon className="w-8 h-8 text-white group-hover:text-[#0A3D62]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{card.title}</p>
                      <p className="text-xl font-medium tracking-tight">{card.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-[#00C853]" />
                <p className="font-semibold">Office Address</p>
              </div>
              <p className="text-lg leading-relaxed">
                H-11, R-8, Block-A,<br />
                Mirpur-1, Dhaka-1216
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - FORM + MAPS */}
          <div className="lg:col-span-7">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 lg:p-14 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Full Name"
                      className="w-full bg-transparent border-b border-white/40 py-4 text-lg placeholder:text-white/50 focus:border-[#00C853] outline-none transition-all"
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Business Email"
                      className="w-full bg-transparent border-b border-white/40 py-4 text-lg placeholder:text-white/50 focus:border-[#00C853] outline-none transition-all"
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name (Optional)"
                    className="w-full bg-transparent border-b border-white/40 py-4 text-lg placeholder:text-white/50 focus:border-[#00C853] outline-none transition-all"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your requirements (quantity, product type, delivery timeline...)"
                    className="w-full bg-transparent border-b border-white/40 py-4 text-lg placeholder:text-white/50 focus:border-[#00C853] outline-none resize-none transition-all"
                  />
                </motion.div>

                {/* Stunning Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-6 bg-[#00C853] hover:bg-white hover:text-[#0A3D62] text-[#0A3D62] font-semibold text-xl rounded-2xl flex items-center justify-center gap-4 transition-all duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-[#0A3D62] border-t-transparent rounded-full animate-spin" />
                      SENDING MESSAGE...
                    </div>
                  ) : isSuccess ? (
                    <span className="flex items-center gap-3">
                      <CheckCircle className="w-7 h-7" /> MESSAGE SENT SUCCESSFULLY!
                    </span>
                  ) : (
                    <>
                      SEND MESSAGE <Send className="w-6 h-6" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* Two Google Maps - Side by Side */}
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {/* Factory Map */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.123456789!2d90.456789!3d23.712345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f8f8f8f8f8%3A0x1234567890abcdef!2sMatuail%2C%20Demra%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1690000000000"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale-[0.4]"
                />
                <div className="bg-white/5 p-4 text-sm font-medium">FACTORY – Demra, Dhaka</div>
              </motion.div>

              {/* Office Map */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.987654321!2d90.345678!3d23.765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0f0f0f0f0f0%3A0xabcdef1234567890!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1690000000000"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale-[0.4]"
                />
                <div className="bg-white/5 p-4 text-sm font-medium">OFFICE – Mirpur-1, Dhaka</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/8801768983865"
        target="_blank"
        className="fixed bottom-8 right-8 z-[200] flex items-center justify-center w-16 h-16 bg-[#00C853] text-white rounded-3xl shadow-2xl hover:shadow-[#00C853]/50 transition-all"
        whileHover={{ scale: 1.15, rotate: 12 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <MessageCircle size={32} />
      </motion.a>
    </section>
  );
}