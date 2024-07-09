import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Ingresa en una experiencia única</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">Café Exquisito</h4>
        <p className="my-2 text-lg">Despierta tus sentidos con cada sorbo de café</p>
        <Link href="#" className={buttonVariants()}>Comprar</Link>
      </div>
      <img 
        src="/cafe-x.jpg" 
        alt="Café" 
        className="h-[350px] w-full object-cover lg:h-[400px] object-center mt-5" 
      />
    </>
  );
}

export default BannerProduct;
