// src/components/ServicesSection.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Smartphone, Cloud, Database, Globe, Zap, LayoutPanelTop, Receipt } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <LayoutPanelTop className="h-12 w-12 text-primary" />,
      title: "Landing Pages",
      description: "Una opción rápida y personalizada para crear paginas web responsivas, integrando UI moderno y atractivo para todas las personas que visiten tu sitio web.",
      path: "/landing-pages"
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Desarrollo Web",
      description: "Desarrollo de aplicaciones web personalizadas y adaptadas a las necesidades de tus clientes o empresa.",
      path: "/desarrollo-web"
    },
    {
      icon: <Receipt className="h-12 w-12 text-primary" />,
      title: "Facturación Electrónica",
      description: "Desarrollo de sistemas de facturación e integración de sistema de transmisión para que tu negocio pueda emitir DTEs.",
      path: "/facturacion-electronica"
    },
    {
      icon: <Cloud className="h-12 w-12 text-primary" />,
      title: "Soluciones en la Nube",
      description: "Infraestructura en la nube escalable y servicios de migración para optimizar las operaciones de tu negocio y reducir costos.",
      path: "/soluciones-nube"
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "Analisis de Datos",
      description: "Desarrollo de plataformas ideales para Business Intelligence, que ayudarán a tu empresa en la recopilación, organiazión y analisis de datos.",
      path: "/analisis-datos"
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Integración de APIs",
      description: "Integración fluida con servicios y APIs de terceros para mejorar la funcionalidad de tu aplicación.",
      path: "/integracion-apis"
    }
  ];

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  return (
      <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-gradient">Servicios</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desarrollamos software que busca darte las herramientas y soluciones necesarias para mejorar tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <Card
                    key={index}
                    className="hover-lift bg-white border-none shadow-lg group cursor-pointer"
                    onClick={() => handleServiceClick(service.path)}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
};

export default ServicesSection;