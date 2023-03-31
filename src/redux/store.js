import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/slices/user";
import signUpReducer from "./features/slices/signUp";
import StepperReducer from "./features/slices/stepper";

export const reducers={
  
    user: userReducer,
    signUp:signUpReducer,
    stepper:StepperReducer
  
};

const store = configureStore({
  reducer: {
   ...reducers
  },
});

export default store;
