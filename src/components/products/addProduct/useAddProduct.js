import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux//features/product-redux/categoriesAction";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { firstPageSchema } from "../../../validations/firstFormSchema";
import { secondPageSchema } from "../../../validations/secondPage";
import { useNavigate } from "react-router-dom";

function UseAddProduct() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  if (role === "buyer" || role === "admin") {
    navigate("/");
  }
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
  return {
    handleFilter,
    prevPage,
    firstPage,
    secondPage,
    isLoading,
    error,
    categories,
    imagePreview,
    formData,
    setFormData,
    register,
    register2,
    handleSubmit,
    handleSubmit2,
    errors2,
    errors,
    setFirstPage,
    setSecondPage,
    setValue,
    dispatch,
    setImagePreview,
  };
}

export default UseAddProduct;
