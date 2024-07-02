import { Menu } from "lucide-react";
import MenuList from "./menu-list";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

//menú de celulares, responsivo
const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/cafe-molido" className="block">Café Molido</Link>
                <Link href="/categories/cafe-grano" className="block">Café en Grano</Link>
                <Link href="/categories/cafe-capsula" className="block">Café en Cápsulas</Link>
            </PopoverContent>
        </Popover>
    );
}
export default ItemsMenuMobile;