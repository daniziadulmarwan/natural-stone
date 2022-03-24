import React from "react";

const CardFeature = (props) => {
  return (
    <div className="w-full py-3 flex flex-col items-center">
      <img src={props.data.img} alt={props.data.title} width="70" />
      <h3 className="text-2xl text-[#AFA798] mt-5">{props.data.title}</h3>
      <p className="text-left px-5 md:px-0 md:text-center text-lg mt-5 text-[#1B1C22] w-96">
        {props.data.body}
      </p>
    </div>
  );
};

export default CardFeature;
