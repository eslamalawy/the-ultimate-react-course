import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer, { clearCart } from "./features/cart/cartSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

// to call it inside regular function without the need to import the store there...
export const initCart = () => {
  store.dispatch(clearCart());
};
export default store;
