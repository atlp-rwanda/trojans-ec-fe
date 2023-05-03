import React from "react";
const StatisticCard = ({ icon, title, value }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
        <div className="mr-4">{icon}</div>
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
   
            <p className="text-gray-600">{value}</p>
   
        </div>
      </div>
    );
  };


  export default StatisticCard