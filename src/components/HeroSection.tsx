import React, { useEffect, useRef, useState } from 'react';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
import p5 from 'p5';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<{ destroy: () => void } | null>(null);


  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
          TOPOLOGY({
            el: vantaRef.current,
            p5: p5,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x0,
            backgroundColor: 0xffffff,
          })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Vanta Background */}
        <div ref={vantaRef} className="absolute inset-0 w-full h-full z-0" />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-screen">
            <div className="w-full mb-8">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center">
                  <span className="text-black">Soluciones Digitales</span>
                  <br />
                  <span className="text-black">Para tu Negocio</span>
                </h1>

                <p className="text-lg md:text-xl text-black/80 mb-8 max-w-3xl mx-auto leading-relaxed text-center">
                    Empieza la transformación digital con nosotros y construye las herramientas de software que necesitas, para llevar tu negocio al siguiente nivel.
                </p>

                <div className="flex justify-center items-center mb-8">
                  <Button
                      onClick={scrollToContact}
                      className="btn-gradient text-white px-8 py-4 text-lg rounded-lg font-medium group"
                  >
                    Empieza tu proyecto
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="hover-lift bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
                    <div className="text-3xl font-bold text-black mb-2">50+</div>
                    <div className="text-black/70">Projects Completed</div>
                  </div>
                  <div className="hover-lift bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
                    <div className="text-3xl font-bold text-black mb-2">98%</div>
                    <div className="text-black/70">Client Satisfaction</div>
                  </div>
                  <div className="hover-lift bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
                    <div className="text-3xl font-bold text-black mb-2">24/7</div>
                    <div className="text-black/70">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
