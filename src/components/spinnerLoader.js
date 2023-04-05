import React from 'react'
import { FadeLoader } from 'react-spinners'

export default function SpinnerLoader(props) {
    const {loading} = props
    const override = {
        display: "block",
        margin: "0 auto",
        color: "white",
    
      };
  return (
    <div className='flex justify-center items-center absolute top-[-22%] left-[2%] w-full'>
        <FadeLoader
    loading = {loading}
    color="white"
    cssOverride={override}
    size={80}
    aria-label="Loading Spinner"
    data-testid="loader"
  /></div>
  )
}
