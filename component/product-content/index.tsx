
import ListProduct from "./list";

const ProductContent = (content :any) => {
  var countProduct = content.product && Array.isArray(content.product) ? content.product.length : 0;

  return (
    <section className=" pt-8 row-span-2 col-span-2">
      <div className=" font-bold pb-4 text-lg flex items-center justify-between border-b border-gray-300">
        <h3>
        <span>{countProduct}</span> sản phẩm
        </h3>
      </div>
      <ListProduct filter = {content}/>
    </section>
  );
};

export default ProductContent;
