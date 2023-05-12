import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TwoFactor from "../components/twoFactor/TwoFactor";
import { getLoginUser } from "../redux/features/slices/user";

const TwoFactorAuth = () => {
  const { user, twoFactorAuth, loading } = useSelector(getLoginUser);
  const navigate = useNavigate();

  useEffect(() => {
    /* istanbul ignore next */
    if (!loading && user && !twoFactorAuth) {
      localStorage.setItem("name", user.name);
      localStorage.setItem("user", JSON.stringify(user));
      if (user.role === "admin") {
        return (window.location.href =
          window.location.href.split("/auth")[0] + "/dashboard/admin/users");
      }
      return (window.location.href =
        window.location.href.split("/auth")[0] + "/dashboard/seller");
    }
    if (!twoFactorAuth) {
      return navigate("/login");
    }
  }, [twoFactorAuth, user, loading, navigate]);

  return (
    twoFactorAuth && (
      <div data-testid="two-factor-auth" className="two-factor-container">
        <TwoFactor />
      </div>
    )
  );
};

export default TwoFactorAuth;
