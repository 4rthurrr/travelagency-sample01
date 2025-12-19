"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, Users, Check } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const packages = [
    {
        id: 1,
        title: "Essential Sri Lanka",
        duration: "7 Days",
        people: "2-10 People",
        price: "$899",
        image: "/images/pkg_essential.jpg",
        features: ["Airport Pickup", "3 Star Hotels", "Breakfast", "Guide"]
    },
    {
        id: 2,
        title: "Luxury Honeymoon",
        duration: "10 Days",
        people: "2 People",
        price: "$1999",
        image: "/images/dest_mirissa.jpg",
        features: ["Luxury Villas", "Private Transport", "Candlelight Dinner", "Spa"]
    },
    {
        id: 3,
        title: "Wildlife Adventure",
        duration: "5 Days",
        people: "4-12 People",
        price: "$650",
        image: "/images/dest_yala.jpg",
        features: ["Jeep Safaris", "Jungle Camping", "Meals Included", "Expert Guide"]
    },
    {
        id: 4,
        title: "Cultural Triangle",
        duration: "6 Days",
        people: "2-8 People",
        price: "$750",
        image: "/images/pkg_essential.png",
        features: ["Temple Visits", "Heritage Sites", "Local Cuisine", "Transport"]
    },
    {
        id: 5,
        title: "Hill Country Trek",
        duration: "4 Days",
        people: "2-6 People",
        price: "$450",
        image: "/images/dest_ella.png",
        features: ["Hiking Guide", "Scenic Train", "Tea Factory", "Homestays"]
    },
    {
        id: 6,
        title: "Coastal Bliss",
        duration: "8 Days",
        people: "2-4 People",
        price: "$1200",
        image: "/images/dest_mirissa.png",
        features: ["Beachfront Stay", "Water Sports", "Seafood BBQ", "Relaxation"]
    }
];

export default function Packages() {
    return (
        <section id="packages" className="relative py-20 bg-white">
            <div className="container mx-auto px-4">
                <ScrollAnimation variant="fadeUp" className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Tailored Experiences</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">Bestselling Packages</h2>
                        <p className="text-gray-600 mt-4">Choose from our most popular itineraries, crafting memories that last a lifetime.</p>
                    </div>
                    <Button variant="premium">View All Packages</Button>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, idx) => (
                        <ScrollAnimation
                            key={pkg.id}
                            variant="fadeUp"
                            delay={idx * 0.1}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                        >
                            <div className="relative h-64 w-full">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-emerald-700 shadow-sm">
                                    {pkg.price} / person
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {pkg.duration}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        {pkg.people}
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-8 flex-1">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                            <Check className="w-4 h-4 text-emerald-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                                    View Itinerary
                                </Button>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
