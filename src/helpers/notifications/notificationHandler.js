export const MarkNotifAsRead = async ({
  notificationId, 
  dispatch, 
  toast, 
  MarkOneNotification, 
  MarkAllNotification, 
  setMarkOneAsRead, 
  setMarkAllAsRead 
}) => {
  try {
  // Mark One notification
    if (notificationId.length === 1) {
        dispatch(setMarkOneAsRead(notificationId));
        const response = await dispatch(MarkOneNotification(notificationId));
        if (response.payload.status === 200) {
          toast.success('Notification marked as Read');
        } else {
          toast.error(response.payload.message);
        }
    } else {
      // Mark all notification as read
        await dispatch(setMarkAllAsRead(notificationId));
        const response = await dispatch(MarkAllNotification());
        if (response.payload.status === 200) {
          toast.success('All Notification marked as Read');
        } else {
          toast.error(response.payload.message);
        }
    }
  } catch (error) {
    toast.error(error);
  }
}

  //delete Notification
  export const handleDelNotification = async({
    notificationId, 
    dispatch, 
    toast, 
    setMarkOneAsRead, 
    DeleteNotification
  })=>{
    if(notificationId.length === 1){
      try {
        dispatch(setMarkOneAsRead(notificationId))
        const response = await dispatch(DeleteNotification(notificationId))
        if(response.payload.status === 202){
          toast.success('Notification Deleted');
        }else{
          toast.error(response.payload.error);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }else{
      toast.warning('Please select one Notification')  
    }
  }
