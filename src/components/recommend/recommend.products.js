/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsThunk } from "../../redux/features/actions/products";
import { getProduct } from "../../redux/features/slices/products";
import { LoadingMainCards } from "../skeleton/loadingMainCards";
import MainProductCard from "../products/viewProducts/MainProductCard";

function RecommendProducts({selectedProduct }) {
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
  let sortedArray=[]
  if(recommend.length>0){
    sortedArray= recommend.sort((a,b)=> b.average - a.average)
  }
  if (sortedArray.length > 0) {
    viewRecommend = sortedArray.map((rec) => {
      return (
        <div
          key={rec.id}
          className="p-container shadow-sm m-5 py-5 px-3 flex justify-center border-2 rounded-3xl relative"
        >
          <MainProductCard product={rec} categories={categories} />
        </div>
      );
    });
  } else {
    viewRecommend = <LoadingMainCards count={5} /> ;
  }
  return (
    <div className="mt-[5%]">
      <h1 className="text-xl font-bold ml-[5%]">You may also like</h1>
      <div className="flex items-center">{viewRecommend}</div>
    </div>
  );
}

export default RecommendProducts;
