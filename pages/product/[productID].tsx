import { GetServerSideProps } from "next";
import { server } from "../../utils/server";
import axios from "axios";

// types
import { ProductType } from "@/types";
import Gallery from "@/component/product-detail/gallery";
import LayoutMain from "@/layouts/Main";
import Breakcrumb from "@/component/breakcrumb";
import Image from "next/image";
import Content from "@/component/product-detail/content";

type ProductPageType = {
  product: ProductType;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const productID = query.productID;

  try {
    const response = await axios.get(`${server}/api/product/${productID}`);
    const product = response.data;
    console.log(">>>>>>>>>>>>>>>", product);

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        product: null,
      },
    };
  }
};

const Product = ({ product }: ProductPageType) => {
  return (
    <LayoutMain>
      <Breakcrumb name={product.name} />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto">
          <div className=" mx-auto flex justify-between flex-wrap">
            <Gallery images={product.images} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <Content product={product} />
            </div>
          </div>
        </div>
      </section>
    </LayoutMain>
  );
};

export default Product;
