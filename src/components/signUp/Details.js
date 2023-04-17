import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserDetailSchema } from "../../schema/signUpSchema";
import Input from '../input';
import Button from '../button';
import { setCurrentStepper,setData } from "../../redux/features/slices/stepper";
import GoogleButton from '../../components/googleButton';
/* istanbul ignore next */
const UserDetails = () => {
    const dispatch = useDispatch();
    const { currentStepper,formPersonalData } = useSelector(
        (state) => state.stepper
      );
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue
      } = useForm({
        resolver: yupResolver(UserDetailSchema),
      });



      useEffect(()=>{
        if(Object.keys(formPersonalData).length>0){
            setValue("names",formPersonalData?.names)
            setValue("email",formPersonalData?.email)
            setValue("password",formPersonalData?.password)
            setValue("cpassword",formPersonalData?.cpassword)
            setValue("gender",formPersonalData?.gender)
            setValue("dob",formPersonalData?.dob)
            setValue("languange",formPersonalData?.languange)
            setValue("currency",formPersonalData?.currency)
            
        }

      },)



      const onSubmitFirst = (data) => {
        dispatch(setData(data));
      dispatch(setCurrentStepper(2))
      };


  return (
        <form
            key={1}
            className="flex flex-col h-full md:h-4/6  justify-around"
            onSubmit={handleSubmit(onSubmitFirst)}
          >
            <div className="md:px-40 px-4 mt-10 flex flex-col md:flex-row h-1/2 justify-center ">
              <div className="md:w-5/12 w-full form-hide ">
                <div className=" flex flex-col justify-between h-full w-full">
                  <Input
                    type="text"
                    class=" border border-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
                    placeHolder="ENTER YOUR USERNAME"
                    register={{ ...register("names") }}
                    errorText={errors.names?.message}
                   
                  />
                  <Input
                    type="text"
                    placeHolder="ENTER YOUR EMAIL"
                    errorText={errors.email?.message}
                    name="email"
                    register={{ ...register("email") }}
            
                  />
                  <Input
                    type="password"
                    placeHolder="ENTER YOUR PASSWORD"
                    icon="true"
                    register={{ ...register("password") }}
                    errorText={errors.password?.message}
                
                  />

                  <Input
                    type="password"
                    placeHolder="RE-ENTER YOUR PASSWORD"
                    name="cpassword"
                    register={{ ...register("cpassword") }}
                    errorText={errors.cpassword?.message}
                
                  />
                </div>
              </div>

              <div className="h-auto bg-black form-hide rounded-xl w-0.5 mx-12"></div>

              <div className="md:w-5/12 w-full form-hide">
                <div className=" flex flex-col justify-between w-full h-full">
                  <select
                    className="input p-3 bg-black bg-opacity-0 border border-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 md:mt-0 mt-5"
                    {...register("gender")}
                    data-testid='gender'
           
                  >
                    <option value="" selected disabled>
                      GENDER
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <span className="text-red-800">{errors.gender?.message}</span>

                  <Input
                   data-testid='dob'
                    type="date"
                    register={{ ...register("dob") }}
                    errorText={errors.dob?.message}
                
                  />
                  <select
                    className="input p-3 bg-black bg-opacity-0 border border-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 md:mt-0 mt-5"
                    {...register("languange")}
                    data-testid='language'
                

                  >
                    <option value="" selected disabled>
                      PREFERRED LANGUAGE
                    </option>
                    <option value="english">English</option>
                    <option value="kinyarwanda">Kinyarwanda</option>
                    <option value="french">French</option>
                  </select>
                  <span className="text-red-800">
                    {errors.languange?.message}
                  </span>
                  <select
                    className=" input p-3 bg-black bg-opacity-0 border border-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 md:mt-0 mt-5"
                    {...register("currency")}
                    data-testid='currency'
               
                  >
                    <option value="" selected disabled>
                      PREFERRED CURRENCY
                    </option>
                    <option value="rwf">Rwf</option>
                    <option value="usd">Usd</option>
                    <option value="eur">Eur</option>
                  </select>
                  <span className="text-red-800">
                    {errors.currency?.message}
                  </span>
                </div>
              </div>
            </div>
            <div
              className= "w-100 flex flex-col  justify-center items-center mt-5"
             
            >
              <Button
         
                className="btn-signup text-white px-36 md:px-48 py-2 md:py-4  text-xl rounded "
                id="next"
                type="submit"
                text="NEXT"
              />
                <GoogleButton/>
                  <div className="w-1/2 flex flex-col justify-center items-center">
          <p className="p-4 text-lg">
            Already have an account? <Link to="/login"><a className="text-purple-800">sign in.</a></Link> 
          </p>
         
        </div>
            </div>
          </form>

  )
}

export default UserDetails
