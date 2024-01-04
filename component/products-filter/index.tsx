import Link from "next/link";
import productsTypes from "@/utils/data-products/product-types";
import Checkbox from './form-builder/checkbox/index';
import Slider from "rc-slider";

// const { createSliderWithTooltip } = Slider;
// const Range = createSliderWithTooltip(Slider.Range);

const ProductFilter = () => {
  

    return (
        <form className=" p-8 hidden lg:block sticky top-24 z-500">
        <h3 className=" text-lg font-bold pb-4 border-b border-gray-300 py-2">
          Các danh mục sản phẩm
        </h3>
        <ul
          role="list"
          className="space-y-4 pt-3 pb-6 text-sm font-medium text-gray-900"
        >
          {productsTypes.map(type => (
            <Checkbox
              key={type.id} 
              label={type.name} 
              name='Product-Type'            />
          ))}
        </ul>
        <h3 className=" text-lg font-bold pb-4 border-b border-gray-300 py-2">
          Giá
        </h3>
        
      </form>
    )
}

export default ProductFilter