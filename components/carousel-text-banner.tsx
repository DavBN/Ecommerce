"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
    {
        id: 1,
        title: "Envío en 24/48 H",
        description: "Beneficios cliente Upgrade, los envíos en menos de 24/48 horas. Más información",
        link: "#"
    },
    {
        id: 2,
        title: "Descuentos hasta de un -20% en compras superiores a 30USD",
        description: "-20 % al comprar 50 USD o -25 % al comprar 100USD",
        link: "#"
    },
    {
        id: 3,
        title: "Devolución y entrega sin costo",
        description: "Siendo cliente tienes envíos y devolución sin ningún costo, esto con un plazo estimado",
        link: "#"
    },
    {
        id: 4,
        title: "Comprar novedades",
        description: "Novedades con 50% de descuento",
        link: "#"
    },
]

const CarouselTextBanner = () => {
    const router = useRouter()

    return (
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
                plugins={[
                    Autoplay({
                        delay: 2500
                    })
                ]}>
                <CarouselContent>
                    {dataCarouselTop.map(({ id, title, link, description }) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                        <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default CarouselTextBanner;