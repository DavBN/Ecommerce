import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-product";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeatureProducts from "@/components/featured-products";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CarouselTextBanner/>
        <FeatureProducts />
        <BannerDiscount/>
        <ChooseCategory/>
        <BannerProduct />
    </main>
  );
}
