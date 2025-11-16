import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBook, FaGraduationCap, FaHome, FaUsers } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: FaBook,
      titleKey: 'about.features.quranic.title',
      descriptionKey: 'about.features.quranic.description',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaGraduationCap,
      titleKey: 'about.features.islamic.title',
      descriptionKey: 'about.features.islamic.description',
      color: 'from-jamia-primary to-jamia-primary-light',
    },
    {
      icon: FaHome,
      titleKey: 'about.features.residential.title',
      descriptionKey: 'about.features.residential.description',
      color: 'from-jamia-accent to-jamia-accent-light',
    },
    {
      icon: FaUsers,
      titleKey: 'about.features.school.title',
      descriptionKey: 'about.features.school.description',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-jamia-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {t('about.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-jamia-accent to-jamia-primary mx-auto mb-6 sm:mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          <motion.div
            className="grid md:grid-cols-2 gap-6 sm:gap-8 text-left mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {t('about.description2', { 
                defaultValue: 'Our institution offers a unique blend of traditional Islamic education and modern schooling, ensuring that students receive a well-rounded education that prepares them for both religious and worldly success.' 
              })}
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="glass rounded-2xl p-6 sm:p-8 h-full flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-jamia-primary/20">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-4 sm:mb-6 relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 rounded-full blur-xl group-hover:opacity-30 transition-opacity`} />
                    <div className="relative p-4 sm:p-5 bg-gradient-to-br from-jamia-primary/10 to-jamia-accent/10 rounded-2xl">
                      <Icon className="text-4xl sm:text-5xl md:text-6xl text-jamia-primary group-hover:text-jamia-accent transition-colors" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-jamia-primary mb-3 sm:mb-4">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {t(feature.descriptionKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
