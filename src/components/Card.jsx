import React from "react";
import "./chars.css";

const Card = ({ title, description }) => {
  return (
    <>
      <div className="flex-1 text-left lg:max-w-sm p-6  border-gray-200 rounded-lg shadow bg-black ">
        <hr className="border-0 bg-gradient-to-r from-purple-600 to-orange-300 w-11 h-1 py-0 rounded-full mb-3" />
        <h5 className="heading-color mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p class="font-normal  text-white">{description}</p>
      </div>
    </>
  );
};

export default Card;
