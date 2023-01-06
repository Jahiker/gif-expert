import React, { useState } from "react";

import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const addCategory = (newCategory) => {
    console.log(newCategory);
    setCategories([newCategory,...categories])
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* inputs */}
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={(value) => addCategory(value)}
      />

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
