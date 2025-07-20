// src/components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-sm border-b border-border"
                : "bg-transparent text-white" // Tambahkan text-white di sini
                }`}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className={`text-xl font-bold transition-colors ${!isScrolled ? 'text-white' : ''}`}>
                    Warung Ngopi
                </Link>
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link
                        href="#menu"
                        className={`transition-colors hover:text-primary ${!isScrolled ? '[text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]' : ''}`}
                    >
                        Menu
                    </Link>
                    <Link
                        href="#about"
                        className={`transition-colors hover:text-primary ${!isScrolled ? '[text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]' : ''}`}
                    >
                        Tentang Kami
                    </Link>
                    <Link
                        href="#footer"
                        className={`transition-colors hover:text-primary ${!isScrolled ? '[text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]' : ''}`}
                    >
                        Kontak
                    </Link>
                </nav>
                <Button variant="ghost" size="icon" className={`transition-colors hover:bg-white/10 ${!isScrolled ? 'text-white hover:text-white' : ''}`}>
                    <ShoppingCart className="h-5 w-5" />
                </Button>
            </div>
        </header>
    );
}