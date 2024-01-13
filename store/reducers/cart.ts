
import { ProductStoreType } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Định nghĩa kiểu trạng thái giỏ hàng
interface CartTypes {
    cartItems: ProductStoreType[]
}

// Khởi tạo trạng thái ban đầu của giỏ hàng
const initialState = {
    cartItems: []
} as CartTypes

// Hàm kiểm tra xem một sản phẩm có giống với sản phẩm khác không
const indexSameProduct = (state: CartTypes, action: ProductStoreType) => {
    const sameProduct = (product: ProductStoreType) => (
      product.id === action.id
    );
  
    // Trả về chỉ số của sản phẩm trong mảng hoặc -1 nếu không tìm thấy
    return state.cartItems.findIndex(sameProduct);
  };
// Định nghĩa kiểu dữ liệu có action thêm sản phẩm
type AddProductType = {
    product: ProductStoreType;
    count: number;
}

// Tạo slice giỏ hàng sử dụng createSlice
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Action thêm sản phẩm vào giỏ hàng
        addProduct: (state, action: PayloadAction<AddProductType>) => {
            const cartItems = state
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload.product]
            }
        },

        setCount(state, action:PayloadAction<AddProductType>) {
            // Tìm chỉ số của sản phẩm trong mảng và cập nhật số lượng
            const indexItem = indexSameProduct(state, action.payload.product)
            state.cartItems[indexItem].count = action.payload.count
        }
    }
})

// Xuất các action creators và reducer từ slice giỏ hàng
export const {addProduct, setCount} = cartSlice.actions
export default cartSlice.reducer;