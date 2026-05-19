import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink, Youtube, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOUISIANA_PARISHES = [
  'Acadia', 'Allen', 'Ascension', 'Assumption', 'Avoyelles',
  'Beauregard', 'Bienville', 'Bossier', 'Caddo', 'Calcasieu',
  'Caldwell', 'Cameron', 'Catahoula', 'Claiborne', 'Concordia',
  'De Soto', 'East Baton Rouge', 'East Carroll', 'East Feliciana',
  'Evangeline', 'Franklin', 'Grant', 'Iberia', 'Iberville',
  'Jackson', 'Jefferson', 'Jefferson Davis', 'La Salle', 'Lafayette',
  'Lafourche', 'Lincoln', 'Livingston', 'Madison', 'Morehouse',
  'Natchitoches', 'Orleans', 'Ouachita', 'Plaquemines', 'Pointe Coupee',
  'Rapides', 'Red River', 'Richland', 'Sabine', 'St. Bernard',
  'St. Charles', 'St. Helena', 'St. James', 'St. John the Baptist',
  'St. Landry', 'St. Martin', 'St. Mary', 'St. Tammany',
  'Tangipahoa', 'Tensas', 'Terrebonne', 'Union', 'Vermilion',
  'Vernon', 'Washington', 'Webster', 'West Baton Rouge',
  'West Carroll', 'West Feliciana', 'Winn', 'Out of State',
];

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export const Contact: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [status, setStatus] = useState<SubmitStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Form state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [parish, setParish] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/submit-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, email, phone, parish, message }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Submission failed. Please try again.');
            }

            setStatus('success');
            // Reset form
            setFirstName(''); setLastName(''); setEmail('');
            setPhone(''); setParish(''); setMessage('');
        } catch (err: any) {
            setStatus('error');
            setErrorMessage(err.message || 'Something went wrong. Please email us directly.');
        }
    };

    const inputClass = "w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all text-gray-900 placeholder-gray-400";
    const labelClass = "block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2";

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">

            {/* Header */}
            <section className="bg-gray-900 text-white py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                        Get Involved
                    </h1>
                    <p className="text-xl md:text-2xl font-serif text-gray-300 max-w-2xl mx-auto">
                        Have information? Want to volunteer? Join the coalition to protect our future.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-24">

                    {/* Contact Info (2 cols) */}
                    <div className="lg:col-span-2 space-y-10">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Take Action</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                We are a grassroots organization run by dedicated volunteers and legal experts. We want to hear from you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-full text-brand-blue">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Email Us</h4>
                                        <a href="mailto:info@savemylouisiana.org" className="text-gray-600 hover:text-brand-blue transition-colors">info@savemylouisiana.org</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-50 p-3 rounded-full text-green-600">
                                        <ExternalLink size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Support Our Cause</h4>
                                        <Link
                                            to="/donate"
                                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-md hover:shadow-lg mt-2"
                                        >
                                            Donate Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Follow The Movement</h3>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/savemylouisiana/photos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-brand-blue hover:text-white transition-all shadow-sm">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                </a>
                                <a href="https://x.com/savemylouisiana" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-all shadow-sm" title="X">
                                    <span className="sr-only">X</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/@SAVEMYLOUISIANA-p4l" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#FF0000] hover:text-white transition-all shadow-sm" title="YouTube">
                                    <span className="sr-only">YouTube</span>
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form (3 cols) */}
                    <div className="lg:col-span-3 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-200">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">Join The Movement</h2>
                        <p className="text-gray-500 mb-8">Sign up for updates or send us a secure message.</p>

                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                                <CheckCircle size={64} className="text-green-500" />
                                <h3 className="text-2xl font-heading font-bold text-gray-900">You're In!</h3>
                                <p className="text-gray-600 max-w-sm">
                                    Thank you for joining Save My Louisiana. We'll be in touch soon with updates and ways to help.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-4 text-sm text-brand-blue hover:underline font-bold"
                                >
                                    Submit another response
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClass}>First Name *</label>
                                        <input
                                            id="contact-first-name"
                                            type="text"
                                            required
                                            value={firstName}
                                            onChange={e => setFirstName(e.target.value)}
                                            className={inputClass}
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Last Name</label>
                                        <input
                                            id="contact-last-name"
                                            type="text"
                                            value={lastName}
                                            onChange={e => setLastName(e.target.value)}
                                            className={inputClass}
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClass}>Email Address *</label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            className={inputClass}
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Phone Number</label>
                                        <input
                                            id="contact-phone"
                                            type="tel"
                                            value={phone}
                                            onChange={e => setPhone(e.target.value)}
                                            className={inputClass}
                                            placeholder="(318) 555-0100"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className={labelClass}>Your Parish</label>
                                    <select
                                        id="contact-parish"
                                        value={parish}
                                        onChange={e => setParish(e.target.value)}
                                        className={inputClass}
                                    >
                                        <option value="">Select a parish...</option>
                                        {LOUISIANA_PARISHES.map(p => (
                                            <option key={p} value={p}>{p}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className={labelClass}>Account of Incident / Message</label>
                                    <textarea
                                        id="contact-message"
                                        rows={5}
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        className={inputClass}
                                        placeholder="Tell us how you can help or what you have witnessed..."
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                                        <AlertCircle size={16} className="shrink-0 mt-0.5" />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <button
                                    id="contact-submit"
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-brand-blue hover:bg-blue-800 text-white py-4 rounded-lg font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader size={18} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        'Join The Movement'
                                    )}
                                </button>

                                <p className="text-center text-xs text-gray-400">
                                    Your information is private and will never be sold or shared.
                                </p>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};
