/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from "react";
import classNames from "classnames";
import Moment from "react-moment";

const ChatMessage = ({ message, currentUser }) => {
  let isSelf = message.User.name == currentUser ? true : false;
  const containerClasses = classNames({
    "justify-start": true,
    flex: true,
    "flex-row": true,
    "md:justify-end": isSelf,
    "md:justify-start": !isSelf,
  });

  const messageClasses = classNames({
    "text-white": true,
    "rounded-lg": true,
    "py-2": true,
    "px-4": true,
    "max-w-sm": true,
    "mb-4": true,
  });
  return (
    <div className={containerClasses}>
      <div className={messageClasses}>
        <div className="flex items-start  mb-4">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={message.User.profilePic}
            alt={message.User.profilePic}
          />
          <div>
            <div className="flex items-center mb-1">
              <h2 className="text-lg text-black  font-bold mr-2">
                {message.User.name.split(" ")[0]}
              </h2>
              <span className="text-sm text-gray-500">
                <Moment fromNow date={message.createdAt} />
              </span>
            </div>
            <p
              className={
                message.User.name == currentUser
                  ? "bg-purple-900 rounded-lg p-3 text-white"
                  : "bg-gray-200 rounded-lg p-3 text-gray-800"
              }
            >
              {message.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
