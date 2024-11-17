import { Images } from "../../../lib/definition";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getAllGif = async (category: string):Promise<Images[]> => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`;
    const res = await fetch(url);
  
    const { data } = await res.json();
    const gifs = data.map((img: { id: string; title: string; images: { downsized_medium: { url: string; }; }; }) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    console.log(gifs);
    
    return gifs;
  };
  