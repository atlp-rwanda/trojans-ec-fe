import React, { useEffect, useState } from 'react'
import axios from 'axios';

import SpinnerVerify from '../components/spinnerVerify';
import { useNavigate } from "react-router-dom";
import SuccessVerifyPopup from '../components/shared/verifyPopUp';
import SendSuccessfull from '../components/sendSuccess';


function verifyEmail() {
    const navigate = useNavigate();

    const [data,setData]=useState({})
    const [loading,setLoading]=useState(true)

    useEffect(() => {
        if (window.location.href.includes("token")) {
          const tokenUrl = window.location.href.split("token=")[1];
              
        fetchData(tokenUrl);
        }
      }, [])
        const fetchData = async (token) => {
          try {
            console.log(token)
            const response = await axios.get(`${process.env.BACKEND_URL}/users/verify-email/${token}`);
            const jsonData = response.data;
              console.log(jsonData.response)
            setData(jsonData.response);
           setLoading(false)

          } catch (error) {
            const jsonData = error.response.data;
           setData(jsonData)
           setLoading(false)
            console.log('Error:', jsonData);
          }
        };

        console.log(data?.message)
   
  return (
    <div className='flex items-center justify-center h-screen w-full '>
      {loading?(<>
      <div className='flex items-center justify-center h-screen '>
        <SpinnerVerify message="Loading....."  />
        </div>
      </>):(<div className='flex items-center justify-center h-screen '>
        {data&&data.status?<SuccessVerifyPopup className="" message={data.message} handleClick={()=>navigate('/')} />:<SuccessVerifyPopup success="true" handleClick={()=>navigate('/')} message={data.message} />} 
      </div>)} 
    </div>
  )
}

export default verifyEmail
