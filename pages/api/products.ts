/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import products from "@/utils/data-products/products";

export default (req: NextApiRequest, res: NextApiResponse) => {
  setTimeout(() => {
    res.status(200).json(products);
  }, 500);
};
