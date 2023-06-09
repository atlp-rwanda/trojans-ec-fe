import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./features/slices/signUp";
import userReducer from "./features/slices/user";
import StepperReducer from "./features/slices/stepper";
import productReducer from "./features/slices/products";
import passwordReducer from "./features/slices/resetPassword";
import { sendEmailSlice } from "./features/slices/sendEmail";
import { productSlice } from "./features/product-redux/productSlice";
import { categorySlice } from "./features/product-redux/categoriesSlice";
import { searchSlice } from "./features/slices/product";
import cartReducer from "./features/slices/cart";
import profileReducer from "./features/slices/profileUpdate";
import wishlistReducer from "./features/slices/wishlist";
import getUsersReducer from "./features/slices/getUsers.js";
import chat from "./features/slices/chat";
import { sellerSlice } from "./features/slices/seller";
import { logOutSlice } from "./features/slices/logout";
import statistic from "./features/slices/statistic";
import notificationReducer from "./features/slices/notification";
import delNoticationReducer from "./features/slices/delNotification"
import { addReviewSlice } from "./features/slices/addReview";
import paymentSuccess from "./features/slices/paymentSuccess"
import orderReducer from "./features/slices/order"

export const reducers = {
  user: userReducer,
  signUp: signUpReducer,
  stepper: StepperReducer,
  product: productReducer,
  prod: productSlice.reducer,
  resetPass: passwordReducer,
  sendEmail: sendEmailSlice.reducer,
  cat: categorySlice.reducer,
  cart: cartReducer,
  userProfile: profileReducer,
  search: searchSlice.reducer,
  wishlist: wishlistReducer,
  chat: chat,
  getUsers: getUsersReducer,
  Sellers: sellerSlice.reducer,
  logout: logOutSlice.reducer,
  statistic:statistic,
  notification: notificationReducer,
  delNotification: delNoticationReducer,
  review: addReviewSlice.reducer,
  paymentSuccess,
  orders:orderReducer
};

const store = configureStore({
  reducer: {
    ...reducers,
  },
});

export default store;
