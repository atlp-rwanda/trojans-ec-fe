import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "../../shared/InputField";
import { SelectOption } from "../../shared/SelectOption";
import { getProduct, setPages, setProductToUpdate } from "../../../redux/features/slices/products";
import { UpdateProductSchema } from "../../../validations/updateProduct";
import ImagePreview from "./ImagePreview"
import { updateProductThunk } from "../../../redux/features/actions/products";
import FileInput from "../../shared/FileInput";
import ChooseFiles from "../../shared/ChooseFiles";
import Pagination from "./UpdateProdPagination";
import Button from "../../shared/Button";
import Header from "../../shared/Header.js";
import Loader from "../../shared/TwoFactorLoader";
import Spinner from "../../products/viewProducts/spinner";

const UpdateProductForm = () => {
    const dispatch = useDispatch();
    const {
        firstPage,
        secondPage,
        productToUpdate,
        categories,
        updating,
        cotegoriesLoading,
    } = useSelector(getProduct);
    const [uploaded, setUploaded] = useState(false);
    const [imagePreview, setImagePreview] = useState(productToUpdate.images);
    const { register, handleSubmit, setValue, getValues, formState: { errors }, trigger } = useForm({
        resolver: yupResolver(UpdateProductSchema),
        defaultValues: {
            name: productToUpdate.name,
            price: productToUpdate.price,
            categoryId: productToUpdate.categoryId,
            quantity: productToUpdate.quantity,
            bonus: productToUpdate.bonus,
            expiryDate: new Date(productToUpdate.expiryDate).toISOString().split('T')[0],
        }
    })
  
    const nextPage = async () => {
      const isFirstPageValid = await trigger(["name", "price", "categoryId", "quantity"]);
      if(isFirstPageValid){
          return dispatch(setPages({firstPage: false, secondPage: true }));
      }
      return;
    }

    const prevPage = () =>  dispatch(setPages({firstPage: true, secondPage: false }));
    const onSubmit = (data) => dispatch(updateProductThunk({updatedProductData: data, productId: productToUpdate.id}));
    const cancelUpdate = () => dispatch(setProductToUpdate({ productToUpdate: null }));

    const handleUpload = (e) => {
        const images = e.target.files;
        const imageArray = Array.from(images);
        setValue("image", imageArray);
        const newImageArray = imageArray.map((imag) => URL.createObjectURL(imag));
        setImagePreview(newImageArray);
        setUploaded(true);
        return;
    }
    /* istanbul ignore next */
    const handleFilter = (index) => {
        const formImages = getValues("image");
        const newFormImages = formImages.filter((image, idx) => idx !== index);
        setValue("image", newFormImages);
        const newImageArray = newFormImages.map((imag) => URL.createObjectURL(imag));
        setImagePreview(newImageArray);
        return;
      };

    return(
        <div className={`update-product-form ${cotegoriesLoading? "height-loading": ""}`}>
        {cotegoriesLoading?<Spinner/>: 
        <div data-testid="update-product-form" className="m-auto flex justify-center update-product-div">
            <Header textContent="Update Product" headerClassName="update-product-header mb-4 mt-20" className="p-title m-auto mb-0 font-semibold text-2xl text-center text-primary"/>
            <form onSubmit={handleSubmit(onSubmit)}>
                {firstPage && (
                    <>
                    <InputField
                    name="name"
                    label="Name"
                    placeholder="Name of the product"
                    data_testid="update-name"
                    register={register("name")}
                    className="bg-transparent outline-none update-product-input"
                    labelClassName="update-input-label"
                    inputError={errors.name}
                    />
                    <InputField
                    name="price"
                    label="Price"
                    placeholder="Price of the product"
                    data_testid="update-price"
                    register={register("price")}
                    className="bg-transparent outline-none update-product-input"
                    labelClassName="update-input-label"
                    inputError={errors.price}
                    />
                    <SelectOption
                    className="bg-transparent outline-none update-product-input"
                    name="categoryId"
                    label="Category"
                    data_testid="update-category"
                    labelClassName="update-input-label"
                    options={categories}
                    register={register("categoryId")}
                    defaultValue="---select category"
                    selectError={errors.categoryId}
                    />
                    <InputField
                    name="quantity"
                    label="Quantity"
                    placeholder="Number of Quantity"
                    data_testid="update-quantity"
                    register={register("quantity")}
                    className="bg-transparent outline-none update-product-input"
                    labelClassName="update-input-label"
                    inputError={errors.quantity}
                    />
                </>
                )}
                {secondPage && (
                    <>
                        <InputField
                        type="date"
                        name="expiryDate"
                        data_testid="update-exp-date"
                        label="Expiry Date"
                        placeholder="Expiry Date of the product"
                        register={register("expiryDate")}
                        className="bg-transparent outline-none update-product-input"
                        labelClassName="update-input-label"
                        inputError={errors.expiryDate}
                        />
                        <InputField
                        name="bonus"
                        label="Bonus"
                        data_testid="update-bonus"
                        placeholder="Bonus of the product"
                        register={register("bonus")}
                        className="bg-transparent outline-none update-product-input"
                        labelClassName="update-input-label"
                        inputError={errors.bonus}
                        />
                        <div>
                        <FileInput
                        type="file"
                        className="hidden"
                        data_testid="update-upload-input"
                        labelTestId="update-upload-label"
                        inputError={errors.image}
                        multiple={true}
                        name="image"
                        onChange={handleUpload}
                        labelClassName="flex justify-center items-center label upload-field-styles cursor-pointer"
                        label={<ChooseFiles message="Choose Photos"/>}
                        />
                        <ImagePreview images={imagePreview} handleFilter={handleFilter} uploaded={uploaded}/> 
                        </div>
                        <Button
                        type="submit"
                        text={updating?<Loader data_testid="update-loader"/>:"Update"}
                        className="submit text-white px-4 py-2 w-full update-product-input"
                        disable={updating}
                        />
                    </>
                )}
                <Pagination
                cancelUpdate={cancelUpdate}
                firstPage={firstPage}
                secondPage={secondPage}
                prevPage={prevPage}
                nextPage={nextPage}
                />
            </form>
        </div>
        }
        </div>
    );
}

export default UpdateProductForm;