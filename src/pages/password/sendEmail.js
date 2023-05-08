/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'
import React, { useCallback, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form'
import sendEmailSchema from '../../validations/SendEmailSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import style from '../../styles/reset-passwd.module.scss'
import { PropagateLoader } from 'react-spinners'
import { sendEmailThunk } from '../../redux/features/actions/sendEmail'

const server = 'http://localhost:3003/api/v1'
const token = window.location.href.split('token=')[1]

const SendEmail = () => {
  const dispatch = useDispatch()
  const route = useNavigate()
  const { sendEmail } = useSelector((state) => state)
  const { loading, response, error } = sendEmail
  const submitEmail = (data) => {
    dispatch(sendEmailThunk(data))
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(sendEmailSchema),
  })

  useEffect(() => {
    if (response) {
      console.log(response)
      if (response.status === 200) {
        swal
          .fire(
            `Check Your Email Please! `,
            'Email sent successfully! We have sent you a reset password link on your email account',
            'success',
          )
          .then(() => {
            route('/sendEmail')
          })
        toast.success('Successfully')
      }
    }

    if (error) {
      if (error.status == 403) {
        swal
          .fire(`Email Not Found`, 'Sign Up To Have An Account ', 'error')
          .then(() => {
            route('/register')
          })
        toast.error(`${error.message}`)
      }
    }
    return () => {}
  }, [response, error])
  return (
    <div className={style.form}>
      <ToastContainer />
      <div className={style.container} data-testid='emailSent'>
        <h1>
          <b>Reset Your Password</b>
        </h1>
        <p>Please Enter the Email</p>
        <form onSubmit={handleSubmit(submitEmail)}>
          <input
            className="login-input bg-transparent outline-none w-full"
            name="email"
            type="email"
            placeholder="Email"
            {...register('email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <button
            className={` ${loading ? 'hidden' : ''} button login-btn relative`}
          >
            Send
          </button>
          <div
            id="loader"
            className={
              !loading
                ? 'hidden'
                : ' w-100 flex flex-col  justify-center  md:py-4   items-center '
            }
          >
            <PropagateLoader color="#5F3E8E" />
          </div>
        </form>
      </div>
    </div>
  )
}
export default SendEmail
