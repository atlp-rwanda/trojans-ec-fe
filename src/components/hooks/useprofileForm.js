/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../../styles/profileUpdate.scss';
import { updateProfileThunk } from '../../redux/features/actions/updateProfile';
export default function useProfileForm(){
  
  const [fileData, setFileData] = useState(null);
  const [success, setSuccess ] = useState(false);

    const dispatch = useDispatch();

   const [picture, setPicture] = useState(null);
    
    /* istanbul ignore next */
    const handleImage = (e)=>{
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = ()=>{
        setFileData(reader.result);
      }
      reader.readAsDataURL(file);
      setPicture(file)
  }
    
    const formData = new FormData();
    const onUpdate = async(data)=>{
      picture ? formData.append('profilePic', picture) : formData.append('profilePic', data.profilePic);
      formData.append('country', data?.country);
      formData.append('city', data?.city);
      formData.append('province', data?.province);
      formData.append('street', data?.street);
      formData.append('postalCode', data?.postalCode);
      formData.append('preferredCurrency', data?.preferredCurrency);
      formData.append('preferredLanguage', data?.preferredLanguage);
      await dispatch(updateProfileThunk(formData))
      if(data){
        setSuccess(true)
      }
    }
    const toggleModal = ()=>{
      setSuccess(!success)
      if(picture){
        setSuccess(!success)
        location.reload()
      }
    }
    return { fileData, success, toggleModal, onUpdate, handleImage }
}