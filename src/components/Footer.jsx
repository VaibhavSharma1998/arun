import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillApple,
  AiOutlineMail,
  AiOutlineFieldTime,
  AiFillPhone,
  AiFillHeart,
} from "react-icons/ai";
import { BiLogoFacebook, BiLogoPlayStore } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

export const Footer = () => {
  return (
    <div className="flex flex-col px-[10%] w-full bg-black text-white">
      <div className="flex">
        <div className="w-[33%] flex flex-col">
          <img
            src="https://bestwayfuture.com/data/logo.png"
            alt="logo"
            className="w-32 h-auto ml-[30%]"
          />
          <p>
            Bestway health and Future Pvt. Ltd. cares about your health as much
            as you do. We are all one in the same, searching for pain-free
            well-being in life.{" "}
          </p>
        </div>
        <div className="w-[33%] flex flex-col items-center mt-6">
          <div className="flex">
            <a
              href="https://www.youtube.com/@bestwayofficial5273"
              target="blank"
            >
              {
                <AiFillYoutube
                  size={50}
                  className="bg-[#FF0000] py-2 px-1 rounded mr-4"
                />
              }{" "}
            </a>
            <a
              href="https://www.facebook.com/bestwayinformation"
              target="blank"
            >
              {
                <BiLogoFacebook
                  size={50}
                  className="bg-[#1877F2] py-2 px-1 rounded mr-4"
                />
              }{" "}
            </a>
            <a
              href="https://www.instagram.com/bestway_mizoram_/"
              target="blank"
            >
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
          <div className="flex mt-8 cursor-pointer">
            <div className="flex border  rounded items-center mr-5">
              <a
                href="https://apps.apple.com/us/app/bestway-health-and-future/id1567543819"
                target="blank"
                className="flex items-center"
              >
                {<AiFillApple size={30} />}
                <div className="flex flex-col items-center pr-1">
                  <p className="text-xs">Download on the</p>
                  <p> App Store</p>
                </div>
              </a>
            </div>
            <div className="flex">
              <div className="flex border  rounded items-center">
                <a
                  href="https://play.google.com/store/apps/details?id=app.bestwayfuture.com"
                  target="blank"
                  className="flex items-center"
                >
                  {<BiLogoPlayStore size={30} />}
                  <div className="flex flex-col items-center pr-1">
                    <p className="text-xs">Download on the</p>
                    <p>Play Store</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[33%] flex flex-col">
          <p className="ml-[15%] text-3xl font-semibold">Contact us</p>
          <div className="flex mt-1">
            <p className="mr-2 text-[#69ffd6]">
              {<AiOutlineMail size={30} className="" />}
            </p>
            <p>bestwayservice16@gmail.com </p>
          </div>
          <div className="flex mt-1">
            <p className="mr-2 text-[#69ffd6]">{<CiLocationOn size={30} />}</p>
            <p> Sector 9-10 road,Jandli Rd,Luxmi Nagar,Ambala,Haryana,134003</p>
          </div>
          <div className="flex mt-1">
            <p className="mr-2 text-[#69ffd6]">{<AiFillPhone size={30} />}</p>
            <p>+91 73 4748 7946</p>
          </div>
          <div className="flex mt-1">
            <p className="mr-2 text-[#69ffd6]">
              {<AiOutlineFieldTime size={30} />}
            </p>
            <p> 09:00AM - 6:00PM</p>
          </div>
        </div>
      </div>
      <p className="text-center text-3xl">
        Made with{" "}
        <span className="text-red-400">
          {<AiFillHeart size={30} className="text-[#69ffd6 inline" />}{" "}
        </span>
        by{" "}
        <span className="text-[#69ffd6] font-semibold">
          {" "}
          <a href="https://www.linkedin.com/in/vaibhav1998/" target="blank">
            Vaibhav Sharma
          </a>
        </span>
      </p>
    </div>
  );
};
