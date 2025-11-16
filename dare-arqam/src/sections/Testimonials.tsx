import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Ahmed Ali',
      relation: 'Parent',
      text: 'Jamia Dar-E-Arqam has provided excellent Islamic education and character building for my son. The residential facility is safe and well-maintained.',
      textUrdu: 'جامعہ دارالارقم نے میرے بیٹے کے لیے بہترین اسلامی تعلیم اور کردار سازی فراہم کی ہے۔ رہائشی سہولت محفوظ اور اچھی طرح سے بحال ہے۔',
    },
    {
      id: '2',
      name: 'Fatima Khan',
      relation: 'Parent',
      text: 'The integration of Quranic studies with modern education is exceptional. My daughter has grown both spiritually and academically.',
      textUrdu: 'قرآنی تعلیم کو جدید تعلیم کے ساتھ یکجا کرنا بہترین ہے۔ میری بیٹی روحانی اور تعلیمی طور پر دونوں ترقی کر رہی ہے۔',
    },
    {
      id: '3',
      name: 'Mohammed Hassan',
      relation: 'Alumni',
      text: 'The tarbiyat and discipline at Jamia Dar-E-Arqam shaped my character. I am grateful for the holistic education I received here.',
      textUrdu: 'جامعہ دارالارقم میں تربیت اور نظم و ضبط نے میرے کردار کو تشکیل دیا۔ مجھے یہاں کی جامع تعلیم پر فخر ہے۔',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-jamia-primary mb-6">
              {t('testimonials.title')}
            </h2>
            <div className="w-24 h-1 bg-jamia-accent-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-jamia-accent-orange" />
                  ))}
                </div>
                <FaQuoteLeft className="text-3xl text-jamia-primary/30 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.textUrdu && ['ur', 'ar'].includes(i18n.language) ? testimonial.textUrdu : testimonial.text}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-jamia-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.relation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

