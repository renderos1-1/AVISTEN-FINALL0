// src/components/api-integration/ApiIntegrationHero.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Network, Bot, Code, Database, Cloud } from 'lucide-react';

const ApiIntegrationHero = () => {
    const scrollToContact = () => {
        // Navigate to main page contact section
        window.location.href = '/#contact';
    };

    return (
        <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden pt-24 md:pt-16">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-gray-500/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-40 right-10 w-12 h-12 bg-gray-500/5 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div className="text-center lg:text-left animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Integración de
                            <span className="text-gradient block">APIs y Agentes IA</span>
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                            Conectamos tu negocio con el mundo digital a través de integraciones de APIs, desarrollo de APIs personalizadas y agentes de inteligencia artificial que automatizan procesos y mejoran la experiencia del cliente.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <Button
                                onClick={scrollToContact}
                                className="btn-gradient text-white px-8 py-4 text-lg font-semibold rounded-xl group"
                            >
                                Solicitar Cotización
                                <Network className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                            </Button>
                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="flex items-center space-x-2 text-sm">
                                <Network className="h-4 w-4 text-gray-600" />
                                <span>APIs REST</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Database className="h-4 w-4 text-gray-600" />
                                <span>Integración BD</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Bot className="h-4 w-4 text-gray-600" />
                                <span>Agentes IA</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Cloud className="h-4 w-4 text-gray-600" />
                                <span>APIs en la Nube</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Code className="h-4 w-4 text-gray-600" />
                                <span>APIs Personalizadas</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Zap className="h-4 w-4 text-gray-600" />
                                <span>Automatización</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                        <div className="relative">
                            {/* Main API integration mockup */}
                            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="space-y-4">
                                    {/* Header with API info */}
                                    <div className="flex items-center justify-between border-b pb-3">
                                        <div className="flex items-center space-x-2">
                                            <Network className="h-6 w-6 text-gray-600" />
                                            <span className="font-bold text-gray-600">API</span>
                                        </div>
                                        <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                            CONECTADO
                                        </div>
                                    </div>

                                    {/* API endpoints mockup */}
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <div className="text-xs text-muted-foreground">Endpoints</div>
                                            <div className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                                REST API
                                            </div>
                                        </div>

                                        {/* API calls visualization */}
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <div className="text-xs">GET /users</div>
                                                <div className="ml-auto text-xs text-green-600">200</div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                <div className="text-xs">POST /orders</div>
                                                <div className="ml-auto text-xs text-blue-600">201</div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                                <div className="text-xs">PUT /products</div>
                                                <div className="ml-auto text-xs text-gray-600">200</div>
                                            </div>
                                        </div>

                                        {/* Data flow visualization */}
                                        <div className="border-t pt-3 space-y-2">
                                            <div className="text-xs text-muted-foreground mb-2">Flujo de Datos</div>
                                            <div className="flex items-center justify-between">
                                                <div className="w-16 h-8 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded flex items-center justify-center">
                                                    <Database className="h-3 w-3 text-gray-600" />
                                                </div>
                                                <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-500 to-gray-600 mx-2"></div>
                                                <div className="w-16 h-8 bg-gradient-to-r from-gray-600/20 to-gray-700/20 rounded flex items-center justify-center">
                                                    <Bot className="h-3 w-3 text-gray-600" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* AI Agent indicator */}
                                        <div className="flex items-center justify-center space-x-2 p-2 bg-gray-50 rounded">
                                            <Bot className="h-4 w-4 text-gray-600" />
                                            <span className="text-xs text-gray-800">Agente IA Activo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-800 rounded-lg shadow-lg animate-float flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                                <Network className="h-6 w-6 text-white" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full shadow-lg animate-float flex items-center justify-center" style={{animationDelay: '1s'}}>
                                <Bot className="h-8 w-8 text-white" />
                            </div>
                            <div className="absolute top-1/2 -left-8 w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-lg animate-float flex items-center justify-center hover:from-orange-500 hover:to-orange-600 transition-all duration-300" style={{animationDelay: '2s'}}>
                                <Code className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApiIntegrationHero;