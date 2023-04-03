import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/homepage";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import SignUp from "./pages/signUp";
import AllProducts from "./pages/dashboard/seller/AllProducts/allProducts";
import ProductDetail from "./pages/dashboard/seller/ProductDetail.js/ProductDetail";
import MainProductDetail from "./pages/MainProductDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Landing />}></Route>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<SignUp />} />
      <Route exact path="/products/:id" element={<MainProductDetail />} />
      <Route exact path="/login" element={<Login />} />
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
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
