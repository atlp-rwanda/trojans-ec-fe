import React, { useEffect } from 'react'
import '../../../../styles/users.scss'
import UserTable from '../../../../components/UserTable';
import { getUsers } from '../../../../redux/features/slices/getUsers';
import { useNavigate } from 'react-router';
import Spinner from '../../../../components/products/viewProducts/spinner';
import { useSelector } from 'react-redux';
import parseJwt from '../../../../helpers/parseJwt';
import ErrorHandler from '../../../../components/shared/ErrorHandler';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllUsers = () => {
  const { getLoading , error} = useSelector(getUsers);
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    if(error.message === 'Role already assigned'){
      toast.error('Role already assigned')
    }
    if (token) {
      const { data } = parseJwt(token);
      if (data.role !== "admin") {
        navigate("/");
      }
    }
  }, [token, error]);
  return (
    <div>
      <ToastContainer />
      {getLoading && (
        <div data-testid="loading-spinner"> 
          <Spinner/>
        </div>
      )}
      <ErrorHandler loading={getLoading} error={error}/>
      <UserTable />
    </div>

  )
}

export default AllUsers
