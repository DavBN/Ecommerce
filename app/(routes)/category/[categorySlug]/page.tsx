"use client"
import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { Separator } from "@/components/ui/separator"
import { ResponseType } from "@/types/response"
import { useParams, useRouter } from "next/navigation"

export default function Page() {
    const params = useParams()
    const { categorySlug }  = params
    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug)
    const router = useRouter()

    if (loading) {
        return <div>Cargando...</div>; // Muestra un indicador de carga mientras se obtienen los datos
    }

    // Verifica si result no está definido, es null o está vacío
    if (!result || result.length === 0 || result[0]?.attributes?.category?.data?.attributes?.categoryName) {
        return <div>No se encontraron datos para la categoría {categorySlug}</div>; // Maneja el caso donde no hay datos, la categoría no existe o la estructura de datos es incorrecta
    }

    // Si llegamos aquí, sabemos que result tiene la estructura esperada y podemos acceder de manera segura a categoryName
    const categoryName = result[0]?.attributes?.category?.data?.attributes?.categoryName;

    return (
           <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
                  <h1 className="text-3xl font-medium">Café {categoryName}</h1>
                 <Separator />
                 <div className="sm:flex sm:justify-between">
                    <p>Filtros de categoría</p>
                 </div>
           </div>
    )
}