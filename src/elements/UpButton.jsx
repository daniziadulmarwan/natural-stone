import React from "react";

const UpButton = ({ onclick }) => {
  return (
    <button
      className="fixed z-40 w-10 h-10 rounded-full bg-[#AFA798] bottom-2 cursor-pointer right-2 flex justify-center items-center text-white font-semibold"
      onClick={onclick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default UpButton;
