import React, { useState } from "react";
import { CategoryForm, GifGrid } from "./components";

const Gif = (): React.JSX.Element => {
  const [categories, setCategories] = useState<string[]>([]);

  const onCategoryInput = (input: string): void => {
    if (input.trim().length < 1) return;
    if (categories.includes(input)) return;
    setCategories((e) => [input, ...e]);
  };

  return (
    <>
      <main>
        {/** Title de la app */}
        <h2>Gif Expert app</h2>
        {/**  Input  */}
        <CategoryForm onCategoryInput={onCategoryInput} />
        
        {/**Listado de Items o Gif */}

        <section>
          {categories.map((items) => (
            <GifGrid category={items} key={items} />
          ))}
        </section>

        {/**Gif Item */}
      </main>
    </>
  );
};

export default Gif;
