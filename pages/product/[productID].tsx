import { GetServerSideProps } from "next";
import { server } from "../../utils/server";
import axios from "axios";

// types
import { ProductType } from "@/types";

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
    console.error('Error fetching data:', error);

    return {
      props: {
        product: null,
      },
    };
  }
};


const Product = ({ product }: ProductPageType) => {
  return (
      <section className="product-single">
        <div className="container">
          <div className="product-single__info">
            <h1>{product.name}</h1>
          </div>
        </div>
      </section>
  );
};

export default Product;
