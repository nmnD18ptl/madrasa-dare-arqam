import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaGraduationCap, FaHome, FaUsers } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AboutProps {
  language: 'en' | 'ur';
}

const About: React.FC<AboutProps> = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: FaBook,
      title: { en: 'Quranic Studies', ur: 'قرآنی تعلیم' },
      description: {
        en: 'Comprehensive Quranic education including Hifz, Nazra, and Tajweed',
        ur: 'قرآن کی جامع تعلیم بشمول حفظ، ناظرہ اور تجوید',
      },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaGraduationCap,
      title: { en: 'Islamic Sciences', ur: 'اسلامی علوم' },
      description: {
        en: 'Study of Hadith, Fiqh, and other Islamic sciences',
        ur: 'حدیث، فقہ اور دیگر اسلامی علوم کا مطالعہ',
      },
      color: 'from-jamia-primary to-jamia-primary-light',
    },
    {
      icon: FaHome,
      title: { en: 'Residential Facility', ur: 'رہائشی سہولت' },
      description: {
        en: 'Safe and nurturing residential environment for boys',
        ur: 'طلباء کے لیے محفوظ اور پرورش کا ماحول',
      },
      color: 'from-jamia-accent to-jamia-accent-light',
    },
    {
      icon: FaUsers,
      title: { en: 'School Education', ur: 'اسکول کی تعلیم' },
      description: {
        en: 'Integrated contemporary school curriculum alongside Islamic studies',
        ur: 'اسلامی تعلیم کے ساتھ عصری اسکول کا نصاب',
      },
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
            {language === 'en' ? 'About Us' : 'ہمارے بارے میں'}
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
              {language === 'en' ? (
                <>
                  <strong className="text-jamia-primary">Jamia Dar-E-Arqam Karoshi</strong> is a distinguished residential Islamic
                  educational institution for boys, dedicated to providing comprehensive Islamic education
                  combined with contemporary academic curriculum. Under the management of{' '}
                  <strong className="text-jamia-primary">Ulunuha Educational Trust</strong>, we strive to nurture students who are
                  not only well-versed in Islamic knowledge but also equipped with modern education
                  and strong moral character.
                </>
              ) : (
                <>
                  <strong className="text-jamia-primary">جامعہ دارالارقم کروشی</strong> ایک معزز رہائشی اسلامی تعلیمی ادارہ ہے جو
                  اسلامی تعلیم اور عصری تعلیم کا جامع نظام فراہم کرتا ہے۔{' '}
                  <strong className="text-jamia-primary">المنہی تعلیمی ٹرسٹ</strong> کے زیر انتظام، ہم ایسے طلباء کی تربیت کرتے
                  ہیں جو نہ صرف اسلامی علم میں ماہر ہوں بلکہ عصری تعلیم اور مضبوط اخلاقی کردار سے
                  بھی مالا مال ہوں۔
                </>
              )}
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {language === 'en' ? (
                <>
                  Our institution offers a unique blend of traditional Islamic education and
                  modern schooling, ensuring that students receive a well-rounded education
                  that prepares them for both religious and worldly success.
                </>
              ) : (
                <>
                  ہمارا ادارہ روایتی اسلامی تعلیم اور جدید اسکولنگ کا ایک منفرد امتزاج پیش کرتا
                  ہے، یقینی بناتا ہے کہ طلباء کو ایک متوازن تعلیم ملے جو انہیں مذہبی اور دنیاوی
                  دونوں کامیابیوں کے لیے تیار کرے۔
                </>
              )}
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
                    {language === 'en' ? feature.title.en : feature.title.ur}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {language === 'en' ? feature.description.en : feature.description.ur}
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
