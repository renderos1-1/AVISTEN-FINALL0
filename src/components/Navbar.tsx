
import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-black" />
            <span className="text-xl font-bold text-black">A V I S T E N</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-black hover:text-black/70 transition-colors duration-200"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-black hover:text-black/70 transition-colors duration-200"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="text-black hover:text-black/70 transition-colors duration-200"
              >
                Soluciones
              </button>
              <button
                onClick={() => scrollToSection('technologies')}
                className="text-black hover:text-black/70 transition-colors duration-200"
              >
                Tecnologías
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black hover:text-black/70 transition-colors duration-200"
              >
                Contacto
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-black/80 transition-colors"
            >
              Inicia Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-black/70 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              <button
                onClick={() => scrollToSection('hero')}
                className="block px-3 py-2 text-black hover:text-black/70 transition-colors duration-200 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-black hover:text-black/70 transition-colors duration-200 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="block px-3 py-2 text-black hover:text-black/70 transition-colors duration-200 w-full text-left"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection('technologies')}
                className="block px-3 py-2 text-black hover:text-black/70 transition-colors duration-200 w-full text-left"
              >
                Technologies
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-black hover:text-black/70 transition-colors duration-200 w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-black/80 transition-colors w-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
