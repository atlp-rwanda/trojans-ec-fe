import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import TwoFactor from '../components/twoFactor/TwoFactor';
import { getLoginUser } from '../redux/features/slices/user';

const TwoFactorAuth = () => {
    const { user, twoFactorAuth, loading } = useSelector(getLoginUser);
    const navigate = useNavigate();

      useEffect(() => {
        if (!loading && user && !twoFactorAuth) {
          localStorage.setItem("name", user.name);
          localStorage.setItem("user", JSON.stringify(user));
          if(user.role === "admin"){
            return navigate("/admin-dashboard");
          }
          return navigate("/dashboard/seller/products");
          }
        if (!twoFactorAuth) {
          return navigate('/login');
        }
      }, [twoFactorAuth, user, loading, navigate]);

    return(twoFactorAuth &&
        <div data-testid='two-factor-auth' className="two-factor-container">
            <TwoFactor/>
        </div>
    );
}

export default TwoFactorAuth;