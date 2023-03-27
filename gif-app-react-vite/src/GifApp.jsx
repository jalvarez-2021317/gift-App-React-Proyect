// el comando rafc sirve para crear un componente con una funcion de flecha

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
    //useStateSniped sirve para generar un hook que es una funcion predefinida en react
    const [categorias, setcategorias] = useState(['pokemon', 'Spy X Family','Naruto'])
    const onAddCategory = (newCategoryAdded) =>{
        // ... Operador spret copia el array y agrega el valor
        setcategorias ([...categorias,newCategoryAdded])
    }
    return (
        <>
            {/* titulo */}
            <h1>Gift App</h1>

            {/* imput/buscador */}
            <AddCategory newCategory = {(value) => onAddCategory(value)}/>
            {/* listado de los gift */}
            <ol>

                {/* Agregar una nueva categoria dentro del array */}
                {categorias.map(categoria => {
                    return <li key={categoria}> {categoria}</li>
                })}
            </ol>
            {/* gif Item */}
        </>

    )
}
