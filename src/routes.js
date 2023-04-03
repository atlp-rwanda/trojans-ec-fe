import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/homepage";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import TwoFactorAuth from "./components/twoFactorAuth";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Landing />}></Route>

      <Route exact path="/login" element={<Login />} />

      <Route
      exact path="/auth"
        element={
          <TwoFactorAuth />
        }
      />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
