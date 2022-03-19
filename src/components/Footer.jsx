import React from "react";

import Insta from "../assets/icons/instagram.svg";
import Fb from "../assets/icons/facebook.svg";
import Tweet from "../assets/icons/twitter.svg";
import Mail from "../assets/icons/mail.svg";

function Footer() {
  return (
    <footer className="py-[131px] container mx-auto px-5">
      <div className="flex flex-col md:flex-row gap-10 md:gap-32">
        <div className="card">
          <h3 className="text-3xl font-normal brand">Interior</h3>
          <p className="text-[#1B1C22] mt-4 text-lg">
            50 New Town Street, <br /> V2 5NW, Plastian, USA.
          </p>
          <p className="text-[#1B1C22] mt-4 text-lg">
            Costumer Service : support@interior.com
          </p>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold">Support</h3>
          <p className="text-[#1B1C22] mt-3 text-lg">
            <a href="" className="hover:underline">
              Privacy & Policy
            </a>
          </p>
          <p className="text-[#1B1C22] mt-3 text-lg">
            <a href="" className="hover:underline">
              Term & Conditions
            </a>
          </p>
          <p className="text-[#1B1C22] mt-3 text-lg">
            <a href="" className="hover:underline">
              Support System
            </a>
          </p>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold">Our Services</h3>
          <p className="text-[#1B1C22] mt-3 text-lg">
            <a href="" className="hover:underline">
              About Us
            </a>
          </p>
          <p className="text-[#1B1C22] mt-3 text-lg">
            <a href="" className="hover:underline">
              Design Services
            </a>
          </p>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <div className="mt-7 flex gap-2">
            <a href="" className="bg-[#AFA798] p-2 rounded-md">
              <img src={Insta} alt="" width={20} />
            </a>
            <a href="" className="bg-[#AFA798] p-2 rounded-md">
              <img src={Fb} alt="" width={20} />
            </a>
            <a href="" className="bg-[#AFA798] p-2 rounded-md">
              <img src={Tweet} alt="" width={20} />
            </a>
            <a href="" className="bg-[#AFA798] p-2 rounded-md">
              <img src={Mail} alt="" width={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
