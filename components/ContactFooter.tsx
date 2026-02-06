import React from 'react';
import { Facebook, Mail, MapPin, Phone, Twitter, Instagram } from 'lucide-react';

export const ContactFooter: React.FC = () => {
    return (
        <footer id="contact" className="bg-black text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <a href="#" className="inline-block">
                            <img src="/Save-My-LA-logo.png" alt="Save My Louisiana" className="h-16 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Empowering citizens to protect our land, water, and constitutional rights against unchecked industrial expansion.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-brand-blue">Navigation</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#problem" className="hover:text-white transition-colors">The Situation</a></li>
                            <li><a href="#hope" className="hover:text-white transition-colors">Our Mission</a></li>
                            <li><a href="#risk" className="hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#help" className="hover:text-white transition-colors">Get Involved</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-brand-blue">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-brand-red mt-1 shrink-0" />
                                <span>123 Bayou Road,<br />Lafayette, LA 70501</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-brand-red shrink-0" />
                                <span>318.542.6856</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-brand-red shrink-0" />
                                <a href="mailto:info@savemylouisiana.org" className="hover:text-white transition-colors">info@savemylouisiana.org</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-wider">
                    <p>&copy; 2025 Save My Louisiana. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};