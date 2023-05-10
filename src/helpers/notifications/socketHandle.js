export const socketHandle = (socket, dispatch, setTotalNotif)=>{
    socket.on("productAdded", (data) => {
        dispatch(setTotalNotif(data))
      });
      
      socket.on("productRemoved", (data) => {
        dispatch(setTotalNotif(data))
      });

      socket.on("productExpired", (data) => {
        dispatch(setTotalNotif(data))
      });
      
      socket.on("addedToWishList", (data) => {
        dispatch(setTotalNotif(data))
      });

      socket.on("removedFromWishList", (data) => {
        dispatch(setTotalNotif(data))
      });
      
      socket.on("productBought", (data) => {
        dispatch(setTotalNotif(data))
      });

      socket.on("productMadeAvailable", (data) => {
        dispatch(setTotalNotif(data))
      });

      socket.on("productMadeUnAvailable", (data) => {
        dispatch(setTotalNotif(data))
      });

      socket.on("orderStatusNotif", (data) => {
        dispatch(setTotalNotif(data))
      });
}