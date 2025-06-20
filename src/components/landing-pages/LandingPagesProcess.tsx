// src/components/landing-pages/LandingPagesProcess.tsx
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    MessageSquare,
    PenTool,
    Code,
    Rocket,
    Search,
    Users,
    Lightbulb,
    CheckCircle
} from 'lucide-react';

const LandingPagesProcess = () => {
    const processSteps = [
        {
            step: "01",
            icon: <MessageSquare className="h-8 w-8 text-white" />,
            title: "Consulta Inicial",
            description: "Analizamos tus necesidades, objetivos y audiencia objetivo para entender perfectamente lo que tu negocio requiere.",
            details: [
                "Reunión de análisis de requerimientos",
                "Estudio de tu audiencia objetivo",
                "Definición de objetivos de conversión",
                "Análisis de la competencia"
            ]
        },
        {
            step: "02",
            icon: <PenTool className="h-8 w-8 text-white" />,
            title: "Diseño Personalizado",
            description: "Creamos un diseño único que refleje tu marca y esté optimizado para conversiones, siguiendo las mejores prácticas de UX/UI.",
            details: [
                "Wireframes y prototipos",
                "Diseño visual personalizado",
                "Optimización para conversiones",
                "Diseño responsivo multiplataforma"
            ]
        },
        {
            step: "03",
            icon: <Code className="h-8 w-8 text-white" />,
            title: "Desarrollo Frontend",
            description: "Desarrollamos tu landing page con tecnologías modernas, garantizando velocidad, responsividad y funcionalidad perfecta.",
            details: [
                "Código limpio y optimizado",
                "Tecnologías modernas (React, Next.js)",
                "Optimización de velocidad de carga",
                "Integración de herramientas de análisis"
            ]
        },
        {
            step: "04",
            icon: <Rocket className="h-8 w-8 text-white" />,
            title: "Lanzamiento y Soporte",
            description: "Lanzamos tu página web y te proporcionamos soporte continuo para asegurar su óptimo funcionamiento.",
            details: [
                "Configuración de hosting y dominio",
                "Pruebas de funcionalidad",
                "Capacitación para gestión de contenido",
                "Soporte técnico continuo"
            ]
        }
    ];

    const designPrinciples = [
        {
            icon: <Users className="h-6 w-6 text-primary" />,
            title: "Centrado en el Usuario",
            description: "Diseñamos pensando en la experiencia del usuario, creando interfaces intuitivas y fáciles de navegar."
        },
        {
            icon: <Search className="h-6 w-6 text-primary" />,
            title: "SEO Optimizado",
            description: "Implementamos las mejores prácticas de SEO desde el desarrollo para mejorar tu posicionamiento."
        },
        {
            icon: <Lightbulb className="h-6 w-6 text-primary" />,
            title: "Innovación Constante",
            description: "Utilizamos las últimas tendencias y tecnologías para mantener tu sitio web siempre actualizado."
        },
        {
            icon: <CheckCircle className="h-6 w-6 text-primary" />,
            title: "Calidad Garantizada",
            description: "Cada proyecto pasa por rigurosas pruebas de calidad antes de ser entregado al cliente."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Process Steps */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Cómo diseñamos y desarrollamos tu <span className="text-gradient">landing page</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Seguimos un proceso estructurado y probado que garantiza resultados excepcionales en cada proyecto que desarrollamos.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {processSteps.map((step, index) => (
                        <Card
                            key={index}
                            className="hover-lift bg-white border-none shadow-xl group relative overflow-hidden"
                        >
                            {/* Step number background */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary to-accent opacity-10 transform rotate-12 translate-x-8 -translate-y-8"></div>

                            <CardHeader className="relative">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="flex-shrink-0">
                                        <div className="p-3 rounded-full bg-gradient-to-br from-primary to-accent group-hover:shadow-lg transition-shadow duration-300">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-4xl font-bold text-primary/20 mb-1">{step.step}</div>
                                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                                            {step.title}
                                        </CardTitle>
                                    </div>
                                </div>
                                <CardDescription className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {step.details.map((detail, detailIndex) => (
                                        <li key={detailIndex} className="flex items-center text-sm text-foreground">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Design Principles */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Nuestros principios de <span className="text-gradient">desarrollo</span>
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Cada landing page que creamos está fundamentada en principios sólidos de diseño y desarrollo web moderno.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {designPrinciples.map((principle, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover-lift"
                            >
                                <div className="p-3 rounded-full bg-primary/10">
                                    {principle.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2">{principle.title}</h4>
                                    <p className="text-muted-foreground">{principle.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPagesProcess;