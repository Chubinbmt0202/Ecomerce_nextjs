import { removeProduct, setCount } from "@/store/reducers/cart";
import { ProductStoreType } from "@/types";
import Image from "next/image";
import { useDispatch } from "react-redux";

const ItemProductCart = ({
  id,
  name,
  color,
  thumb,
  price,
  size,
  count,
}: ProductStoreType) => {

  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeProduct(
      {
        thumb,
        name,
        color,
        count,
        price,
        id,
        size
      }
    ))
  }

  const setProductCount = (newCount: number) => {
    if(newCount <= 0) {
      return;
    }

    const payload = {
      product: { 
        thumb,
        name,
        color,
        count,
        price,
        id,
        size
      },
      count: newCount,
    }

    dispatch(setCount(payload))
  }

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
            <button type="button" className="" onClick={() => setProductCount(count - 1)}>
              -
            </button>
            <span>{count}</span>
            <button type="button" className="" onClick={() => setProductCount(count + 1)}>
              +
            </button>
          </div>
        </div>
      </td>
      <td className="text-center w-[20%]">${price}</td>
      <td className="text-center w-[4%]" onClick={() => removeFromCart()}>Huỷ</td>
    </tr>
  );
};

export default ItemProductCart;
