import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`${className} text-base py-[10px] px-4 rounded-md bg-[#F3EDE9] text-[#AFA798]`}
    >
      {children}
    </button>
  );
};

export default Button;
