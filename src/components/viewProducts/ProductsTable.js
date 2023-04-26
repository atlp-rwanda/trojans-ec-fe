import React from "react";
import Table from "./Table.js";
import emptySet from "../../assets/images/empty.png";
import { LoadingTable } from "../skeleton/LoadingTable.js";
const ProductsTable = ({ products, categories, loading, response }) => {
  console.log(response);
  return (
    <div className="products-table box-border w-[100%] min-h-[80vh] bg-white px-8 py-4 rounded-2xl relative lg:w-full">
      {loading && <LoadingTable />}
      {products.length > 0 && !loading && response && (
        <Table products={products} categories={categories} />
      )}
      {products.length === 0 && !loading && response && (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img
            src={emptySet}
            alt="empty-set-icon"
            className="w-52 h-52 opacity-70"
          />
          <h1 className="font-bold text-5xl text-primary mb-4">
            No products yet
          </h1>
          <p className="font-bold text-xl opacity-60">
            You need to add products first
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductsTable;
