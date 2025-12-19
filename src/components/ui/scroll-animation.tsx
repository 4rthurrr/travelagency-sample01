"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    variant?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "zoomIn";
    delay?: number;
}

export default function ScrollAnimation({
    children,
    className = "",
    variant = "fadeUp",
    delay = 0
}: ScrollAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    const variants = {
        fadeUp: {
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const, delay } }
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1.0, ease: "easeOut" as const, delay } }
        },
        slideLeft: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const, delay } }
        },
        slideRight: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const, delay } }
        },
        zoomIn: {
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" as const, delay } }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[variant]}
            className={className}
        >
            {children}
        </motion.div>
    );
}
