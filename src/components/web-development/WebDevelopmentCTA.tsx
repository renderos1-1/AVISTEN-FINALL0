// src/components/web-development/WebDevelopmentCTA.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    ArrowRight,
    CheckCircle,
    Zap,
    Globe,
    Database,
    Users
} from 'lucide-react';

const WebDevelopmentCTA = () => {
    const scrollToContact = () => {
        // Navigate to main page contact section
        window.location.href = '/#contact';
    };

    const navigateToLandingPages = () => {
        // Navigate to landing pages service
        window.location.href = '/landing-pages';
    };

    const benefits = [
        {
            icon: <Database className="h-5 w-5 text-primary" />,
            text: "Aplicaciones escalables con bases de datos robustas"
        },
        {
            icon: <Users className="h-5 w-5 text-primary" />,
            text: "Sistemas multi-usuario con roles y permisos"
        },
        {
            icon: <Globe className="h-5 w-5 text-primary" />,
            text: "Integración con APIs y servicios externos"
        },
        {
            icon: <CheckCircle className="h-5 w-5 text-primary" />,
            text: "Soporte y mantenimiento incluido"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main CTA */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        ¿Tu empresa necesita una <span className="text-gradient">aplicación web funcional?</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-3 text-left">
                                {benefit.icon}
                                <span className="text-muted-foreground">{benefit.text}</span>
                            </div>
                        ))}
                    </div>

                    <Button
                        onClick={scrollToContact}
                        className="btn-gradient text-white px-10 py-4 text-xl font-semibold rounded-xl group"
                    >
                        <Zap className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                        Solicitar Cotización
                    </Button>
                </div>

                {/* Alternative option */}
                <Card className="bg-gradient-to-br from-gray-50 to-blue-50 border-none shadow-xl max-w-4xl mx-auto">
                    <CardHeader className="text-center pb-6">
                        <div className="mx-auto mb-4 p-4 rounded-full bg-accent/20">
                            <Globe className="h-8 w-8 text-accent" />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold">
                            ¿Solo necesitas una página web informativa?
                        </CardTitle>
                        <CardDescription className="text-lg">
                            Si tu proyecto no requiere funcionalidades avanzadas como bases de datos o sistemas de usuarios,
                            nuestro servicio de Landing Pages puede ser la solución perfecta y más económica para ti.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="p-4 rounded-lg bg-white/50">
                                <h4 className="font-semibold mb-2">Páginas Informativas</h4>
                                <p className="text-sm text-muted-foreground">Sitios web profesionales para presentar tu empresa</p>
                            </div>
                            <div className="p-4 rounded-lg bg-white/50">
                                <h4 className="font-semibold mb-2">Diseño Responsivo</h4>
                                <p className="text-sm text-muted-foreground">Perfecto en móviles, tablets y escritorio</p>
                            </div>
                            <div className="p-4 rounded-lg bg-white/50">
                                <h4 className="font-semibold mb-2">Rápido y Económico</h4>
                                <p className="text-sm text-muted-foreground">Solución ideal para emprendedores y pequeñas empresas</p>
                            </div>
                        </div>

                        <Button
                            onClick={navigateToLandingPages}
                            variant="outline"
                            className="px-8 py-3 text-lg font-semibold rounded-xl border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
                        >
                            Ver Landing Pages
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </CardContent>
                </Card>

                {/* Final message */}
                <div className="text-center mt-16">
                    <p className="text-lg text-muted-foreground">
                        ¿No estás seguro de qué opción es mejor para tu proyecto?
                        <span className="font-semibold text-primary"> Contáctanos</span> y te ayudamos a elegir la solución ideal.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WebDevelopmentCTA;