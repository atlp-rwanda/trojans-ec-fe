import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import Error from "../shared/Error";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ role }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const auth = () => {
    const token = localStorage.getItem("token");
    if(token){
      const { data } = jwtDecode(token);
      if (data.role === role) {
        setIsAuth(true);
      }
    }else{
      setIsAuth(false)
    }
   
  };
  useEffect(() => {
    auth();
  }, [isAuth]);
  return isAuth ? (
    <Outlet />
  ) : (
    // <Error
    //   code="401"
    //   title="Unauthorized"
    //   description="Denied access to this page"
    //   to="login"
    // />
    navigate("/")
  );
};

export default ProtectedRoutes;
