import React, { useState } from "react";

import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const addCategory = () => {
    setCategories(['New Category',...categories]) 
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* inputs */}
      <AddCategory />

      {/* listado de gif */}
      <ol>
        {categories.map((category, index) => (
          <li key={`catregory-${index}`}>{category}</li>
        ))}
      </ol>
      {/* Gif item */}
    </>
  );
};
