import type { NextApiRequest, NextApiResponse } from "next";

import products from "@/utils/data-products/products";


// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    const {
      query: { productID },
    } = req
  
    const product = products.find(x => x.id === productID);
    res.status(200).json(product);
  }