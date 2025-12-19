"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { cn } from "@/lib/utils";

// Recycling existing images for the gallery since we want to show "Past Trips"
// In a real app, these would be user uploads or specific gallery assets.
const galleryImages = [
    { src: "/images/dest_ella.jpg", alt: "Traveler in Ella", size: "large" },
    { src: "/images/pkg_essential.jpg", alt: "Temple visit", size: "small" },
    { src: "/images/dest_yala.jpg", alt: "Safari adventure", size: "medium" },
    { src: "/images/dest_mirissa.jpg", alt: "Beach sunset", size: "medium" },
    { src: "/images/dest_sigiriya.jpg", alt: "Sigiriya climb", size: "large" },
    { src: "/images/hero_bg.jpg", alt: "Tea plantations", size: "small" },
    // Previous favorites
    { src: "/images/dest_ella.png", alt: "Misty Hills", size: "small" },
    { src: "/images/pkg_essential.png", alt: "Cultural Site", size: "medium" },
    { src: "/images/dest_yala.png", alt: "Wild Elephant", size: "large" },
    { src: "/images/dest_mirissa.png", alt: "Ocean View", size: "small" },
    { src: "/images/dest_sigiriya.png", alt: "Ancient Rock", size: "medium" },
    { src: "/images/hero_bg.png", alt: "Greenery", size: "small" },
];

export default function Gallery() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const container = scrollRef.current;
        if (!container) return;

        let animationFrameId: number;
        const speed = 0.8; // Slightly slower for gallery

        const scroll = () => {
            // Only auto-scroll on mobile devices
            if (!isPaused && window.innerWidth < 768) {
                const maxScroll = container.scrollWidth - container.clientWidth;

                // Only scroll if there's actually scrollable content
                if (maxScroll > 0) {
                    if (container.scrollLeft >= maxScroll - 2) {
                        container.scrollTo({ left: 0, behavior: 'auto' });
                    } else {
                        container.scrollBy({ left: speed, behavior: 'auto' });
                    }
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <ScrollAnimation variant="fadeUp" className="text-center mb-16">
                    <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Our Memories</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">Captured Moments</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Glimpses of the unforgettable journeys we've crafted for our travelers.
                    </p>
                </ScrollAnimation>

                <div className="relative overflow-hidden">
                    <ScrollAnimation variant="fadeIn">
                        <div
                            ref={scrollRef}
                            onPointerDown={() => setIsPaused(true)}
                            onPointerUp={() => setIsPaused(false)}
                            onPointerLeave={() => setIsPaused(false)}
                            className="flex gap-4 overflow-x-auto pb-8 snap-x scrollbar-hide -mx-4 px-4 touch-pan-x"
                        >
                            {galleryImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="min-w-[280px] md:min-w-[320px] h-[300px] md:h-[350px] snap-center flex-shrink-0 group relative rounded-2xl overflow-hidden shadow-lg"
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <p className="text-white font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                                            {img.alt.split(' ')[0]}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
