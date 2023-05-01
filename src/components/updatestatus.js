/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import disableThunk from '../redux/features/actions/disable'
import { getUsers } from '../redux/features/slices/getUsers'
import css from '../styles/disable.module.scss'
import Loader from './twoFactorLoader'

const UpdateStatusButton = ({ user }) => {
  const dispatch = useDispatch()
  const { status } = user
  const { disableLoading } = useSelector(getUsers)
  const [clicked, setClicked] = useState(false)
  const but = useRef()

  useEffect(() => {
    if (!disableLoading) {
      if (clicked) toast('Successfully done!')
      setClicked(false)
    }
  }, [disableLoading, clicked])

  const click = (e) => {
    if (e.target == but.current) setClicked(true)
    dispatch(disableThunk(user.id))
  }
  return (
    <button
      ref={but}
      className={`button login-btn relative text-sm ${css.disableButton} ${
        status !== 'active' && css.inactive
      }`}
      onClick={click}
      data-testid="disable-button"
      disabled={disableLoading}
    >
      {clicked ? <Loader /> : <>{status}</>}
    </button>
  )
}

export default UpdateStatusButton
