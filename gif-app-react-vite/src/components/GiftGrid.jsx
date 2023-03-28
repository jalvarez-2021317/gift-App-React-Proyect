
import { useFechGifs } from "../hooks/useFechGifs";
import { GifGridItem } from "./GifGridItem";

export const GiftGrid = ({ category }) => {


    const { images } = useFechGifs(category);


    return (
        <>
            <h3> {category}</h3>
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifGridItem key={img.id}
                            {...img} // se mandan todas las propiedades
                        />
                    ))
                }
            </div>


        </>
    )
}
