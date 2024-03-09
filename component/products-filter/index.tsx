import React, { useState } from "react";

const ProductFilter = ({handleChange}: {handleChange: (category: string) => void}) => {
  const categories = ["Tshirt", "Hoodies"];
  return (
    <>
      <h3>Sidebar</h3>
      {categories.map((category) => (
        <button onClick={() => handleChange(category)} key={category}>
          {category}
        </button>
      ))}
    </>
  );
};

export default ProductFilter;
