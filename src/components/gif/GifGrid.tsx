import React from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../../hook";
import { Loading } from "../loading/Loading";

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props): React.JSX.Element => {
  const { images, isLoading } = useFetchGifs(category);
  console.log(isLoading);
  return (
    <>
      <h3>{category}</h3>
      {isLoading && (<Loading />)}
      {/**Images .Map */}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
