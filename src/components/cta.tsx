"use client";

import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ui/scroll-animation";

export default function CTA() {
    return (
        <section className="py-24 bg-emerald-900 relative isolate overflow-hidden">
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-emerald-800 opacity-90" />

                {/* Decorative circles */}
                <div className="absolute top-1/2 left-1/2 -ml-2 -mt-2 w-[80rem] h-[80rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 [mask-image:radial-gradient(closest-side,white,transparent)]" />
                <div className="absolute top-1/2 left-1/2 -ml-2 -mt-2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 [mask-image:radial-gradient(closest-side,white,transparent)]" />
            </div>

            <div className="container mx-auto px-4 text-center">
                <ScrollAnimation variant="zoomIn" className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Start Your Adventure?</h2>
                    <p className="text-emerald-100 mb-10 text-lg">
                        Whether you want a relaxing beach holiday or an action-packed wildlife safari, our experts are here to craft the perfect itinerary for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="premium" size="lg" className="px-8 text-lg rounded-full">
                            Plan My Trip
                        </Button>
                        <Button variant="outline" size="lg" className="px-8 text-lg bg-transparent text-white border-emerald-400 hover:bg-emerald-800 hover:text-white rounded-full">
                            Contact Us
                        </Button>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
