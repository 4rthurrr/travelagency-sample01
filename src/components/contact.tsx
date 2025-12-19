"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block"></div>

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Left Column: Info */}
                        <div className="lg:w-2/5">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">
                                    Contact Us
                                </h4>
                                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-display">
                                    Get in Touch <span className="text-emerald-600">With Us</span>
                                </h2>
                                <p className="text-slate-600 mb-10 leading-relaxed max-w-md">
                                    Have questions about our tour packages or need a custom itinerary? Our travel experts are here to help you plan your dream vacation.
                                </p>

                                <div className="space-y-8 mb-12">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-900 mb-1">Our Office</h5>
                                            <p className="text-slate-600">123 flower Rd, Colombo 07, Sri Lanka</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-900 mb-1">Call Us</h5>
                                            <p className="text-slate-600">+94 11 234 5678</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-900 mb-1">Email Us</h5>
                                            <p className="text-slate-600">hello@arabiers.lk</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h5 className="font-bold text-slate-900 mb-4">Follow Us</h5>
                                    <div className="flex gap-4">
                                        {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                            <a
                                                key={i}
                                                href="#"
                                                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                                            >
                                                <Icon className="w-5 h-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:w-3/5 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
                                        <input
                                            type="text"
                                            placeholder="How can we help?"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Your message here..."
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none resize-none"
                                        ></textarea>
                                    </div>

                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-14 text-lg rounded-xl shadow-lg shadow-emerald-500/20 group">
                                        Send Message
                                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
