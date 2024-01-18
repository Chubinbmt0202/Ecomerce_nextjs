import { RootState } from "@/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import ItemProductCart from "./items";

const ShoppingCart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  return (
    <section className="  max-w-7xl m-auto pt-20">
      <div className="">
        <div className="">
          <h3 className=" mt-8 font-bold text-xl">Shopping Cart</h3>
          {/* <CheckoutStatus step="cart" /> */}
        </div>

        <div className=" w-full my-9">
          {cartItems.length > 0 && (
            <table className=" w-full">
              <tbody className="">
                <tr className=" flex pb-4">
                  <input type="checkbox" className=" mx-3" />
                  <th className="font-semibold text-gray-600 text-xs uppercase w-[30%]">
                    Sản phẩm
                  </th>
                  <th className="font-semibold text-center text-gray-600 text-xs uppercase w-[10%] ">
                    Màu sắc
                  </th>
                  <th className="font-semibold text-center text-gray-600 text-xs uppercase">
                    Kích thước
                  </th>
                  <th className="font-semibold text-center text-gray-600 text-xs uppercase mx-4">
                    Số lượng
                  </th>
                  <th className="font-semibold text-center text-gray-600 text-xs uppercase w-[20%]">
                    Đơn giá
                  </th>
                  <th className="font-semibold text-center text-gray-600 text-xs uppercase w-[20%]">
                    Tổng tiền
                  </th>
                  <th className="font-semibold text-center text-gray-600 text-xs uppercase w-[4%]">

                  </th>
                </tr>

                {cartItems.map((item) => (
                  <ItemProductCart
                    key={item.id}
                    id={item.id}
                    thumb={item.thumb}
                    name={item.name}
                    color={item.color}
                    price={item.price}
                    count={0}
                    size={""}
                  />
                ))}
              </tbody>
            </table>
          )}

          {cartItems.length === 0 && <p>Nothing in the cart</p>}
        </div>

        <div className=" flex justify-between items-center">
          <Link
            href={"/shop"}
            className="flex font-semibold text-indigo-600 text-sm"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Tiếp tục mua sắm
          </Link>

          <div className=" flex items-center">
            <input
              type="text"
              placeholder="Nhập mã giảm giá"
              className=" border border-stone-500 border-1 rounded-full p-1"
            />
            <p className=" ml-4">
              Total cost <strong>$123</strong>
            </p>
            <a
              href="/cart/checkout"
              className=" bg-orange-500 p-1 px-2 rounded-full ml-5"
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
