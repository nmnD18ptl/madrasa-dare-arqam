import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaFacebook
} from 'react-icons/fa';
import { BsInstagram, BsYoutube } from 'react-icons/bs';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribeMessage({ type: 'error', text: t('footer.newsletter.error') });
      return;
    }

    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setSubscribeMessage({ type: 'success', text: t('footer.newsletter.success') });
      setEmail('');
      setTimeout(() => setSubscribeMessage(null), 3000);
    }, 1000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-jamia-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.about.title')}</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {t('footer.about.description')}
            </p>
            <p className="text-sm text-gray-400">
              {t('footer.about.managedBy')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.links.title')}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t('footer.links.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('programs')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t('footer.links.programs')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('admissions')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t('footer.links.admissions')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t('footer.links.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-jamia-accent-orange flex-shrink-0" />
                <span className="text-gray-300 text-sm">{t('footer.contact.address')}</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-jamia-accent-orange flex-shrink-0" />
                <a 
                  href="tel:+91XXXXXXXXXX" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  aria-label={t('common.phone')}
                >
                  {t('footer.contact.phone')}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-jamia-accent-orange flex-shrink-0" />
                <a 
                  href="mailto:info@jamiadarqamkaroshi.com" 
                  className="text-gray-300 hover:text-white transition-colors text-sm break-all"
                  aria-label={t('common.email')}
                >
                  {t('footer.contact.email')}
                </a>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">{t('footer.social.title')}</h4>
              <div className="flex space-x-3">
                <motion.a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label={t('footer.social.facebook')}
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:opacity-90 transition-opacity"
                  aria-label={t('footer.social.instagram')}
                >
                  {React.createElement(BsInstagram as React.ComponentType<any>)}
                </motion.a>
                <motion.a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
                  aria-label={t('footer.social.whatsapp')}
                >
                  <FaWhatsapp />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 bg-red-600 rounded-full hover:bg-red-700 transition-colors"
                  aria-label={t('footer.social.youtube')}
                >
                  {React.createElement(BsYoutube as React.ComponentType<any>)}
                </motion.a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-300 text-sm mb-4">
              {t('footer.newsletter.description', { defaultValue: 'Stay updated with our latest news and updates.' })}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.newsletter.placeholder')}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jamia-accent focus:border-transparent text-sm"
                  required
                  aria-label={t('footer.newsletter.placeholder')}
                />
                <motion.button
                  type="submit"
                  disabled={isSubscribing}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-jamia-accent-orange text-white rounded-lg hover:bg-jamia-accent transition-colors font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubscribing ? t('footer.newsletter.subscribing') : t('footer.newsletter.subscribe')}
                </motion.button>
              </div>
              {subscribeMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm ${
                    subscribeMessage.type === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {subscribeMessage.text}
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <p className="mt-2 text-xs text-gray-500">
            {t('footer.about.managedBy')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
