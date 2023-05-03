import React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material';
import useNotification from '../hooks/useNotification';
import {AiOutlineDelete} from 'react-icons/ai'
import moment from 'moment';
import Spinner from '../products/viewProducts/spinner';
import { ToastContainer } from 'react-toastify';

const AllNotification = () => {

    const {
        isSelectAllSelected,
        checkedItem,
        handleBoxChange,
        totalNotification,
        handleMarkAsRead,
        handleDelete,
        visibleNotifications,
        handleViewMore,
        notifications,
        loading
    } = useNotification(); 

    const CheckNotifLength = totalNotification >= 4;
  return (
    <>
        {notifications.length > 0 ? (
          
          <div className={`mx-auto shadow-lg bg-white rounded-md drop-content w-[450px] overflow-auto ${!CheckNotifLength ? 'h-auto' : 'h-[415px]'}`}>
          <ToastContainer/>
          <div className={`flex justify-between items-center px-8 h-[60px] sticky top-0 bg-white z-40 border`} >
              <div>
                <FormControlLabel
                  control={
                      <Checkbox
                      data-testid='markAll'
                      checked={isSelectAllSelected}
                      onChange={()=> handleBoxChange(0)}
                      color='secondary'
                      />
                  }
                />
              </div>
              <div>
                {checkedItem.length > 0 &&(
                  <div className='flex justify-between items-center w-[150px]'>
                    <div>
                      <button
                        className='bg-primary-color text-white px-2 py-1 rounded-sm text-sm'
                        onClick={()=> handleMarkAsRead(checkedItem)}
                      >
                        Mark as read
                      </button>
                    </div>
                    <div>
                        <AiOutlineDelete
                          className='text-2xl text-red-700 cursor-pointer'
                          data-testid= 'delete'
                          onClick={()=>handleDelete(checkedItem)}
                        />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {!loading ? (
              
                visibleNotifications?.map((data, id)=>(
                  
                  <div 
                    key={id} 
                    className={ `py-2 flex justify-center items-center border-t border-gray-300`}
                  >
                    <div className='review basis-1/4 text-center'>
                      <FormControlLabel
                        key={data.id}
                        control={
                          <Checkbox
                            data-testid={`myCheckbox${data.id}`}
                            checked={checkedItem.includes(data.id)}
                            onChange={()=>handleBoxChange(data.id)}
                            color='secondary'
                            disabled={isSelectAllSelected}
                          />
                        }
                      />
                      </div>
                    <div className='message basis-1/2'>
                      <h1 className='text-[14px] font-semibold'>{data.type}</h1>
                      <p className='text-[12px]'>{data.message}</p>
                    </div>
                    <div className='date basis-1/4 text-[12px] text-center text-gray-500'>
                      {moment(data.updatedAt).fromNow()}  
                    </div>   
                  </div>
                ))
              

            ): (
              <Spinner withoutText={true}/>
            )}

            {
              totalNotification > visibleNotifications.length ?
              (
                <center>
                  <a
                    href="#"
                    onClick={() => handleViewMore()}
                    className='block bg-secondary-color text-white w-[80%] p-1 font-medium my-3 viewMore'
                  >
                    {`See all ${totalNotification} notifications`}
                  </a>
                </center>
              ) : (
                <center>
                  {CheckNotifLength &&(
                    <a
                      href="#"
                      onClick={() => handleViewMore()}
                      className='block bg-secondary-color text-white w-[80%] p-1 font-medium my-3 '
                    >
                      {`Show less`}
                    </a>
                  )}
                </center>
              )
            }
          </div>
        ): (
            <div 
              data-testid='empty'
              className={`mx-auto shadow-lg rounded-md drop-content w-[450px] h-[50px] font-medium flex justify-center items-center bg-secondary`}>
              There is no notification
            </div>
        ) }
    </>
  )
}

export default AllNotification
