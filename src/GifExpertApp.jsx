import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; // sirve para que no devuelva la misma palabra ya escrita en

    setCategories([newCategory, ...categories]);
    //la primera forma de hacerlo
    // setCategories((cat) => [...cat, "Valorant"]); segunda forma de hacerlo
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        //setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
