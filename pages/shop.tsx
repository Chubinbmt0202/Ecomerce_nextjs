import Breakcrumb from "@/component/breakcrumb";
import ProductFilter from "@/component/products-filter";
import LayoutMain from "@/layouts/Main";

const Shop = () => {
  return (
    <LayoutMain>
      <Breakcrumb />
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 max-w-7xl mx-auto">
        <ProductFilter />
        <div>content</div>
      </div>
    </LayoutMain>
  );
};

export default Shop;
