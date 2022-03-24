import React, { useRef, useEffect } from "react";
import About from "../components/About";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import Service from "../components/Service";
import UpButton from "../elements/UpButton";
import AOS from "aos";
import WaButton from "../elements/WaButton";
import { useSelector } from "react-redux";

function LandingPage() {
  AOS.init();

  const servicePageRef = useRef(null);
  const aboutPageRef = useRef(null);
  const featurePageRef = useRef(null);
  const productPageRef = useRef(null);
  const teamPageRef = useRef(null);

  const toUpRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    switch (e.target.text) {
      case "Service":
        servicePageRef.current.scrollIntoView();
        break;
      case "About":
        aboutPageRef.current.scrollIntoView();
        break;
      case "Feature":
        featurePageRef.current.scrollIntoView();
        break;
      case "Product":
        productPageRef.current.scrollIntoView();
        break;
      case "Teams":
        teamPageRef.current.scrollIntoView();
        break;
    }
  };

  const toUpBtn = () => {
    toUpRef.current.scrollIntoView();
  };

  const stateGlobal = useSelector((state) => state);

  console.log(stateGlobal);

  return (
    <div className="relative mb-10 overflow-x-hidden" ref={toUpRef}>
      <Header onClick={handleClick} />
      <Service ref={servicePageRef} />
      <About ref={aboutPageRef} />
      <Feature ref={featurePageRef} />
      <Product ref={productPageRef} />
      <Footer />
      <WaButton />
      {/* <UpButton onclick={toUpBtn} /> */}
    </div>
  );
}

export default LandingPage;
