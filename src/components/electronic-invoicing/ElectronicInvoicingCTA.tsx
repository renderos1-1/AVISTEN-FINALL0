// src/components/electronic-invoicing/ElectronicInvoicingCTA.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    ArrowRight,
    Shield,
    AlertTriangle,
    CheckCircle,
    Calendar,
    Building2,
    Receipt
} from 'lucide-react';

const ElectronicInvoicingCTA = () => {
    const scrollToContact = () => {
        // Navigate to main page contact section
        window.location.href = '/#contact';
    };

    const urgencyReasons = [
        {
            icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
            text: "Cumplimiento obligatorio de la Ley de Facturación Electrónica"
        },
        {
            icon: <Calendar className="h-5 w-5 text-orange-500" />,
            text: "Evita multas y sanciones del Ministerio de Hacienda"
        },
        {
            icon: <Shield className="h-5 w-5 text-green-600" />,
            text: "Garantiza la validez legal de tus facturas"
        },
        {
            icon: <CheckCircle className="h-5 w-5 text-blue-500" />,
            text: "Automatiza procesos y reduce errores administrativos"
        }
    ];

    const whyChooseUs = [
        "Experiencia comprobada en facturación electrónica",
        "Soporte técnico especializado 24/7",
        "Integración rápida y sin complicaciones",
        "Cumplimiento garantizado con la normativa legal",
        "Precios competitivos y transparentes",
        "Actualizaciones automáticas según cambios legales"
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-green-500/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Urgency Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        ¿Tu empresa ya cumple con la <span className="text-gradient">Facturación Electrónica?</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
                        {urgencyReasons.map((reason, index) => (
                            <div key={index} className="flex items-center space-x-3 text-left p-4 rounded-lg bg-white shadow-sm">
                                {reason.icon}
                                <span className="text-muted-foreground">{reason.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                        <div className="flex items-center justify-center mb-3">
                            <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                            <span className="font-bold text-red-800">¡Importante!</span>
                        </div>
                        <p className="text-red-700">
                            La facturación electrónica es <strong>obligatoria por ley</strong> en El Salvador.
                            No cumplir puede resultar en multas significativas y problemas legales para tu empresa.
                        </p>
                    </div>

                    <Button
                        onClick={scrollToContact}
                        className="btn-gradient text-white px-10 py-4 text-xl font-semibold rounded-xl group"
                    >
                        <Shield className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                        Implementar Facturación Electrónica
                    </Button>
                </div>

                {/* Why Choose Us */}
                <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-none shadow-xl max-w-4xl mx-auto mb-16">
                    <CardHeader className="text-center pb-6">
                        <div className="mx-auto mb-4 p-4 rounded-full bg-green-100">
                            <Building2 className="h-8 w-8 text-green-600" />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold">
                            ¿Por qué elegir nuestro sistema?
                        </CardTitle>
                        <CardDescription className="text-lg">
                            Somos especialistas en facturación electrónica para El Salvador con años de experiencia
                            ayudando a empresas a cumplir con la normativa legal de manera eficiente y segura.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {whyChooseUs.map((reason, index) => (
                                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/50">
                                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                                    <span className="text-muted-foreground">{reason}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Related Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="bg-white border-none shadow-lg hover-lift">
                        <CardHeader>
                            <div className="flex items-center space-x-3 mb-3">
                                <Receipt className="h-6 w-6 text-primary" />
                                <CardTitle className="text-xl font-bold">
                                    ¿Necesitas un sistema completo?
                                </CardTitle>
                            </div>
                            <CardDescription>
                                Si tu empresa necesita no solo facturación electrónica, sino también gestión
                                de inventario, clientes y reportes avanzados, nuestro servicio de desarrollo web
                                puede crear una solución integral personalizada.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                onClick={() => window.location.href = '/desarrollo-web'}
                                variant="outline"
                                className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                            >
                                Ver Desarrollo Web
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-none shadow-lg hover-lift">
                        <CardHeader>
                            <div className="flex items-center space-x-3 mb-3">
                                <Building2 className="h-6 w-6 text-accent" />
                                <CardTitle className="text-xl font-bold">
                                    ¿Buscas otras soluciones empresariales?
                                </CardTitle>
                            </div>
                            <CardDescription>
                                Ofrecemos una amplia gama de servicios digitales incluyendo análisis de datos,
                                integración de APIs, soluciones en la nube y más para transformar tu empresa.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                onClick={() => window.location.href = '/#services'}
                                variant="outline"
                                className="w-full border-accent text-accent hover:bg-accent hover:text-white"
                            >
                                Ver Todos los Servicios
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Final message */}
                <div className="text-center mt-16">
                    <p className="text-lg text-muted-foreground">
                        No esperes hasta el último momento.
                        <span className="font-semibold text-green-600"> Implementa la facturación electrónica hoy</span>
                        y mantén tu empresa en cumplimiento legal.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ElectronicInvoicingCTA;