import React from "react";

interface Props {
  title: string;
  url: string;
}
export const GifItem = ({ title, url }: Props): React.JSX.Element => {
  return (
    <>
      <div className="card">
        <img src={url} alt={title} /> 
         
      </div>
    </>
  );
};
