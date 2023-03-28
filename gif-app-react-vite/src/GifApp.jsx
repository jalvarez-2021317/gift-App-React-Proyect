// el comando rafc sirve para crear un componente con una funcion de flecha

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GifApp = () => {
    //useStateSniped sirve para generar un hook que es una funcion predefinida en react
    const [categorias, setcategorias] = useState(['Naruto'])
    const onAddCategory = (newCategoryAdded) => {
        // analizar si la categoria insertada ya existe en el array
        if (categorias.includes(newCategoryAdded)) return;
        // ... Operador spret copia el array y agrega el valor
        setcategorias([ newCategoryAdded, ...categorias])
    }
    return (
        <>
            {/* titulo */}
            <h1>Gift App</h1>

            {/* imput/buscador */}
            <AddCategory newCategory={(value) => onAddCategory(value)} />
            {/* listado de los gift */}

            {/* Agregar una nueva categoria dentro del array */}
            {categorias.map((cat) => 
                (
                    <GiftGrid key={cat}  category = {cat} />
                )
               
            )}
            {/* gif Item */}
        </>

    )
}
