import React from "react";

function TopSpinner() {
  return (
    <div className="modal h-full w-full fixed top-1/2">
      <div className="overlay h-[100vh] w-[100vw] top-o bottom-0 left-0 right-0 fixed bg-gray-100 opacity-20"></div>
      <span
        type="button"
        data-testid="p-loader"
        className={`flex items-center justify-center`}
      >
        <svg className="animate-spin h-6 w-6 mr-3 ..." viewBox="0 0 24 24">
          <circle
            className="opacity-30"
            cx="12"
            cy="12"
            r="10"
            stroke="#5f3e8e"
            fill="white"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="white"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </span>
    </div>
  );
}

export default TopSpinner;
