import { useEffect, useState } from "react";
import { getAllGif } from "../components/gif/service";
import { Images } from "../lib/definition";

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<Images[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getImages = async (): Promise<void> => {
    const newImages = await getAllGif(category);

    setIsLoading(false);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
