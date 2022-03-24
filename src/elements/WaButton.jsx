import React from "react";
import Wa from "/walogo.svg";

const WaButton = () => {
  return (
    // <a
    //   href=""
    //   className="fixed z-40 w-12 h-12 rounded-full bg-green-500 bottom-2 cursor-pointer right-2 flex justify-center items-center text-white font-semibold"
    // >
    //   <img src={Wa} alt="" className="wa-btn" />
    // </a>
    <a
      href="https://wa.me/6285352594403"
      className="fixed z-40 w-12 h-12 rounded-full bottom-2 cursor-pointer right-2 flex justify-center items-center text-white font-semibold"
    >
      <img src={Wa} alt="" className="wa-btn w-full h-full" />
    </a>
  );
};

export default WaButton;
