import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddProduct from "../../../components/products/addProduct/addProduct";

function Product() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  return <AddProduct />;
}

export default Product;
