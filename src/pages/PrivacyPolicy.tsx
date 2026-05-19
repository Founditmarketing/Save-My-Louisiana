import React from 'react';
import { Layout } from '../Layout';

export const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-white min-h-screen py-24 px-6 font-sans text-gray-900">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl font-heading font-bold">Privacy Policy</h1>
                <p className="text-gray-600">Last Updated: February 2026</p>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">1. Information We Collect</h2>
                    <p>We collect information you provide directly to us, such as when you sign up for our newsletter, sign a petition, or contact us. This may include your name, email address, phone number, and location.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
                    <p>We use your information to communicate with you about our campaigns, events, and updates related to protecting Louisiana's environment and property rights.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">3. Information Sharing</h2>
                    <p>We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our campaigns, subject to confidentiality agreements.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">4. Your Choices</h2>
                    <p>You may opt out of receiving communications from us at any time by following the unsubscribe instructions in our emails or by contacting us directly.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">5. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at info@savemylouisiana.org.</p>
                </section>
            </div>
        </div>
    );
};
