export const getGifs = async(categoria) => { // 8wU8xPA7GyrPAzUTZXIaQuHaXa7aqA7T
    const url = `https://api.giphy.com/v1/gifs/search?Q=${ encodeURI(categoria) }&limit=10&api_key=8wU8xPA7GyrPAzUTZXIaQuHaXa7aqA7T`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title : img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}