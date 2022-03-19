import React from "react";

const ListService = ({ children }) => {
  return (
    <div className="flex items-center">
      <div className="w-2 h-2 rounded-full bg-[#AFA798]"></div>
      <p className="text-base ml-2 text-[#1B1C22]">{children}</p>
    </div>
  );
};

export default ListService;
