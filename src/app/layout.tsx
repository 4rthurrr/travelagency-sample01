import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel with Sampath - Discover the Extraordinary",
  description: "Premium travel agency in Sri Lanka offering tailored holidays and unforgettable experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24" suppressHydrationWarning>
      <body className={cn(outfit.className, "min-h-screen bg-background antialiased")} suppressHydrationWarning>{children}</body>
    </html>
  );
}
