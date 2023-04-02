import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getUsersThunk } from '../../redux/features/actions/user';
import{ getUsers, setUserData} from '../../redux/features/slices/getUsers';
import Swal from 'sweetalert2';

export default function useUserTable(){
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const {users, loading, error, role} = useSelector(getUsers)
    const usersPerPage = 5;

    const lastUsersIndex = currentPage * usersPerPage;
    const firstUsersIndex = lastUsersIndex - usersPerPage;
    const currentUsers = users.slice(firstUsersIndex, lastUsersIndex);

    useEffect(() => {

    dispatch(getUsersThunk())

    if(role === 'role assigned'){
        const data = {
            id: null,
            role: null
        }
        dispatch(setUserData(data))
        
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: role,
          })
    }
    }, [role]);

    const prevPage = ()=>{
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
    };
    const totalUsers = Math.ceil(users.length / usersPerPage);
    
    const nextPage = ()=>{
        if(currentPage !== totalUsers){
            setCurrentPage(currentPage + 1)
        }
    };

  return {
    nextPage, 
    prevPage, 
    setCurrentPage,
    currentUsers,
    loading, 
    error, 
    users, 
    usersPerPage, 
    currentPage
}
}

