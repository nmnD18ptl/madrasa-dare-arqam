import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBookOpen, FaBook, FaGraduationCap, FaBed, FaChevronDown, FaChevronUp, FaCheck } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const EducationPrograms: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const programs = [
    {
      icon: FaBookOpen,
      titleKey: 'programs.quranic.title',
      descriptionKey: 'programs.quranic.description',
      itemsKey: 'programs.quranic.items',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaBook,
      titleKey: 'programs.hadith.title',
      descriptionKey: 'programs.hadith.description',
      itemsKey: 'programs.hadith.items',
      gradient: 'from-jamia-primary to-jamia-primary-light',
    },
    {
      icon: FaGraduationCap,
      titleKey: 'programs.school.title',
      descriptionKey: 'programs.school.description',
      itemsKey: 'programs.school.items',
      gradient: 'from-jamia-accent to-jamia-accent-light',
    },
    {
      icon: FaBed,
      titleKey: 'programs.residential.title',
      descriptionKey: 'programs.residential.description',
      itemsKey: 'programs.residential.items',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="programs" className="py-16 sm:py-20 lg:py-24 bg-white">
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
            {t('programs.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-jamia-accent to-jamia-primary mx-auto mb-6 sm:mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isExpanded = expandedCards.has(index);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="glass rounded-2xl p-6 sm:p-8 h-full flex flex-col border-2 border-gray-100 hover:border-jamia-primary/30 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-start space-x-4 sm:space-x-6 mb-4 sm:mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-4 sm:p-5 bg-gradient-to-br ${program.gradient} rounded-xl shadow-lg flex-shrink-0`}
                    >
                      <Icon className="text-3xl sm:text-4xl text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-jamia-primary mb-2 sm:mb-3">
                        {t(program.titleKey)}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                        {t(program.descriptionKey)}
                      </p>
                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center space-x-2 rtl:space-x-reverse text-jamia-accent hover:text-jamia-accent-dark font-medium text-sm sm:text-base transition-colors"
                        aria-label={t('common.learnMore')}
                      >
                        <span>{t('common.learnMore')}</span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown />
                        </motion.div>
                      </button>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-200">
                      <ul className="space-y-2 sm:space-y-3">
                        {(t(program.itemsKey, { returnObjects: true }) as string[]).map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: itemIndex * 0.05 }}
                            className="flex items-start space-x-3 rtl:space-x-reverse rtl:flex-row-reverse"
                          >
                            <FaCheck className="text-jamia-accent mt-1 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-gray-700">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationPrograms;
