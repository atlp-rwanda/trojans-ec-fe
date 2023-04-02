import React from 'react'
import Pagination from './Pagination';
import BackButton from './backButton';
import TbBody from './TbBody';
import  useUserTable  from './hooks/useUserTable';

const UserTable = () => {

    const {
        nextPage, 
        prevPage, 
        setCurrentPage,
        currentUsers,
        loading, 
        error, 
        users, 
        usersPerPage, 
        currentPage
    } = useUserTable();

  return (
    <div>
        {!loading && !error && (
                <div className='allUsers w-[100%] shadow-lg'> 

                <div className=' bg-white p-2 w-[90%] mx-auto'>
                    <BackButton/>
                    <h1 className='text-center font-bold text-purple-900 py-8'>All Users</h1>
                    <div className='container mx-auto userTable overflow-x-auto  '>

                <table className="w-full table" data-testid='table'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='p-3 text-sm tracking-wide text-center w-[250px]' data-testid='th'>Name</th>
                            <th className='p-3 text-sm tracking-wide text-center'>Role</th>
                            <th className='p-3 text-sm tracking-wide text-center'>Gender</th>
                            <th className='p-3 text-sm tracking-wide text-center'>PreferredLanguage</th>
                            <th className='p-3 text-sm tracking-wide text-center'>Birthday</th>
                            <th className='p-3 text-sm tracking-wide text-center'>Status</th>
                            <th className=' text-sm tracking-wide text-center'></th>
                        </tr>
                    </thead>
                    <tbody>
                        <TbBody currentUsers={currentUsers}/>
                    </tbody>
                </table>
                </div>

                <div className='container mx-auto pagination my-4 flex outside' >
                    <button className='bg-gray-300 rounded px-5 py-[7px] hover:bg-gray-400 font-semibold' onClick={prevPage}>Prev</button>
                    <Pagination 
                        totalUsers={users.length}
                        usersPerPage={usersPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                    <button className='bg-gray-300 rounded px-5 py-[7px] hover:bg-gray-400 font-semibold' onClick={nextPage}>Next</button>
                </div>
                </div>
                </div>
        )}
     
    </div>
  )
}

export default UserTable
