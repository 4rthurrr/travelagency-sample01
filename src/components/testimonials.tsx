"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Traveler from UK",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
        text: "The trip was absolutely magical! From the tea plantations in Ella to the safari in Yala, everything was perfectly organized. Arabiers made us feel so welcome.",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Family Vacation",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
        text: "Traveling with kids can be stressful, but the team took care of everything. The guide was knowledgeable and very patient. Highly recommended!",
        rating: 5
    },
    {
        id: 3,
        name: "Emma & David",
        role: "Honeymooners",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2574&auto=format&fit=crop",
        text: "A seamless experience from start to finish. The hotels were stunning and the private transfers made it so relaxing. Thank you for the memories!",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="relative py-20 bg-emerald-50/50">
            <div className="container mx-auto px-4">
                <ScrollAnimation variant="fadeUp" className="text-center mb-16">
                    <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">What Our Guests Say</h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <ScrollAnimation
                            key={testimonial.id}
                            variant="fadeUp"
                            delay={idx * 0.1}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center border border-gray-100"
                        >
                            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-emerald-50">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex gap-1 text-yellow-500 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 italic mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                            <div>
                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
