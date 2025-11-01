import React from 'react';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { PrayerTime } from '../types';

interface PrayerTimesProps {
  language: 'en' | 'ur';
}

const PrayerTimes: React.FC<PrayerTimesProps> = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Sample prayer times - In production, these would be fetched from an API
  const prayerTimes: PrayerTime[] = [
    { name: 'Fajr', time: '05:30' },
    { name: 'Dhuhr', time: '12:15' },
    { name: 'Asr', time: '15:45' },
    { name: 'Maghrib', time: '18:20' },
    { name: 'Isha', time: '19:45' },
  ];

  const prayerNames: Record<string, { en: string; ur: string }> = {
    Fajr: { en: 'Fajr', ur: 'فجر' },
    Dhuhr: { en: 'Dhuhr', ur: 'ظہر' },
    Asr: { en: 'Asr', ur: 'عصر' },
    Maghrib: { en: 'Maghrib', ur: 'مغرب' },
    Isha: { en: 'Isha', ur: 'عشاء' },
  };

  const getCurrentDate = () => {
    const now = new Date();
    const gregorianDate = now.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    // Simple Islamic date calculation (for production, use a proper library)
    const islamicDate = now.toLocaleDateString('ar-SA', { 
      calendar: 'islamic',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return { gregorianDate, islamicDate };
  };

  const { gregorianDate, islamicDate } = getCurrentDate();

  return (
    <section className="py-16 bg-jamia-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <FaClock className="text-5xl text-jamia-accent-orange" />
              </div>
              <h2 className="text-3xl font-bold mb-2">
                {language === 'en' ? 'Prayer Times' : 'نماز کے اوقات'}
              </h2>
              <p className="text-gray-100 mb-4">{gregorianDate}</p>
              <p className="text-jamia-accent-orange font-semibold">{islamicDate}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {prayerTimes.map((prayer, index) => (
                <motion.div
                  key={prayer.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="bg-white/10 rounded-lg p-4 text-center border border-white/20"
                >
                  <div className="text-lg font-semibold mb-2">
                    {language === 'en' 
                      ? prayerNames[prayer.name].en 
                      : prayerNames[prayer.name].ur}
                  </div>
                  <div className="text-2xl font-bold text-jamia-accent-orange">
                    {prayer.time}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-200 mt-6">
              {language === 'en' 
                ? 'Prayer times are updated daily. Please verify with local mosque.' 
                : 'نماز کے اوقات روزانہ اپ ڈیٹ ہوتے ہیں۔ براہ کرم مقامی مسجد سے تصدیق کریں۔'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrayerTimes;

