import React, { useState } from "react";
import logo1 from "../assets/images/LOGO.svg";
import Input from "../components/input";
import Button from "../components/button";
import axios from 'axios';
import swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





import BackImage from '../assets/images/back.png';

const signUp = () => {

  console.log(process.env.BACKEND_URL);

  const [isLoading, setIsLoading] = useState(false);
  
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [cpassword,setCpassword] = useState('');
  const [gender,setGender] = useState('');
  const [dob,setDOB] = useState('');
  const [languange,setLanguage] = useState('');
  const [currency,setCurrency] = useState('');
  const [country,setCountry] = useState('');
  const [city,setCity] = useState('');
  const [province,setProvince] = useState('');
  const [street,setStreet] = useState('');
  const [postalCode,setPostalCode] = useState('');

  const [emailError, setEmailError] = useState({
    isValid: true,
    message: "",
  });
  const [repeatPasswordError, setRepeatPasswordError] = useState({
    isValid: true,
    message: "",
  });

  window.onload=()=>{
    const back=document.getElementById("back");
    const signBtn=document.getElementById("signUpBtn");
    const billing=document.getElementById("billing");
    
    signBtn.style.display="none"
    back.style.display="none"
    billing.style.display="none"
  }


  function handleChange(e) {
  
    const { name, value } = e.target;
    switch (name) {
      case "email":
        let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        setEmailError({
          ...emailError,
          ["isValid"]: emailValid ? true : false,
          ["message"]: emailValid ? "" : "Please enter a valid email",
        });
       

        break;
      case "cpassword":
        let repeatPassword = password == value;
        setRepeatPasswordError({
          ...repeatPasswordError,
          ["isValid"]: repeatPassword ? true : false,
          ["message"]: repeatPassword
            ? ""
            : "Your passwords does not match",
        });
        toast.error('Your passwords does not match');
        break;
   
      default:
        break;
    }
  }




  const next=()=>{
    const nextBtn=document.getElementById("next");
    const billing=document.getElementById("billing");
    const signBtn=document.getElementById("signUpBtn");
    const back=document.getElementById("back");
    const formHide=document.querySelectorAll(".form-hide");
    back.style.display="block"


    for (let index = 0; index < formHide.length; index++) {
      const element=formHide[index];
        element.className=element.className+'  hidden'
    }

    nextBtn.style.display="none"

    signBtn.style.display="block"

    billing.style.display="block"



  }
  const back=()=>{
    console.log("back clecked")
    const nextBtn=document.getElementById("next");
    const signBtn=document.getElementById("signUpBtn");
    const billing=document.getElementById("billing");
    const formHide=document.querySelectorAll(".form-hide");
    const back=document.getElementById("back");
    back.style.display="none"
    nextBtn.style.display="block"

    signBtn.style.display="none"
    billing.style.display="none"

    for (let index = 0; index < formHide.length; index++) {
      const element=formHide[index];
        element.className=element.className.replace('hidden','')
        console.log(element.className)
    }

  



  }
  
  const handleSignUp=(e)=>{
    e.preventDefault();

    if (!email || !password || !cpassword || password!=cpassword || gender == 'select') {
      if(password != cpassword) return handleChange({target:{name:'cpassword', value:' '}});
      if(!email) return handleChange({target:{name:'email', value:''}})
      return false
    }

  setIsLoading(true);
    axios.post(`${process.env.BACKEND_URL}/users/signup`,{
      name: username,
      email: email,
      password: password,
      gender: gender,
      preferredLanguage: languange,
      preferredCurrency: currency,
      birthdate: dob,
      city: city,
      province: province,
      postalCode:postalCode,
      street: street,
      country: country
    },{
      headers:{
          'Content-Type':'application/json'
      }
  }).then((res)=>{

  
      setIsLoading(false);
    swal.fire(`Account created successfully`, 'We have sent you a verification link on your email account, check and verify', 'success')
    toast.success("Successfully");
    }).catch((error)=>{
      setIsLoading(false);

      if(error.response.data.status==400){
        console.log("eroooo")
        toast.error(`${error.response.data.error[0]}`);
      }else{
        toast.error(`${error.response.data.message}`);
      }
      console.log(error.response)
      // setIsLoading(false)
    });
     
  }
  return (
    <>
    <ToastContainer/>
      <div style={{ display: isLoading ? 'flex' : 'none' }} className='modal'>
                <div className='modal-content'>
                    <div className='loader'></div>
                    <div className='modal-text'>Loading...</div>
                </div>
            </div>
    <div className="bg-signUp  h-full box-border w-full min-h-full">
      <img className="p-10" src={logo1} alt="" />

      <div className="w-full flex justify-center mb-5 pb-5 ">
        <p className="text-purple-950 text-4xl font-bold">Personal Details</p>
      </div>

      <form  className="flex flex-col h-full md:h-4/6  justify-around" onSubmit={(event)=>handleSignUp(event)}>
        <div className="md:px-40 px-4 mt-22 flex flex-col md:flex-row h-1/2 justify-center ">
        <div className="md:w-5/12 w-full form-hide " >
          <div class=" flex flex-col justify-between h-full w-full">
            <Input
              type="text"
              class=" border border-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
              placeHolder="ENTER YOUR USERNAME"
              onChange={(e)=>setUsername(e.target.value)}
            />
            <Input type="text" placeHolder="ENTER YOUR EMAIL"  
              onChange={(e)=>setEmail(e.target.value)}
              errorText={emailError.message}
              name="email"
            
            />
            <Input type="password" placeHolder="ENTER YOUR PASSWORD" onChange={(e)=>setPassword(e.target.value)}
          icon="true"/>
 
            <Input
              type="password"
              placeHolder="RE-ENTER YOUR PASSWORD"
              onChange={(e)=>setCpassword(e.target.value)}
              name="cpassword"
              errorText={repeatPasswordError.message}

            />
          </div>
        </div>

        <div className="h-auto bg-black form-hide rounded-xl w-0.5 mx-12"></div>

        <div className="md:w-5/12 w-full form-hide"  >
          <div class=" flex flex-col justify-between w-full h-full">
     
            <select className="input p-3 bg-black bg-opacity-0 border border-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 md:mt-0 mt-5"  onChange={(e)=>setGender(e.target.value)}>
               <option value="select">GENDER</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
            </select>
           
            <Input type="date" placeHolder="Enter your Email" onChange={(e)=>setDOB(e.target.value)} />
            <select className="input p-3 bg-black bg-opacity-0 border border-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 md:mt-0 mt-5" onChange={(e)=>setLanguage(e.target.value)}>
               <option value="">PREFERRED LANGUAGE</option>
               <option value="english">English</option>
               <option value="kinyarwanda">Kinyarwanda</option>
               <option value="french">French</option>
            </select>
            <select className=" input p-3 bg-black bg-opacity-0 border border-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 md:mt-0 mt-5" onChange={(e)=>setCurrency(e.target.value)}>
               <option value="">PREFERRED  CURRENCY</option>
               <option value="rwf">Rwf</option>
               <option value="usd">Usd</option>
               <option value="eur">Eur</option>
            </select>
           
          </div>
        </div>
        <div className="md:w-5/12 w-full" id="billing">
          <div class=" flex flex-col justify-between h-full w-full">
            <Input
              type="text"
              class=" border border-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
              placeHolder="COUNTRY"
              onChange={(e)=>setCountry(e.target.value)}
              required
            />
            <Input type="text" placeHolder="CITY"  onChange={(e)=>setCity(e.target.value)} required />
            <Input type="text" placeHolder="PROVINCE"  onChange={(e)=>setProvince(e.target.value)} required />
            <Input type="text" placeHolder="STREET"  onChange={(e)=>setStreet(e.target.value)} required />
            <Input
              type="text"
              placeHolder="POSTAL CODE"
              onChange={(e)=>setPostalCode(e.target.value)}
            />
          </div>
        </div>
     

        </div>

        <div className="w-100 flex flex-col justify-center items-center mt-5">
             <div  className="btn-signup text-white  px-36 md:px-56 py-2 md:py-4 text-xl rounded form-hide " onClick={()=>next()} id="next"  text="NEXT">NEXT</div>
             <Button  className="btn-signup text-white px-36 md:px-48 py-2 md:py-4  text-xl rounded " id="signUpBtn" type="submit" text="SIGN UP"/>
             <p className="p-4 text-lg">Already have an account? <a className="text-purple-800">sign in.</a> </p>
            <div className="backBtn px-10 md:px-10 ">
            <img src={BackImage} alt="" onClick={()=>back()} id="back"/>
            </div>
      
        </div>
       
        </form>

    </div>
    </>
  );
};

export default signUp;
