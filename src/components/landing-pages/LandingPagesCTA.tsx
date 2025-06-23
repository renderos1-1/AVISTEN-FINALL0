// src/components/landing-pages/LandingPagesCTA.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    ArrowRight,
    Globe,
    Zap

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


    return (
        <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">





                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">


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