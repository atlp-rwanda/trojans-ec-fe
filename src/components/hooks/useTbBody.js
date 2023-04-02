import React,{ useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { assignUserRoleThunk } from '../../redux/features/actions/user';
import { setUserData } from '../../redux/features/slices/getUsers';

export default function useTbBody(){
    
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropOption = ['admin', 'seller', 'buyer'];
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(!event.target.closest('.dropdown')){
                setActiveDropdown(false); 
            }
    };

    window.addEventListener('click', handleClickOutside);
    }, []);
    
    
    const toggleActive = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };
    

    const handleRole = (id, role)=>{
        const data = {
            id,
            role
        }
        dispatch(assignUserRoleThunk(data))
        dispatch(setUserData(data))
        setActiveDropdown(null)
    }

  return {handleRole, toggleActive, dropOption, activeDropdown}
}