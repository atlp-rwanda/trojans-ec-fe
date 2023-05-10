import React, { useEffect, useState } from 'react'
import { getNotifThunk } from '../../redux/features/actions/notification'
import { useDispatch, useSelector } from 'react-redux'
import { getNotifStates } from '../../redux/features/slices/notification'
import { socket } from '../../config/socket'
import { setMarkOneAsRead, setMarkAllAsRead, setTotalNotif } from '../../redux/features/slices/notification';
import { DeleteNotification, MarkAllNotification , MarkOneNotification } from '../../redux/features/actions/notification';
import { toast } from 'react-toastify';
import { socketHandle } from '../../helpers/notifications/socketHandle'
import { MarkNotifAsRead, handleDelNotification } from '../../helpers/notifications/notificationHandler'
import { handleCheckbox } from '../../helpers/notifications/SelectCheckbox';

const notificationLogic = () => {
    const {notifications, loading, error, message} = useSelector(getNotifStates)
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const [viewMore, setViewMore] = useState(false);
    const [totalNotification, setTotalNotification] = useState(0)

    const [checkedItem, setCheckedItem] = useState([]);
    const isSelectAllSelected = checkedItem.length === notifications.length ;
    let visibleNotifications;

    !viewMore ? visibleNotifications = notifications?.slice(-4).reverse() : visibleNotifications = notifications?.slice().reverse();

    useEffect(()=>{
        dispatch(getNotifThunk())
    },[])
    //handling click outside notification box
    useEffect(() => {
      const handleClickOutside = (event) => {
        if(!event.target.closest('.notifications') && !event.target.closest('.drop-content')  && !event.target.closest('.viewMore')){
          setIsOpen(false)
        }
      };
      window.addEventListener('click', handleClickOutside);
    }, []);

    //handling notification when some notification added
    useEffect(()=>{
      socketHandle(socket, dispatch, setTotalNotif)
    }, [])   

    //Generating new total notification
    useEffect(()=>{
      if(notifications){
        const newNotifValue = notifications.filter((notif)=> !notif.read)
        setTotalNotification(newNotifValue.length)
      }
    },[notifications]);

    const handleOpen = ()=>{
      setIsOpen(prevState => !prevState) 
    }
      
      //Mark one and all notification as read
      const handleMarkAsRead = async(notificationId)=>{
        await MarkNotifAsRead( {notificationId, dispatch, toast, MarkOneNotification,  MarkAllNotification, setMarkOneAsRead, setMarkAllAsRead} )
      }

      //delete Notification
      const handleDelete = async(notificationId)=>{
        await handleDelNotification(
          {notificationId, dispatch, toast, setMarkOneAsRead, DeleteNotification}
        )
      }
    
    //handling select Chechbox
    const handleBoxChange = (notificationId)=>{
        handleCheckbox(
          notificationId, 
          isSelectAllSelected, 
          setCheckedItem, 
          notifications,
          checkedItem
        )
    }
    //handle view more notification button
    const handleViewMore = ()=>{
      setViewMore(!viewMore)
    }

    return {
      checkedItem, 
      handleBoxChange, 
      isSelectAllSelected, 
      setCheckedItem, 
      notifications,
      loading,
      error,
      message,
      handleOpen,
      totalNotification,
      isOpen,
      handleMarkAsRead,
      handleDelete,
      visibleNotifications,
      viewMore,
      setViewMore,
      handleViewMore
    }
}

export default notificationLogic
