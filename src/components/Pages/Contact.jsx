import React, { useState } from "react";
import handshakeContact from "../img/handshakeContact.jpeg";
import { AiOutlineMail, AiOutlineFieldTime, AiFillPhone } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

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
      toast.success("🦄 Wow so easy!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
          alt="Contact Img "
          className="w-full h-[28rem] rounded-lg opacity-50 borde"
        />
        <div className="flex flex-col absolute top-[19rem] left-40">
          <p className="text-5xl font-semibold ml-20">CONTACT</p>
          <p className="text-2xl">"Worlds Change, When eyes meet"</p>
        </div>
      </div>
      <h1 className="text-center text-tertiary text-5xl font-semibold mt-10">
        Contact Us
      </h1>
      <div className="w-[10%] mx-auto border-b-2 border-tertiary mt-2"></div>
      <div className="w-full flex px-[10%] mt-10 pb-20 ">
        <div className="w-[50%] flex flex-col ml-20">
          <p className=" text-3xl font-semibold text-tertiary">Get in Touch</p>
          <div className="flex mt-10">
            <p className="mr-2 text-tertiary">
              {<AiOutlineMail size={30} className="" />}
            </p>
            <p className="text-2xl">bestwayservice16@gmail.com </p>
          </div>
          <div className="flex mt-20">
            <p className="mr-2 text-tertiary">{<CiLocationOn size={30} />}</p>
            <p className="text-2xl">
              {" "}
              Sector 9-10 road,Jandli Rd,Luxmi <br />
              Nagar,Ambala,Haryana,134003
            </p>
          </div>
          <div className="flex mt-20">
            <p className="mr-2 text-tertiary">{<AiFillPhone size={30} />}</p>
            <p className="text-2xl">+91 73 4748 7946</p>
          </div>
          <div className="flex mt-20">
            <p className="mr-2 text-tertiary">
              {<AiOutlineFieldTime size={30} />}
            </p>
            <p className="text-2xl"> 09:00AM - 6:00PM</p>
          </div>
        </div>
        <div className="w-[50%]">
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
              className="block w-[70%] mt-4 p-2"
              onChange={handleChange}
              required
            />
            <label className="block mt-4 text-secondary">Email :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your email"
              className="block w-[70%] mt-4 p-2"
              onChange={handleChange}
              required
            />
            <label className="block mt-4 text-secondary">Phone :</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="Your phone"
              className="block w-[70%] mt-4 p-2"
              onChange={handleChange}
              required
            />
            <label className="block mt-4 text-secondary">Message :</label>
            <textarea
              placeholder="Your message"
              className="block w-[70%] mt-4 p-2"
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
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToastContainer />
    </div>
  );
};
