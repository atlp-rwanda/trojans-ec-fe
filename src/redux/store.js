import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./features/slices/signUp";
import userReducer from "./features/slices/user";
import StepperReducer from "./features/slices/stepper";
import productReducer from "./features/slices/products";
import { productSlice } from "./features/product-redux/productSlice";
import { categorySlice } from "./features/product-redux/categoriesSlice";
import cartReducer from "./features/slices/cart"
import chat from "./features/slices/chat";

export const reducers={
    user: userReducer,
    signUp:signUpReducer,
    stepper:StepperReducer,
    product: productReducer,
    prod: productSlice.reducer,
    cat: categorySlice.reducer,
    cart:cartReducer,
    chat:chat
  
};

const store = configureStore({
  reducer: {
    ...reducers,
  },
});

export default store;
