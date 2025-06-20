// src/components/landing-pages/LandingPagesCTA.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    ArrowRight,
    Globe,
    Zap,
    CheckCircle,
    MessageSquare,
    Phone,
    Mail
} from 'lucide-react';

const LandingPagesCTA = () => {
    const scrollToContact = () => {
        // Navigate to main page contact section
        window.location.href = '/#contact';
    };

    const navigateToWebDevelopment = () => {
        // Navigate to web development service page
        window.location.href = '/desarrollo-web';
    };

    const benefits = [
        "Consulta gratuita y análisis de requerimientos",
        "Diseño personalizado para tu marca",
        "Desarrollo con tecnologías modernas",
        "SEO optimizado desde el inicio",
        "Diseño responsivo para todos los dispositivos",
        "Soporte técnico incluido",
        "Entrega en tiempo récord",
        "Garantía de satisfacción"
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main CTA */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        ¿Listo para crear tu <span className="text-gradient">landing page perfecta?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Comienza hoy mismo y dale a tu negocio la presencia digital que se merece. Nuestro equipo está listo para convertir tu visión en realidad.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button
                            onClick={scrollToContact}
                            className="btn-gradient text-white px-8 py-4 text-lg font-semibold rounded-xl group"
                        >
                            Solicitar Cotización Gratuita
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="outline"
                            className="px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                        >
                            <MessageSquare className="mr-2 h-5 w-5" />
                            Hablar con un Experto
                        </Button>
                    </div>

                    {/* Quick contact info */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-primary" />
                            <span>+503 1234-5678</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-primary" />
                            <span>hello@avisten.com</span>
                        </div>
                    </div>
                </div>

                {/* Benefits grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left side - Benefits list */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">¿Qué incluye nuestro servicio?</h3>
                        <div className="space-y-3">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span className="text-foreground">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Process overview */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold mb-6">Proceso simple y transparente</h3>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-primary/10">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-primary font-bold text-sm">1</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Consulta inicial gratuita</h4>
                                    <p className="text-muted-foreground text-sm">Analizamos tus necesidades y objetivos</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-primary/10">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-primary font-bold text-sm">2</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Diseño y desarrollo</h4>
                                    <p className="text-muted-foreground text-sm">Creamos tu landing page personalizada</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-primary/10">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-primary font-bold text-sm">3</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Entrega y lanzamiento</h4>
                                    <p className="text-muted-foreground text-sm">Tu página lista para convertir visitantes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upgrade to web development */}
                <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-none shadow-xl">
                    <CardHeader className="text-center pb-6">
                        <div className="mx-auto mb-4 p-4 rounded-full bg-primary/20">
                            <Globe className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold">
                            ¿Necesitas más funcionalidades?
                        </CardTitle>
                        <CardDescription className="text-lg">
                            Si tu proyecto requiere funcionalidades avanzadas como sistemas de gestión, bases de datos,
                            autenticación de usuarios o integraciones complejas, te recomendamos nuestro servicio completo de desarrollo web.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="p-4 rounded-lg bg-white/50">
                                <h4 className="font-semibold mb-2">Aplicaciones Web Completas</h4>
                                <p className="text-sm text-muted-foreground">Desarrollo de sistemas web robustos y escalables</p>
                            </div>
                            <div className="p-4 rounded-lg bg-white/50">
                                <h4 className="font-semibold mb-2">Integraciones Avanzadas</h4>
                                <p className="text-sm text-muted-foreground">APIs, bases de datos y servicios de terceros</p>
                            </div>
                            <div className="p-4 rounded-lg bg-white/50">
                                <h4 className="font-semibold mb-2">Sistemas Personalizados</h4>
                                <p className="text-sm text-muted-foreground">Soluciones a medida para tu negocio</p>
                            </div>
                        </div>

                        <Button
                            onClick={navigateToWebDevelopment}
                            variant="outline"
                            className="px-8 py-3 text-lg font-semibold rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            Conocer Desarrollo Web Completo
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </CardContent>
                </Card>

                {/* Final CTA */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        No esperes más, ¡comienza hoy!
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8">
                        Cada día que pases sin una landing page profesional es una oportunidad perdida.
                    </p>
                    <Button
                        onClick={scrollToContact}
                        className="btn-gradient text-white px-10 py-4 text-xl font-semibold rounded-xl group"
                    >
                        <Zap className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                        Empezar Mi Proyecto Ahora
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default LandingPagesCTA;