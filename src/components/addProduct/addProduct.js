import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../../redux/features/product-redux/productAction";
import { getCategories } from "../../redux/features/product-redux/categoriesAction";
import gallery from "../../images/icons8-image-gallery-64.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { firstPageSchema } from "../../validations/firstFormSchema";
import { secondPageSchema } from "../../validations/secondPage";
import Spinner from "../spinner";
import { useNavigate } from "react-router-dom";
import { InputField } from "../inputField";
import { SelectOption } from "./selectOption";
import { handleImageUpload } from "../../helpers/ImageUpload";
import { nextPage } from "../../helpers/nextPage";
import { submitProductForm } from "../../helpers/submitForm";
function AddProduct() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(firstPageSchema),
  });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    setValue,
    formState: { errors: errors2 },
  } = useForm({ resolver: yupResolver(secondPageSchema) });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const { cat, prod } = useSelector((state) => {
    return state;
  });
  const { isLoading, error, message } = prod;
  const { categories } = cat;
  const [imagePreview, setImagePreview] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    categoryId: 0,
    quantity: "",
    expiryDate: "",
    bonus: 0,
    image: [],
  });
  const [firstPage, setFirstPage] = useState(true);
  const [secondPage, setSecondPage] = useState(false);

  const prevPage = () => {
    setFirstPage(true);
    setSecondPage(false);
  };
  const handleFilter = (id) => {
    return setImagePreview((prevState) => {
      return prevState.filter((image) => image.props.id !== id);
    });
  };
  if (message.message == "Item added") {
    navigate("/dashboard/product/added");
  }
  return (
    <div className="flex flex-col justify-center items-center box-border w-[100%] min-h-[90vh] bg-white p-8 rounded-2xl my-8 mx-auto relative lg:w-[70%]">
      <div className=" lg:w-1/2">
        <Helmet>
          <title>Trojans Store | Add Product</title>
        </Helmet>
        <h1 className="text-center text-2xl">Add A Product</h1>
        {firstPage && (
          <form
            onSubmit={handleSubmit((data) => {
              nextPage(data, setFirstPage, setFormData, setSecondPage);
            })}
            name="formData"
          >
            <div className="input-div">
              <label htmlFor="name">Name</label>
              <InputField
                type="text"
                className="input-field"
                placeholder="Name of the product"
                name="name"
                data-testid="name"
                register={register("name")}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="input-div">
              <label htmlFor="price">Price</label>
              <InputField
                type="number"
                className="input-field"
                placeholder="Price of the product"
                name="price"
                data-testid="price"
                register={register("price")}
              />
              {errors.price && <p className="error">{errors.price.message}</p>}
            </div>
            <div>
              <label htmlFor="categoryId">Category</label>
              <SelectOption
                className="input-field"
                name="categoryId"
                data-testid="categoryId"
                default="---select Category"
                options={categories}
                register={register("categoryId")}
              />
              {errors.categoryId && (
                <p className="error">{errors.categoryId.message}</p>
              )}
            </div>
            <div className="input-div">
              <label htmlFor="quantity">Quantity</label>
              <InputField
                type="number"
                className="input-field"
                placeholder="Number of Quantity"
                name="quantity"
                data-testid="quantity"
                register={register("quantity")}
              />
              {errors.quantity && (
                <p className="error">{errors.quantity.message}</p>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center my-5">
                <p
                  className={`px-2 border mx-2 cursor-pointer bg-primaryColor ${
                    firstPage ? "page" : ""
                  }`}
                  onClick={prevPage}
                >
                  1
                </p>
                <p>of</p>
                <p
                  className={`px-2 border mx-2 cursor-pointer bg-primaryColor ${
                    secondPage ? "page" : ""
                  }`}
                >
                  {" "}
                  2{" "}
                </p>
              </div>
              <div>
                <button
                  className="text-center next mt-3 px-8 py-1 text-white rounded-lg cursor-pointer"
                  data-testid="submit-first-form"
                >
                  {" "}
                  Next{" "}
                </button>
              </div>
            </div>
          </form>
        )}
        {secondPage && (
          <form
            onSubmit={handleSubmit2(() => {
              submitProductForm(formData, dispatch, submitForm);
            })}
          >
            <div className="input-div">
              <label htmlFor="expiryDate">Expiry Date</label>
              <InputField
                type="date"
                className="input-field"
                placeholder="Expiry date of the product"
                name="expiryDate"
                data-testid="expiryDate"
                register={register2("expiryDate", {
                  setValueAs: (value) => {
                    setFormData((prevState) => {
                      return {
                        ...prevState,
                        expiryDate: value,
                      };
                    });
                    return value;
                  },
                })}
              />
              {errors2.expiryDate && (
                <p className="error">{errors2.expiryDate.message}</p>
              )}
            </div>
            <div className="input-div">
              <label>Bonus</label>
              <InputField
                type="number"
                className="input-field"
                placeholder="Bonus on the product"
                name="bonus"
                data-testid="bonus"
                register={register2("bonus", {
                  setValueAs: (value) => {
                    setFormData((prevState) => {
                      return {
                        ...prevState,
                        bonus: value,
                      };
                    });
                    return value;
                  },
                })}
              />
              {errors2.bonus && (
                <p className="error">{errors2.bonus.message}</p>
              )}
            </div>
            <input
              type="file"
              onChange={(event) => {
                handleImageUpload(
                  event,
                  setValue,
                  setFormData,
                  setImagePreview,
                  handleFilter
                );
              }}
              multiple
              id="image"
              className="hidden"
              aria-label="image-upload"
            />
            <div className="my-4 cursor-pointer">
              <div className="label w-64 py-4 px-10 text-center rounded-xl">
                <label
                  htmlFor="image"
                  className="flex justify-center items-center "
                >
                  <img
                    src={gallery}
                    alt=""
                    className="w-6 h-6 cursor-pointer"
                  />
                  <p className="text-white pl-2 cursor-pointer">
                    Choose Photos
                  </p>
                </label>
              </div>
              {errors2.image && (
                <p className="text-red-500 text-sm">{errors2.image.message}</p>
              )}
            </div>
            <div className="flex mb-4 flex-wrap" data-testid="imagePreview">
              {imagePreview}
            </div>
            <button
              type="submit"
              className="submit text-white px-4 py-2 w-full rounded-xl"
              data-testId="submit-second-form"
            >
              {isLoading ? <Spinner /> : "Add Product"}
            </button>
            <div className="flex items-center my-5">
              <p
                className={`px-2 border mx-2 cursor-pointer bg-primaryColor ${
                  firstPage ? "page" : ""
                }`}
                onClick={prevPage}
              >
                1
              </p>
              <p>of</p>
              <p
                className={`px-2 border mx-2 cursor-pointer bg-primaryColor ${
                  secondPage ? "page" : ""
                }`}
              >
                {" "}
                2{" "}
              </p>
            </div>
          </form>
        )}

        {error && <p> an error occurred: {error} </p>}
      </div>
    </div>
  );
}

export default AddProduct;
