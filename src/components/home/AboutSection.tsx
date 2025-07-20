// src/components/home/AboutSection.tsx
import { Coffee, Wifi, Smartphone } from "lucide-react";

const features = [
    {
        icon: <Coffee className="w-10 h-10 text-primary" />,
        title: "Biji Kopi Pilihan",
        description: "Kami hanya menggunakan biji kopi arabika terbaik dari petani lokal.",
    },
    {
        icon: <Wifi className="w-10 h-10 text-primary" />,
        title: "Suasana Nyaman & Wifi Cepat",
        description: "Tempat yang sempurna untuk bekerja, bertemu teman, atau sekadar bersantai.",
    },
    {
        icon: <Smartphone className="w-10 h-10 text-primary" />,
        title: "Pesan Online Mudah",
        description: "Pesan kopi favoritmu dari mana saja dan ambil saat sudah siap.",
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Kenapa Memilih Kami?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature) => (
                        <div key={feature.title} className="text-center">
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}