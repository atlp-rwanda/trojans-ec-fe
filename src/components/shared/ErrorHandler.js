/* eslint-disable react/prop-types */
import React from "react";
import Error from "./Error";
const ErrorHandler = ({ loading, error, message, to }) => {
  return (
    <div>
      {!loading && error.status && error.payload === 401 && (
        <Error
          code="401"
          title="Unauthorized"
          description={message ? message : "You need to sign in"}
          to={to ? to : "login"}
        />
      )}
      {!loading && error.status && error.payload === "Network Error" && (
        <Error
          code="Error"
          title="Connection error"
          description="There might a problem with your internet connection, check it and reload again"
          to="reload"
        />
      )}
      {!loading &&
        error.status &&
        error.payload !== 401 &&
        error.payload !== "Network Error" && <Error />}
    </div>
  );
};

export default ErrorHandler;
