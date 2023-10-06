import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

export const Footer = () => {
  return (
    <div className="px-[10%] w-full bg-black text-white flex">
      <div className="w-[33%] flex flex-col">
        <img
          src="https://bestwayfuture.com/data/logo.png"
          alt="logo"
          className="w-32 h-auto ml-[35%]"
        />
        <p>
          Bestway health and Future Pvt. Ltd. cares about your health as much as
          you do. We are all one in the same, searching for pain-free well-being
          in life.{" "}
        </p>
      </div>
      <div className="w-[33%] flex flex-col items-center mt-4">
        <div className="flex">
          <a href="https://www.youtube.com/@bestwayofficial5273" target="blank">
            {
              <AiFillYoutube
                size={50}
                className="bg-[#FF0000] py-2 px-1 rounded mr-4"
              />
            }{" "}
          </a>
          <a href="https://www.facebook.com/bestwayinformation" target="blank">
            {
              <BiLogoFacebook
                size={50}
                className="bg-[#1877F2] py-2 px-1 rounded mr-4"
              />
            }{" "}
          </a>
          <a href="https://www.instagram.com/bestway_mizoram_/" target="blank">
            {
              <AiFillInstagram
                size={50}
                className="bg-[#E4405F] py-2 px-1 rounded mr-4"
              />
            }{" "}
          </a>
          <a href="https://twitter.com/BestwayFuture" target="blank">
            {" "}
            {
              <AiOutlineTwitter
                size={50}
                className="bg-[#1DA1F2] py-2 px-1 rounded mr-4"
              />
            }{" "}
          </a>
        </div>
        <div className=""></div>
      </div>
      <div className="w-[33%]"></div>
    </div>
  );
};
