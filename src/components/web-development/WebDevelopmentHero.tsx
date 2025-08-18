// src/components/web-development/WebDevelopmentHero.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, Database, Globe, Zap, Settings, Users } from 'lucide-react';

const WebDevelopmentHero = () => {
    const scrollToContact = () => {
        // Navigate to main page contact section
        window.location.href = '/#contact';
    };

    return (
        <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden pt-24 md:pt-16">
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
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Aplicaciones Web
                            <span className="text-gradient block">Completas y Funcionales</span>
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                            Desarrollamos aplicaciones web interactivas con bases de datos, sistemas CRUD y funcionalidades avanzadas.
                            Desde tiendas online hasta sistemas empresariales personalizados.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <Button
                                onClick={scrollToContact}
                                className="btn-gradient text-white px-8 py-4 text-lg font-semibold rounded-xl group"
                            >
                                Solicitar Cotización
                                <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                            </Button>
                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="flex items-center space-x-2 text-sm">
                                <Database className="h-4 w-4 text-primary" />
                                <span>Bases de Datos</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Settings className="h-4 w-4 text-primary" />
                                <span>Sistemas CRUD</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Users className="h-4 w-4 text-primary" />
                                <span>Multi-usuario</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Globe className="h-4 w-4 text-primary" />
                                <span>Escalable</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Code className="h-4 w-4 text-primary" />
                                <span>Tecnología Moderna</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Zap className="h-4 w-4 text-primary" />
                                <span>Alto Rendimiento</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                        <div className="relative">
                            {/* Main application mockup */}
                            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="space-y-4">
                                    {/* Header with navigation */}
                                    <div className="flex items-center justify-between border-b pb-3">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <div className="w-6 h-2 bg-gray-200 rounded"></div>
                                            <div className="w-8 h-2 bg-primary/30 rounded"></div>
                                            <div className="w-6 h-2 bg-gray-200 rounded"></div>
                                        </div>
                                    </div>

                                    {/* Dashboard content mockup */}
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <div className="h-3 bg-gradient-to-r from-primary to-accent rounded w-1/3"></div>
                                            <div className="flex space-x-1">
                                                <div className="w-6 h-6 bg-primary/20 rounded"></div>
                                                <div className="w-6 h-6 bg-accent/20 rounded"></div>
                                            </div>
                                        </div>

                                        {/* Data table mockup */}
                                        <div className="space-y-2">
                                            <div className="grid grid-cols-4 gap-2">
                                                <div className="h-2 bg-gray-300 rounded"></div>
                                                <div className="h-2 bg-gray-300 rounded"></div>
                                                <div className="h-2 bg-gray-300 rounded"></div>
                                                <div className="h-2 bg-gray-300 rounded"></div>
                                            </div>
                                            <div className="grid grid-cols-4 gap-2">
                                                <div className="h-2 bg-gray-200 rounded"></div>
                                                <div className="h-2 bg-gray-200 rounded"></div>
                                                <div className="h-2 bg-gray-200 rounded"></div>
                                                <div className="h-2 bg-primary/30 rounded"></div>
                                            </div>
                                            <div className="grid grid-cols-4 gap-2">
                                                <div className="h-2 bg-gray-200 rounded"></div>
                                                <div className="h-2 bg-gray-200 rounded"></div>
                                                <div className="h-2 bg-gray-200 rounded"></div>
                                                <div className="h-2 bg-accent/30 rounded"></div>
                                            </div>
                                        </div>

                                        {/* Action buttons */}
                                        <div className="flex space-x-2 pt-2">
                                            <div className="h-6 bg-primary/20 rounded w-16"></div>
                                            <div className="h-6 bg-accent/20 rounded w-16"></div>
                                            <div className="h-6 bg-gray-200 rounded w-16"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating tech elements */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-lg shadow-lg animate-float flex items-center justify-center">
                                <Database className="h-6 w-6 text-white" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full shadow-lg animate-float flex items-center justify-center" style={{animationDelay: '1s'}}>
                                <Settings className="h-8 w-8 text-white" />
                            </div>
                            <div className="absolute top-1/2 -left-8 w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg shadow-lg animate-float flex items-center justify-center" style={{animationDelay: '2s'}}>
                                <Code className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDevelopmentHero;