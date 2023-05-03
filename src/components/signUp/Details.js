/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserDetailSchema } from "../../validations/signUpSchema";
import Input from '../shared/Input';
import Button from '../shared/Button';
import { setCurrentStepper,setData } from "../../redux/features/slices/stepper";
import GoogleButton from '../shared/GoogleButton';

const UserDetails = () => {
  const dispatch = useDispatch()
  const { currentStepper, formPersonalData } = useSelector(
    (state) => state.stepper,
  )
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(UserDetailSchema),
  })
  /* istanbul ignore next */
  useEffect(() => {
    if (Object.keys(formPersonalData).length > 0) {
      setValue('names', formPersonalData?.names)
      setValue('email', formPersonalData?.email)
      setValue('password', formPersonalData?.password)
      setValue('cpassword', formPersonalData?.cpassword)
      setValue('gender', formPersonalData?.gender)
      setValue('dob', formPersonalData?.dob)
      setValue('languange', formPersonalData?.languange)
      setValue('currency', formPersonalData?.currency)
    }
  })

  const onSubmitFirst = (data) => {
    dispatch(setData(data))
    dispatch(setCurrentStepper(2))
  }

  return (
    <form
      key={1}
      className="flex flex-col h-full md:h-4/6 "
      onSubmit={handleSubmit(onSubmitFirst)}
    >
      <div className="md:px-40 px-4 mt-10 flex flex-col md:flex-row h-1/2 justify-center ">
        <div className="md:w-1/4 w-full form-hide ">
          <div className=" flex flex-col justify-between h-full w-full">
            <Input
              type="text"
              class=" border border-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
              placeHolder="ENTER YOUR USERNAME"
              register={{ ...register('names') }}
              errorText={errors.names?.message}
            />
            <Input
              type="text"
              placeHolder="ENTER YOUR EMAIL"
              errorText={errors.email?.message}
              name="email"
              register={{ ...register('email') }}
            />
            <Input
              type="password"
              placeHolder="ENTER YOUR PASSWORD"
              icon="true"
              register={{ ...register('password') }}
              errorText={errors.password?.message}
            />

            <Input
              type="password"
              placeHolder="RE-ENTER YOUR PASSWORD"
              name="cpassword"
              register={{ ...register('cpassword') }}
              errorText={errors.cpassword?.message}
            />
          </div>
        </div>

        <div className="h-auto bg-black form-hide rounded-xl w-0.5 mx-10"></div>

        <div className="md:w-1/4 w-full form-hide">
          <div className=" flex flex-col justify-between w-full h-full">
            <select
              className="signup-input bg-transparent outline-none w-full text-gray-600"
              {...register('gender')}
              data-testid="gender"
            >
              <option value="" selected disabled>
                GENDER
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <span className="text-red-800">{errors.gender?.message}</span>

            <Input
              type="date"
              register={{ ...register('dob') }}
              errorText={errors.dob?.message}
              testId="date-input"
            />
            <select
              className="signup-input bg-transparent outline-none w-full text-gray-600"
              {...register('languange')}
              data-testid="language"
            >
              <option value="" selected disabled>
                PREFERRED LANGUAGE
              </option>
              <option value="english">English</option>
              <option value="kinyarwanda">Kinyarwanda</option>
              <option value="french">French</option>
            </select>
            <span className="text-red-800">{errors.languange?.message}</span>
            <select
              className="signup-input bg-transparent outline-none w-full text-gray-600"
              {...register('currency')}
              data-testid="currency"
            >
              <option value="" selected disabled>
                PREFERRED CURRENCY
              </option>
              <option value="rwf">Rwf</option>
              <option value="usd">Usd</option>
              <option value="eur">Eur</option>
            </select>
            <span className="text-red-800">{errors.currency?.message}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col  justify-center items-center mt-5 ">
      <button
            className="button login-btn relative"
            type="submit"
            data-testid="loginbtn"
          >
            NEXT
            </button>
        <GoogleButton />
        <div className="w-1/2 flex flex-col justify-center items-center">
          <p className="p-4 text-lg">
            Already have an account?{' '}
            <Link to="/login">
              <a className="text-purple-800">sign in.</a>
            </Link>
          </p>
        </div>
      </div>
    </form>
  )
}

export default UserDetails
