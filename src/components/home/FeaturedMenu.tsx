// src/components/home/FeaturedMenu.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const featuredMenus = [
    {
        name: "Kopi Susu Gula Aren",
        price: "18.000",
        description: "Perpaduan espresso, susu segar, dan manisnya gula aren.",
        image: "/images/kopi-susu.png",
    },
    {
        name: "Americano",
        price: "15.000",
        description: "Ekstraksi espresso murni dengan tambahan air panas.",
        image: "/images/americano.png",
    },
    {
        name: "Croissant Cokelat",
        price: "22.000",
        description: "Pastry renyah dengan isian cokelat premium yang meleleh.",
        image: "/images/croissant.png",
    },
];

export default function FeaturedMenu() {
    return (
        <section id="menu" className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Menu Favorit Kami</h2>
                    <p className="text-muted-foreground mt-2">Dibuat oleh barista kami khusus untuk Anda.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {featuredMenus.map((menu) => (
                        <div key={menu.name} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                            <Image
                                src={menu.image}
                                alt={menu.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="relative z-20 flex flex-col justify-end h-full p-6 text-white">
                                <h3 className="text-2xl font-bold">{menu.name}</h3>
                                <p className="text-sm mt-1 text-neutral-200">{menu.description}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <p className="text-xl font-semibold">Rp {menu.price}</p>
                                    <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                        Pesan <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}