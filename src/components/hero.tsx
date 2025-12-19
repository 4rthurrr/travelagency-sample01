
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";
import TextReveal from "@/components/ui/text-reveal";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Parallax Background Image */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0 h-[120%] w-full -top-[10%]" // Increased height for parallax buffer
            >
                <Image
                    src="/images/hero_bg.png"
                    alt="Sri Lanka Landscape"
                    fill
                    className="object-cover brightness-[0.70]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </motion.div>

            {/* Content */}
            <motion.div style={{ y: textY }} className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center gap-6">
                <ScrollAnimation variant="fadeUp" delay={0.2}>
                    <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm md:text-base">
                        Welcome to Sri Lanka
                    </span>
                </ScrollAnimation>

                <div className="flex flex-col items-center">
                    <TextReveal
                        text="Discover the"
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight max-w-4xl drop-shadow-md"
                        delay={0.4}
                    />
                    <TextReveal
                        text="Extraordinary"
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight max-w-4xl drop-shadow-md text-emerald-400"
                        delay={0.8}
                    />
                </div>

                <ScrollAnimation variant="fadeUp" delay={1.2}>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
                        Experience the pearl of the Indian Ocean with tailor-made tour packages designed just for you.
                    </p>
                </ScrollAnimation>

                {/* Search Bar */}
                <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-1 shadow-2xl flex flex-col md:flex-row items-center gap-0.5 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 transform transition-all hover:scale-[1.02] hover:shadow-emerald-500/10">
                    <div className="flex-1 w-full flex items-center gap-2 px-6 py-2.5 hover:bg-white/10 rounded-full transition-colors group cursor-pointer">
                        <div className="p-2 bg-emerald-500/20 rounded-full group-hover:bg-emerald-500/30 transition-colors">
                            <MapPin className="text-emerald-400 w-4 h-4" />
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 leading-tight">Location</span>
                            <input
                                type="text"
                                placeholder="Where to?"
                                className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/50 font-semibold text-sm p-0 h-5 leading-5"
                            />
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-8 bg-white/20" />

                    <div className="flex-1 w-full flex items-center gap-2 px-6 py-2.5 hover:bg-white/10 rounded-full transition-colors group cursor-pointer">
                        <div className="p-2 bg-emerald-500/20 rounded-full group-hover:bg-emerald-500/30 transition-colors">
                            <Calendar className="text-emerald-400 w-4 h-4" />
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 leading-tight">Date</span>
                            <input
                                type="text"
                                placeholder="Add dates"
                                className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/50 font-semibold text-sm p-0 h-5 leading-5"
                            />
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-8 bg-white/20" />

                    <div className="flex-1 w-full flex items-center gap-2 px-6 py-2.5 hover:bg-white/10 rounded-full transition-colors group cursor-pointer">
                        <div className="p-2 bg-emerald-500/20 rounded-full group-hover:bg-emerald-500/30 transition-colors">
                            <Users className="text-emerald-400 w-4 h-4" />
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 leading-tight">Guests</span>
                            <input
                                type="text"
                                placeholder="Add guests"
                                className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/50 font-semibold text-sm p-0 h-5 leading-5"
                            />
                        </div>
                    </div>

                    <Button size="icon" className="w-full md:w-12 h-12 md:h-12 rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-500 text-white shrink-0 transition-all hover:scale-105 active:scale-95 m-1">
                        <Search className="w-5 h-5" />
                    </Button>
                </div>

                {/* Trust Badges / As Seen On */}
                <div className="mt-12 flex flex-col items-center gap-4 opacity-80">
                    <p className="text-xs uppercase tracking-widest text-white/60">As seen on</p>
                    <div className="flex items-center gap-8 grayscale opacity-70 hover:opacity-100 transition-opacity">
                        {/* Placeholders for logos (text for now or simple svgs) */}
                        <span className="text-lg font-serif font-bold">VOGUE</span>
                        <span className="text-lg font-sans font-bold">NatGeo</span>
                        <span className="text-lg font-serif italic">Traveler</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

