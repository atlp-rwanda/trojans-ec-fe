import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/slices/user";
import signUpReducer from "./features/slices/signUp";
import StepperReducer from "./features/slices/stepper";
import productReducer from "./features/slices/products";

export const reducers={
    user: userReducer,
    signUp:signUpReducer,
    stepper:StepperReducer,
    product: productReducer
};

const store = configureStore({
  reducer: {
    ...reducers,
  },
});

export default store;
