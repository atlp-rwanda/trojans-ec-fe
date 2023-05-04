import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../../styles/reset-passwd.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { resetPasswdThunk } from '../../redux/features/actions/resetPassword'
import resetPasswordSchema from '../../schema/resetPasswordSchema'
import { useForm } from 'react-hook-form'
import Input from '../../components/input'
import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PropagateLoader } from 'react-spinners'
import swal from 'sweetalert2'

const ResetPasswd = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  })
  const dispatch = useDispatch()
  const token = window.location.href.split('token=')[1]
  const { error, loading, resetResponse, message } = useSelector(
    (state) => state.resetPass,
  )
  const navigate = useNavigate()
  useEffect(() => {
    if (loading === false && error.status === false && message) {
      swal
        .fire(
          `Password Changed !`,
          'We have Reset Password Successfully, You can login to your account',
          'success',
        )
        .then(() => {
          navigate('/login')
        })
      toast.success('Successfully')
    }
    console.log(error, resetResponse)
    if (error.status && !loading) {

      swal
      .fire(
        `Session Has Expired!`,
        'Oops, Resend The Email To reset Your Password Successfully',
        'error',
      )
      .then(() => {
        navigate('/sendEmail')
      })
      toast.error(`${message}`)
    }
    return () => {}
  }, [loading, error, message])
  const submit = (data) => {
    console.log(data.password)
    reset()
    dispatch(resetPasswdThunk({ token, password: data.password }))
  }
  return (
    <div className={style.form} data-testid="resetPassword">
      <ToastContainer />
      <form
        onSubmit={
          handleSubmit(submit)
        }
      >
        <div className={style.container}>
          <h1>
            <b>Reset Your Password</b>
          </h1>
          <p>Please Enter the Password</p>

          <Input
            name="password"
            type="password"
            placeHolder="NEW PASSWORD"
            icon="true"
            register={{ ...register('password') }}
            errorText={errors.password?.message}
          />

          <Input
            type="password"
            placeHolder="CONFIRM PASSWORD"
            name="confirmPassword"
            register={{ ...register('confirmPassword') }}
            errorText={errors.confirmPassword?.message}
          />
          {!loading ? (
            <button className="button login-btn relative">Reset Password</button>
          ) : (
            <div
              id="loader"
              className=" w-100 flex flex-col  justify-center  md:py-4   items-center "
            >
              <PropagateLoader color="#5F3E8E" />
            </div>
          )}

          {error && resetResponse?.message && (
            <p className="ml-3 text-red-500 text-sm">{resetResponse.message}</p>
          )}
        </div>
      </form>
    </div>
  )
}
export default ResetPasswd
