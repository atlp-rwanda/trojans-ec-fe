import React, { useEffect } from "react";
import ProductsTable from "../../../../components/viewProducts/ProductsTable.js";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesThunk,
  getProductsThunk,
} from "../../../../redux/features/actions/products.js";
import { getProduct } from "../../../../redux/features/slices/products.js";
import Spinner from "../../../../components/viewProducts/spinner.js";
import { Link, useNavigate } from "react-router-dom";

const AllProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { loading, error, products, categories } = useSelector(getProduct);
  useEffect(() => {
    if (token) {
      dispatch(getCategoriesThunk()).then(() => {
        dispatch(getProductsThunk(token));
      });
    } else {
      navigate("/login");
    }
  }, [token]);
  if (error) {
    return <div>Error occured in the process</div>;
  }
  return (
    <div className="all-products">
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <ProductsTable products={products} categories={categories} />
      )}
    </div>
  );
};

export default AllProducts;
