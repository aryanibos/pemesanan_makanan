// src/app/(user)/page.tsx
import HeroSection from "@/components/home/HeroSection";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import AboutSection from "@/components/home/AboutSection";
import CategorySection from "@/components/home/CategorySection";

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <CategorySection />
            <FeaturedMenu />
        </div>
    );
}