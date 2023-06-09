/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/LOGO.svg";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { billingSchema, UserDetailSchema } from "../validations/signUpSchema";
import { PropagateLoader } from "react-spinners";
import BackImage from "../assets/images/back.svg";
import { registerUser } from "../redux/features/actions/SignUp";
import { setCurrentStepper } from "../redux/features/slices/stepper";
import GoogleButton from '../components/shared/GoogleButton';
// import GoogleButton from "../components/googleButton";
import Loader from "../components/shared/TwoFactorLoader";

import Details from "../components/signUp/Details";
import Logo from "../components/logo";
import Spinner from "../components/products/viewProducts/spinner";
const signUp = () => {
  const dispatch = useDispatch()

  const { loading, response, error, success } = useSelector(
    (state) => state.signUp
  );

  const { currentStepper, formPersonalData } = useSelector(
    (state) => state.stepper
  );
  const navigate = useNavigate();

  const {
    register: billingRegister,
    handleSubmit: handleFinal,
    formState: { errors: billingErros },
  } = useForm({
    resolver: yupResolver(billingSchema),
  })
/* istanbul ignore next */
  useEffect(() => {   
    if(response){
         if(response.status===201){
           swal
       .fire(
         `Account created successfully`,
         "We have sent you a verification link on your email account, check and verify",
         "success"
       )
       .then((e) => {
         navigate("/login");
     
       });
     toast.success("Successfully");
     }else{
     if (response.response.data.status == 400) {
       toast.error(`${response.response.data.error[0]}`);
     } else{
       toast.error(`email already exist`);
     }
       if(response.message == "Network Error") {
     
        swal.fire('Oops', 'Check your Internet Connections.', 'error');
        return () => {};
       }
     }
     }
     
     if(error){
     toast.error(`${error.message}`);
     }
return () => {};
  }, [response,error]);


  const onSubmit = (data) => {
    const formData = {
      name: formPersonalData.names,
      email: formPersonalData.email,
      password: formPersonalData.password,
      gender: formPersonalData.gender,
      preferredLanguage: formPersonalData.languange,
      preferredCurrency: formPersonalData.currency,
      birthdate: formPersonalData.dob,
      city: data.city,
      province: data.province,
      postalCode: data.postalcode,
      street: data.street,
      country: data.country,
    };
    dispatch(registerUser(formData));
  };
  return (
    <div id="signup-container-div" data-testid="signup-page">
      <>
        <ToastContainer />
        <div className="bg-signUp  h-full box-border w-full min-h-full">
        <div className="flex items-center mx-5  mt-5 md:mt-0  md:h-1/6 w-[90vw]">
        <Logo />
      </div>

          <div className="w-full flex mt-12 justify-center">
            <h2 className="text-purple-900"> {currentStepper==1?"Personal Details ":"Billing Address"} </h2>
          </div>

        {currentStepper == 1 ? (
        <Details/>
        ) : (
          <form
          key={2}
            className="flex flex-col h-full md:h-4/6  justify-around"
            onSubmit={handleFinal(onSubmit)}
          >
            <div className="md:px-40 px-4 mt-10  flex flex-col md:flex-row h-full justify-center ">
              <div className="md:w-5/12 w-full" id="billing">
                <div className=" flex flex-col justify-between h-full w-full">
                  <Input
                    type="text"
                    class=" border border-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
                    placeHolder="COUNTRY"
                    required
                    register={{ ...billingRegister("country") }}
                    errorText={billingErros.country?.message}
                    // value={formPersonalData?.names}
                  />
                  <Input
                    type="text"
                    placeHolder="CITY"
                    required
                    register={{ ...billingRegister("city") }}
                    errorText={billingErros.city?.message}
                  />
                  <Input
                    type="text"
                    placeHolder="PROVINCE"
                    required
                    register={{ ...billingRegister("province") }}
                    errorText={billingErros.province?.message}
                  />
                  <Input
                    type="text"
                    placeHolder="STREET"
                    required
                    register={{ ...billingRegister("street") }}
                    errorText={billingErros.street?.message}
                  />
                  <Input
                    type="text"
                    placeHolder="POSTAL CODE"
                    register={{ ...billingRegister("postalcode") }}
                    errorText={billingErros.postalcode?.message}
                  />
                </div>
              </div>
            </div>
            <div
              className={
                "w-100 flex flex-col  justify-center items-center mt-3"
              }
            >
  
         
      
         
               <button
            className="button login-btn relative"
            type="submit"
            data-testid="loginbtn"
          >
           <span className={`${loading ? "hidden" : ""}`}> SIGN UP</span>
            {loading ? <Spinner withoutText={true} /> : null}
          </button>
        

            
                <GoogleButton />
                <div className="w-1/2 flex flex-col justify-center items-center">
                  <p className="p-4 text-lg">
                    Already have an account?{" "}
                    <Link to="/login">
                      <a href="/login" className="text-purple-800">
                        sign in.
                      </a>
                    </Link>
                  </p>
                  <div
                  data-testid="back-first-page" 
                    className=" px-5 py-2 md:px-2 "
                    onClick={() => dispatch(setCurrentStepper(1))}
                  >
                    <img
                      src={BackImage}
                      alt=""
                      onClick={() => dispatch(setCurrentStepper(1))}
                      id="back"
                      data-testid="back-first-image" 
                    />
                  </div>
                </div>
              </div>
            </form>
         )}  
  
      </div>
    </>
    </div>
  )
}

export default signUp
