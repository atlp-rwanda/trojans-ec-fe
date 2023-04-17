import React from "react";

import { useEffect, useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../config/sockect";
import chatIcon from "../assets/images/chat.svg";
import { ToastContainer, toast } from "react-toastify";
import { setLoading, setData,setSingle } from "../redux/features/slices/chat";
import ChatMessage from "./chatMessage";

const chatModel = () => {

  const dispatch = useDispatch();



  const { loading, data, error, success } = useSelector((state) => state.chat);
  const [username, setUsername] = useState("");
  const [currentUser, setCurrentUser]=useState("");
  const [showNewMessages, setShowNewMessages] = useState(false);
  const [message, setMessage] = useState("");
  const [showChat, setShowChat] = useState(false);
  const messagesEndRef = useRef(null);

  const currentUserLocal = localStorage.getItem("name");

  const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
 
  };
    const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
     console.log(scrollTop+clientHeight)
     console.log(scrollHeight)

    if (((scrollTop + clientHeight)===scrollHeight-0.5) || ((scrollTop + clientHeight)===scrollHeight+0.5) || ((scrollTop + clientHeight)===scrollHeight)) {
      setShowNewMessages(false);
    } else {
      setShowNewMessages(true);
    }
  };
  useEffect(() => {
    setCurrentUser(currentUserLocal);
    socket.on("chat-message", (messageData) => {
     toast.warning("you have new message")
     const msg={
      User: {
        email: "testBuyer@example.com",
        name: messageData.name,
        profilePic:
          "https://res.cloudinary.com/dmjxukx09/image/upload/v1675844692/profiles/Profile-Avatar-PNG-Free-Download_paqfrf.png",
        role: "buyer",
      },
      createdAt: new Date(),
      message: messageData.message,
    };

    dispatch(setSingle(msg))

    });

    socket.emit("new-user", username);

    socket.on("notifications", (message) => {
      console.log(message);
   
    });
    socket.on("all-messages", (message) => {
      console.log("here")
      console.log(message);
      dispatch(setData(message));
    });
    socket.on("connect_error", (err) => {
    });

    socket.on("username", (name) => {
      console.log(username)
      setUsername(name);
    });

  }, [setData]);


  const sendMessage = (e) => {
   e.preventDefault()
    const date = formatISODate(new Date());
    if(message!="" && data){
    dispatch(setData([...data,{
      User: {
        email: "testBuyer@example.com",
        name: username,
        profilePic:
          "https://res.cloudinary.com/dmjxukx09/image/upload/v1675844692/profiles/Profile-Avatar-PNG-Free-Download_paqfrf.png",
        role: "buyer",
      },
      createdAt: new Date(),
      message: message,
    }])
    );

  
    socket.emit("send-chat-message", { username, message, date });
     setMessage('')
    }
    
  };

  function formatISODate(isoDate) {
    const date = new Date(isoDate);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    };
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <>
    <ToastContainer/>
   
      <div
        className={
          showChat
            ? "fixed bottom-28 right-12 flex flex-col h-2/3 bg-white md:w-1/3  w-2/3"
            : "hidden"
        }
      >
        <header className="bg-purple-950 rounded-t-lg text-white p-4 px-6 flex justify-between ">
          <p className="text-white">Chat</p>

          <button onClick={() => setShowChat(false)}>x</button>
        </header>
        <div className="flex flex-col flex-1 overflow-y-auto px-4 py-6" onScroll={handleScroll}>
         
          {data &&
            data.map((message) => (  
  
           <ChatMessage message={message} currentUser={currentUser} isSelf={message.isSelf} />


            ))}

      <div ref={messagesEndRef}></div>
           

     
        </div>
        {showNewMessages && (
        <div className="flex justify-center bg-white">
        <button className="bottom-4 right-4 bg-gray-500 text-white rounded-full p-2 " onClick={scrollToBottom}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
         </div>
      )}
      
      <div className="bg-white ">
          
            <form className="flex flex-row px-4 py-2" onSubmit={sendMessage}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." className="flex-grow rounded-full bg-gray-200 py-2 px-4" />
         <button type="submit" data-testid="send message" className="ml-4 bg-purple-950 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full">Send</button>
       </form>
       </div> 
      </div>
    
      <button
        onClick={() => setShowChat(!showChat)}
        title="Contact Saller"
        className="fixed z-90 bottom-10 right-8  w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl  hover:animate-spin duration-300"
      >
        <img src={chatIcon} />
      </button>
    </>
  );
};

export default chatModel;


