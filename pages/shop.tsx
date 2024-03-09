import Breakcrumb from "@/component/breakcrumb";
import ProductContent from "@/component/product-content";
import ProductsLoading from "@/component/product-content/list/Loading";
import ProductFilter from "@/component/products-filter";
import LayoutMain from "@/layouts/Main";
import { useState, useEffect } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (category: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/getProductsByLabel?label=${category}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const productsByCategory = await response.json();
      setProducts(productsByCategory);
      console.log("Products by category: ", productsByCategory);
    } catch (error) {
      console.log("Fetch error: ", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3000/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        setProducts(products);
        console.log("All products: ", products);
      } catch (error) {
        console.log("Fetch error: ", error);
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <LayoutMain>
      <div className=" max-w-7xl m-auto flex pt-24">
        <div className=" w-[25%]">
          <ProductFilter handleChange={handleChange} />
        </div>
        <div className=" w-[75%]">
          {isLoading ? <ProductsLoading /> : <ProductContent product={products} />}
        </div>
      </div>
    </LayoutMain>
  );
};

export default Shop;