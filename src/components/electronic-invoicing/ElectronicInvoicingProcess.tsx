// src/components/electronic-invoicing/ElectronicInvoicingProcess.tsx
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    FileText,
    Shield,
    Send,
    Mail,
    Building2,
    CheckCircle,
    Users,
    Database
} from 'lucide-react';

const ElectronicInvoicingProcess = () => {
    const processSteps = [
        {
            step: "01",
            icon: <FileText className="h-6 w-6 text-white" />,
            title: "Generación del DTE",
            description: "El sistema genera automáticamente el Documento Tributario Electrónico (DTE) con todos los datos requeridos por el Ministerio de Hacienda."
        },
        {
            step: "02",
            icon: <Shield className="h-6 w-6 text-white" />,
            title: "Firma Digital",
            description: "El DTE se firma digitalmente usando certificados autorizados, garantizando la autenticidad e integridad del documento."
        },
        {
            step: "03",
            icon: <Send className="h-6 w-6 text-white" />,
            title: "Transmisión al Ministerio",
            description: "El DTE firmado se envía automáticamente a la API del Ministerio de Hacienda para su validación y certificación oficial."
        },
        {
            step: "04",
            icon: <CheckCircle className="h-6 w-6 text-white" />,
            title: "Certificación",
            description: "El Ministerio de Hacienda valida y certifica el DTE, devolviendo el código de certificación que confirma su validez legal."
        },
        {
            step: "05",
            icon: <Mail className="h-6 w-6 text-white" />,
            title: "Entrega al Cliente",
            description: "Se genera automáticamente una factura HTML certificada que se envía por correo electrónico al cliente final."
        }
    ];

    const systemOptions = [
        {
            icon: <Building2 className="h-6 w-6 text-primary" />,
            title: "Sistema Completo de Facturación",
            description: "Solución integral que incluye gestión de productos, clientes, inventario y facturación electrónica.",
            features: [
                "Gestión completa de productos y servicios",
                "Base de datos de clientes",
                "Control de inventario",
                "Reportes y estadísticas",
                "Facturación electrónica integrada"
            ]
        },
        {
            icon: <Database className="h-6 w-6 text-primary" />,
            title: "Sistema de Transmisión Únicamente",
            description: "Para empresas que ya tienen su sistema de facturación y solo necesitan cumplir con la normativa electrónica.",
            features: [
                "Recepción de JSON de facturación",
                "Firma digital automática",
                "Transmisión al Ministerio de Hacienda",
                "Generación de factura HTML",
                "API de integración simple"
            ]
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Process Steps */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Cómo funciona nuestro sistema
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Proceso automatizado que garantiza el cumplimiento legal y la entrega oportuna
                        de facturas electrónicas certificadas a tus clientes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {processSteps.slice(0, 3).map((step, index) => (
                        <Card
                            key={index}
                            className="hover-lift bg-white border-none shadow-lg group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500/20 to-primary/20 transform rotate-12 translate-x-4 -translate-y-4"></div>

                            <CardHeader className="relative">
                                <div className="flex items-center space-x-4 mb-3">
                                    <div className="flex-shrink-0">
                                        <div className="p-3 rounded-full bg-gradient-to-br from-green-600 to-primary group-hover:shadow-lg transition-shadow duration-300">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-2xl font-bold text-green-600/30 mb-1">{step.step}</div>
                                        <CardTitle className="text-lg font-bold group-hover:text-green-600 transition-colors duration-300">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {processSteps.slice(3).map((step, index) => (
                        <Card
                            key={index + 3}
                            className="hover-lift bg-white border-none shadow-lg group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500/20 to-primary/20 transform rotate-12 translate-x-4 -translate-y-4"></div>

                            <CardHeader className="relative">
                                <div className="flex items-center space-x-4 mb-3">
                                    <div className="flex-shrink-0">
                                        <div className="p-3 rounded-full bg-gradient-to-br from-green-600 to-primary group-hover:shadow-lg transition-shadow duration-300">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-2xl font-bold text-green-600/30 mb-1">{step.step}</div>
                                        <CardTitle className="text-lg font-bold group-hover:text-green-600 transition-colors duration-300">
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

                {/* System Options */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Opciones de implementación
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Ofrecemos dos modalidades para adaptarnos a las necesidades específicas de tu empresa,
                            ya sea que necesites un sistema completo o solo cumplir con la normativa electrónica.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {systemOptions.map((option, index) => (
                            <Card
                                key={index}
                                className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover-lift"
                            >
                                <CardHeader>
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            {option.icon}
                                        </div>
                                        <CardTitle className="text-xl font-bold">
                                            {option.title}
                                        </CardTitle>
                                    </div>
                                    <CardDescription className="text-muted-foreground">
                                        {option.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {option.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm">
                                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ElectronicInvoicingProcess;