import React, { useEffect, useState } from "react";
import ProductsTable from "../../../components/viewProducts/ProductsTable";
import {
  getCategoriesThunk,
  getProductsThunk,
} from "../../../redux/features/actions/products.js";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/features/slices/products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ErrorHandler from "../../../components/shared/ErrorHandler";
import SellerMain from "./SellerMain";
const SellerProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { loading, error, products, categories, response } =
    useSelector(getProduct);
  // useEffect(() => {
  //   if (token) {
  //     const { data } = parseJwt(token);
  //     if (data.role !== "seller") {
  //       navigate("/");
  //     }
  //   }
  // }, [token]);
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };
  useEffect(() => {
    if (token) {
      dispatch(getCategoriesThunk()).then(() => {
        dispatch(getProductsThunk(token));
      });
    } else {
      navigate("/login");
    }
  }, [token]);
  return (
    <div className="">
      <ToastContainer />
      <ErrorHandler loading={loading} error={error} />
      <>
        {!error.status && (
          <SellerMain
            element={
              <ProductsTable
                products={products}
                categories={categories}
                loading={loading}
                response={response}
              />
            }
          />
        )}
      </>
    </div>
  );
};

export default SellerProducts;
