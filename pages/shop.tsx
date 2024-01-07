import Breakcrumb from "@/component/breakcrumb";
import ProductContent from "@/component/product-content";
import ProductFilter from "@/component/products-filter";
import LayoutMain from "@/layouts/Main";

const Shop = () => {
  return (
    <LayoutMain>
      <Breakcrumb />
      <div className=" max-w-7xl m-auto flex pt-5 ">
        <div className=" w-[25%]">
          <ProductFilter />
        </div>
        <div className=" w-[75%]">
          <ProductContent />
        </div>
      </div>
    </LayoutMain>
  );
};

export default Shop;
