import React, { useState } from "react";
import Table from "./Table.js";
import emptySet from "../../../assets/images/empty.png";
import { LoadingTable } from "../../skeleton/LoadingTable.js";
import AddProduct from "../addProduct/addProduct.js";

const ProductsTable = ({ products, categories, loading, response }) => {
  const [addProduct, setAddProducts]= useState(false)

  return (
    <div className="products-table box-border w-[100%] min-h-[80vh] bg-white px-8 py-4 rounded-2xl relative lg:w-full">
      {loading && <LoadingTable />}
      {products.length > 0 && !loading && response && (
        <Table products={products} categories={categories} />
      )}
      {products.length === 0 && !loading && response && (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="flex justify-end w-full">
          <button
          onClick={() => setAddProducts(true)}
          className="bg-primary px-3 py-1 text-white flex justify-center items-center rounded-md mr-2 "
        >
          <ion-icon name="add-outline"></ion-icon>
          <span>Add Product</span>
        </button>
          </div>
         
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
      {addProduct && <AddProduct handleCancel={()=> setAddProducts(false)} />}

    </div>
  );
};

export default ProductsTable;
