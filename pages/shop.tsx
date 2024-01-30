import Breakcrumb from "@/component/breakcrumb";
import ProductContent from "@/component/product-content";
import ProductFilter from "@/component/products-filter";
import LayoutMain from "@/layouts/Main";
import { SetStateAction, useState } from "react";



const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategory = (category: SetStateAction<string | null>) => {
    setSelectedCategory(category);
  };

  return (
    <LayoutMain>
      <div className=" max-w-7xl m-auto flex pt-24">
        <div className=" w-[25%]">
          <ProductFilter/>
        </div>
        <div className=" w-[75%]">
          <ProductContent selectedCategories={null} />
        </div>
      </div>
    </LayoutMain>
  );
};

export default Shop;
