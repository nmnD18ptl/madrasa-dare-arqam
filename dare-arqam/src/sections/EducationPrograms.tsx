import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaBook, FaGraduationCap, FaBed, FaChevronDown, FaChevronUp, FaCheck } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface EducationProgramsProps {
  language: 'en' | 'ur';
}

const EducationPrograms: React.FC<EducationProgramsProps> = ({ language }) => {
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
      title: { en: 'Quranic Studies', ur: 'قرآنی تعلیم' },
      description: {
        en: 'Comprehensive Quranic education including Hifz (memorization), Nazra (reading), and Tajweed (proper recitation)',
        ur: 'قرآن کی جامع تعلیم بشمول حفظ، ناظرہ اور تجوید',
      },
      items: [
        { en: 'Hifz Program (Quran Memorization)', ur: 'حفظ پروگرام (قرآن حفظ کرنا)' },
        { en: 'Nazra (Quran Reading)', ur: 'ناظرہ (قرآن پڑھنا)' },
        { en: 'Tajweed (Proper Recitation Rules)', ur: 'تجوید (صحیح تلاوت کے قواعد)' },
        { en: 'Tafseer (Quranic Exegesis)', ur: 'تفسیر (قرآن کی تشریح)' },
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaBook,
      title: { en: 'Hadith & Islamic Sciences', ur: 'حدیث اور اسلامی علوم' },
      description: {
        en: 'Deep study of Hadith literature, Fiqh (Islamic jurisprudence), Aqeedah (Islamic creed), and Seerah (Prophetic biography)',
        ur: 'حدیث، فقہ، عقیدہ اور سیرت کی گہری تعلیم',
      },
      items: [
        { en: 'Hadith Studies', ur: 'حدیث کا مطالعہ' },
        { en: 'Fiqh (Islamic Jurisprudence)', ur: 'فقہ (اسلامی قانون)' },
        { en: 'Aqeedah (Islamic Creed)', ur: 'عقیدہ (اسلامی عقائد)' },
        { en: 'Seerah (Prophetic Biography)', ur: 'سیرت (نبی کریم کی سیرت)' },
      ],
      gradient: 'from-jamia-primary to-jamia-primary-light',
    },
    {
      icon: FaGraduationCap,
      title: { en: 'School Curriculum', ur: 'اسکول کا نصاب' },
      description: {
        en: 'Integrated contemporary school education covering core subjects aligned with standard educational boards',
        ur: 'معیاری تعلیمی بورڈز کے مطابق بنیادی مضامین کا عصری اسکول کا نصاب',
      },
      items: [
        { en: 'Mathematics & Sciences', ur: 'ریاضی اور سائنس' },
        { en: 'Languages (Urdu, English, Arabic)', ur: 'زبانیں (اردو، انگریزی، عربی)' },
        { en: 'Social Studies', ur: 'معاشرتی علوم' },
        { en: 'Computer Education', ur: 'کمپیوٹر تعلیم' },
      ],
      gradient: 'from-jamia-accent to-jamia-accent-light',
    },
    {
      icon: FaBed,
      title: { en: 'Residential Program', ur: 'رہائشی پروگرام' },
      description: {
        en: 'Complete residential facility providing a safe, disciplined, and nurturing environment for holistic development',
        ur: 'مکمل رہائشی سہولت جو سالماتی ترقی کے لیے محفوظ، منظم اور پرورش کا ماحول فراہم کرتی ہے',
      },
      items: [
        { en: '24/7 Supervision & Care', ur: '24/7 نگرانی اور دیکھ بھال' },
        { en: 'Structured Daily Schedule', ur: 'منظم روزانہ شیڈول' },
        { en: 'Healthy Meals & Nutrition', ur: 'صحت مند کھانا اور غذائیت' },
        { en: 'Health & Medical Support', ur: 'صحت اور طبی مدد' },
      ],
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
            {language === 'en' ? 'Education Programs' : 'تعلیمی پروگرامز'}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-jamia-accent to-jamia-primary mx-auto mb-6 sm:mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            {language === 'en' ? (
              'Our comprehensive educational programs combine traditional Islamic learning with contemporary academic excellence'
            ) : (
              'ہمارے جامع تعلیمی پروگرام روایتی اسلامی تعلیم کو عصری تعلیمی فضیلت کے ساتھ جوڑتے ہیں'
            )}
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
                        {language === 'en' ? program.title.en : program.title.ur}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                        {language === 'en' ? program.description.en : program.description.ur}
                      </p>
                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center space-x-2 text-jamia-accent hover:text-jamia-accent-dark font-medium text-sm sm:text-base transition-colors"
                      >
                        <span>{language === 'en' ? 'Learn More' : 'مزید جانیں'}</span>
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
                        {program.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: itemIndex * 0.05 }}
                            className="flex items-start space-x-3"
                          >
                            <FaCheck className="text-jamia-accent mt-1 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-gray-700">
                              {language === 'en' ? item.en : item.ur}
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
