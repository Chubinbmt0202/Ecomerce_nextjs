import React, { useState } from "react";
import { Menu, Slider } from "antd";

const ProductFilter = ({
  handleChange,
}: {
  handleChange: (category: string) => void;
}) => {
  const categories = ["Tất cả","Tshirt", "Hoodies", "Jacket", "Pants"];
  return (
    <>
      <div className=" mt-9">
        <Menu
          onClick={(e) => handleChange(e.key)}
          style={{
            width: 256,
          }}
          defaultSelectedKeys={["Tất cả"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={categories.map((category) => ({
            key: category,
            label: category,
            icon: null,
          }))}
        />

        <div className=" w-[256px]">
          <h3>Giá</h3>
          <Slider defaultValue={[20, 50]} range={true} />
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
