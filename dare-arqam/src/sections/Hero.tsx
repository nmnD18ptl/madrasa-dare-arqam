import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowDown } from 'react-icons/fa6';
import { FaBookOpen } from 'react-icons/fa';
import { MdMosque } from 'react-icons/md';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy771WDHHMT7qZjtYp4Rc9-U8IeA4-Nka7A4RkOLCK145IZUb2TcQhBgcjD_tiU-Fph3t70-d5s3PqiWaZAuyUd46l-oQx-BmbjZVL8jsHd-QGUh7W3TghbGQbpljifdKNoh-g4=s680-w680-h510-rw"
          alt={t('hero.title')}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
          loading="eager"
        />
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-jamia-primary-dark/90 via-jamia-primary/85 to-jamia-primary-light/90"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(13, 148, 136, 0.9), rgba(20, 184, 166, 0.85), rgba(249, 115, 22, 0.1))',
              'linear-gradient(135deg, rgba(20, 184, 166, 0.85), rgba(13, 148, 136, 0.9), rgba(249, 115, 22, 0.15))',
              'linear-gradient(135deg, rgba(13, 148, 136, 0.9), rgba(20, 184, 166, 0.85), rgba(249, 115, 22, 0.1))',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Subtle Geometric Pattern */}
      <div 
        className="absolute inset-0 bg-pattern opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      
      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-jamia-accent/20 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-jamia-accent-light/15 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />

      {/* Parallax Content */}
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          {/* Floating Mosque Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="mb-6 flex justify-center"
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <MdMosque className="text-7xl md:text-9xl text-jamia-accent drop-shadow-2xl" aria-hidden="true" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-2 -right-2"
              >
                <FaBookOpen className="text-4xl md:text-5xl text-white drop-shadow-lg" aria-hidden="true" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-4 sm:mb-6 drop-shadow-2xl"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl mb-4 text-gray-100 font-medium"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Animated Tagline */}
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-12 text-jamia-accent drop-shadow-lg"
          >
            {t('hero.tagline')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <motion.button
              onClick={() => scrollToSection('admissions')}
              className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-w-[200px]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={t('hero.cta.admissions')}
            >
              {t('hero.cta.admissions')}
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('about')}
              className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-w-[200px]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={t('hero.cta.learnMore')}
            >
              {t('hero.cta.learnMore')}
            </motion.button>
          </motion.div>

          {/* Bouncing Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 sm:mt-16"
          >
            <motion.button
              animate={{ y: [0, 12, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: 'easeInOut',
              }}
              onClick={() => scrollToSection('about')}
              className="text-white/70 hover:text-white transition-colors focus:outline-none"
              aria-label={t('hero.scrollDown')}
            >
              <FaArrowDown className="text-3xl sm:text-4xl mx-auto" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
