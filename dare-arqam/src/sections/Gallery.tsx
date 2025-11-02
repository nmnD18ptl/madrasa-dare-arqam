import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaImages, FaTimes } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GalleryImage } from '../types';

interface GalleryProps {
  language: 'en' | 'ur';
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Using provided images - campus photo and Google Maps links
  const galleryImages: GalleryImage[] = [
    { 
      id: '1', 
      src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy771WDHHMT7qZjtYp4Rc9-U8IeA4-Nka7A4RkOLCK145IZUb2TcQhBgcjD_tiU-Fph3t70-d5s3PqiWaZAuyUd46l-oQx-BmbjZVL8jsHd-QGUh7W3TghbGQbpljifdKNoh-g4=s680-w680-h510-rw', 
      alt: 'Jamia Dar-E-Arqam Campus', 
      caption: 'Main Campus Building',
      isMapLink: false,
    },
    { 
      id: '2', 
      src: 'https://maps.app.goo.gl/PSSjaWxnQqAPRcBW6', 
      alt: 'Campus View 1', 
      caption: 'Campus View',
      isMapLink: true,
    },
    { 
      id: '3', 
      src: 'https://maps.app.goo.gl/43KtGe6VmSytCwoi9', 
      alt: 'Campus View 2', 
      caption: 'Institution Facilities',
      isMapLink: true,
    },
    { 
      id: '4', 
      src: 'https://maps.app.goo.gl/i8DFQ2TBp9GetPMq8', 
      alt: 'Campus View 3', 
      caption: 'Campus Area',
      isMapLink: true,
    },
  ];

  const handleImageClick = (image: GalleryImage) => {
    // If it's a Google Maps link, open it in a new tab
    if (image.isMapLink || image.src.includes('maps.app.goo.gl')) {
      window.open(image.src, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedImage(image.src);
    }
  };

  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24 bg-jamia-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12 sm:mb-16">
              <motion.div 
                className="flex justify-center mb-4 sm:mb-6"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <div className="p-4 bg-gradient-to-br from-jamia-primary/10 to-jamia-accent/10 rounded-2xl">
                  <FaImages className="text-4xl sm:text-5xl text-jamia-primary" />
                </div>
              </motion.div>
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                {language === 'en' ? 'Gallery' : 'گیلری'}
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-jamia-accent to-jamia-primary mx-auto mb-6 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: 96 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'A glimpse into our campus and facilities' 
                  : 'ہمارے کیمپس اور سہولیات کی ایک جھلک'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  onClick={() => handleImageClick(image)}
                >
                  <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                    {image.isMapLink || image.src.includes('maps.app.goo.gl') ? (
                      <div className="w-full h-64 bg-gradient-to-br from-jamia-primary via-jamia-primary-light to-jamia-accent flex flex-col items-center justify-center text-white p-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-pattern opacity-10" />
                        <div className="relative z-10 text-center">
                          <FaImages className="text-5xl mb-4 mx-auto" />
                          <p className="text-lg font-semibold mb-2">{image.caption}</p>
                          <p className="text-sm opacity-90 mb-3">{language === 'en' ? 'Click to view on Google Maps' : 'گوگل میپس پر دیکھنے کے لیے کلک کریں'}</p>
                          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm">
                            {language === 'en' ? 'View Location' : 'مقام دیکھیں'}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      <p className="font-semibold text-lg">{image.caption}</p>
                      {image.src.includes('maps.app.goo.gl') && (
                        <p className="text-sm opacity-90 mt-1">{language === 'en' ? 'View on Maps' : 'نقشہ پر دیکھیں'}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          key="image-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 text-white bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
              aria-label="Close"
            >
              <FaTimes className="text-2xl" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
      )}
    </>
  );
};

export default Gallery;
