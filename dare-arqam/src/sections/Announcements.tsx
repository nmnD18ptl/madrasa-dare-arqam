import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBullhorn, FaCalendarAlt } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Announcements: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const announcements = [
    {
      id: '1',
      titleKey: 'announcements.item1.title',
      date: '2024-01-15',
      textKey: 'announcements.item1.text',
    },
    {
      id: '2',
      titleKey: 'announcements.item2.title',
      date: '2024-01-10',
      textKey: 'announcements.item2.text',
    },
    {
      id: '3',
      titleKey: 'announcements.item3.title',
      date: '2024-01-05',
      textKey: 'announcements.item3.text',
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
              <FaBullhorn className="text-5xl text-jamia-primary" aria-hidden="true" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-jamia-primary mb-6">
              {t('announcements.title')}
            </h2>
            <div className="w-24 h-1 bg-jamia-accent-orange mx-auto mb-6"></div>
            <p className="text-gray-600">{t('announcements.subtitle')}</p>
          </div>

          <div className="space-y-6">
            {announcements.map((announcement, index) => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-jamia-primary rtl:border-l-0 rtl:border-r-4"
              >
                <div className="flex items-start justify-between mb-3 rtl:flex-row-reverse">
                  <h3 className="text-xl font-semibold text-jamia-primary">
                    {t(announcement.titleKey)}
                  </h3>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-500 text-sm">
                    <FaCalendarAlt aria-hidden="true" />
                    <span>{formatDate(announcement.date)}</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  {t(announcement.textKey)}
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
