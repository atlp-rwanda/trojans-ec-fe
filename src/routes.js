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
import AllUsers from "./pages/dashboard/admin/users/allUsers";
import MainBuyerDashBoard from "./pages/dashboard/buyer/MainBuyerDash";
import SellerDashboard from "./pages/dashboard/seller/SellerDashboard";
import SellerProducts from "./pages/dashboard/seller/SellerProducts";
import SellerProductDetail from "./pages/dashboard/seller/SellerProductDetail";
import SellerNotifications from "./pages/dashboard/seller/SellerNotifications";
import BuyerNotifications from "./pages/dashboard/buyer/BuyerNotifications";
import AdminNotifications from "./pages/dashboard/admin/AdminNotifications";
import BuyerOrders from "./pages/dashboard/buyer/Order";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import VerifyEmail from "./pages/verifyEmail";
import SellerStatisticPage from "./pages/statistic";
import BuyerProfile from "./pages/dashboard/buyer/BuyerProfile";
import SellerProfile from "./pages/dashboard/seller/SellerProfile";
import AdminProfile from "./pages/dashboard/admin/AdminProfile";
import PaymentComfirmation from "./pages/PaymentComfirmation";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes role={"admin"} />}>
        <Route
          exact
          path="/dashboard/admin/notifications"
          element={<AdminNotifications />}
        />
        <Route exact path="/dashboard/admin/users" element={<AllUsers />} />
        <Route
          exact
          path="/dashboard/admin/profile"
          element={<AdminProfile />}
        />
      </Route>
      <Route element={<ProtectedRoutes role="seller" />}>
        <Route exact path="/dashboard/seller" element={<SellerDashboard />} />
        <Route
          exact
          path="/dashboard/product/added"
          element={<SendSuccessfull />}
        />
        <Route
          exact
          path="/dashboard/seller/notifications"
          element={<SellerNotifications />}
        />
        <Route
          exact
          path="/dashboard/seller/profile"
          element={<SellerProfile />}
        />
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
      </Route>
      <Route element={<ProtectedRoutes role="buyer" />}>
        <Route exact path="/dashboard/buyer" element={<MainBuyerDashBoard />} />

        <Route
          exact
          path="/dashboard/buyer/notifications"
          element={<BuyerNotifications />}
        />
        <Route
          exact
          path="/dashboard/buyer/profile"
          element={<BuyerProfile />}
        />

        <Route exact path="/dashboard/buyer/orders" element={<BuyerOrders />} />
        <Route exact path="/products/:id" element={<MainProductDetail />} />
        <Route exact path="/products/wishlist" element={<WishList />} />
        <Route exact path="/products/cart" element={<Cart />} />
        <Route exact path="/view-search" element={<ViewSearch />} />
      </Route>
      <Route exact path="/" element={<Landing />}></Route>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<SignUp />} />

      <Route exact path="/auth" element={<TwoFactorAuth />} />
      <Route
        exact
        path="/dashboard/products/added"
        element={<SendSuccessfull />}
      />

      <Route exact path="/password-reset/" element={<ResetPasswd />} />
      <Route exact path="/sendEmail" element={<SendEmail />} />
      <Route exact path="/user/profile" element={<ProfileUpdate />} />
      <Route exact path="/statistic" element={<SellerStatisticPage />} />
      <Route exact path="/users/verify-email" element={<VerifyEmail />} />
      <Route exact path="/payment/status" element={<PaymentComfirmation />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
