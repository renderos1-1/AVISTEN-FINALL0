// src/components/landing-pages/LandingPagesShowcase.tsx
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Smartphone,
    Monitor,
    Tablet,
    Zap,
    TrendingUp,
    Clock,
    Star,
    ArrowRight
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
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Algunos de nuestros <span className="text-gradient">proyectos</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Cada proyecto es único y está diseñado específicamente para cumplir los objetivos de negocio de nuestros clientes.
                    </p>
                </div>

                {/* Project Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {showcaseProjects.map((project, index) => (
                        <Card
                            key={index}
                            className="hover-lift bg-white border-none shadow-xl group overflow-hidden"
                        >
                            {/* Project Image Mockup */}
                            <div className={`h-48 ${project.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20"></div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 right-4 flex space-x-2">
                                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                        <Monitor className="h-4 w-4 text-white" />
                                    </div>
                                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                        <Smartphone className="h-4 w-4 text-white" />
                                    </div>
                                </div>
                            </div>

                            <CardHeader>
                                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="text-muted-foreground">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                {/* Features */}
                                <div className="mb-4">
                                    <h4 className="font-semibold mb-2 text-sm">Características:</h4>
                                    <ul className="space-y-1">
                                        {project.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                                <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-primary">{project.metrics.conversion}</div>
                                        <div className="text-xs text-muted-foreground">Conversión</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-primary">{project.metrics.loadTime}</div>
                                        <div className="text-xs text-muted-foreground">Carga</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-primary">{project.metrics.satisfaction}</div>
                                        <div className="text-xs text-muted-foreground">Satisfacción</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

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
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold mb-8">
                        Beneficios de nuestras <span className="text-gradient">landing pages</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 hover-lift">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <TrendingUp className="h-8 w-8 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-3">Más Conversiones</h4>
                        <p className="text-muted-foreground">
                            Aumenta significativamente las conversiones de visitantes a clientes con nuestro diseño optimizado.
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 hover-lift">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="h-8 w-8 text-accent" />
                        </div>
                        <h4 className="text-xl font-bold mb-3">Entrega Rápida</h4>
                        <p className="text-muted-foreground">
                            Recibe tu landing page completamente funcional en tiempo récord sin comprometer la calidad.
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 hover-lift">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Star className="h-8 w-8 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-3">Calidad Premium</h4>
                        <p className="text-muted-foreground">
                            Diseño profesional y código de calidad que refleja la excelencia de tu marca.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPagesShowcase;