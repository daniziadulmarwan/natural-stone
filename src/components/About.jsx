import React from "react";

const About = React.forwardRef((props, ref) => {
  return (
    <div className="mt-48 bg-[#F3EDE9] py-40" ref={ref}>
      <div className="container mx-auto px-5 md:px-20 flex flex-col gap-5 md:flex-row justify-between">
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-semibold">
            About <span className="text-[#AFA798]">us</span>
          </h3>
          <p className="mt-4 md:mt-8 text-[#1B1C22] text-xl">
            We process more than 1,500 hectares of coconut plantations, spread
            across several islands in Eastern Indonesia.
          </p>
          <p className="mt-8 md:mt-10 text-[#1B1C22] text-lg">
            In the beginning, our company was engaged in manufacturing where we
            processed coconut derivative products, namely coconut shells into
            coconut shell charcoal.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:ml-60">
          <div className="z-40">
            <div className="w-full md:w-[513px] md:h-[350px] overflow-hidden bg-[url('/stone_9.jpg')] bg-cover bg-center">
              {/* <img src="/stone_9.jpg" alt="Universal Stone - River Stone" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
