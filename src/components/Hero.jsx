import React from "react";

function Hero() {
  return (
    <div className="mt-16 md:mt-40">
      <div className="container mx-auto px-5 md:px-10 flex justify-between">
        <div className="mt-12" data-aos="fade-zoom-in">
          <p className="text-2xl">Supplying across the globe</p>
          <h1 className="text-5xl mt-3 font-bold">
            The Leading <span className="text-[#AFA798]">Supplier</span> <br />{" "}
            of <span className="text-[#AFA798]">Stone</span> Product
          </h1>
          <p className="w-full md:w-[390px] mt-3 text-[#1B1C22] text-base font-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            aliquid tempore deleniti modi consectetur rerum repellat quae esse
            quos omnis explicabo sapiente dolore.
          </p>
          <button className="mt-10 text-base py-[10px] px-4 rounded-md bg-[#F3EDE9] text-[#AFA798]">
            Learn more
          </button>
        </div>

        <div className="hidden md:block md:w-[625px] md:h-[435px]">
          <img src="/stone_2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
