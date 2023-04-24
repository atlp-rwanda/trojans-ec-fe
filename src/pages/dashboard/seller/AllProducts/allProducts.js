import React, { useEffect } from "react";
import ProductsTable from "../../../../components/viewProducts/ProductsTable.js";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesThunk,
  getProductsThunk,
} from "../../../../redux/features/actions/products.js";
import { getProduct } from "../../../../redux/features/slices/products.js";
import Spinner from "../../../../components/viewProducts/spinner.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import parseJwt from "../../../../helpers/parseJwt.js";
import ErrorHandler from "../../../../components/shared/ErrorHandler.js";

const AllProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { loading, error, products, categories } = useSelector(getProduct);
  useEffect(() => {
    if (token) {
      const { data } = parseJwt(token);
      if (data.role !== "seller") {
        navigate("/");
      }
    }
  }, [token]);
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
    <div className="all-products">
      <ToastContainer />
      {loading && <Spinner />}
      <ErrorHandler loading={loading} error={error} />
      {!loading && !error.status && (
        <ProductsTable products={products} categories={categories} />
      )}
    </div>
  );
};

export default AllProducts;
