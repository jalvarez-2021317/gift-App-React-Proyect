export const getGifs = async ( category ) => {

    const url = `http://api.giphy.com/v1/gifs/search?api_key=2pp8fF5iwXgE6XSBiJRt7dEUiJYWGf6p&q=${category}&limit=${10}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    //console.log(data);

    const gifs = data.map( (img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    // console.log(gifs);
    return gifs;
}