// src/components/web-development/WebDevelopmentProcess.tsx
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    MessageSquare,
    FileText,
    Code,
    TestTube,
    Rocket,
    Headphones
} from 'lucide-react';

const WebDevelopmentProcess = () => {
    const processSteps = [
        {
            step: "01",
            icon: <MessageSquare className="h-6 w-6 text-white" />,
            title: "Análisis de Requerimientos",
            description: "Estudiamos las necesidades específicas de tu empresa y definimos las funcionalidades que necesita tu aplicación web."
        },
        {
            step: "02",
            icon: <FileText className="h-6 w-6 text-white" />,
            title: "Diseño y Arquitectura",
            description: "Creamos el diseño de la interfaz y planificamos la arquitectura técnica de la base de datos y el backend."
        },
        {
            step: "03",
            icon: <Code className="h-6 w-6 text-white" />,
            title: "Desarrollo Full-Stack",
            description: "Desarrollamos tanto el frontend como el backend, implementando todas las funcionalidades y conexiones con la base de datos."
        },
        {
            step: "04",
            icon: <TestTube className="h-6 w-6 text-white" />,
            title: "Pruebas y Optimización",
            description: "Realizamos pruebas exhaustivas de funcionalidad, seguridad y rendimiento para garantizar la calidad del sistema."
        },
        {
            step: "05",
            icon: <Rocket className="h-6 w-6 text-white" />,
            title: "Lanzamiento",
            description: "Desplegamos tu aplicación en producción y la configuramos para que esté lista para tus usuarios."
        },
        {
            step: "06",
            icon: <Headphones className="h-6 w-6 text-white" />,
            title: "Soporte Continuo",
            description: "Brindamos mantenimiento, actualizaciones y soporte técnico para asegurar el funcionamiento óptimo."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Nuestro proceso de <span className="text-gradient">desarrollo</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Seguimos una metodología probada que garantiza aplicaciones web robustas,
                        escalables y perfectamente adaptadas a las necesidades de tu negocio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                        <Card
                            key={index}
                            className="hover-lift bg-white border-none shadow-lg group relative overflow-hidden"
                        >
                            {/* Step number background */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 transform rotate-12 translate-x-4 -translate-y-4"></div>

                            <CardHeader className="relative">
                                <div className="flex items-center space-x-4 mb-3">
                                    <div className="flex-shrink-0">
                                        <div className="p-3 rounded-full bg-gradient-to-br from-primary to-accent group-hover:shadow-lg transition-shadow duration-300">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-2xl font-bold text-primary/30 mb-1">{step.step}</div>
                                        <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                                            {step.title}
                                        </CardTitle>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Additional info */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4">
                            Desarrollo Personalizado para Tu Empresa
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Cada aplicación web que desarrollamos está diseñada específicamente para los
                            requerimientos únicos de tu empresa y las necesidades de tus usuarios finales.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDevelopmentProcess;