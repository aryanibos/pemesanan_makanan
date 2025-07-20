// src/components/home/CategorySection.tsx
import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        name: "Minuman",
        href: "/menu/minuman",
        image: "/images/kategori-minuman.png", // Pastikan gambar ini ada
    },
    {
        name: "Makanan",
        href: "/menu/makanan",
        image: "/images/kategori-makanan.png", // Pastikan gambar ini ada
    },
    {
        name: "Cemilan",
        href: "/menu/cemilan",
        image: "/images/kategori-cemilan.png", // Pastikan gambar ini ada
    },
];

export default function CategorySection() {
    return (
        <section id="categories" className="py-20 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Pilih Kategori</h2>
                    <p className="text-muted-foreground mt-2">Mau pesan apa hari ini?</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link href={category.href} key={category.name}>
                            <div className="group relative block h-80 overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src={category.image}
                                    alt={`Kategori ${category.name}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40" />
                                <div className="relative flex h-full items-center justify-center">
                                    <h3 className="text-3xl font-extrabold text-white tracking-wider">
                                        {category.name.toUpperCase()}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}