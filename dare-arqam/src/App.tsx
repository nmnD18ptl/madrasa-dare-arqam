import React, { useState } from 'react';
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
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  return (
    <div className="App min-h-screen">
      <Header language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <TarbiyatPolicy language={language} />
        <EducationPrograms language={language} />
        <Facilities language={language} />
        <Testimonials language={language} />
        <Gallery language={language} />
        <Announcements language={language} />
        <Admissions language={language} />
        <Contact language={language} />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}

export default App;

