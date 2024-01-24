import Image from "next/image";

const ProductItemLoading = () => {
  return (
    <div
      role="status"
      className=" max-w-52 pt-5 rounded animate-pulse"
    >
      <div className="flex items-center justify-center h-56 mb-4 bg-gray-300 rounded dark:bg-gray-700">

      </div>
      <div className="flex items-center mt-4">
        <div>
          <div className=" w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
          <div className=" w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default ProductItemLoading;
