// src/pages/WebDevelopment.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import WebDevelopmentHero from '@/components/web-development/WebDevelopmentHero';
import WebDevelopmentFeatures from '@/components/web-development/WebDevelopmentFeatures';
import WebDevelopmentProcess from '@/components/web-development/WebDevelopmentProcess';
import WebDevelopmentCTA from '@/components/web-development/WebDevelopmentCTA';
import Footer from '@/components/Footer';

const WebDevelopment = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <WebDevelopmentHero />
            <WebDevelopmentFeatures />
            <WebDevelopmentProcess />
            <WebDevelopmentCTA />
            <Footer />
        </div>
    );
};

export default WebDevelopment;