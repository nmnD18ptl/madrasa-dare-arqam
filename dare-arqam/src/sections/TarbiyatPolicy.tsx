import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaPray, FaHeart, FaClock, FaBroom, FaHandshake } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TarbiyatPolicy: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openCard, setOpenCard] = useState<string | null>(null);

  const policies = [
    {
      id: 'prayer',
      icon: FaPray,
      titleKey: 'tarbiyat.policies.prayer.title',
      itemsKey: 'tarbiyat.policies.prayer.items',
    },
    {
      id: 'moral',
      icon: FaHeart,
      titleKey: 'tarbiyat.policies.moral.title',
      itemsKey: 'tarbiyat.policies.moral.items',
    },
    {
      id: 'punctuality',
      icon: FaClock,
      titleKey: 'tarbiyat.policies.punctuality.title',
      itemsKey: 'tarbiyat.policies.punctuality.items',
    },
    {
      id: 'cleanliness',
      icon: FaBroom,
      titleKey: 'tarbiyat.policies.cleanliness.title',
      itemsKey: 'tarbiyat.policies.cleanliness.items',
    },
    {
      id: 'social',
      icon: FaHandshake,
      titleKey: 'tarbiyat.policies.social.title',
      itemsKey: 'tarbiyat.policies.social.items',
    },
  ];

  const toggleCard = (id: string) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <section id="tarbiyat" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-jamia-primary mb-6">
            {t('tarbiyat.title')}
          </h2>
          <div className="w-24 h-1 bg-jamia-accent-orange mx-auto mb-6"></div>
          
          {/* Objective */}
          <div className="bg-jamia-primary/10 rounded-lg p-6 md:p-8 mb-12 border-r-4 border-jamia-accent-orange">
            <h3 className="text-2xl font-semibold text-jamia-primary mb-4">
              {t('tarbiyat.objective.title')}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('tarbiyat.objective.text')}
            </p>
          </div>
        </motion.div>

        {/* Policy Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {policies.map((policy, index) => {
            const Icon = policy.icon;
            const isOpen = openCard === policy.id;
            const items = t(policy.itemsKey, { returnObjects: true }) as string[];

            return (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => toggleCard(policy.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                  aria-expanded={isOpen}
                  aria-label={t(policy.titleKey)}
                >
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    {Icon && (
                      <div className="p-3 bg-jamia-primary/10 rounded-lg">
                        <Icon className="text-2xl text-jamia-primary" />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-jamia-primary">
                      {t(policy.titleKey)}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-jamia-primary" />
                  </motion.div>
                </button>

                <AnimatePresence mode="wait">
                  {isOpen && (
                    <motion.div
                      key={policy.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <ul className="space-y-2">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3 rtl:space-x-reverse rtl:flex-row-reverse">
                              <span className="text-jamia-accent-orange mt-1">•</span>
                              <span className="text-gray-700">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TarbiyatPolicy;
