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

        const interval = setInterval(() => {
            if (!isPaused && scrollRef.current && window.innerWidth < 768) {
                const container = scrollRef.current;
                const scrollAmount = 300; // Consistent with item width
                const maxScroll = container.scrollWidth - container.clientWidth;

                if (container.scrollLeft >= maxScroll - 10) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }, 3500); // Slightly faster for gallery

        return () => clearInterval(interval);
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
                    <div
                        ref={scrollRef}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                        className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:auto-rows-[200px]"
                    >
                        {galleryImages.map((img, idx) => (
                            <ScrollAnimation
                                key={idx}
                                variant="zoomIn"
                                delay={idx * 0.05}
                                className={cn(
                                    "relative rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0 snap-center",
                                    "w-[280px] h-[350px] md:w-auto md:h-auto",
                                    img.size === "large" ? "md:row-span-2" : "md:row-span-1"
                                )}
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
                                        {img.alt}
                                    </p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
