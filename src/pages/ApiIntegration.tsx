// src/pages/ApiIntegration.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import ApiIntegrationHero from '@/components/api-integration/ApiIntegrationHero';
import ApiIntegrationFeatures from '@/components/api-integration/ApiIntegrationFeatures';
import ApiIntegrationProcess from '@/components/api-integration/ApiIntegrationProcess';
import ApiIntegrationCTA from '@/components/api-integration/ApiIntegrationCTA';
import Footer from '@/components/Footer';

const ApiIntegration = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <ApiIntegrationHero />
            <ApiIntegrationFeatures />
            <ApiIntegrationProcess />
            <ApiIntegrationCTA />
            <Footer />
        </div>
    );
};

export default ApiIntegration;