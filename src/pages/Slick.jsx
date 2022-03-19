import React from "react";
import Slider from "react-slick";
import Button from "../elements/Button";
import ProductSlick from "../elements/PoductSlick";

import Stone1 from "/stone_5.jpg";
import Stone2 from "/stone_6.jpg";
import Stone3 from "/stone_7.jpg";

const datas = [
  {
    id: 1,
    img: Stone1,
    date: "1 January 2021",
    title: "Make Cozy Space in Your Home",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
  },
  {
    id: 2,
    img: Stone2,
    date: "24 Maret 2020",
    title: "Story with Minimalist Furnitures",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
  },
  {
    id: 3,
    img: Stone3,
    date: "9 Mei 2019",
    title: "Make Cozy Space in Your Home",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
  },
  {
    id: 4,
    img: Stone1,
    date: "16 Desember 2021",
    title: "Make Cozy Space in Your Home",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
  },
  {
    id: 5,
    img: Stone2,
    date: "24 Juli 2020",
    title: "Story with Minimalist Furnitures",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
  },
];

const Slick = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-80">
      <div className="container mx-auto text-center">
        <Slider {...settings}>
          {datas.map((data) => {
            return <ProductSlick key={data.id} data={data} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Slick;
