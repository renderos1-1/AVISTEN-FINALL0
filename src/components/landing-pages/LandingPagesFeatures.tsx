// src/components/landing-pages/LandingPagesFeatures.tsx
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Smartphone,

    Search,
    Palette,
    Code,
    Globe,
    Shield,
    Clock
} from 'lucide-react';

const LandingPagesFeatures = () => {
    const features = [
        {
            icon: <Smartphone className="h-8 w-8 text-primary" />,
            title: "Diseño Responsivo",
            description: "Tu landing page se verá perfecta en cualquier dispositivo - móvil, tablet o escritorio. Garantizamos una experiencia óptima para todos tus visitantes."
        },

        {
            icon: <Search className="h-8 w-8 text-primary" />,
            title: "SEO Optimizado",
            description: "Implementamos las mejores prácticas de SEO desde el inicio para que tu página aparezca en los primeros resultados de búsqueda de Google."
        },

        {
            icon: <Palette className="h-8 w-8 text-primary" />,
            title: "Enfoque en Conversiones",
            description: "Diseñamos cada elemento estratégicamente para maximizar las conversiones y conseguir más leads y ventas para tu negocio."
        },

    ];

    const whyChooseUs = [
        {
            icon: <Code className="h-6 w-6 text-primary" />,
            title: "Tecnología Moderna",
            description: "Utilizamos React, Next.js y las últimas tecnologías web para crear páginas rápidas y eficientes."
        },
        {
            icon: <Globe className="h-6 w-6 text-primary" />,
            title: "Frontend Moderno",
            description: "Creamos interfaces de usuario atractivas y funcionales que cautivan a tus visitantes desde el primer momento."
        },
        {
            icon: <Shield className="h-6 w-6 text-primary" />,
            title: "Seguridad Garantizada",
            description: "Implementamos las mejores prácticas de seguridad web para proteger tu sitio y los datos de tus usuarios."
        },
        {
            icon: <Clock className="h-6 w-6 text-primary" />,
            title: "Entrega Rápida",
            description: "Desarrollamos tu landing page en tiempo récord sin comprometer la calidad del resultado final."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Features */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        ¿Por qué elegir nuestras <span className="text-gradient">Landing Pages?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Combinamos diseño atractivo, tecnología de vanguardia y estrategias de conversión para crear landing pages que realmente funcionan para tu negocio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="hover-lift bg-white border-none shadow-lg group cursor-pointer"
                        >
                            <CardHeader className="text-center pb-4">
                                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* How we create modern frontend pages */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Cómo creamos páginas <span className="text-gradient">frontend modernas</span>
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Nuestro proceso garantiza páginas web rápidas, modernas y perfectamente adaptadas a las necesidades específicas de tu negocio.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm hover-lift"
                            >
                                <div className="p-3 rounded-full bg-primary/10">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPagesFeatures;