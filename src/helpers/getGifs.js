export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=kBGWGF3Hwhb8eQVP0xQTW6nWwFkK25iV&limit=10&q=${category}`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();

    return data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
}