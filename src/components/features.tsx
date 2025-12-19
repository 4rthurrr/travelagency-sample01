"use client";

import { Shield, Headphones, Map, Leaf } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const features = [
    {
        icon: Shield,
        title: "Safe & Secure",
        description: "Your safety is our top priority with 24/7 on-trip support."
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "We are always here to help you, anytime, anywhere."
    },
    {
        icon: Map,
        title: "Local Expertise",
        description: "Explore hidden gems with our experienced local guides."
    },
    {
        icon: Leaf,
        title: "Eco-Friendly",
        description: "Sustainable travel practices to protect our beautiful island."
    }
];

export default function Features() {
    return (
        <section className="relative py-20 bg-emerald-900 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <ScrollAnimation
                            key={index}
                            variant="fadeUp"
                            delay={index * 0.1}
                            className="flex flex-col items-center text-center p-6 bg-emerald-800/30 rounded-2xl backdrop-blur-sm border border-emerald-700 hover:bg-emerald-800/50 transition-colors"
                        >
                            <div className="w-16 h-16 bg-emerald-400/10 rounded-full flex items-center justify-center mb-6">
                                <feature.icon className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-emerald-100/80">{feature.description}</p>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
