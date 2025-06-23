// src/components/web-development/WebDevelopmentFeatures.tsx
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Database,
    Settings,
    Users,
    ShoppingCart,
    Building2,
    Smartphone,
    Shield,
    Zap
} from 'lucide-react';

const WebDevelopmentFeatures = () => {
    const mainFeatures = [
        {
            icon: <Database className="h-8 w-8 text-primary" />,
            title: "Bases de Datos Robustas",
            description: "Diseñamos e implementamos bases de datos escalables que manejan eficientemente toda la información de tu aplicación."
        },
        {
            icon: <Settings className="h-8 w-8 text-primary" />,
            title: "Sistemas CRUD Completos",
            description: "Funcionalidades completas para Crear, Leer, Actualizar y Eliminar datos con interfaces intuitivas y seguras."
        },
        {
            icon: <Users className="h-8 w-8 text-primary" />,
            title: "Gestión de Usuarios",
            description: "Sistemas de autenticación, roles y permisos para controlar el acceso y personalizar la experiencia de cada usuario."
        }
    ];

    const applicationTypes = [
        {
            icon: <ShoppingCart className="h-6 w-6 text-primary" />,
            title: "Tiendas Online",
            description: "E-commerce completos con catálogo, carrito, pagos y gestión de inventario."
        },
        {
            icon: <Building2 className="h-6 w-6 text-primary" />,
            title: "Sistemas Empresariales",
            description: "CRM, ERP y herramientas de gestión personalizadas para tu empresa."
        },
        {
            icon: <Smartphone className="h-6 w-6 text-primary" />,
            title: "Aplicaciones Interactivas",
            description: "Plataformas que permiten interacción completa entre usuarios y datos."
        },
        {
            icon: <Shield className="h-6 w-6 text-primary" />,
            title: "Portales Seguros",
            description: "Sistemas con altos estándares de seguridad para datos sensibles."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Features */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Desarrollo Web <span className="text-gradient">Profesional</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Creamos aplicaciones web completas que van mucho más allá de páginas estáticas.
                        Desarrollamos soluciones interactivas y funcionales para empresas que necesitan herramientas digitales robustas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {mainFeatures.map((feature, index) => (
                        <Card
                            key={index}
                            className="hover-lift bg-white border-none shadow-lg group cursor-pointer text-center"
                        >
                            <CardHeader className="pb-4">
                                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* What we can build */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            ¿Qué tipo de aplicaciones <span className="text-gradient">desarrollamos?</span>
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Desde tiendas online hasta sistemas empresariales complejos,
                            desarrollamos la solución digital que tu negocio necesita.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {applicationTypes.map((type, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm hover-lift"
                            >
                                <div className="p-3 rounded-full bg-primary/10">
                                    {type.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2">{type.title}</h4>
                                    <p className="text-muted-foreground">{type.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Technology highlight */}
                    <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm">
                        <div className="flex items-center justify-center mb-4">
                            <Zap className="h-8 w-8 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Tecnología de Vanguardia</h4>
                        <p className="text-muted-foreground">
                            Utilizamos React, Node.js, bases de datos modernas y las mejores prácticas
                            de desarrollo para crear aplicaciones rápidas, seguras y escalables.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDevelopmentFeatures;