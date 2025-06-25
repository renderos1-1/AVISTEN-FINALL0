// src/pages/ElectronicInvoicing.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import ElectronicInvoicingHero from '@/components/electronic-invoicing/ElectronicInvoicingHero';
import ElectronicInvoicingFeatures from '@/components/electronic-invoicing/ElectronicInvoicingFeatures';
import ElectronicInvoicingProcess from '@/components/electronic-invoicing/ElectronicInvoicingProcess';
import ElectronicInvoicingCTA from '@/components/electronic-invoicing/ElectronicInvoicingCTA';
import Footer from '@/components/Footer';

const ElectronicInvoicing = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <ElectronicInvoicingHero />
            <ElectronicInvoicingFeatures />
            <ElectronicInvoicingProcess />
            <ElectronicInvoicingCTA />
            <Footer />
        </div>
    );
};

export default ElectronicInvoicing;