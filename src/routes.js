import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/homepage";
import Login from "./pages/login";
import ProfileUpdate from "./pages/profileUpdate";
import NotFound from "./pages/notFound";
import SignUp from "./pages/signUp";
import AllProducts from "./pages/dashboard/seller/AllProducts/allProducts";
import ProductDetail from "./pages/dashboard/seller/ProductDetail.js/ProductDetail";
import MainProductDetail from "./pages/MainProductDetail";
import TwoFactorAuth from "./pages/twoFactorAuth";
import Product from "./pages/dashboard/seller/addProduct";
import ResetPasswd from "./pages/password/passwd-reset";
import SendEmail from "./pages/password/sendEmail";
import SendSuccessfull from "./components/sendSuccess";
import Cart from "./pages/cart";
import Success from "./components/Success";
import ViewSearch from "./pages/searchView";
import ViewWishlist from "./components/wishlist/ViewWishlist";
import AllUsers from "./pages/dashboard/admin/users/allUsers";
import MainBuyerDashBoard from "@pages/dashboard/buyer/MainBuyerDash";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Landing />}></Route>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<SignUp />} />
      <Route exact path="/products/:id" element={<MainProductDetail />} />
      <Route exact path="/products/wishlist" element={<ViewWishlist />} />
      <Route
        exact
        path="/dashboard/seller/products"
        element={<AllProducts />}
      />
      <Route
        exact
        path="/dashboard/seller/products/:productID"
        element={<ProductDetail />}
      />
      <Route exact path="/auth" element={<TwoFactorAuth />} />
      <Route
        exact
        path="/dashboard/seller/product/create"
        element={<Product />}
      />
      <Route
        exact
        path="/dashboard/product/added"
        element={<SendSuccessfull />}
      />
      <Route exact path="/products/cart" element={<Cart />} />
      <Route exact path="/password-reset/" element={<ResetPasswd />} />
      <Route exact path="/sendEmail" element={<SendEmail />} />
      <Route path="*" element={<NotFound />}></Route>
      <Route exact path="/user/profile" element={<ProfileUpdate />} />

      <Route exact path="/view-search" element={<ViewSearch />} />
      <Route exact path="/dashboard/users" element={<AllUsers />} />

      <Route exact path="/dashboard/buyer" element={<MainBuyerDashBoard />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
