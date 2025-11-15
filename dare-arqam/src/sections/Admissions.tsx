import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaCheckCircle, FaDownload, FaSpinner } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import FloatingLabelInput from '../components/FloatingLabelInput';
import Toast from '../components/Toast';
import type { ToastType } from '../components/Toast';
import jsPDF from 'jspdf';

interface AdmissionsProps {
  language: 'en' | 'ur';
}

const Admissions: React.FC<AdmissionsProps> = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    parentName: '',
    phone: '',
    email: '',
    age: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType; visible: boolean }>({
    message: '',
    type: 'info',
    visible: false,
  });
  const [isDownloading, setIsDownloading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'en' ? 'Student name is required' : 'طالب علم کا نام ضروری ہے';
    }

    if (!formData.parentName.trim()) {
      newErrors.parentName = language === 'en' ? 'Parent/Guardian name is required' : 'والدین/سرپرست کا نام ضروری ہے';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = language === 'en' ? 'Phone number is required' : 'فون نمبر ضروری ہے';
    } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(formData.phone)) {
      newErrors.phone = language === 'en' ? 'Invalid phone number' : 'غلط فون نمبر';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Invalid email address' : 'غلط ای میل پتہ';
    }

    if (!formData.age) {
      newErrors.age = language === 'en' ? 'Age is required' : 'عمر ضروری ہے';
    } else {
      const ageNum = parseInt(formData.age);
      if (ageNum < 6 || ageNum > 18) {
        newErrors.age = language === 'en' ? 'Age must be between 6 and 18' : 'عمر 6 سے 18 سال کے درمیان ہونی چاہیے';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setToast({
        message: language === 'en' ? 'Please fix the errors in the form' : 'براہ کرم فارم کی غلطیوں کو درست کریں',
        type: 'error',
        visible: true,
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setToast({
        message: language === 'en' 
          ? 'Thank you for your interest! We will contact you soon.' 
          : 'آپ کی دلچسپی کا شکریہ! ہم جلد آپ سے رابطہ کریں گے۔',
        type: 'success',
        visible: true,
      });
      
      // Reset form
      setFormData({
        name: '',
        parentName: '',
        phone: '',
        email: '',
        age: '',
        message: '',
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleDownloadProspectus = async () => {
    setIsDownloading(true);
    
    try {
      // Create PDF document
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 20;
      let yPos = margin;
      
      // Helper function to add a new page if needed
      const checkPageBreak = (requiredHeight: number) => {
        if (yPos + requiredHeight > pageHeight - margin) {
          doc.addPage();
          yPos = margin;
          return true;
        }
        return false;
      };
      
      // Helper function to add text with word wrap
      const addText = (text: string, fontSize: number, isBold: boolean = false, color: [number, number, number] = [0, 0, 0], align: 'left' | 'center' | 'right' = 'left') => {
        doc.setFontSize(fontSize);
        doc.setFont('helvetica', isBold ? 'bold' : 'normal');
        doc.setTextColor(color[0], color[1], color[2]);
        
        const lines = doc.splitTextToSize(text, pageWidth - 2 * margin);
        lines.forEach((line: string) => {
          checkPageBreak(fontSize * 0.5);
          doc.text(line, margin, yPos, { align });
          yPos += fontSize * 0.5;
        });
        yPos += 5;
      };
      
      // Header with Islamic Green color
      doc.setFillColor(27, 94, 32); // Islamic Green #1B5E20
      doc.rect(0, 0, pageWidth, 40, 'F');
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text('JAMIA DAR-E-ARQAM KAROSHI', pageWidth / 2, 20, { align: 'center' });
      
      doc.setFontSize(14);
      doc.text('ADMISSION PROSPECTUS', pageWidth / 2, 30, { align: 'center' });
      
      yPos = 50;
      
      // Institution Overview
      addText('INSTITUTION OVERVIEW', 16, true, [27, 94, 32]);
      addText(
        'Jamia Dar-E-Arqam Karoshi is a distinguished residential Islamic educational institution for boys, dedicated to providing comprehensive Islamic education combined with contemporary academic curriculum.',
        11,
        false,
        [0, 0, 0]
      );
      
      // Managed By
      addText('MANAGED BY', 14, true, [27, 94, 32]);
      addText('Ulunuha Educational Trust', 12, false, [0, 0, 0]);
      
      // Educational Programs
      addText('EDUCATIONAL PROGRAMS', 14, true, [27, 94, 32]);
      const programs = [
        '• Quranic Studies (Hifz, Nazra, Tajweed)',
        '• Hadith & Islamic Sciences',
        '• Contemporary School Curriculum',
        '• Residential Program'
      ];
      programs.forEach(program => {
        addText(program, 11, false, [0, 0, 0]);
      });
      
      // Age Groups
      addText('AGE GROUPS', 14, true, [27, 94, 32]);
      addText('We accept students from ages 6-18 years', 11, false, [0, 0, 0]);
      
      // Required Documents
      addText('REQUIRED DOCUMENTS', 14, true, [27, 94, 32]);
      const documents = [
        '• Birth Certificate',
        '• Previous School Records',
        '• Medical Certificate',
        '• Photographs'
      ];
      documents.forEach(document => {
        addText(document, 11, false, [0, 0, 0]);
      });
      
      // Contact Information
      addText('CONTACT INFORMATION', 14, true, [27, 94, 32]);
      addText('Location: Karoshi', 11, false, [0, 0, 0]);
      addText('Coordinates: 16°21\'51.7"N 74°34\'43.2"E', 11, false, [0, 0, 0]);
      
      // Footer
      yPos = pageHeight - 30;
      doc.setDrawColor(27, 94, 32);
      doc.line(margin, yPos, pageWidth - margin, yPos);
      yPos += 10;
      
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(
        'For more information, please contact us through our website or visit our campus.',
        pageWidth / 2,
        yPos,
        { align: 'center' }
      );
      
      // Save PDF
      doc.save('Jamia-Dar-E-Arqam-Karoshi-Prospectus.pdf');
      
      setIsDownloading(false);
      setToast({
        message: language === 'en' 
          ? 'Prospectus downloaded successfully!' 
          : 'پروسپیکٹس کامیابی سے ڈاؤن لوڈ ہو گیا!',
        type: 'success',
        visible: true,
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      setIsDownloading(false);
      setToast({
        message: language === 'en' 
          ? 'Error downloading prospectus. Please try again.' 
          : 'پروسپیکٹس ڈاؤن لوڈ کرنے میں خرابی۔ براہ کرم دوبارہ کوشش کریں۔',
        type: 'error',
        visible: true,
      });
    }
  };

  const closeToast = () => {
    setToast({ ...toast, visible: false });
  };

  return (
    <>
      <section id="admissions" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12 sm:mb-16">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                {language === 'en' ? 'Admissions' : 'داخلہ'}
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-jamia-accent to-jamia-primary mx-auto mb-6 sm:mb-8 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: 96 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                {language === 'en' ? (
                  'We welcome students seeking quality Islamic education. Admissions are open for the upcoming academic year.'
                ) : (
                  'ہم معیاری اسلامی تعلیم کے طالب علموں کا خیرمقدم کرتے ہیں۔ آئندہ تعلیمی سال کے لیے داخلے کھلے ہیں۔'
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Admission Info */}
              <div>
                <h3 className="text-2xl font-heading font-bold text-jamia-primary mb-6">
                  {language === 'en' ? 'Admission Information' : 'داخلہ کی معلومات'}
                </h3>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <FaCheckCircle className="text-jamia-primary text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {language === 'en' ? 'Age Groups' : 'عمر کے گروپ'}
                      </h4>
                      <p className="text-gray-600">
                        {language === 'en' 
                          ? 'We accept students from ages 6-18 years' 
                          : 'ہم 6-18 سال کی عمر کے طلباء کو قبول کرتے ہیں'}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="flex items-start space-x-4"
                  >
                    <FaCheckCircle className="text-jamia-primary text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {language === 'en' ? 'Required Documents' : 'ضروری دستاویزات'}
                      </h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• {language === 'en' ? 'Birth Certificate' : 'پیدائشی سرٹیفکیٹ'}</li>
                        <li>• {language === 'en' ? 'Previous School Records' : 'پچھلے اسکول کے ریکارڈ'}</li>
                        <li>• {language === 'en' ? 'Medical Certificate' : 'طبی سرٹیفکیٹ'}</li>
                        <li>• {language === 'en' ? 'Photographs' : 'تصاویر'}</li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="flex items-start space-x-4"
                  >
                    <FaCheckCircle className="text-jamia-primary text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {language === 'en' ? 'Application Process' : 'درخواست کی کارروائی'}
                      </h4>
                      <p className="text-gray-600">
                        {language === 'en' 
                          ? 'Submit the inquiry form below or contact us directly. Our team will guide you through the admission process.' 
                          : 'ذیل میں دریافت فارم جمع کروائیں یا براہ راست ہم سے رابطہ کریں۔ ہماری ٹیم آپ کو داخلہ کے عمل میں رہنمائی فراہم کرے گی۔'}
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="mt-8 glass p-6 rounded-xl border-r-4 border-jamia-accent shadow-lg"
                >
                  <p className="text-gray-700 mb-4">
                    <strong className="text-jamia-primary">
                      {language === 'en' ? 'Download Prospectus:' : 'پروسپیکٹس ڈاؤن لوڈ کریں:'}
                    </strong>
                  </p>
                  <motion.button
                    onClick={handleDownloadProspectus}
                    disabled={isDownloading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-jamia-primary to-jamia-primary-dark text-white rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isDownloading ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        <span>{language === 'en' ? 'Downloading...' : 'ڈاؤن لوڈ ہو رہا ہے...'}</span>
                      </>
                    ) : (
                      <>
                        <FaDownload />
                        <span>{language === 'en' ? 'Download PDF' : 'PDF ڈاؤن لوڈ کریں'}</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </div>

              {/* Inquiry Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="glass p-6 sm:p-8 rounded-xl shadow-xl"
              >
                <h3 className="text-2xl font-heading font-bold text-jamia-primary mb-6">
                  {language === 'en' ? 'Inquiry Form' : 'دریافت فارم'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <FloatingLabelInput
                    id="name"
                    name="name"
                    label={language === 'en' ? "Student's Name" : 'طالب علم کا نام'}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    error={errors.name}
                  />

                  <FloatingLabelInput
                    id="parentName"
                    name="parentName"
                    label={language === 'en' ? "Parent/Guardian Name" : 'والدین/سرپرست کا نام'}
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    error={errors.parentName}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FloatingLabelInput
                      id="phone"
                      name="phone"
                      label={language === 'en' ? 'Phone' : 'فون'}
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      error={errors.phone}
                    />

                    <FloatingLabelInput
                      id="email"
                      name="email"
                      label={language === 'en' ? 'Email' : 'ای میل'}
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                  </div>

                  <FloatingLabelInput
                    id="age"
                    name="age"
                    label={language === 'en' ? "Student's Age" : 'طالب علم کی عمر'}
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    error={errors.age}
                  />

                  <FloatingLabelInput
                    id="message"
                    name="message"
                    label={language === 'en' ? 'Message (Optional)' : 'پیغام (اختیاری)'}
                    value={formData.message}
                    onChange={handleChange}
                    textarea
                    rows={4}
                  />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-jamia-primary to-jamia-accent text-white rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        <span>{language === 'en' ? 'Submitting...' : 'جمع کیا جا رہا ہے...'}</span>
                      </>
                    ) : (
                      <span>{language === 'en' ? 'Submit Inquiry' : 'دریافت جمع کروائیں'}</span>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.visible}
        onClose={closeToast}
      />
    </>
  );
};

export default Admissions;
