// src/components/electronic-invoicing/ElectronicInvoicingHero.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Receipt, Shield, FileCheck, Zap, Building2, Mail } from 'lucide-react';

const ElectronicInvoicingHero = () => {
    const scrollToContact = () => {
        // Navigate to main page contact section
        window.location.href = '/#contact';
    };

    return (
        <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-green-500/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-40 right-10 w-12 h-12 bg-green-500/5 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div className="text-center lg:text-left animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Facturación
                            <span className="text-gradient block">Electrónica</span>
                            para El Salvador
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                            Sistema completo de facturación electrónica que cumple con todos los requisitos legales del Ministerio de Hacienda.
                            Genera DTEs certificados y automatiza el proceso de transmisión.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <Button
                                onClick={scrollToContact}
                                className="btn-gradient text-white px-8 py-4 text-lg font-semibold rounded-xl group"
                            >
                                Cumplir con la Ley
                                <Shield className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                            </Button>
                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="flex items-center space-x-2 text-sm">
                                <Receipt className="h-4 w-4 text-green-600" />
                                <span>DTEs Certificados</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Shield className="h-4 w-4 text-green-600" />
                                <span>Firma Digital</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Building2 className="h-4 w-4 text-green-600" />
                                <span>Min. Hacienda</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <FileCheck className="h-4 w-4 text-green-600" />
                                <span>100% Legal</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Mail className="h-4 w-4 text-green-600" />
                                <span>Envío Automático</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Zap className="h-4 w-4 text-green-600" />
                                <span>Transmisión API</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                        <div className="relative">
                            {/* Main invoice mockup */}
                            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="space-y-4">
                                    {/* Header with DTE info */}
                                    <div className="flex items-center justify-between border-b pb-3">
                                        <div className="flex items-center space-x-2">
                                            <Receipt className="h-6 w-6 text-green-600" />
                                            <span className="font-bold text-green-600">DTE</span>
                                        </div>
                                        <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                            CERTIFICADO
                                        </div>
                                    </div>

                                    {/* Invoice content mockup */}
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                                            <div className="text-xs text-muted-foreground">
                                                #001-001-01-00000001
                                            </div>
                                        </div>

                                        {/* Company info */}
                                        <div className="space-y-2">
                                            <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                                        </div>

                                        {/* Items table mockup */}
                                        <div className="space-y-2 border-t pt-3">
                                            <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground">
                                                <div>Producto</div>
                                                <div>Cant.</div>
                                                <div>Precio</div>
                                                <div>Total</div>
                                            </div>
                                            <div className="grid grid-cols-4 gap-2">
                                                <div className="h-2 bg-gray-200 rounded"></div>
                                                <div className="h-2 bg-gray-200 rounded"></div>
                                                <div className="h-2 bg-gray-200 rounded"></div>
                                                <div className="h-2 bg-primary/30 rounded"></div>
                                            </div>
                                            <div className="grid grid-cols-4 gap-2">
                                                <div className="h-2 bg-gray-200 rounded"></div>
                                                <div className="h-2 bg-gray-200 rounded"></div>
                                                <div className="h-2 bg-gray-200 rounded"></div>
                                                <div className="h-2 bg-green-500/30 rounded"></div>
                                            </div>
                                        </div>

                                        {/* Totals */}
                                        <div className="border-t pt-2 space-y-1">
                                            <div className="flex justify-between text-xs">
                                                <span>Subtotal:</span>
                                                <div className="h-2 bg-gray-200 rounded w-16"></div>
                                            </div>
                                            <div className="flex justify-between text-xs font-bold">
                                                <span>Total:</span>
                                                <div className="h-2 bg-green-500/50 rounded w-16"></div>
                                            </div>
                                        </div>

                                        {/* Digital signature indicator */}
                                        <div className="flex items-center justify-center space-x-2 p-2 bg-green-50 rounded">
                                            <Shield className="h-4 w-4 text-green-600" />
                                            <span className="text-xs text-green-800">Firmado Digitalmente</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-600 rounded-lg shadow-lg animate-float flex items-center justify-center">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full shadow-lg animate-float flex items-center justify-center" style={{animationDelay: '1s'}}>
                                <FileCheck className="h-8 w-8 text-white" />
                            </div>
                            <div className="absolute top-1/2 -left-8 w-10 h-10 bg-gradient-to-r from-green-600 to-primary rounded-lg shadow-lg animate-float flex items-center justify-center" style={{animationDelay: '2s'}}>
                                <Receipt className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ElectronicInvoicingHero;