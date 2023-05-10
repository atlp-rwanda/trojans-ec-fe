/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsThunk } from "../../redux/features/actions/products";
import { getProduct } from "../../redux/features/slices/products";
import { LoadingMainCards } from "../skeleton/loadingMainCards";
import MainProductCard from "../products/viewProducts/MainProductCard";

function RecommendProducts({ selectedProduct }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);
  const { products, categories } = useSelector(getProduct);
  const selectedCategoryId = selectedProduct.categoryId;
  const selectedProductId = selectedProduct.id;
  let recommend = [];
  if (selectedCategoryId && selectedProductId) {
    recommend = products.filter((prod) => {
      return (
        prod.categoryId == selectedCategoryId && prod.id != selectedProductId
      );
    });
  }
  let viewRecommend;
  let sortedArray = [];
  if (recommend.length > 0) {
    sortedArray = recommend.sort((a, b) => b.average - a.average);
  }
  if (sortedArray.length > 0) {
    viewRecommend = sortedArray.slice(0, 4).map((rec) => {
      return (
        <MainProductCard product={rec} categories={categories} key={rec.id} />
      );
    });
  } else {
    viewRecommend = <LoadingMainCards count={4} />;
  }
  return (
    <div className="mt-[5%] flex flex-col justify-center items-start">
      <h1 className="text-xl ml-[5%] font-bold">You may also like</h1>
      <div className="flex justify-center items-center w-[100vw]">
        <div className="flex justify-start items-center w-[95%]">
          {viewRecommend}
        </div>
      </div>
    </div>
  );
}

export default RecommendProducts;
