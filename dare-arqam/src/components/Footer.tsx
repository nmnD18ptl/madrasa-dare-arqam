import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jamia-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Jamia Dar-E-Arqam</h3>
            <p className="text-gray-300 mb-4">
              A residential Islamic educational institution dedicated to nurturing faith, knowledge, and character.
            </p>
            <p className="text-sm text-gray-400">
              Managed by Ulunuha Educational Trust
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-white transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#admissions" className="text-gray-300 hover:text-white transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-jamia-accent-orange" />
                <span className="text-gray-300">Karoshi</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-jamia-accent-orange" />
                <a href="tel:+91XXXXXXXXXX" className="text-gray-300 hover:text-white transition-colors">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-jamia-accent-orange" />
                <a href="mailto:info@jamiadarqamkaroshi.com" className="text-gray-300 hover:text-white transition-colors">
                  info@jamiadarqamkaroshi.com
                </a>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Jamia Dar-E-Arqam Karoshi. All rights reserved.</p>
          <p className="mt-2 text-sm">Managed by Ulunuha Educational Trust</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

