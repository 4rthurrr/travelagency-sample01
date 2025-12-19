"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    "Expert Local Guides",
    "Handcrafted Itineraries",
    "Luxury Accommodations",
    "24/7 Concierge Support",
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <Image
                                src="/images/hero_bg.jpg"
                                alt="About Travel with Sampath"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-0"></div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-0"></div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 text-center lg:text-left"
                    >
                        <h4 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">
                            Our Story
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                            Crafting Exceptional <span className="text-emerald-600">Travel Experiences</span> Since 2010
                        </h2>
                        <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed px-4 lg:px-0">
                            At Travel with Sampath, we believe that travel is more than just visiting new places; it&apos;s about creating memories that last a lifetime. Our mission is to provide you with authentic, high-quality, and personalized travel experiences that showcase the true essence of every destination.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left max-w-md mx-auto lg:mx-0 px-4 lg:px-0">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 px-4 lg:px-0">
                            <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                                Learn More
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8">
                                Our Services
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
