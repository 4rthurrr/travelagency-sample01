"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <ScrollAnimation variant="fadeUp" delay={0}>
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-bold text-white tracking-tighter">
                                Arabiers<span className="text-emerald-500">.</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Your trusted partner for exploring the wonders of Sri Lanka. Tailor-made holidays, luxury stays, and unforgettable experiences.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-emerald-500 transition-colors"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-emerald-500 transition-colors"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-emerald-500 transition-colors"><Twitter className="w-5 h-5" /></Link>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fadeUp" delay={0.1}>
                        <h3 className="text-white font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-emerald-500 transition-colors">Destinations</Link></li>
                            <li><Link href="#" className="hover:text-emerald-500 transition-colors">Tour Packages</Link></li>
                            <li><Link href="#" className="hover:text-emerald-500 transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
                        </ul>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fadeUp" delay={0.2}>
                        <h3 className="text-white font-bold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-emerald-500 transition-colors">Custom Tours</Link></li>
                            <li><Link href="#" className="hover:text-emerald-500 transition-colors">Airport Transfers</Link></li>
                            <li><Link href="#" className="hover:text-emerald-500 transition-colors">Hotel Bookings</Link></li>
                            <li><Link href="#" className="hover:text-emerald-500 transition-colors">Car Rentals</Link></li>
                            <li><Link href="#" className="hover:text-emerald-500 transition-colors">Visa Assistance</Link></li>
                        </ul>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fadeUp" delay={0.3}>
                        <h3 className="text-white font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                                <span className="text-sm md:text-base">123 flower Rd, Colombo 07, Sri Lanka</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span className="text-sm md:text-base">+94 11 234 5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span className="text-sm md:text-base">hello@arabiers.lk</span>
                            </li>
                        </ul>
                    </ScrollAnimation>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Arabiers Travel. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
