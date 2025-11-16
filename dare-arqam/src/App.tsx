import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import BackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import TarbiyatPolicy from './sections/TarbiyatPolicy';
import EducationPrograms from './sections/EducationPrograms';
import Facilities from './sections/Facilities';
import Admissions from './sections/Admissions';
import Contact from './sections/Contact';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import Announcements from './sections/Announcements';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Apply RTL styles to body if needed
    const isRTL = ['ar', 'ur'].includes(i18n.language);
    document.body.classList.toggle('rtl', isRTL);
    document.body.classList.toggle('ltr', !isRTL);
  }, [i18n.language]);

  return (
    <div className="App min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <TarbiyatPolicy />
        <EducationPrograms />
        <Facilities />
        <Testimonials />
        <Gallery />
        <Announcements />
        <Admissions />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}

export default App;

