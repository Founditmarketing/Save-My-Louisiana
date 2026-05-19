import React from 'react';
import { Layout } from '../Layout';

export const TermsOfService: React.FC = () => {
    return (
        <div className="bg-white min-h-screen py-24 px-6 font-sans text-gray-900">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl font-heading font-bold">Terms of Service</h1>
                <p className="text-gray-600">Last Updated: February 2026</p>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
                    <p>By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">2. Use of Site</h2>
                    <p>You agree to use our site for lawful purposes only and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the site.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">3. Intellectual Property</h2>
                    <p>The content on this site, including text, graphics, logos, and images, is the property of Save My Louisiana or its content suppliers and is protected by copyright laws.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">4. Disclaimer</h2>
                    <p>The materials on this site are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">5. Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of Louisiana and you irrevocably submit to the exclusive jurisdiction of the courts in that State.</p>
                </section>
            </div>
        </div>
    );
};
