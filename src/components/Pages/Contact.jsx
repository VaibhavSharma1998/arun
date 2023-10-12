import React, { useState } from "react";
import handshakeContact from "../img/handshakeContact.jpeg";
import { AiOutlineMail, AiOutlineFieldTime, AiFillPhone } from "react-icons/ai";
import { toast } from "react-toastify";

import { CiLocationOn } from "react-icons/ci";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.name && formData.email && formData.phone && formData.message) {
      // Form is valid; you can perform form submission logic here
      console.log(formData);
      // alert("Success!");

      // Clear the form inputs by resetting the state to empty values
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Trigger the toast notification for a successful submission
      toast.success("Thank you so much for your interest,Our expert will call you shortly!", 
      );
    } else {
      // Form is invalid; display an error message or take other actions as needed
      alert("Please fill in all the required fields.");
    }
  };

  return (
    <div className="w-full bg-primary text-secondary">
      <div className="relative">
        <img
          src={handshakeContact}
          alt="Contact Img"
          className="w-full h-[28rem] rounded-lg opacity-50 borde"
        />
        <div className="flex flex-col absolute  lg:left-40 top-[19rem] left-5">
          <p className="md:text-5xl  text-3xl font-semibold md:ml-20">CONTACT</p>
          <p className="md:text-2xl ">"Worlds Change, When eyes meet"</p>
        </div>
      </div>
      <h1 className="text-center text-tertiary md:text-5xl  text-3xl font-semibold mt-10">
        Contact Us
      </h1>
      <div className="lg:w-[10%]  w-[20%] mx-auto border-b-2 border-tertiary mt-2"></div>
      <div className="w-full flex lg:px-[10%] px-[5%] mt-10 pb-10 md:flex-row flex-col">
        <div className="lg:w-[50%] md:w-[55%] flex flex-col lg:ml-20 ml-0">
          <p className="text-3xl font-semibold text-tertiary">Get in Touch</p>
          <div className="flex mt-10">
            <p className="mr-2 text-tertiary">
              {<AiOutlineMail size={30} className="" />}
            </p>
            <p className="md:text-2xl text-xl">bestwayservice16@gmail.com </p>
          </div>
          <div className="flex mt-10">
            <p className="mr-2 text-tertiary">{<CiLocationOn size={30} />}</p>
            <p className="md:text-2xl text-xl">
              {" "}
              Sector 9-10 road,Jandli Rd,Luxmi <br />
              Nagar,Ambala,Haryana,134003
            </p>
          </div>
          <div className="flex mt-10">
            <p className="mr-2 text-tertiary">{<AiFillPhone size={30} />}</p>
            <p className="md:text-2xl text-xl">+91 73 4748 7946</p>
          </div>
          <div className="flex mt-10">
            <p className="mr-2 text-tertiary">
              {<AiOutlineFieldTime size={30} />}
            </p>
            <p className="md:text-2xl text-xl"> 09:00AM - 6:00PM</p>
          </div>
        </div>
        <div className="lg:w-[50%] md:w-[45%] mt-10 md:mt-0">
          <p className=" text-3xl font-semibold text-tertiary">
            Have Any Questions?
          </p>
          <form className="text-primary" onSubmit={handleSubmit}>
            <label className="block mt-4 text-secondary">Name :</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your name"
              className="block lg:w-[70%] w-[85%] mt-4 p-2"
              onChange={handleChange}
              required
            />
            <label className="block mt-4 text-secondary">Email :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your email"
              className="block lg:w-[70%] w-[85%] mt-4 p-2"
              onChange={handleChange}
              required
            />
            <label className="block mt-4 text-secondary">Phone :</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="Your phone"
              className="block lg:w-[70%] w-[85%] mt-4 p-2"
              onChange={handleChange}
              required
            />
            <label className="block mt-4 text-secondary">Message :</label>
            <textarea
              placeholder="Your message"
              className="block lg:w-[70%] w-[85%] mt-4 p-2"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button className="bg-tertiary py-2 px-8 text-primary hover:bg-gray-400 mt-4 rounded ml-[20%]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
