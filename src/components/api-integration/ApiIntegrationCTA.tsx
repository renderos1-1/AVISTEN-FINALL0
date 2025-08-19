// src/components/api-integration/ApiIntegrationCTA.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Network, Bot, Zap, CheckCircle } from 'lucide-react';

const ApiIntegrationCTA = () => {
    const scrollToContact = () => {
        // Navigate to main page contact section
        window.location.href = '/#contact';
    };

    const benefits = [
        "Automatización de procesos empresariales",
        "Integración con sistemas existentes",
        "Agentes IA personalizados",
        "APIs seguras y escalables",
        "Soporte técnico especializado",
        "Monitoreo y mantenimiento 24/7"
    ];

    const integrationTypes = [
        {
            icon: <Network className="h-6 w-6 text-gray-600" />,
            title: "APIs de Terceros",
            description: "PayPal, Stripe, WhatsApp, Google, Facebook, CRMs, ERPs"
        },
        {
            icon: <Bot className="h-6 w-6 text-gray-600" />,
            title: "Agentes IA",
            description: "ChatGPT, Claude, Gemini, agentes personalizados"
        },
        {
            icon: <Zap className="h-6 w-6 text-gray-600" />,
            title: "Automatización",
            description: "Zapier, Microsoft Power Automate, flujos personalizados"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main CTA */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Conecta tu Negocio con el
                        <span className="text-gradient block">Futuro Digital</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Transforma tu empresa con integraciones inteligentes que automatizan procesos, 
                        conectan sistemas y potencian tu productividad con inteligencia artificial.
                    </p>
                    
                    <Button
                        onClick={scrollToContact}
                        className="btn-gradient text-white px-8 py-4 text-lg font-semibold rounded-xl group mb-8"
                    >
                        Solicitar Consulta Gratuita
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <p className="text-sm text-muted-foreground">
                        Consulta gratuita • Sin compromiso • Propuesta personalizada
                    </p>
                </div>

                {/* Integration Types */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {integrationTypes.map((type, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover-lift text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                {type.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                            <p className="text-muted-foreground text-sm">{type.description}</p>
                        </div>
                    ))}
                </div>

                {/* Benefits Grid */}
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Benefits List */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">
                                ¿Qué obtienes con nuestras <span className="text-gradient">integraciones</span>?
                            </h3>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-muted-foreground">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats/Highlights */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:from-orange-50 hover:to-orange-100 transition-all duration-300 group">
                                <div className="text-3xl font-bold text-gray-700 group-hover:text-orange-600 mb-2 transition-colors duration-300">80%</div>
                                <div className="text-sm text-muted-foreground">Reducción en tiempo de procesos manuales</div>
                            </div>
                            
                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:from-orange-50 hover:to-orange-100 transition-all duration-300 group">
                                <div className="text-3xl font-bold text-gray-700 group-hover:text-orange-600 mb-2 transition-colors duration-300">24/7</div>
                                <div className="text-sm text-muted-foreground">Monitoreo y soporte continuo</div>
                            </div>
                            
                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:from-orange-50 hover:to-orange-100 transition-all duration-300 group">
                                <div className="text-3xl font-bold text-gray-700 group-hover:text-orange-600 mb-2 transition-colors duration-300">100%</div>
                                <div className="text-sm text-muted-foreground">Soluciones personalizadas</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-gray-800 to-black rounded-2xl p-8 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            ¿Listo para automatizar tu negocio?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Nuestro equipo de expertos está listo para analizar tus necesidades y crear 
                            la solución de integración perfecta para tu empresa.
                        </p>
                        <Button
                            onClick={scrollToContact}
                            className="bg-white text-black hover:bg-orange-500 hover:text-white px-8 py-3 font-semibold rounded-xl group transition-all duration-300"
                        >
                            Comenzar Ahora
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApiIntegrationCTA;