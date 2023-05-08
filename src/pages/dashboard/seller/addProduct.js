import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddProduct from "../../../components/products/addProduct/addProduct";
import SellerMain from "./SellerMain";

function Product() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  return <SellerMain element={<AddProduct />} />;
}

export default Product;
