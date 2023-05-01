import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/profileUpdate.scss';
import { userProfileUpdate } from '../redux/features/slices/profileUpdate';
import { useDispatch} from 'react-redux';
import { getUserProfile } from '../redux/features/actions/getProfile';
import ProfileForm from '../components/profileForm';
import Spinner from "../components/viewProducts/spinner";

const ProfileUpdate = () => {
  const {userProfile, userStatus, loading, updateStatus} = useSelector(userProfileUpdate);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getUserProfile())
  }, [dispatch])
  return (
    <div data-testid="profile">
      {
        userStatus === "pending"? (
          <div>
            <Spinner />
          </div>
        ) : (
          <div>
            <div className='header flex flex-col'>

            <div className='flex h-44 brand '>
              
              <div className='flex justify-center items-center w-1/4'>
                <img src="" alt="" className='w-24 wh-24 rounded-full mx-auto'/>
              </div>
              <div className='flex justify-center items-center w-3/5'>
                <h1 className='text-white font-bold text-2xl md:text-7xl '>TROJANS STORE</h1>
              </div>

            </div>
            <div className='relative'>
              <div className='w-full md:w-1/4 absolute top-[-40%] left-[0%]  md:left-2 top-[-50%]'>
                <span className=''>
                  <img src={userProfile?.profilePic} alt="" className="w-24 md:w-32 rounded-full mx-auto "/>
                </span>
                <div className='text-center'>
                  <h1 className='font-bold text-2xl'>{userProfile?.name}</h1>
                  <p>{userProfile?.email}</p>
                </div>
              </div>
              <div className='w-[100%]   h-32 py-2 flex justify-center md:w-3/5 items-end'>
              </div>
            </div>
            </div>
            <div>
              <ProfileForm userProfile={userProfile} updateStatus={updateStatus} loading={loading}/>
            </div>
          </div>
        )
      }
    </div>
  )
}
export default ProfileUpdate

