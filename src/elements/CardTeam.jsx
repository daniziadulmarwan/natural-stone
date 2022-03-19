import React from "react";

const CardTeam = (props) => {
  return (
    <div className="card w-full md:w-1/3 flex flex-col items-center justify-center py-5 px-7">
      <div className="w-24 h-24 rounded-full grid place-content-center">
        <img src={props.data.img} alt="" />
      </div>
      <h4 className="mt-3 text-green-600 text-xl">{props.data.name}</h4>
      <p className="mt-2 text-slate-800 text-xl font-medium">
        {props.data.job}
      </p>
      <p className="text-slate-500 mt-5 text-left">{props.data.desc}</p>
    </div>
  );
};

export default CardTeam;
