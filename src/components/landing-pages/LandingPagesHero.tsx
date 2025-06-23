// src/components/landing-pages/LandingPagesHero.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { LayoutPanelTop, Zap, Globe, Smartphone } from 'lucide-react';

const LandingPagesHero = () => {
    const scrollToContact = () => {
        // Navigate to main page contact section
        window.location.href = '/#contact';
    };

    return (
        <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-40 right-10 w-12 h-12 bg-accent/5 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div className="text-center lg:text-left animate-fade-in-up">
                        <div className="flex items-center justify-center lg:justify-start mb-6">

                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Páginas Web que
                            <span className="text-gradient block">Convierten Visitantes</span>
                            en Clientes
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                            Creamos landing pages modernas, rápidas y optimizadas que se adaptan perfectamente a las necesidades de tu negocio. Diseño responsivo y enfoque en conversiones.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                onClick={scrollToContact}
                                className="btn-gradient text-white px-8 py-4 text-lg font-semibold rounded-xl group"
                            >
                                Solicitar Cotización
                                <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                            </Button>

                        </div>

                        {/* Stats */}

                    </div>

                    {/* Visual Side */}
                    <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                        <div className="relative">
                            {/* Main mockup container */}
                            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="space-y-4">
                                    {/* Header mockup */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                        </div>
                                        <div className="flex space-x-1">
                                            <Globe className="h-4 w-4 text-gray-400" />
                                            <Smartphone className="h-4 w-4 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Content mockup */}
                                    <div className="space-y-3">
                                        <div className="h-4 bg-gradient-to-r from-primary to-accent rounded"></div>
                                        <div className="grid grid-cols-3 gap-2">
                                            <div className="h-3 bg-gray-200 rounded"></div>
                                            <div className="h-3 bg-gray-300 rounded"></div>
                                            <div className="h-3 bg-gray-200 rounded"></div>
                                        </div>
                                        <div className="h-8 bg-primary/20 rounded-lg"></div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg"></div>
                                            <div className="h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-lg shadow-lg animate-float flex items-center justify-center">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full shadow-lg animate-float flex items-center justify-center" style={{animationDelay: '1s'}}>
                                <Globe className="h-8 w-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPagesHero;