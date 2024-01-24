/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import products from "@/utils/data-products/products";


export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Trung Anh: ", req);
console.log("Gọi api dữ liệu: ", products);

  setTimeout(() => {
    res.status(200).json(products);
  }, 9900);
}
