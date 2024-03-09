/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import products from "@/utils/data-products/products";

export default (req: NextApiRequest, res: NextApiResponse) => {
try {
    const { query: { label } } = req;
  
    if (!label) {
      res.status(400).json({ error: 'Missing category parameter' });
      return;
    }

    // Chuyển đổi category từ query string sang chuỗi thường (viết thường)
    const lowercaseCategory = label.toString().toLowerCase();

    // Tìm các sản phẩm có category trùng khớp
    const productsByCategory = products.filter((product) => 
      product.category.toLowerCase() === lowercaseCategory
    );

    res.status(200).json(productsByCategory);
    console.log(res.status(200).json(productsByCategory));
    
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

