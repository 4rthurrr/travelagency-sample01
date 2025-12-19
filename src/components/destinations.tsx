"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import ScrollAnimation from "@/components/ui/scroll-animation";

const destinations = [
    {
        id: 1,
        name: "Ella",
        description: "Misty mountains and endless tea plantations.",
        image: "/images/dest_ella.jpg",
        price: "From $150",
        rating: 4.9,
    },
    {
        id: 2,
        name: "Mirissa",
        description: "Golden beaches and whale watching.",
        image: "/images/dest_mirissa.jpg",
        price: "From $200",
        rating: 4.8,
    },
    {
        id: 3,
        name: "Sigiriya",
        description: "Ancient rock fortress and history.",
        image: "/images/dest_sigiriya.jpg",
        price: "From $120",
        rating: 4.9,
    },
    {
        id: 4,
        name: "Yala National Park",
        description: "Wildlife safaris and leopards.",
        image: "/images/dest_yala.jpg",
        price: "From $300",
        rating: 4.7,
    },
    {
        id: 5,
        name: "Nuwara Eliya",
        description: "Little England with colonial charm and tea estates.",
        image: "/images/dest_ella.png",
        price: "From $180",
        rating: 4.8,
    },
    {
        id: 6,
        name: "Trincomalee",
        description: "Pristine white sands and crystal clear waters.",
        image: "/images/dest_mirissa.png",
        price: "From $220",
        rating: 4.9,
    },
    {
        id: 7,
        name: "Dambulla",
        description: "Historic cave temples and golden statues.",
        image: "/images/dest_sigiriya.png",
        price: "From $130",
        rating: 4.7,
    },
    {
        id: 8,
        name: "Udawalawe",
        description: "Home to hundreds of wild elephants.",
        image: "/images/dest_yala.png",
        price: "From $250",
        rating: 4.8,
    }
];

export default function Destinations() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const container = scrollRef.current;
        if (!container) return;

        let animationFrameId: number;
        const speed = 1; // Pixels per frame

        const scroll = () => {
            // Only auto-scroll on mobile devices
            if (!isPaused && window.innerWidth < 768) {
                const maxScroll = container.scrollWidth - container.clientWidth;

                // Only scroll if there's actually scrollable content
                if (maxScroll > 0) {
                    if (container.scrollLeft >= maxScroll - 2) {
                        container.scrollTo({ left: 0, behavior: 'auto' }); // Instant reset
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
        <section id="destinations" className="relative py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <ScrollAnimation variant="fadeUp" className="text-center mb-12">
                    <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Explore Sri Lanka</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">Popular Destinations</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">Discover the most breathtaking locations across the island, curated just for you.</p>
                </ScrollAnimation>

                <div className="relative overflow-hidden">
                    <ScrollAnimation variant="fadeIn">
                        <div
                            ref={scrollRef}
                            onPointerDown={() => setIsPaused(true)}
                            onPointerUp={() => setIsPaused(false)}
                            onPointerLeave={() => setIsPaused(false)}
                            className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide -mx-4 px-4 touch-pan-x"
                        >
                            {destinations.map((destination, idx) => (
                                <div
                                    key={destination.id}
                                    className="min-w-[280px] md:min-w-[320px] lg:min-w-[280px] snap-center flex-shrink-0"
                                >
                                    <div className="group relative rounded-2xl overflow-hidden shadow-lg h-full">
                                        <div className="relative h-[400px]">
                                            <Image
                                                src={destination.image}
                                                alt={destination.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                                            <div className="absolute top-4 left-4">
                                                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg text-white text-xs">
                                                    <span className="text-yellow-400">★</span>
                                                    {destination.rating}
                                                </div>
                                            </div>

                                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                                <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                                                <div className="flex justify-between items-end">
                                                    <p className="text-sm font-medium text-emerald-300">Starts from {destination.price}</p>
                                                    <Button size="sm" variant="ghost" className="text-white hover:text-emerald-400 p-0 h-auto">
                                                        <ArrowRight className="w-5 h-5" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="text-center mt-12">
                    <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 gap-2">
                        View All Destinations <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
