import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaSpinner } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import FloatingLabelInput from '../components/FloatingLabelInput';
import Toast from '../components/Toast';
import type { ToastType } from '../components/Toast';

interface ContactProps {
  language: 'en' | 'ur';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType; visible: boolean }>({
    message: '',
    type: 'info',
    visible: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = language === 'en' ? 'Name is required' : 'نام ضروری ہے';
    }
    if (!formData.email.trim()) {
      newErrors.email = language === 'en' ? 'Email is required' : 'ای میل ضروری ہے';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Invalid email address' : 'غلط ای میل پتہ';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = language === 'en' ? 'Subject is required' : 'موضوع ضروری ہے';
    }
    if (!formData.message.trim()) {
      newErrors.message = language === 'en' ? 'Message is required' : 'پیغام ضروری ہے';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setToast({
        message: language === 'en' ? 'Please fill all required fields' : 'براہ کرم تمام ضروری فیلڈز بھریں',
        type: 'error',
        visible: true,
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setToast({
        message: language === 'en' 
          ? 'Thank you for contacting us! We will respond soon.' 
          : 'ہم سے رابطہ کرنے کا شکریہ! ہم جلد جواب دیں گے۔',
        type: 'success',
        visible: true,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const closeToast = () => {
    setToast({ ...toast, visible: false });
  };

  // Coordinates: 16°21'51.7"N 74°34'43.2"E
  // Converted to decimal: 16.364361, 74.578667
  const mapEmbedUrl = `https://www.google.com/maps?q=16.364361,74.578667&hl=en&z=15&output=embed`;

  return (
    <>
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-jamia-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12 sm:mb-16">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                {language === 'en' ? 'Contact Us' : 'رابطہ'}
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-jamia-accent to-jamia-primary mx-auto mb-6 sm:mb-8 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: 96 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
              <p className="text-base sm:text-lg text-gray-700">
                {language === 'en' 
                  ? 'Get in touch with us for any inquiries or visit our campus' 
                  : 'کسی بھی دریافت کے لیے ہم سے رابطہ کریں یا ہمارے کیمپس کا دورہ کریں'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 }}
                  className="glass p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-jamia-primary/10 rounded-lg flex-shrink-0">
                      <FaMapMarkerAlt className="text-2xl text-jamia-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {language === 'en' ? 'Address' : 'پتہ'}
                      </h3>
                      <p className="text-gray-600 mb-1">Karoshi</p>
                      <p className="text-sm text-gray-500">
                        16°21'51.7"N 74°34'43.2"E
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="glass p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-jamia-primary/10 rounded-lg flex-shrink-0">
                      <FaPhone className="text-2xl text-jamia-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {language === 'en' ? 'Phone' : 'فون'}
                      </h3>
                      <a href="tel:+91XXXXXXXXXX" className="text-gray-600 hover:text-jamia-primary transition-colors">
                        +91 XXXXX XXXXX
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="glass p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-jamia-primary/10 rounded-lg flex-shrink-0">
                      <FaEnvelope className="text-2xl text-jamia-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {language === 'en' ? 'Email' : 'ای میل'}
                      </h3>
                      <a href="mailto:info@jamiadarqamkaroshi.com" className="text-gray-600 hover:text-jamia-primary transition-colors">
                        info@jamiadarqamkaroshi.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="glass p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-600/10 rounded-lg flex-shrink-0">
                      <FaWhatsapp className="text-2xl text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">WhatsApp</h3>
                      <a 
                        href="https://wa.me/91XXXXXXXXXX" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-600 transition-colors"
                      >
                        {language === 'en' ? 'Message us on WhatsApp' : 'واٹس ایپ پر پیغام بھیجیں'}
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Google Map */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="glass p-6 rounded-xl shadow-lg overflow-hidden"
                >
                  <h3 className="font-semibold text-gray-800 mb-4">
                    {language === 'en' ? 'Location' : 'مقام'}
                  </h3>
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <iframe
                      src={mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Jamia Dar-E-Arqam Karoshi Location"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    <a 
                      href="https://www.google.com/maps?q=16.364361,74.578667" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-jamia-primary transition-colors"
                    >
                      {language === 'en' ? 'Open in Google Maps' : 'گوگل میپس میں کھولیں'}
                    </a>
                  </p>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="glass p-6 sm:p-8 rounded-xl shadow-xl"
              >
                <h3 className="text-2xl font-heading font-bold text-jamia-primary mb-6">
                  {language === 'en' ? 'Send us a Message' : 'ہمیں پیغام بھیجیں'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <FloatingLabelInput
                    id="name"
                    name="name"
                    label={language === 'en' ? 'Name' : 'نام'}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    error={errors.name}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FloatingLabelInput
                      id="email"
                      name="email"
                      label={language === 'en' ? 'Email' : 'ای میل'}
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      error={errors.email}
                    />

                    <FloatingLabelInput
                      id="phone"
                      name="phone"
                      label={language === 'en' ? 'Phone' : 'فون'}
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                    />
                  </div>

                  <FloatingLabelInput
                    id="subject"
                    name="subject"
                    label={language === 'en' ? 'Subject' : 'موضوع'}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    error={errors.subject}
                  />

                  <FloatingLabelInput
                    id="message"
                    name="message"
                    label={language === 'en' ? 'Message' : 'پیغام'}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    textarea
                    rows={5}
                    error={errors.message}
                  />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-jamia-primary to-jamia-accent text-white rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        <span>{language === 'en' ? 'Sending...' : 'بھیجا جا رہا ہے...'}</span>
                      </>
                    ) : (
                      <span>{language === 'en' ? 'Send Message' : 'پیغام بھیجیں'}</span>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.visible}
        onClose={closeToast}
      />
    </>
  );
};

export default Contact;
