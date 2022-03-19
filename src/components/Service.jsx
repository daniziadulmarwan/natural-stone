import React, { useEffect } from "react";
import ListService from "../elements/ListService";
import AOS from "aos";

const Service = React.forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-56 container mx-auto px-5 md:px-10" ref={ref}>
      <div className="flex flex-col md:flex-row">
        <div className="left flex gap-6">
          <div className="flex flex-col gap-6">
            <div className="bg-slate-300 w-[222px] h-[222px] bg-[url('/stone_1.jpg')] bg-cover bg-center"></div>
            <div className="bg-slate-300 w-[222px] h-[222px] bg-[url('/stone_3.jpg')] bg-cover bg-center"></div>
          </div>
          <div className="bg-slate-300 w-[222px] h-[469px] bg-[url('/stone_4.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="right" data-aos="fade-up">
          <div className="ml-0 md:ml-[56px] mt-20">
            <h4 className="text-3xl font-bold">
              How to we provides our
              <span className="text-[#AFA798]">services</span>
            </h4>
            <p className="mt-3 text-base text-[#1B1C22]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis :
            </p>
            <div className="mt-2">
              <ListService>Elegant</ListService>
              <ListService>Minimalist</ListService>
              <ListService>Stylish</ListService>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Service;
