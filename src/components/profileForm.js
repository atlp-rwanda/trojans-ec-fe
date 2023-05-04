/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { yupResolver } from "@hookform/resolvers/yup"
import profileSchema from '../schema/profileUpdate';
import '../styles/profileUpdate.scss';
import { useForm } from 'react-hook-form';
import WishlistPopup from './wishlist/wishlistPopup';
import useProfileForm from './hooks/useprofileForm';
/* istanbul ignore next */
const ProfileForm = ({userProfile, loading, updateStatus}) => {
    const {
      fileData,
      success,
      toggleModal, 
      onUpdate, 
      handleImage
  } = useProfileForm();
 
    let billingAddress = "";
    if(typeof userProfile?.billingAddress === "string"){
        billingAddress = JSON.parse(userProfile?.billingAddress);
    }else{
        billingAddress =  userProfile?.billingAddress;
    }
    

   const [picture, setPicture] = useState(null);
    
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
      resolver: yupResolver(profileSchema),
      defaultValues: {
        profilePic: userProfile?.profilePic,
        country: billingAddress?.country,
        city: billingAddress?.city,
        province: billingAddress?.province,
        street: billingAddress?.street,
        postalCode: billingAddress?.postalCode,
        preferredCurrency: userProfile?.preferredCurrency,
        preferredLanguage: userProfile?.preferredLanguage
      }
    });

  return (
    <div data-testid='test-form'>
      {success &&
        (
          <div className="modal mt-[10%]">
          <div onClick={toggleModal} className="overlay"></div>
          <WishlistPopup
            success={true}
            handleClick={toggleModal}
            statusMessage={"Success"}
            message={updateStatus}
          />
        </div>
        )
      }
        <div className='profile_upd_form '>
        <h1>UPDATE PROFILE</h1>
        <form  className='container mx-auto' onSubmit={(event)=>handleSubmit(onUpdate)(event)}>
          <div className='flex flex-wrap  -mx-3 mb-6'>

            <div className='sm:w-1/2 px-3'>
                <div>
                  <div className='changeImg '>
                      {fileData &&  <img src={fileData} alt=""  className='w-[70px] h-[70px] rounded-full'/>}
                  </div>
                  <input type="file" onChange={handleImage}/>
                </div>

              <input 
                type="text"
                name='country' 
                placeholder='Country'
                className='w-full text-gray'
                {...register("country")}
                />
                {errors.country && <span className='errorMsg text-red-600 text-sm'>{errors.country?.message}</span>}
                
              <input 
                type="text" 
                name='city' 
                className='text-gray-600'
                {...register("city")} 
                  placeholder='City' 
              />
               {errors.city &&<span className='errorMsg text-red-600 text-sm'>{errors.city?.message}</span>}
              
              <input 
                type="text" 
                name='province' 
                className='text-gray-600'
                {...register("province")} 
                placeholder='Province' 
              />
               {errors.province &&<span className='errorMsg text-red-600 text-sm'>{errors.province?.message}</span>}
             
            </div>

            <div className='sm:w-1/2 px-3'>
            <input 
                type="text" 
                name='street' 
                placeholder='Street'
                {...register("street")} 
              />
              {errors.street &&<span className='errorMsg text-red-600 text-sm'>{errors.street?.message}</span>}

              <input 
                type="text" 
                name='postalCode' 
                placeholder='Postal Code' 
                {...register("postalCode")} 
              />
              {errors.postalCode &&<span className='errorMsg text-red-600 text-sm'>{errors.postalCode?.message}</span>}

               <select {...register("preferredCurrency")} data-testid="currency">
                <option value="RWF">RWF</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
              {errors. preferredCurrency &&<span className='errorMsg text-red-600 text-sm'>{errors. preferredCurrency?.message}</span>}

               <select {...register("preferredLanguage")} data-testid="language">
                <option value="KINYARWANDA">KINYARWANDA</option>
                <option value="English">English</option>
                <option value="France">France</option>
              </select>
                {errors.preferredLanguage &&<span className='errorMsg text-red-600 text-sm'>{errors.preferredLanguage?.message}</span>}

            </div>

          </div>
          <div className='btn flex justify-center my-5'>
            <button className='update text-white font-bold py-2 px-20 rounded'>
            {
              loading === true?
                  <div className="spinner-container" data-testid='updateLoader'>
                    <div className="loading-spinner">
                    </div>
                  </div>
              : "UPDATE"
            }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileForm