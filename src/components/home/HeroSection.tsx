// src/components/home/HeroSection.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Efek parallax: gambar akan bergerak 50% lebih lambat dari scroll
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section
            ref={ref}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center"
        >
            {/* Container untuk gambar parallax di background */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y }} // Terapkan parallax pada sumbu Y
            >

                <Image
                    src="/images/coffee-shop.png" // PASTIKAN INI BENAR
                    alt="Suasana Warung Kopi"
                    fill
                    className="object-cover brightness-[0.4]"
                    priority
                />
            </motion.div>

            {/* Konten teks di foreground */}
            <div className="relative z-10 text-center text-white p-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-extrabold tracking-tight"
                >
                    Satu Cangkir, Sejuta Cerita
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200"
                >
                    Temukan kehangatan dalam setiap tegukan kopi pilihan kami. Dibuat
                    dengan cinta, disajikan untuk Anda.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8"
                >
                    <Button size="lg" asChild>
                        {/* Ubah href di baris berikut */}
                        <a href="#categories">Lihat Menu Kami</a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}