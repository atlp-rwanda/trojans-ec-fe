/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import StarRating from "./StarRating.js";
import Images from "./Images.js";
import Categorize from "./Categorize.js";
import SmallTable from "./SmallTable.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  formatDate,
  formatString,
  formatExpired,
} from "../../../helpers/Format.js";
import Button from "../../shared/Button.js";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ product, categories }) => {
  const { products,loading } = useSelector(
    (state) => state.product,
  )

  const [isloading, setLoading]=useState(false);
  const [product1,setProduct]=useState(product);
  const token = localStorage.getItem("token");

  const handleAvailability=()=>{
    setLoading(true);
    const axios = require('axios');

  let config = {
  method: 'patch',
  maxBodyLength: Infinity,
  url: `${process.env.BACKEND_URL}/products/${product.id}`,
  headers: { 
    'Authorization': `Bearer ${token}`
  }};
  axios.request(config)
.then((response) => {
  const data=response.data;
   if(data.status=='200'){
    let obj={...product1,available:!product1.available};

    setProduct(obj);

   toast.success(`${data.message}`);
   
   }
   setLoading(false)
})
.catch((error) => {
  console.log(error)
  toast.error(`${error.response.data.message}`);
  setLoading(false)
});



  }


  const { images } = product1;
  if (images) {
    return (
      <div className="product-card p-5 bg-whiteColor mx-auto rounded-md shadow flex flex-col justify-center items-center lg:flex-row lg:items-center lg:max-h-[70vh]">
        <ToastContainer/>
        <div className="w-1/4 flex justify-center items-start sm:w-1/2 sm:mx-auto">
          <Images images={images} />
        </div>
        <div className="w-full lg:w-1/2">
          <div>
            <div className=" flex justify-between">
              <h1 className="sm:text-3xl text-2xl mb-3 font-semibold">
                {product1.name}
              </h1>
              <span className="bg-primary font-regular text-white text-center px-3 py-1 rounded-xl  min-w-[120px] leading-5 h-8 mx-10">
                {formatExpired(product1.expired)}
              </span>
            </div>
            <h2 className="font-regular">
              Category:{" "}
              <span className="text-primary">
                <Categorize id={product1.categoryId} categories={categories} />
              </span>
            </h2>
            <div className="font-regular grid grid-cols-2 justify-around">
              <h2 className="">
                Quantity:{" "}
                <span className="text-primary">{product1.quantity}</span>
              </h2>
              <h2 className="">
                Availability:{" "}
                <span className="text-primary">
                  {formatString(product1.available.toString())}
                </span>
              </h2>
              <h2 className="">
                Price: <span className="text-primary">${product1.price}</span>
              </h2>
              <h2 className="">
                Bonus: <span className="text-primary">{product1.bonus}</span>
              </h2>
            </div>
          </div>
          <div className="my-4">
            <SmallTable
              headers={["Created At", "Last Update", "Date Of Expiration"]}
              data={[
                {
                  one: formatDate(product1.createdAt),
                  two: formatDate(product1.updatedAt),
                  three: formatDate(product1.expiryDate),
                },
              ]}
            />
          </div>
          <div className="flex items-center">
            <div>

            <h1 className="text-2xl font-semibold">Ratings</h1>
            {product1.message && (
              <p className="font-normal">{product1.message}</p>
            )}
            {product1.average != 0 && (
              <p className="text-2xl font-semibold">
                <span className="rating-number mr-3">{product1.average}</span>
                <StarRating rating={product1.average} />
              </p>

            )}
                          
                          </div>
                          <div>
                            <Button text={product1.available?"Mark it Unavailable":"Mark it Available"} loading={isloading} className="bg-primary font-regular text-white text-center px-3 py-1 rounded-xl  min-w-[120px] leading-5 h-8 mx-10 " onclick={()=>handleAvailability()} disable={false} />
                          </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductCard;
