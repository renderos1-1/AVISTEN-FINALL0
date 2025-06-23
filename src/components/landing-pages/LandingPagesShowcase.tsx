// src/components/landing-pages/LandingPagesShowcase.tsx
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Smartphone,
    Monitor,
    Tablet,
    Zap,

} from 'lucide-react';

const LandingPagesShowcase = () => {
    const showcaseProjects = [
        {
            title: "E-commerce Fashion",
            description: "Landing page para tienda de moda online con enfoque en conversiones y experiencia de usuario premium.",
            features: ["Diseño responsivo", "Carrito optimizado", "Checkout simplificado"],
            metrics: { conversion: "85%", loadTime: "1.2s", satisfaction: "98%" },
            image: "bg-gradient-to-br from-pink-400 to-purple-600"
        },
        {
            title: "SaaS Technology",
            description: "Página de landing para plataforma de software B2B con integración de demos y formularios de contacto.",
            features: ["Demo interactivo", "Formularios inteligentes", "Analytics avanzado"],
            metrics: { conversion: "92%", loadTime: "0.8s", satisfaction: "96%" },
            image: "bg-gradient-to-br from-blue-400 to-cyan-600"
        },
        {
            title: "Servicios Profesionales",
            description: "Landing page para consultora de negocios con agenda online y sistema de citas automatizado.",
            features: ["Agenda online", "Pagos integrados", "CRM conectado"],
            metrics: { conversion: "78%", loadTime: "1.5s", satisfaction: "94%" },
            image: "bg-gradient-to-br from-green-400 to-teal-600"
        }
    ];

    const whatWeInclude = [
        {
            icon: <Monitor className="h-6 w-6 text-primary" />,
            title: "Versión Desktop",
            description: "Diseño optimizado para pantallas grandes con navegación intuitiva y elementos visuales impactantes."
        },
        {
            icon: <Tablet className="h-6 w-6 text-primary" />,
            title: "Versión Tablet",
            description: "Adaptación perfecta para dispositivos tablet manteniendo funcionalidad y estética."
        },
        {
            icon: <Smartphone className="h-6 w-6 text-primary" />,
            title: "Versión Mobile",
            description: "Experiencia móvil optimizada con navegación táctil y carga ultra rápida."
        },
        {
            icon: <Zap className="h-6 w-6 text-primary" />,
            title: "Optimización de Velocidad",
            description: "Técnicas avanzadas de optimización para garantizar tiempos de carga mínimos."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Showcase Header */}


                {/* What we include section */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            ¿Qué incluimos en cada <span className="text-gradient">proyecto?</span>
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Nuestro servicio de landing pages incluye todo lo necesario para que tu página web funcione perfectamente en cualquier dispositivo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {whatWeInclude.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm hover-lift"
                            >
                                <div className="p-3 rounded-full bg-primary/10">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits section */}

            </div>
        </section>
    );
};

export default LandingPagesShowcase;