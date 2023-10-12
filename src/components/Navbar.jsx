import React, { useState } from "react";
import {
  AiTwotonePhone,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [activelink, setActiveLink] = useState("");

  // State variable to control dropdown menu visibility
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
    // console.log("clicked")
  };

  const handleActiveClick = (link) => {
    setActiveLink(link);
    setIsDropdownVisible(!isDropdownVisible)
  };
  return (
    <div className="w-full bg-primary text-secondary  items-center ">
      <div className="flex  md:px-[10%] h-10 border-t-4 border-tertiary px-[5%]">
        <div className="w-[65%]  md:w-[50%]  flex items-center cursor-pointer ">
          <p className="mr-1  text-tertiary">{<AiTwotonePhone />} </p>
          <p>Team: 0171-2960400</p>
          
        </div>
        <div className="w-[35%]  md:w-[50%] flex items-center md:pl-[28%]">
          <a
            href="https://www.instagram.com/arundhawan22/ "
            target="blank"
            className="md:mr-5 mr-1 hover:text-tertiary"
          >
            {<AiFillInstagram size={25} />}
          </a>
          <a
            href="https://www.facebook.com/arundhawanbwf"
            target="blank"
            className="md:mr-5 mr-1 hover:text-tertiary"
          >
            {<AiFillFacebook size={25} />}
          </a>
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2FArunDhawan_"
            target="blank"
            className="md:mr-5 mr-1 hover:text-tertiary"
          >
            {<AiFillTwitterSquare size={25} />}
          </a>
          <a
            href="https://www.linkedin.com/in/arun-dhawan/"
            target="blank"
            className="mr-5 hover:text-tertiary"
          >
            {<AiFillLinkedin size={25} />}
          </a>
        </div>
      </div>
      <div className="bg-tertiary md:px-[10%]">
        <nav>
          <ul className="flex items-center w-full  h-20">
            <div className="w-[50%] pl-5">
              <li>
                <Link to="/home">
                  <img
                    src="https://bestwayfuture.com/data/logo.png"
                    alt="logo"
                    className="w-24 h-auto"
                  />
                </Link>
              </li>
            </div>
            <div
              className={`w-[50%] md:flex md:items-center md:ml-[15%] 
            text-xl font-semibold  text-primary`}
            >
              <div
                className="lg:hidden cursor-pointer pl-[70%]"
                onClick={toggleDropdown}
              >
                {isDropdownVisible?<RxCross2 size={30}/>:<GiHamburgerMenu size={30} />}
              </div>
              <li
                className={`mr-10 hover:text-quinary hidden lg:block
            ${activelink === "home" ? "text-quinary" : ""}`}
                onClick={() => handleActiveClick("home")}
              >
                <Link to="/home">Home</Link>
              </li>
              <li
                className={`mr-10 hover:text-quinary  hidden lg:block
               ${activelink === "about" ? "text-quinary" : ""}`}
                onClick={() => handleActiveClick("about")}
              >
                <Link to="/about ">About</Link>
              </li>
              <li
                className={`mr-10 hover:text-quinary hidden lg:block
               ${activelink === "events" ? "text-quinary" : ""}`}
                onClick={() => handleActiveClick("events")}
              >
                <Link to="/events">Events</Link>
              </li>
              <li
                className={`mr-10 hover:text-quinary hidden lg:block
               ${activelink === "contact" ? "text-quinary" : ""}`}
                onClick={() => handleActiveClick("contact")}
              >
                <Link to="/contact">Contact us</Link>
              </li>
            </div>
          </ul>
        </nav>
        {isDropdownVisible && (
          <nav className="">
            <ul className="flex flex-col items-center w-full h-48 text-primary lg:hidden">
              <li
                className="p-3 hover:text-quinary"
                onClick={() => handleActiveClick("home")}
              >
                <Link to="/home">Home</Link>
              </li>
              <li
                className="p-3 hover:text-quinary"
                onClick={() => handleActiveClick("about")}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className="p-3 hover:text-quinary"
                onClick={() => handleActiveClick("events")}
              >
                <Link to="/events">Events</Link>
              </li>
              <li
                className="p-3 hover:text-quinary"
                onClick={() => handleActiveClick("contact")}
              >
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};
