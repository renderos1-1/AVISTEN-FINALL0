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


                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                        <div className="flex items-center justify-center mb-3">
                            <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                            <span className="font-bold text-red-800">¡Importante!</span>
                        </div>
                        <p className="text-red-700">
                            La facturación electrónica es <strong>obligatoria por ley</strong> en El Salvador.

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




                {/* Related Services */}
                <div className="grid grid-cols-1 ">
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


                </div>

                {/* Final message */}
                <div className="text-center mt-16">
                    <p className="text-lg text-muted-foreground">
                        No esperes hasta el último momento.
                        <span className="font-semibold text-green-600"> Implementa la facturación electrónica hoy</span>

                    </p>
                </div>
            </div>
        </section>
    );
};

export default ElectronicInvoicingCTA;