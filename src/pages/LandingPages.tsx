// src/pages/LandingPages.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import LandingPagesHero from '@/components/landing-pages/LandingPagesHero';
import LandingPagesFeatures from '@/components/landing-pages/LandingPagesFeatures';
import LandingPagesProcess from '@/components/landing-pages/LandingPagesProcess';
import LandingPagesShowcase from '@/components/landing-pages/LandingPagesShowcase';
import LandingPagesCTA from '@/components/landing-pages/LandingPagesCTA';
import Footer from '@/components/Footer';

const LandingPages = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />
            <LandingPagesHero />
            <LandingPagesFeatures />
            <LandingPagesProcess />
            <LandingPagesShowcase />
            <LandingPagesCTA />
            <Footer />
        </div>
    );
};

export default LandingPages;