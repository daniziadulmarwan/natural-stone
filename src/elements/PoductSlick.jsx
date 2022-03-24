import React from "react";
import Button from "./Button";

const PoductSlick = (props) => {
  return (
    <div className="py-2 px-0 md:px-3 text-left">
      <div className="rounded-lg overflow-hidden">
        <img src={props.data.img} alt={props.data.title} />
      </div>
      <span className="mt-8 block text-[#1B1C22] text-base">
        {props.data.date}
      </span>
      <h3 className="mt-3 text-2xl font-bold block text-[#1B1C22]">
        {props.data.title}
      </h3>
      <p className="mt-4 text-base block text-[#1B1C22]">{props.data.body}</p>
      <Button className="mt-3">See More</Button>
    </div>
  );
};

export default PoductSlick;
