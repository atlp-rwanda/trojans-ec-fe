import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updatePasswordThunk } from '../redux/features/actions/updatePassword';
import { passwordSchema } from '../validations/passwordUpdate';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import PasswordInput from '../components/PasswordInput';
import "../styles/updatepassword.scss";
import logo1 from "../assets/images/LOGO.svg";
import Button from '../components/button';
import Loader from '../components/twoFactorLoader';

const UpdatePassword = () =>{
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(passwordSchema),
      });
      const {loading,updateStatus} = useSelector((state)=> state.passwordUpdate);
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const submit = (data) =>{
         dispatch(updatePasswordThunk(data))
      };
      if(updateStatus == "Password updated"){
        navigate("/success");
        
     }
      
    return (
        <div className="bg-signUp  h-full box-border w-full  min-h-full">
        <img className="p-1" src={logo1} alt="" />
        <div className=" lg:w-1/4 mx-auto pt-52 sm:w-3/4 md:w-2/4 w-3/4">
        <h3 className="text-center text-lg mt-[-40px] ">Update Password</h3>
        <form  onSubmit={handleSubmit(submit)}>
           <PasswordInput placeholder="Enter old password"
            name="oldPassword"
           register={register('oldPassword')}
           errors={errors.oldPassword}
           />
           <PasswordInput  placeholder ="Enter New password"
            name="newPassword"
            className="mt-24"
            register={register('newPassword')}
            errors ={errors.newPassword}
           />
           <PasswordInput placeholder ="Confirm New password"
            name="confirmPassword"
            register={register('confirmPassword')}
            errors ={errors.confirmPassword}
           />
           <Button className="btn-signup text-white w-full mt-9  md:py-3  text-xl rounded " 
            type="submit" 
            text={ loading?<Loader/>: "Update password"}/>
             
           </form>
        </div>
        </div>
    )
};

export default UpdatePassword;