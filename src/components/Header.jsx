import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

function Header({ onClick }) {
  return (
    <div className="flex relative h-[720px]">
      <div className="w-2/3"></div>
      <div className="bg-[#F3EDE9] w-1/3 h-full"></div>

      <div className="absolute w-full">
        <Navbar onClick={onClick} />
        <Hero />
      </div>
    </div>
  );
}

export default Header;
