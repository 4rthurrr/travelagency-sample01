"use client";

import Image from "next/image";
import ScrollAnimation from "@/components/ui/scroll-animation";

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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                    {galleryImages.map((img, idx) => (
                        <ScrollAnimation
                            key={idx}
                            variant="zoomIn"
                            delay={idx * 0.1}
                            className={`relative rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 ${img.size === "large" ? "md:row-span-2" : "md:row-span-1"
                                }`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
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
        </section>
    );
}
