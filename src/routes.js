import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/homepage";
import Login from "./pages/login";
import ProfileUpdate from "./pages/profileUpdate";
import NotFound from "./pages/notFound";
import SignUp from "./pages/signUp";
import MainProductDetail from "./pages/MainProductDetail";
import TwoFactorAuth from "./pages/twoFactorAuth";
import ResetPasswd from "./pages/password/passwd-reset";
import SendEmail from "./pages/password/sendEmail";
import SendSuccessfull from "./components/sendSuccess";
import Cart from "./pages/cart";
import ViewSearch from "./pages/searchView";
import WishList from "./pages/dashboard/buyer/WishList";
import AllUsers from "./pages/dashboard/admin/allUsers";
import MainBuyerDashBoard from "./pages/dashboard/buyer/MainBuyerDash";
import SellerDashboard from "./pages/dashboard/seller/SellerDashboard";
import SellerProducts from "./pages/dashboard/seller/SellerProducts";
import SellerProductDetail from "./pages/dashboard/seller/SellerProductDetail";
import SellerNotifications from "./pages/dashboard/seller/SellerNotifications";
import BuyerNotifications from "./pages/dashboard/buyer/BuyerNotifications";
import AdminNotifications from "./pages/dashboard/admin/AdminNotifications";
import BuyerOrders from "./pages/dashboard/buyer/Order";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Landing />}></Route>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<SignUp />} />
      <Route exact path="/products/:id" element={<MainProductDetail />} />
      <Route exact path="/products/wishlist" element={<WishList />} />
      <Route
        exact
        path="/dashboard/seller/products"
        element={<SellerProducts />}
      />
      <Route
        exact
        path="/dashboard/seller/products/:productID"
        element={<SellerProductDetail />}
      />
      <Route exact path="/auth" element={<TwoFactorAuth />} />
      <Route
        exact
        path="/dashboard/products/added"
        element={<SendSuccessfull />}
      />
      <Route exact path="/products/cart" element={<Cart />} />
      <Route exact path="/password-reset/" element={<ResetPasswd />} />
      <Route exact path="/sendEmail" element={<SendEmail />} />
      <Route path="*" element={<NotFound />}></Route>
      <Route exact path="/user/profile" element={<ProfileUpdate />} />

      <Route exact path="/view-search" element={<ViewSearch />} />
      <Route exact path="/dashboard/admin/users" element={<AllUsers />} />
      <Route exact path="/dashboard/buyer" element={<MainBuyerDashBoard />} />
      <Route exact path="/dashboard/seller" element={<SellerDashboard />} />
      <Route
        exact
        path="/dashboard/seller/notifications"
        element={<SellerNotifications />}
      />
      <Route
        exact
        path="/dashboard/buyer/notifications"
        element={<BuyerNotifications />}
      />
      <Route
        exact
        path="/dashboard/admin/notifications"
        element={<AdminNotifications />}
      />
      <Route exact path="/dashboard/buyer/orders" element={<BuyerOrders />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
