// src/components/api-integration/ApiIntegrationFeatures.tsx
import React from 'react';
import { Network, Bot, Code, Database, Cloud, Zap, Shield, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ApiIntegrationFeatures = () => {
    const features = [
        {
            icon: <Network className="h-12 w-12 text-gray-700" />,
            title: "Integración de APIs Externas",
            description: "Conectamos tu sistema con APIs de terceros como sistemas de pago, CRMs, ERPs, redes sociales y servicios en la nube para automatizar procesos y sincronizar datos."
        },
        {
            icon: <Code className="h-12 w-12 text-gray-700" />,
            title: "Desarrollo de APIs Personalizadas",
            description: "Creamos APIs REST y GraphQL a medida para tu negocio, permitiendo que tus aplicaciones se comuniquen eficientemente y expongan datos de forma segura."
        },
        {
            icon: <Bot className="h-12 w-12 text-gray-700" />,
            title: "Agentes de Inteligencia Artificial",
            description: "Desarrollamos agentes IA que automatizan tareas, procesan lenguaje natural, analizan datos y brindan respuestas inteligentes para mejorar la experiencia del usuario."
        },
        {
            icon: <Database className="h-12 w-12 text-gray-700" />,
            title: "Sincronización de Datos",
            description: "Implementamos sistemas de sincronización en tiempo real entre diferentes plataformas, asegurando que tus datos estén siempre actualizados y consistentes."
        },
        {
            icon: <Cloud className="h-12 w-12 text-gray-700" />,
            title: "APIs en la Nube",
            description: "Desplegamos y gestionamos APIs escalables en plataformas cloud como AWS, Azure o Google Cloud, garantizando alta disponibilidad y rendimiento."
        },
        {
            icon: <Shield className="h-12 w-12 text-gray-700" />,
            title: "Seguridad y Autenticación",
            description: "Implementamos protocolos de seguridad robustos, autenticación OAuth, JWT, y encriptación para proteger tus datos y APIs contra accesos no autorizados."
        },
        {
            icon: <Zap className="h-12 w-12 text-gray-700" />,
            title: "Automatización de Procesos",
            description: "Creamos flujos automatizados que conectan diferentes sistemas, reduciendo trabajo manual y aumentando la eficiencia operativa de tu empresa."
        },
        {
            icon: <Settings className="h-12 w-12 text-gray-700" />,
            title: "Monitoreo y Mantenimiento",
            description: "Proporcionamos herramientas de monitoreo, logging y alertas para asegurar que tus integraciones funcionen correctamente las 24 horas del día."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Características <span className="text-gradient">Principales</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Ofrecemos soluciones completas de integración que conectan tu negocio con el ecosistema digital moderno.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card 
                            key={index}
                            className="hover-lift bg-white border-none shadow-lg group"
                        >
                            <CardHeader className="text-center pb-4">
                                <div className="mx-auto mb-4 p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-lg font-bold group-hover:text-orange-600 transition-colors duration-300">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-center text-muted-foreground leading-relaxed text-sm">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Additional Benefits Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">
                            ¿Por qué elegir nuestras <span className="text-gradient">integraciones</span>?
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-orange-50 hover:to-orange-100 transition-all duration-300">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-colors duration-300">
                                <Zap className="h-8 w-8 text-gray-600 group-hover:text-orange-600 transition-colors duration-300" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Eficiencia Mejorada</h4>
                            <p className="text-muted-foreground">
                                Automatiza procesos manuales y reduce el tiempo de operación hasta en un 80%.
                            </p>
                        </div>

                        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-orange-50 hover:to-orange-100 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-colors duration-300">
                                <Network className="h-8 w-8 text-gray-600 group-hover:text-orange-600 transition-colors duration-300" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Conectividad Total</h4>
                            <p className="text-muted-foreground">
                                Conecta todos tus sistemas y herramientas en un ecosistema unificado.
                            </p>
                        </div>

                        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-orange-50 hover:to-orange-100 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-colors duration-300">
                                <Bot className="h-8 w-8 text-gray-600 group-hover:text-orange-600 transition-colors duration-300" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Inteligencia Artificial</h4>
                            <p className="text-muted-foreground">
                                Agentes IA que aprenden y se adaptan para optimizar tus procesos continuamente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApiIntegrationFeatures;