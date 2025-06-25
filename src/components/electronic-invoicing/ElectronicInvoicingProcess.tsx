
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Receipt,
    Shield,
    FileCheck,
    Building2,
    Mail,
    Zap,
    CheckCircle,
    Globe
} from 'lucide-react';

const ElectronicInvoicingFeatures = () => {
    const mainFeatures = [
        {
            icon: <Receipt className="h-8 w-8 text-green-600" />,
            title: "Sistema de Facturación Completo",
            description: "Genera facturas electrónicas y DTEs que cumplen completamente con los requisitos del Ministerio de Hacienda de El Salvador."
        },
        {
            icon: <Shield className="h-8 w-8 text-green-600" />,
            title: "Firma Digital Certificada",
            description: "Todas las facturas se firman digitalmente mediante nuestro firmador certificado, garantizando la validez legal de cada documento."
        },
        {
            icon: <Building2 className="h-8 w-8 text-green-600" />,
            title: "Transmisión al Ministerio",
            description: "Conexión directa con la API del Ministerio de Hacienda para el envío automático y certificación de tus DTEs."
        }
    ];

    const additionalServices = [
        {
            icon: <Zap className="h-6 w-6 text-primary" />,
            title: "Sistema de Transmisión Independiente",
            description: "Si ya tienes un sistema de facturación local, nuestro sistema de transmisión puede enviar tus JSON directamente al Ministerio de Hacienda."
        },
        {
            icon: <Mail className="h-6 w-6 text-primary" />,
            title: "Facturas HTML Certificadas",
            description: "Generamos automáticamente facturas en formato HTML certificado que se envían por correo electrónico a tus clientes."
        },
        {
            icon: <FileCheck className="h-6 w-6 text-primary" />,
            title: "Cumplimiento Legal 100%",
            description: "Garantizamos que tu empresa cumpla completamente con la Ley de Facturación Electrónica de El Salvador."
        },
        {
            icon: <Globe className="h-6 w-6 text-primary" />,
            title: "API de Integración",
            description: "Conecta fácilmente tu sistema actual con nuestros servicios mediante nuestra API robusta y bien documentada."
        }
    ];

    const benefits = [
        "Cumplimiento total con la legislación salvadoreña",
        "Reducción de tiempo en procesos administrativos",
        "Eliminación de papel y costos de impresión",
        "Envío automático de facturas a clientes",
        "Respaldo digital seguro de todas las transacciones",
        "Integración con sistemas contables existentes"
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Features */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Facturación Electrónica <span className="text-gradient">Certificada</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Cumple con todos los requisitos legales del Ministerio de Hacienda de El Salvador.
                        Nuestro sistema garantiza que tu empresa esté completamente preparada para la facturación electrónica.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {mainFeatures.map((feature, index) => (
                        <Card
                            key={index}
                            className="hover-lift bg-white border-none shadow-lg group cursor-pointer text-center"
                        >
                            <CardHeader className="pb-4">
                                <div className="mx-auto mb-4 p-4 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
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

                {/* Additional Services */}
                <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl p-8 md:p-12 mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Servicios <span className="text-gradient">adicionales</span>
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Además de nuestro sistema completo de facturación, ofrecemos servicios modulares
                            que se adaptan a las necesidades específicas de tu empresa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {additionalServices.map((service, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm hover-lift"
                            >
                                <div className="p-3 rounded-full bg-primary/10">
                                    {service.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits section */}
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8">
                        Beneficios de la <span className="text-gradient">Facturación Electrónica</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 p-4 rounded-lg bg-green-50 hover-lift"
                            >
                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                                <span className="text-muted-foreground text-left">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ElectronicInvoicingFeatures;