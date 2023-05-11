import React  from "react";
import { submitForm } from "../../../redux/features/product-redux/productAction";
import gallery from "../../../assets/images//icons8-image-gallery-64.png";
import Spinner from "../viewProducts/spinner";
import { InputField } from "../../shared/InputField";
import { SelectOption } from "../../shared/SelectOption";
import { handleImageUpload } from "../../../helpers/ImageUpload";
import { nextPage } from "../../../helpers/nextPage";
import { submitProductForm } from "../../../helpers/submitForm";
import useAddProduct from "./useAddProduct";
function AddProduct({handleCancel}) {
  const {
    handleSubmit,
    firstPage,
    setFirstPage,
    setFormData,
    setSecondPage,
    register,
    register2,
    errors2,
    errors,
    categories,
    prevPage,
    secondPage,
    dispatch,
    handleSubmit2,
    formData,
    isLoading,
    imagePreview,
    setValue,
    handleFilter,
    setImagePreview,
  } = useAddProduct();

  return (
    <div className="absolute  top-[8%] left-[15%] screen-base:left-[0%] w-6/12 screen-base:w-full bg-white  border-primary-color border rounded-lg">
      <div className="overflow-hidden py-10 mx-[5%] relative">
        <h1 className="text-center text-2xl">Add A Product</h1>
        {firstPage && (
          <form
            onSubmit={handleSubmit((data) => {
              nextPage(data, setFirstPage, setFormData, setSecondPage);
            })}
            name="formData"
          >
                   <div className="input-div">
            <InputField
              type="text"
              className="input-field"
              placeholder="Name of the product"
              name="name"
              label="Name"
              inputError={errors.name}
              data_testid="name"
              register={register("name")}
            />
          </div>
          <div className="input-div">
            <InputField
              type="number"
              className="input-field"
              placeholder="Price of the product"
              name="price"
              label="Price"
              inputError={errors.price}
              data_testid="price"
              register={register("price")}
            />
          </div>
          <div>
            <SelectOption
              className="input-field"
              name="categoryId"
              data_testid="categoryId"
              defaultSelected="---select Category"
              options={categories}
              selectError={errors.categoryId}
              register={register("categoryId")}
            />
          </div>
          <div className="input-div">
            <InputField
              type="number"
              className="input-field"
              placeholder="Number of Quantity"
              name="quantity"
              label="Quantity"
              inputError={errors.quantity}
              data_testid="quantity"
              register={register("quantity")}
            />
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
              <div className="flex">
                <div onClick={handleCancel}
                  className="text-center next mt-3 px-5 py-1 text-white rounded-lg cursor-pointer"
                >
                  cancel
                </div>
                <button
                  className="text-center next mt-3 px-6 py-1 text-white rounded-lg cursor-pointer mx-[2px]"
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
            <InputField
              type="date"
              className="input-field"
              placeholder="Expiry date of the product"
              name="expiryDate"
              data_testid="expiryDate"
              label="Expiry Date"
              inputError={errors2.expiryDate}
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
          </div>
          <div className="input-div">
            <InputField
              type="number"
              className="input-field"
              placeholder="Bonus on the product"
              name="bonus"
              data_testid="bonus"
              label="Bonus"
              inputError={errors2.bonus}
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
              <div className="label w-64 py-4 px-10 text-center rounded-xl screen-base">
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
              {isLoading ? <Spinner withoutText={true} /> : "Add Product"}
            </button>
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
                  2
                </p>
              </div>
                <div onClick={handleCancel}
                  className="text-center next mt-3 px-8 py-1 text-white rounded-lg cursor-pointer"
                >
                  cancel
                </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddProduct;
