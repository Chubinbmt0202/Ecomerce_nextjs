/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { hoodies } from "@/utils/data-products/Hoodies/hoodies";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Gọi api hoodies: ", hoodies);

  setTimeout(() => {
    res.status(200).json(hoodies);
  }, 900);
};