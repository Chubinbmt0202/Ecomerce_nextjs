import Link from "next/link";
import productsTypes from "@/utils/data-products/product-types";
import productsColors from "@/utils/data-products/product-color";
import CheckboxColor from "./form-builder/checkbox-color";
import { RadioGroup } from "@headlessui/react";
import Checkbox from "./form-builder/checkbox/index";
import Slider from "rc-slider";
import { useState } from "react";

// const { createSliderWithTooltip } = Slider;
// const Range = createSliderWithTooltip(Slider.Range);

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const handleColorChange = (selectedColor: string) => {
  // Xử lý khi màu sắc thay đổi
  console.log(`Selected color: ${selectedColor}`);
};
const ProductFilter = () => {
  const [selectedColor, setSelectedColor] = useState(productsColors[0]);
  return (
    <form className=" row-span-3 p-8 hidden lg:block sticky top-24 z-500">
      <h3 className=" text-lg font-bold pb-4 border-b border-gray-300 py-2">
        Các danh mục sản phẩm
      </h3>
      <ul
        role="list"
        className="space-y-4 pt-3 pb-6 text-sm font-medium text-gray-900"
      >
        {productsTypes.map((type) => (
          <Checkbox key={type.id} label={type.name} name="Product-Type" />
        ))}
      </ul>

      <h3 className="text-lg font-bold pb-4 border-b border-gray-300 py-2">Chọn màu sắc</h3>
      <RadioGroup
        value={selectedColor}
        onChange={setSelectedColor}
        className="mt-4"
      >
        <div className="flex items-center space-x-3">
          {productsColors.map((color) => (
            <RadioGroup.Option
              key={color.name}
              value={color}
              className={({ active, checked }) =>
                classNames(
                  color.selectedClass,
                  active && checked ? "ring ring-offset-1" : "",
                  !active && checked ? "ring-2" : "",
                  "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                )
              }
            >
              <RadioGroup.Label as="span" className="sr-only">
                {color.name}
              </RadioGroup.Label>
              <span
                aria-hidden="true"
                className={classNames(
                  color.class,
                  "h-8 w-8 rounded-full border border-black border-opacity-10"
                )}
              />
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      <h3 className="text-lg font-bold pb-4 border-b border-gray-300 py-2 mt-3">Chọn khoảng giá</h3>

    </form>
  );
};

export default ProductFilter;
