import React,{ useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { assignUserRoleThunk } from '../../redux/features/actions/user';
import {changeUserRole, getUsers } from '../../redux/features/slices/getUsers';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function useTbBody(currentUsers){
    
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
    
    const [loadingState, setLoadingState] = useState(currentUsers.map(()=> false))
    
    const toggleActive = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };
    

    const handleRole = async(id, role, index)=>{
        try {            
            const data = {
                id,
                role
            }
            setLoadingState((prevStates)=>{
                const newStates = [...prevStates];
                newStates[index] = true;
                return newStates;
            })
            const resp = await dispatch(assignUserRoleThunk(data))
            if(resp.type === "user/assignRole/fulfilled"){
                dispatch(changeUserRole(data))
                toast.success('role Assigned')
            }
            setActiveDropdown(null)
        } catch (error) {
             console.log(error)
        }finally{
            setLoadingState((prevStates)=>{
                const newStates = [...prevStates];
                newStates[index] = false;
                return newStates;
            })
        }
    }
  return {handleRole, toggleActive, dropOption, activeDropdown, loadingState}
}