import CarouselTextBanner from "@/components/carousel-text-banner";
import FeatureProducts from "@/components/featured-products";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CarouselTextBanner/>
        <FeatureProducts />
    </main>
  );
}
