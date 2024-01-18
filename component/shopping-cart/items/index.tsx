import { ProductStoreType } from "@/types";
import Image from "next/image";

const ItemProductCart = ({
  name,
  color,
  thumb,
  price,
  count,
}: ProductStoreType) => {
  return (
    <tr className=" flex items-center hover:bg-slate-50 py-2">
      <input type="checkbox" className=" mx-3" />
      <td className=" w-[30%]">
        <div className=" flex items-center">
          <div className="w-20 h-full ">
            <Image
              width={300}
              height={300}
              className="h-16"
              src={thumb}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <span className=" ml-5 font-bold text-sm">{name}</span>
          </div>
        </div>
      </td>
      <td className="text-center w-[10%]">Black</td>
      <td className="text-center w-[5.7%]">XL</td>
      <td className="text-center  w-[7.4%]">
        {" "}
        <div className="">
          <div className="">
            <button type="button" className="">
              -
            </button>
            <span>{count}</span>
            <button type="button" className="">
              +
            </button>
          </div>
        </div>
      </td>
      <td className="text-center w-[20%]">$234</td>
      <td className="text-center w-[20%]">$234</td>
      <td className="text-center w-[4%]">Huỷ</td>
    </tr>

    // <div className=" overflow-auto flex items-center hover:bg-gray-100 -mx-8 px-8 py-5">
    //   <div className=" px-3">
    //     <input type="checkbox" />
    //   </div>
    //   <div className="flex w-[33%]">
    //     <div className="w-20">
    //       <Image width={300} height={300} className="h-16" src={thumb} alt="" />
    //     </div>
    //     <div className="flex flex-col justify-between ml-4 flex-grow">
    //       <span className="font-bold text-sm">{name}</span>
    //     </div>
    //   </div>
    //   <div className=" w-[10%]">
    //     <span className="font-bold text-sm">Black</span>
    //   </div>
    //   <div className="flex flex-col justify-between ml-4 flex-grow">
    //     <span className="font-bold text-sm">XL</span>
    //   </div>
    //   <div className="flex justify-center w-1/5">
    //     <div className="">
    //       <button type="button" className="">
    //         -
    //       </button>
    //       <span>{count}</span>
    //       <button type="button" className="">
    //         +
    //       </button>
    //     </div>
    //   </div>
    //   <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
    //   <span className="text-center w-1/5 font-semibold text-sm">$19283704</span>
    // </div>
  );
};

export default ItemProductCart;
