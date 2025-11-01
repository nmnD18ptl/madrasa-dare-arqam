import React from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaCalendarAlt } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnnouncementsProps {
  language: 'en' | 'ur';
}

const Announcements: React.FC<AnnouncementsProps> = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const announcements = [
    {
      id: '1',
      title: { en: 'Admissions Open for Academic Year 2024-25', ur: 'تعلیمی سال 2024-25 کے لیے داخلے کھلے ہیں' },
      date: '2024-01-15',
      text: {
        en: 'We are now accepting applications for the upcoming academic year. Contact us for more information.',
        ur: 'ہم آنے والے تعلیمی سال کے لیے درخواستیں قبول کر رہے ہیں۔ مزید معلومات کے لیے ہم سے رابطہ کریں۔',
      },
    },
    {
      id: '2',
      title: { en: 'New Library Opening', ur: 'نئی لائبریری کا افتتاح' },
      date: '2024-01-10',
      text: {
        en: 'Our new library facility is now open with an extensive collection of Islamic and academic books.',
        ur: 'ہماری نئی لائبریری اب اسلامی اور تعلیمی کتابوں کے وسیع ذخیرے کے ساتھ کھل گئی ہے۔',
      },
    },
    {
      id: '3',
      title: { en: 'Annual Sports Day', ur: 'سالانہ کھیل کا دن' },
      date: '2024-01-05',
      text: {
        en: 'Join us for our annual sports day event featuring various competitions and activities.',
        ur: 'ہمارے سالانہ کھیل کے دن کے موقع پر مختلف مقابلے اور سرگرمیوں میں شامل ہوں۔',
      },
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <FaBullhorn className="text-5xl text-jamia-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-jamia-primary mb-6">
              {language === 'en' ? 'News & Announcements' : 'خبریں اور اعلانات'}
            </h2>
            <div className="w-24 h-1 bg-jamia-accent-orange mx-auto mb-6"></div>
          </div>

          <div className="space-y-6">
            {announcements.map((announcement, index) => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-jamia-primary"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-jamia-primary">
                    {language === 'en' ? announcement.title.en : announcement.title.ur}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <FaCalendarAlt />
                    <span>{formatDate(announcement.date)}</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  {language === 'en' ? announcement.text.en : announcement.text.ur}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Announcements;

