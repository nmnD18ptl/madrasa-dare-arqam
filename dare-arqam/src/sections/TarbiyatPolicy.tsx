import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaPray, FaHeart, FaClock, FaBroom, FaHandshake } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TarbiyatPolicy as TarbiyatPolicyType } from '../types';

interface TarbiyatPolicyProps {
  language: 'en' | 'ur';
}

const TarbiyatPolicy: React.FC<TarbiyatPolicyProps> = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openCard, setOpenCard] = useState<string | null>(null);

  const policies: TarbiyatPolicyType[] = [
    {
      id: 'namaz',
      title: 'Prayer & Worship',
      titleUrdu: 'نماز اور عبادت',
      content: [
        'Five daily prayers (compulsory)',
        'Morning assembly with Dua, Quran recitation, and spiritual practices',
        'Friday congregational prayers at the mosque',
        'Encouragement of optional prayers (Nawafil)',
        'Regular Dhikr and remembrance of Allah',
      ],
    },
    {
      id: 'akhlaaq',
      title: 'Moral Training',
      titleUrdu: 'اخلاقی تربیت',
      content: [
        'Respect for teachers and elders',
        'Compassion for younger ones',
        'Courteous communication',
        'Avoiding: lies, backbiting, anger, and negligence',
        'Teaching Islamic greetings (Salam) and ethical manners',
        'Promoting honesty, integrity, and truthfulness',
      ],
    },
    {
      id: 'waqt',
      title: 'Punctuality & Responsibility',
      titleUrdu: 'وقت کی پابندی اور ذمہ داری',
      content: [
        'Discipline policy for late arrivals',
        'Parent communication for persistent issues',
        'Homework completion requirements',
        'Care for personal belongings, clothes, and books',
        'Time management and organizational skills',
        'Accountability for actions and commitments',
      ],
    },
    {
      id: 'safai',
      title: 'Cleanliness & Etiquette',
      titleUrdu: 'صفائی اور تہذیب',
      content: [
        'Personal hygiene standards',
        'Clean clothing and body',
        'Maintaining cleanliness of premises',
        'Health and hygiene awareness',
        'Islamic etiquette in daily activities',
        'Respect for shared spaces',
      ],
    },
    {
      id: 'maasharti',
      title: 'Social Behavior',
      titleUrdu: 'معاشرتی سلوک',
      content: [
        'Positive interaction with peers and community',
        'Teamwork and cooperation',
        'Respect for diversity and differences',
        'Conflict resolution skills',
        'Community service and social responsibility',
        'Building healthy relationships',
      ],
    },
  ];

  const icons: Record<string, React.ComponentType<any>> = {
    namaz: FaPray,
    akhlaaq: FaHeart,
    waqt: FaClock,
    safai: FaBroom,
    maasharti: FaHandshake,
  };

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
            {language === 'en' ? 'Tarbiyat Policy' : 'تربیت پالیسی'}
          </h2>
          <div className="w-24 h-1 bg-jamia-accent-orange mx-auto mb-6"></div>
          
          {/* Objective */}
          <div className="bg-jamia-primary/10 rounded-lg p-6 md:p-8 mb-12 border-r-4 border-jamia-accent-orange">
            <h3 className="text-2xl font-semibold text-jamia-primary mb-4">
              {language === 'en' ? 'Maqsad (Objective)' : 'مقصد'}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {language === 'en' ? (
                <>
                  To develop students not just as seekers of knowledge, but as God-fearing,
                  morally upright, and responsible individuals who act according to the spirit of
                  Islam in every field of life.
                </>
              ) : (
                <>
                  طلباء کو صرف علم کے طالب کے طور پر نہیں، بلکہ خداترس، اخلاقی طور پر سیدھے اور
                  ذمہ دار افراد کے طور پر تیار کرنا جو زندگی کے ہر شعبے میں اسلام کے جذبے کے
                  مطابق عمل کریں۔
                </>
              )}
            </p>
          </div>
        </motion.div>

        {/* Policy Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {policies.map((policy, index) => {
            const Icon = icons[policy.id];
            const isOpen = openCard === policy.id;

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
                >
                  <div className="flex items-center space-x-4">
                    {Icon && (
                      <div className="p-3 bg-jamia-primary/10 rounded-lg">
                        <Icon className="text-2xl text-jamia-primary" />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-jamia-primary">
                      {language === 'en' ? policy.title : policy.titleUrdu}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-jamia-primary" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <ul className="space-y-2">
                          {policy.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3">
                              <span className="text-jamia-accent-orange mt-1">•</span>
                              <span className="text-gray-700">{item}</span>
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

