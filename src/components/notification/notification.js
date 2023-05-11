import React from 'react'
import {IoMdNotifications} from 'react-icons/io';
import NotificationBadge, { Effect } from 'react-notification-badge'
import useNotification from '../hooks/useNotification';
import AllNotification from './allNotification';

const Notification = ({position}) => {
    const {
        handleOpen,
        totalNotification,
        isOpen
    } = useNotification();  

    
  return (
    
    <div>
      <div className='relative z-10'>
         
          <div className='bell-icon text-4xl notifications'>
              <a href="#"  onClick={()=> handleOpen()} data-testid='bellIcon'>
                <NotificationBadge count={totalNotification} effect={Effect.SCALE}/>             
              <IoMdNotifications/>
              </a>
          </div>
        {isOpen &&(
          <div className={`absolute md:right-0 ${position}`}>
            <AllNotification />
          </div>
        )}
      </div>
    </div>
  )
}

export default Notification
