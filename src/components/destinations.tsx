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

        const interval = setInterval(() => {
            if (!isPaused && scrollRef.current && window.innerWidth < 768) {
                const container = scrollRef.current;
                const scrollAmount = 300; // Width of card + gap
                const maxScroll = container.scrollWidth - container.clientWidth;

                if (container.scrollLeft >= maxScroll - 10) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }, 4000);

        return () => clearInterval(interval);
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
                    <div
                        ref={scrollRef}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                        className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                    >
                        {destinations.map((destination, idx) => (
                            <ScrollAnimation
                                key={destination.id}
                                variant="fadeUp"
                                delay={idx * 0.1}
                                className="group relative h-[400px] min-w-[280px] md:min-w-0 md:w-auto overflow-hidden rounded-2xl shadow-lg cursor-pointer flex-shrink-0 snap-center"
                            >
                                <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-2xl font-bold">{destination.name}</h3>
                                        <div className="flex items-center gap-1 text-yellow-400 text-sm font-semibold">
                                            ★ {destination.rating}
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {destination.description}
                                    </p>
                                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                        <span className="text-emerald-400 font-bold">{destination.price}</span>
                                        <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-black bg-transparent">
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
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
