import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBed, FaMosque, FaChalkboardTeacher, FaBook, FaUtensils, FaFutbol } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Facilities: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const facilities = [
    {
      icon: FaBed,
      titleKey: 'facilities.residential.title',
      descriptionKey: 'facilities.residential.description',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaMosque,
      titleKey: 'facilities.mosque.title',
      descriptionKey: 'facilities.mosque.description',
      gradient: 'from-jamia-primary to-jamia-primary-light',
    },
    {
      icon: FaChalkboardTeacher,
      titleKey: 'facilities.classrooms.title',
      descriptionKey: 'facilities.classrooms.description',
      gradient: 'from-jamia-accent to-jamia-accent-light',
    },
    {
      icon: FaBook,
      titleKey: 'facilities.library.title',
      descriptionKey: 'facilities.library.description',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaUtensils,
      titleKey: 'facilities.dining.title',
      descriptionKey: 'facilities.dining.description',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaFutbol,
      titleKey: 'facilities.sports.title',
      descriptionKey: 'facilities.sports.description',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const FacilityCard: React.FC<{ facility: typeof facilities[0]; index: number }> = ({ facility, index }) => {
    const Icon = facility.icon;

    return (
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="relative"
      >
        <div
          className="glass-dark rounded-2xl p-6 sm:p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-300 relative overflow-hidden group"
        >
          {/* Gradient Border Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${facility.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />
          
          {/* Content */}
          <div className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="flex justify-center mb-4 sm:mb-6"
            >
              <div className={`relative p-4 sm:p-5 bg-gradient-to-br ${facility.gradient} rounded-2xl shadow-lg`}>
                <Icon className="text-3xl sm:text-4xl md:text-5xl text-white" aria-hidden="true" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 sm:mb-4 text-center">
              {t(facility.titleKey)}
            </h3>
            <p className="text-sm sm:text-base text-gray-100 text-center leading-relaxed">
              {t(facility.descriptionKey)}
            </p>
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ transform: 'skewX(-20deg)' }} aria-hidden="true" />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="facilities" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-jamia-primary-dark via-jamia-primary to-jamia-primary-light text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10" />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${10 + i * 12}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {t('facilities.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-jamia-accent to-white mx-auto mb-6 sm:mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          <motion.p 
            className="text-base sm:text-lg text-gray-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            {t('facilities.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} facility={facility} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
