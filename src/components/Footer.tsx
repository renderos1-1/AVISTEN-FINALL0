
import React from 'react';
import { Code, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gradient">DevSolutions</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming businesses through innovative software solutions. 
              We help startups and enterprises build scalable, cutting-edge applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('solutions')}
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('technologies')}
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Technologies
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Custom Software Development</li>
              <li>Mobile App Development</li>
              <li>Web Development</li>
              <li>Cloud Solutions</li>
              <li>Data Analytics</li>
              <li>API Integration</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-300">hello@devsolutions.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-gray-300">
                  123 Tech Street<br />
                  San Francisco, CA 94105
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} DevSolutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
