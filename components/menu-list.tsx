"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

//Menulist pertenece al navbar, se muestran la secciones
const MenuList = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >

                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            CoffeEco
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            ¡Bienvenido al Mundo del café!, Una empresa dedicada al comercio de café de la más alta calidad
                                            sumergete en este maravillos mundo.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/shop" title="Tienda">
                                Accede a toda tu información, pedidos y más.
                            </ListItem>
                            <ListItem href="/offers" title="Ofertas">
                                Sección dedicada a promociones y descuentos especiales.
                            </ListItem>
                            <ListItem href="/" title="Accesorios">
                                Productos de complemento como tazas, recuerdos, presas, etc.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Cafés</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/accesorios" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Accesorios
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default MenuList
//Categorias de café, más descripción
const components: { title: string; href: string; description: string }[] = [
    {
        title: "Café grano",
        href: "/category/grano",
        description:
            "Un café con sabor cítrico ofrece una experiencia vibrante y refrescante en cada sorbo. Sus notas ácidas y brillantes recuerdan a frutas como el limón o la naranja, aportando una frescura inigualable. Este perfil de sabor, común en granos de origen etíope, se complementa con una acidez delicada y una dulzura sutil, creando una taza equilibrada y vivaz, ideal para despertar los sentidos.",
    },
    {
        title: "Café molido",
        href: "/category/molido",
        description:
            "Un café molido con sabor dulce deleita el paladar con su suavidad y notas de caramelo, miel y chocolate. Este tipo de café, a menudo derivado de granos cultivados en regiones como Colombia o Brasil, presenta una acidez baja y un cuerpo medio a completo. La dulzura natural se mezcla armoniosamente con matices de frutos secos y vainilla, ofreciendo una experiencia rica y satisfactoria en cada taza.",
    },
    {
        title: "Café de cápsula",
        href: "/category/capsula",
        description:
            "Un café en cápsula con toques ácidos y dulces combina lo mejor de ambos perfiles de sabor. Las notas ácidas, que recuerdan a frutas como la manzana verde o la cereza, aportan una vivacidad refrescante. Al mismo tiempo, se equilibran con una dulzura suave y caramelizada, reminiscente de cacao o miel. Este café, perfectamente dosificado en cápsulas, ofrece una experiencia compleja y equilibrada, ideal para quienes buscan sabores vibrantes con una nota dulce persistente.",
    },

]


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

