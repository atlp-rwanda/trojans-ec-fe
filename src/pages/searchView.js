import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Filter from "../components/products/searchProduct/filter";
import "../styles/search.scss";
import MainProductCard from "../components/products/viewProducts/MainProductCard";
import { LoadingMainCards } from "../components/skeleton/loadingMainCards";

function ViewSearch() {
  const { search, cat } = useSelector((state) => state);
  const { searched, isLoading } = search;
  let viewProducts;
  if (Array.isArray(searched.search)) {
    viewProducts = searched.search.map((prod) => {
      return (
        <div
          key={prod.id}
          className="p-container shadow-sm m-5 py-5 px-3 flex justify-center border-2 rounded-3xl relative"
        >
          <MainProductCard product={prod} categories={cat.categories} />
        </div>
      );
    });
  } else if (searched.search) {
    viewProducts = (
      <p className="text-2xl ml-[2%]">
        {searched.search.message ? "No match found" : ""}
      </p>
    );
  }
  return (
    <div>
      <Navbar />
      <div className=" px-5 my-10">
        <Filter />
        <div className=" w-full  rounded-xl py-4 screen-base:w-full">
          <h1 className="font-black text-xl ml-[2%]">Results</h1>
          <div className="flex items-center flex-wrap mt-5 screen-base:block">
            {isLoading ? <LoadingMainCards count={10} /> : viewProducts}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewSearch;
