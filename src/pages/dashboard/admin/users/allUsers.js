import React, { useEffect } from 'react'
import '../../../../styles/users.scss'
import UserTable from '../../../../components/UserTable';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../../../redux/features/slices/getUsers';
import { useNavigate } from 'react-router';
import Spinner from '../../../../components/viewProducts/spinner';
import { useSelector } from 'react-redux';
import parseJwt from '../../../../helpers/parseJwt';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const { loading , error} = useSelector(getUsers);
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    if(error.message === 'Role already assigned'){
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: error.message,
      }).then(()=>{
        location.reload()
      })
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

      {loading && (
        <div data-testid="loading-spinner"> 
          <Spinner/>
        </div>
      )}
      <UserTable />
    </div>

  )
}

export default AllUsers
