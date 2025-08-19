import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para manejar la navegación inteligente
  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);

    // Si estamos en la página principal, hacer scroll suave
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página, navegar a la principal con el hash
      navigate(`/#${sectionId}`);
    }
  };

  // Función para navegar al inicio
  const handleHomeNavigation = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      // Si ya estamos en home, ir al top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navegar a home
      navigate('/');
    }
  };

  // Función para manejar el scroll automático cuando se llega desde otra página con hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1); // Remover el #
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Pequeño delay para asegurar que la página se haya cargado
    }
  }, [location]);

  return (
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
              ? 'bg-white shadow-lg'
              : 'bg-white shadow-lg md:bg-transparent md:shadow-none'
      }`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-black" />
              <button
                  onClick={handleHomeNavigation}
                  className="text-xl font-bold text-black hover:text-black/70 transition-colors duration-200"
              >
                A V I S T E N
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                    onClick={handleHomeNavigation}
                    className="text-black hover:text-black/70 transition-colors duration-200"
                >
                  Inicio
                </button>
                <button
                    onClick={() => handleNavigation('services')}
                    className="text-black hover:text-black/70 transition-colors duration-200"
                >
                  Servicios
                </button>
                <button
                    onClick={() => handleNavigation('solutions')}
                    className="text-black hover:text-black/70 transition-colors duration-200"
                >
                  Soluciones
                </button>
                <button
                    onClick={() => handleNavigation('technologies')}
                    className="text-black hover:text-black/70 transition-colors duration-200"
                >
                  Tecnologías
                </button>
                <button
                    onClick={() => handleNavigation('contact')}
                    className="text-black hover:text-black/70 transition-colors duration-200"
                >
                  Contacto
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              <Button
                  onClick={() => handleNavigation('contact')}
                  className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-black/80 transition-colors"
              >
                Inicia Ahora
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden relative z-[60]">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-black hover:text-orange-500 p-2 relative z-[60] bg-white rounded-md border border-gray-300 shadow-sm"
                  style={{ minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
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
                      onClick={handleHomeNavigation}
                      className="block px-3 py-2 text-black hover:text-black/70 transition-colors duration-200 w-full text-left"
                  >
                    Inicio
                  </button>
                  <button
                      onClick={() => handleNavigation('services')}
                      className="block px-3 py-2 text-black hover:text-black/70 transition-colors duration-200 w-full text-left"
                  >
                    Servicios
                  </button>
                  <button
                      onClick={() => handleNavigation('solutions')}
                      className="block px-3 py-2 text-black hover:text-black/70 transition-colors duration-200 w-full text-left"
                  >
                    Soluciones
                  </button>
                  <button
                      onClick={() => handleNavigation('technologies')}
                      className="block px-3 py-2 text-black hover:text-black/70 transition-colors duration-200 w-full text-left"
                  >
                    Tecnologías
                  </button>
                  <button
                      onClick={() => handleNavigation('contact')}
                      className="block px-3 py-2 text-black hover:text-black/70 transition-colors duration-200 w-full text-left"
                  >
                    Contacto
                  </button>
                  <div className="px-3 py-2">
                    <Button
                        onClick={() => handleNavigation('contact')}
                        className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-black/80 transition-colors w-full"
                    >
                      Inicia Ahora
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