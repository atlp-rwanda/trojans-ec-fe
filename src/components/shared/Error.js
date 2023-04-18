import React from "react";
import { formatString } from "../../helpers/Format";
import { Link } from "react-router-dom";

const Error = (props) => {
  const { code, title, description, to } = props;
  if (code && title && description && to) {
    return (
      <div className="w-full flex flex-col justify-between items-center mx-auto text-center mt-[5%]">
        <h1 className="text-3xl lg:text-7xl text-primary">{code}</h1>
        <h2 className="text-xl lg:text-3xl mt-[1rem]">{title}</h2>
        <p className="text-base lg:text-xl my-[2rem]">{description}</p>
        {to === "reload" ? (
          <div
            onClick={() => window.location.reload()}
            className="py-[1rem] px-[2rem] inline-block bg-primary text-white rounded-lg text-base lg:text-xl transition-all duration-300 ease-in hover:bg-dark hover:cursor-pointer"
          >
            Reload
          </div>
        ) : (
          <Link to={`/${to === "home" ? "" : to}`}>
            <div className="py-[1rem] px-[2rem] inline-block bg-primary text-white rounded-lg text-base lg:text-xl transition-all duration-300 ease-in hover:bg-dark">
              {`Back to ${formatString(to)}`}
            </div>
          </Link>
        )}
      </div>
    );
  } else {
    return (
      <div className="w-full flex flex-col justify-between items-center mx-auto text-center mt-[5%]">
        <h1 className="text-3xl lg:text-7xl text-primary">Error</h1>
        <h2 className="text-xl lg:text-3xl mt-[1rem]">Something went wrong</h2>
        <p className="text-base lg:text-xl my-[2rem]">
          An error occured in the process
        </p>
        <div
          onClick={() => window.location.reload()}
          className="py-[1rem] px-[2rem] inline-block bg-primary text-white rounded-lg text-base lg:text-xl transition-all duration-300 ease-in hover:bg-dark hover:cursor-pointer"
        >
          Reload
        </div>
      </div>
    );
  }
};

export default Error;
