// src/components/api-integration/ApiIntegrationProcess.tsx
import React from 'react';
import { ShoppingCart, MessageSquare, BarChart3, Bot, Smartphone, Zap } from 'lucide-react';

const ApiIntegrationProcess = () => {
    const useCases = [
        {
            icon: <ShoppingCart className="h-8 w-8 text-white" />,
            title: "E-commerce y Pagos",
            description: "Integra tu tienda online con pasarelas de pago, sistemas de inventario y plataformas de envío para automatizar todo el proceso de ventas.",
            examples: [
                "Stripe/PayPal para pagos seguros",
                "Sincronización de inventario en tiempo real",
                "Notificaciones automáticas de pedidos",
                "Integración con sistemas de envío"
            ],
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: <MessageSquare className="h-8 w-8 text-white" />,
            title: "Comunicación y Marketing",
            description: "Conecta WhatsApp Business, email marketing y redes sociales para automatizar la comunicación con tus clientes.",
            examples: [
                "WhatsApp Business API para soporte",
                "Email marketing automatizado",
                "Publicación automática en redes sociales",
                "Notificaciones SMS personalizadas"
            ],
            color: "from-blue-500 to-cyan-600"
        },
        {
            icon: <BarChart3 className="h-8 w-8 text-white" />,
            title: "CRM y Gestión Empresarial",
            description: "Sincroniza tu CRM con sistemas contables, herramientas de ventas y plataformas de análisis para una gestión integral.",
            examples: [
                "Salesforce/HubSpot integration",
                "Sincronización con QuickBooks",
                "Automatización de reportes",
                "Dashboard unificado de métricas"
            ],
            color: "from-purple-500 to-violet-600"
        },
        {
            icon: <Bot className="h-8 w-8 text-white" />,
            title: "Agentes IA y Automatización",
            description: "Implementa chatbots inteligentes y agentes IA que manejen consultas, procesen documentos y automaticen tareas repetitivas.",
            examples: [
                "Chatbots con ChatGPT/Claude",
                "Procesamiento automático de documentos",
                "Análisis de sentimientos en reviews",
                "Asistentes virtuales personalizados"
            ],
            color: "from-orange-500 to-red-600"
        },
        {
            icon: <Smartphone className="h-8 w-8 text-white" />,
            title: "Apps Móviles y Web",
            description: "Conecta tus aplicaciones móviles y web con servicios backend, APIs de geolocalización y notificaciones push.",
            examples: [
                "APIs REST para apps móviles",
                "Geolocalización y mapas",
                "Notificaciones push personalizadas",
                "Sincronización offline/online"
            ],
            color: "from-indigo-500 to-blue-600"
        },
        {
            icon: <Zap className="h-8 w-8 text-white" />,
            title: "Automatización de Procesos",
            description: "Crea flujos automatizados que conecten diferentes herramientas y eliminen tareas manuales repetitivas.",
            examples: [
                "Zapier/Power Automate workflows",
                "Automatización de facturas",
                "Backup automático de datos",
                "Reportes programados"
            ],
            color: "from-yellow-500 to-orange-600"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Casos de Uso <span className="text-gradient">Populares</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Descubre cómo nuestras integraciones de APIs transforman negocios reales y resuelven problemas específicos de diferentes industrias.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCases.map((useCase, index) => (
                        <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover-lift group">
                            <div className="flex items-center mb-4">
                                <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {useCase.icon}
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-orange-600 transition-colors duration-300">
                                    {useCase.title}
                                </h3>
                            </div>
                            
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                {useCase.description}
                            </p>
                            
                            <div className="space-y-2">
                                <div className="text-sm font-semibold text-gray-700 mb-2">Ejemplos comunes:</div>
                                {useCase.examples.map((example, exampleIndex) => (
                                    <div key={exampleIndex} className="flex items-center text-sm">
                                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 flex-shrink-0"></div>
                                        {example}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4">
                            ¿Tienes un caso de uso específico?
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Cada negocio es único. Cuéntanos tu situación específica y te mostraremos cómo nuestras integraciones pueden resolver tus desafíos particulares.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="flex items-center space-x-2 text-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>Análisis gratuito de tu caso</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span>Propuesta técnica detallada</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                <span>Demo personalizada</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApiIntegrationProcess;