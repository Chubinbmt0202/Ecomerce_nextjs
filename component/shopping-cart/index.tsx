import { RootState } from "@/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { removeProduct, setCount } from "@/store/reducers/cart";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dataSource = cartItems.map((item, index) => ({
    key: index,
    name: item.name,
    color: item.color,
    size: item.size,
    count: item.count,
    price: item.price,
  }));
  console.log(cartItems);
  const handleRemoveProduct = (productKey:any) => {
    dispatch(removeProduct(productKey));
  };
  const handleUpdateProductCount = (productKey: number, newCount: number) => {
    if (newCount >= 0) {
      dispatch(setCount({ product: cartItems[productKey], count: newCount }));
    }
  };
  const priceTotal = () => {
    let totalPrice = 0;

    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }
    return totalPrice;
  };
  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Màu sắc",
      dataIndex: "color",
      key: "color",
    },
  
    {
      title: "Kích thước",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Số lượng",
      dataIndex: "count",
      key: "count",
      render: (count: number, record: any) => (
        <div>
          <button onClick={() => handleUpdateProductCount(record.key, count - 1)}>-</button>
          <input type="number" value={count} onChange={(e) => handleUpdateProductCount(record.key, Number(e.target.value))} />
          <button onClick={() => handleUpdateProductCount(record.key, count + 1)}>+</button>
        </div>
      ),
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_: any, record: any) => (
        <a onClick={() => handleRemoveProduct(record.key)}>Delete</a>
      ),
    },
  ];

  return (
    <section className="  max-w-7xl m-auto pt-20">
      <div className="">
        <div className="">
          <h3 className=" mt-8 font-bold text-xl">Shopping Cart</h3>
          {/* <CheckoutStatus step="cart" /> */}
        </div>
      </div>

      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.name}
            </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={dataSource}
      />
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
            Total cost <strong>${priceTotal().toFixed(2)}</strong>
          </p>
          <a
            href="/cart/checkout"
            className=" bg-orange-500 p-1 px-2 rounded-full ml-5"
          >
            Checkout
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
