"use client" // Uso de cliente
import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation"; //Importanción de router de navegación
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
    const router = useRouter()  // Función del router 
    return (
        //div con clase y estilos para el navbar
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1 className="text-3xl" onClick={() => router.push("/")}>Coffe
                <span className="font-bold">Eco</span>
            </h1>
            <div className="items-center justify.between hidden sm:flex">
                <MenuList/>
            </div>

            <div className="flex sm:hidden">
                <ItemsMenuMobile/>
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <ShoppingCart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/cart")} /> 
                <Heart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/loved-products")} />
                <User strokeWidth={1} className="cursor-pointer" />

                <ToggleTheme />
            </div>
        </div>
    );
    //Botón de carrito shopingcart, Botón de me guardado en favoritos heart, Botón de login usuario user
}

export default Navbar;