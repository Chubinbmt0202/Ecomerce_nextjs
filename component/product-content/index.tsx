import { Listbox, Menu, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/16/solid";
import ProductSort from "@/utils/data-products/product-sort";
import { useState } from "react";
import { Fragment } from "react";
import ListProduct from "./list";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const ProductContent = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);
  const [selected, setSelected] = useState(ProductSort[0]);
  const handleCategoryClick = (index: number) => {
    setSelectedCategory(index);
  };

  const handleFilterClick = (index: number) => {
    setSelectedFilter(index);
  };
  return (
    <section className=" pt-8 row-span-2 col-span-2">
      <div className=" font-bold pb-4 text-lg flex items-center justify-between border-b border-gray-300">
        <h3>
          Men Tops <span>(133)</span>
        </h3>
        <form className={`products-content__filter`}>
          <div className=" flex text-center items-center">
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                    Sắp xếp theo: 
                  </Listbox.Label>
                  <div className="relative">
                    <Listbox.Button className=" relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      <span className="flex items-center">
                        <span className="ml-3 block truncate">
                          {selected.name}
                        </span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {ProductSort.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-indigo-600 text-white"
                                  : "text-gray-900",
                                "relative cursor-default select-none py-2 pl-3 pr-9"
                              )
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {person.name}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
        </form>
      </div>
      <ListProduct />
    </section>
  );
};

export default ProductContent;
