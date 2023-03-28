// Los hooks son funciones que retornan algo
//UseStateSniper es para hacer un efec

import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFechGifs = ( category ) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    // UseEffect ejecuta efectos secundarios al realizar una accion
    useEffect(() => {
        getImages();
    }, [] );


    return {
        images
    }
}
