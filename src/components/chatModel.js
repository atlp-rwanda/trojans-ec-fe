/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../config/socket";
import chatIcon from "../assets/images/chat.svg";
import { ToastContainer, toast } from "react-toastify";
import {
  setLoading,
  setData,
  setSingle,
  setHasNewMessages,
} from "../redux/features/slices/chat";
import ChatMessage from "./chatMessage";

const chatModel = () => {
  const dispatch = useDispatch();

  const { loading, data, hasNewMessage, error, success } = useSelector(
    (state) => state.chat
  );  
  const { userProfile } = useSelector(
    (state) => state.userProfile
  );

  const [username, setUsername] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [showNewMessages, setShowNewMessages] = useState(false);
  const [message, setMessage] = useState("");
  const [showChat, setShowChat] = useState(false);
  const messagesEndRef = useRef(null);
  const [connectedUser, setConnectedUser] = useState("");
  const [showConnectedUser, setShowConnectedUser] = useState(false);

  const currentUserLocal = localStorage.getItem("name");

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    console.log(scrollTop + clientHeight);
    console.log(scrollHeight);

    if (
      scrollTop + clientHeight === scrollHeight - 0.5 ||
      scrollTop + clientHeight === scrollHeight + 0.5 ||
      scrollTop + clientHeight === scrollHeight
    ) {
      setShowNewMessages(false);
    } else {
      setShowNewMessages(true);
    }
  };
  useEffect(() => {
    setCurrentUser(currentUserLocal);
    socket.on("chat-message", (messageData) => {
      dispatch(setHasNewMessages(true));
      const msg = {
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
      dispatch(setSingle(msg));
    });

    socket.emit("new-user", username);

    socket.on("user-connected", (name) => {
      setConnectedUser(name);
      setShowConnectedUser(true);

      setTimeout(() => {
        setConnectedUser("");
        setShowConnectedUser(false);
      }, 4000);
    });
    socket.on("all-messages", (message) => {
      dispatch(setData(message));
    });
    socket.on("username", (name) => {
      console.log(username);
      setUsername(name);
    });
    
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const date = formatISODate(new Date());
    if (message != "" && data) {
      dispatch(
        setData([
          ...data,
          {
            User: {
              email: "testBuyer@example.com",
              name: username,
              profilePic:
              userProfile?.profilePic,
              role: "buyer",
            },
            createdAt: new Date(),
            message: message,
          },
        ])
      );

      socket.emit("send-chat-message", { username, message, date });
      setMessage("");
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

  const Show = () => {
    setShowChat(!showChat);
    dispatch(setHasNewMessages(false));
  };

  return (
    <>
      <ToastContainer />

      <div
        className={
          showChat
            ? "fixed bottom-28 flex flex-col h-2/3 bg-white md:w-1/3 md:right-4 right-6 w-11/12"
            : "hidden"
        }
      >
        <header className="bg-purple-900 rounded-t-lg text-white p-4 px-6 flex justify-between ">
          <p className="text-white">Chat</p>

          <button onClick={() => setShowChat(false)}>x</button>
        </header>
        <div className="flex justify-center z-10">
          <p className="bg-gray-400 rounded-full px-2">
            {" "}
            {showConnectedUser ? connectedUser + " connected" : ""}{" "}
          </p>
        </div>
        <div
          className="flex flex-col flex-1 overflow-y-auto px-4 py-6"
          onScroll={handleScroll}
        >
          {data &&
            data.map((message) => (
              <ChatMessage
                key={data.indexOf(message)}
                message={message}
                currentUser={currentUser}
                isSelf={message.isSelf}
              />
            ))}

          <div ref={messagesEndRef}></div>
        </div>
        {showNewMessages && (
          <div className="flex justify-center bg-white">
            <button
              className="bottom-4 right-4 bg-gray-500 text-white rounded-full p-4 "
              onClick={scrollToBottom}
            >
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        )}

        <div className="bg-white ">
          <form className="flex flex-row px-4 py-2" onSubmit={sendMessage}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow rounded-full bg-gray-200 py-2 px-4"
            />
            <button
              type="submit"
              data-testid="send message"
              className="ml-4 bg-purple-900 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <button
        onClick={() => Show()}
        title="Chat"
        className="fixed z-90 bottom-10 right-8  w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl  hover:animate-pulse duration-300"
      >
        <div style={{ position: "relative", display: "inline-block" }}>
          <img src={chatIcon} alt="Chat icon" />

          {hasNewMessage && (
            <div
              style={{
                position: "absolute",
                top: "-5px",
                left: "-5px",
                backgroundColor: "red",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
              }}
            />
          )}
        </div>
      </button>
    </>
  );
};

export default chatModel;
