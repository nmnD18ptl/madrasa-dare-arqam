import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FaBed, FaMosque, FaChalkboardTeacher, FaBook, FaUtensils, FaFutbol } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface FacilitiesProps {
  language: 'en' | 'ur';
}

const Facilities: React.FC<FacilitiesProps> = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const facilities = [
    {
      icon: FaBed,
      title: { en: 'Residential Accommodation', ur: 'رہائشی رہائش' },
      description: {
        en: 'Comfortable and secure residential facilities with proper amenities for student accommodation',
        ur: 'طلباء کی رہائش کے لیے مناسب سہولیات کے ساتھ آرام دہ اور محفوظ رہائشی سہولیات',
      },
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaMosque,
      title: { en: 'Prayer Hall / Mosque', ur: 'نماز خانہ / مسجد' },
      description: {
        en: 'Beautiful prayer facilities for daily prayers and Friday congregational prayers',
        ur: 'روزانہ نماز اور جمعہ کی اجتماعی نماز کے لیے خوبصورت نماز گاہ',
      },
      gradient: 'from-jamia-primary to-jamia-primary-light',
    },
    {
      icon: FaChalkboardTeacher,
      title: { en: 'Modern Classrooms', ur: 'جدید کلاس رومز' },
      description: {
        en: 'Well-equipped classrooms with modern teaching aids and comfortable learning environment',
        ur: 'جدید تدریسی آلات اور آرام دہ تعلیمی ماحول کے ساتھ اچھی طرح سے لیس کلاس رومز',
      },
      gradient: 'from-jamia-accent to-jamia-accent-light',
    },
    {
      icon: FaBook,
      title: { en: 'Library & Study Hall', ur: 'کتب خانہ اور مطالعہ گاہ' },
      description: {
        en: 'Extensive collection of Islamic and academic books with quiet study spaces',
        ur: 'پرسکون مطالعہ کے مقامات کے ساتھ اسلامی اور تعلیمی کتابوں کا وسیع ذخیرہ',
      },
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaUtensils,
      title: { en: 'Dining Facilities', ur: 'کھانے کی سہولیات' },
      description: {
        en: 'Clean and hygienic dining hall serving nutritious halal meals',
        ur: 'صاف اور صحت بخش ڈائننگ ہال جو غذائیت بخش حلال کھانا پیش کرتا ہے',
      },
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaFutbol,
      title: { en: 'Sports & Recreation', ur: 'کھیل اور تفریح' },
      description: {
        en: 'Recreation areas and sports facilities for physical fitness and extracurricular activities',
        ur: 'جسمانی تندرستی اور غیر نصابی سرگرمیوں کے لیے تفریحی مقامات اور کھیلوں کی سہولیات',
      },
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const FacilityCard: React.FC<{ facility: typeof facilities[0]; index: number }> = ({ facility, index }) => {
    const Icon = facility.icon;
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0));
    const rotateY = useSpring(useMotionValue(0));

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const rotateXValue = (mouseY / rect.height) * -10;
      const rotateYValue = (mouseX / rect.width) * 10;
      
      rotateX.set(rotateXValue);
      rotateY.set(rotateYValue);
      x.set(mouseX * 0.1);
      y.set(mouseY * 0.1);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      rotateX.set(0);
      rotateY.set(0);
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
        className="relative"
      >
        <motion.div
          style={{ x, y }}
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
                <Icon className="text-3xl sm:text-4xl md:text-5xl text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 sm:mb-4 text-center">
              {language === 'en' ? facility.title.en : facility.title.ur}
            </h3>
            <p className="text-sm sm:text-base text-gray-100 text-center leading-relaxed">
              {language === 'en' ? facility.description.en : facility.description.ur}
            </p>
          </div>

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            style={{ skewX: -20 }}
          />
        </motion.div>
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
            {language === 'en' ? 'Facilities' : 'سہولیات'}
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
            {language === 'en' ? (
              'State-of-the-art facilities designed to support holistic education and development'
            ) : (
              'جدید ترین سہولیات جو سالماتی تعلیم اور ترقی کو فروغ دینے کے لیے ڈیزائن کی گئی ہیں'
            )}
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
