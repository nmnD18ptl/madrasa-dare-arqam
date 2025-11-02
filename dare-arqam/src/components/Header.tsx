import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';

interface HeaderProps {
  language: 'en' | 'ur';
  onLanguageChange: (lang: 'en' | 'ur') => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect active section
      const sections = ['about', 'tarbiyat', 'programs', 'facilities', 'admissions', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', en: 'About', ur: 'تعارف' },
    { id: 'tarbiyat', en: 'Tarbiyat Policy', ur: 'تربیت پالیسی' },
    { id: 'programs', en: 'Programs', ur: 'پروگرامز' },
    { id: 'facilities', en: 'Facilities', ur: 'سہولیات' },
    { id: 'admissions', en: 'Admissions', ur: 'داخلہ' },
    { id: 'contact', en: 'Contact', ur: 'رابطہ' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-lg shadow-xl border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo - Top Left Corner */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0 group z-10"
          >
            {/* Logo Image */}
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Jamia Dar-E-Arqam Logo" 
                className={`h-12 sm:h-14 md:h-16 w-auto transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-lg ${
                  logoError ? 'hidden' : 'block'
                }`}
                onError={() => setLogoError(true)}
                onLoad={() => setLogoError(false)}
              />
              {/* Fallback Logo Design - Shows when logo fails to load */}
              {logoError && (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`flex items-center justify-center h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                    isScrolled 
                      ? 'bg-gradient-to-br from-jamia-primary to-jamia-primary-dark shadow-lg' 
                      : 'bg-white/20 backdrop-blur-sm border-2 border-white/30'
                  } group-hover:scale-110`}
                >
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    JDA
                  </span>
                </motion.div>
              )}
            </div>
            
            {/* Institution Name */}
            <div className="flex flex-col">
              <div className={`text-base sm:text-lg md:text-xl font-heading font-bold leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-jamia-primary' : 'text-white drop-shadow-lg'
              }`}>
                JAMIA DAR-E-ARQAM
              </div>
              <div className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80 drop-shadow'
              }`}>
                {language === 'en' ? 'Karoshi' : 'کروشی'}
              </div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-1 justify-center">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={`relative font-medium transition-all duration-300 px-3 xl:px-4 py-2 rounded-lg text-sm xl:text-base ${
                  isScrolled 
                    ? activeSection === item.id
                      ? 'text-jamia-primary bg-jamia-primary/10'
                      : 'text-gray-700 hover:text-jamia-primary hover:bg-gray-50'
                    : activeSection === item.id
                      ? 'text-white bg-white/20'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {language === 'en' ? item.en : item.ur}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-8 rounded-full ${
                      isScrolled ? 'bg-jamia-accent' : 'bg-jamia-accent-orange'
                    }`}
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
            {/* Language Toggle */}
            <motion.button
              onClick={() => onLanguageChange(language === 'en' ? 'ur' : 'en')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                isScrolled
                  ? 'bg-jamia-primary text-white hover:bg-jamia-primary-dark shadow-md hover:shadow-lg'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
              }`}
              aria-label="Toggle language"
            >
              <MdLanguage className="text-lg" />
              <span>{language === 'en' ? 'اردو' : 'English'}</span>
            </motion.button>

            {/* Contact Buttons */}
            <div className="flex items-center space-x-2">
              <motion.a
                href="tel:+91XXXXXXXXXX"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'bg-jamia-primary text-white hover:bg-jamia-primary-dark shadow-md hover:shadow-lg'
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
                }`}
                aria-label="Call"
                title="Call Us"
              >
                <FaPhone className="text-base" />
              </motion.a>
              <motion.a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg'
                    : 'bg-green-600/90 backdrop-blur-sm text-white hover:bg-green-700 border border-green-500/30'
                }`}
                aria-label="WhatsApp"
                title="WhatsApp Us"
              >
                <FaWhatsapp className="text-base" />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className={`lg:hidden p-2.5 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-jamia-primary hover:bg-gray-100' 
                : 'text-white hover:bg-white/20'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="text-2xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="text-2xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden mt-2 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
          >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3.5 text-gray-700 hover:bg-jamia-primary hover:text-white transition-all duration-200 border-b border-gray-100 last:border-0 ${
                    activeSection === item.id ? 'bg-jamia-primary/10 text-jamia-primary font-semibold' : ''
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span>{language === 'en' ? item.en : item.ur}</span>
                    {activeSection === item.id && (
                      <span className="text-jamia-accent">●</span>
                    )}
                  </span>
                </motion.button>
              ))}
              
              {/* Mobile Actions */}
              <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 space-y-2">
                <button
                  onClick={() => onLanguageChange(language === 'en' ? 'ur' : 'en')}
                  className="flex items-center space-x-2 text-jamia-primary font-medium w-full px-2 py-2 hover:bg-jamia-primary/10 rounded-lg transition-colors"
                >
                  <MdLanguage className="text-xl" />
                  <span>{language === 'en' ? 'اردو' : 'English'}</span>
                </button>
                
                <div className="flex items-center space-x-3 pt-2">
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-jamia-primary text-white rounded-lg hover:bg-jamia-primary-dark transition-colors font-medium"
                  >
                    <FaPhone />
                    <span className="text-sm">{language === 'en' ? 'Call' : 'کال'}</span>
                  </a>
                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    <FaWhatsapp />
                    <span className="text-sm">WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
