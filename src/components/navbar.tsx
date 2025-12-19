"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Destinations", href: "#destinations" },
        { name: "Packages", href: "#packages" },
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className={cn("text-2xl font-bold tracking-tighter", isScrolled ? "text-emerald-800" : "text-white")}>
                        Travel with Sampath
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-emerald-500",
                                isScrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="premium" size="sm">
                        Book Now
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className={isScrolled ? "text-gray-800" : "text-white"} /> : <Menu className={isScrolled ? "text-gray-800" : "text-white"} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 bg-white/95 backdrop-blur-xl z-[60] md:hidden transition-all duration-500 ease-in-out",
                    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col h-full p-8 pt-24 gap-8">
                    {/* Close Button in Menu */}
                    <button
                        className="absolute top-5 right-4 p-2 text-gray-800"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="flex flex-col gap-6">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-3xl font-bold text-gray-900 hover:text-emerald-600 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto pb-12 flex flex-col gap-4">
                        <Button variant="premium" size="lg" className="w-full text-lg h-14">
                            Book Now
                        </Button>
                        <div className="flex justify-center gap-6 text-gray-400 mt-4">
                            <span className="text-sm font-medium">Follow us on social</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
