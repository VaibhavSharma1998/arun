import React from "react";
import eventsMainImg from "../img/eventsMainImg.jpeg";
// import  trainingImg1 from '../img/trainingImg1.jpeg'
import trainingImg2 from "../img/trainingImg2.jpeg";
import trainingImg3 from "../img/trainingImg3.jpeg";
import trainingImg4 from "../img/trainingImg4.jpeg";
import carAchiever1 from "../img/carAchiever1.jpeg";
import carAchiever2 from "../img/carAchiever2.jpeg";
import carAchiever3 from "../img/carAchiever3.jpeg";
import carAchiever4 from "../img/carAchiever4.jpeg";
import carAchiever5 from "../img/carAchiever5.jpeg";
import carAchiever6 from "../img/carAchiever6.jpeg";
import moments1 from '../img/moments1.jpeg'
import moments2 from '../img/moments2.jpeg'
import moments3 from '../img/moments3.jpeg'
import moments4 from '../img/moments4.jpeg'
import moments5 from '../img/moments5.jpeg'
import moments6 from '../img/moments6.jpeg'
import moments7 from '../img/moments7.jpeg'
import moments8 from '../img/moments8.jpeg'
import moments9 from '../img/moments9.jpeg'

export const Events = () => {
  return (
    <div className="w-full  bg-black text-white">
      <div className="relative">
        <img
          src={eventsMainImg}
          alt="Arun Dhawan"
          className="w-full h-[28rem] rounded-lg opacity-50 border"
        />
        {/* <p className='absolute top-80 right-[40rem] text-7xl font-semibold text-[#69ffd6] '>Events</p> */}
      </div>
      <p className="text-center text-[#69ffd6] text-5xl font-semibold mt-8">
        Training
      </p>
      <div className="w-[5%] mx-auto border-b-2 border-[#69ffd6] mt-2"></div>
      <div className="flex px-[10%] w-full mt-8">
        <img
          src={trainingImg4}
          alt="Training img 1"
          className="w-[33%] h-72 rounded mr-4 border"
        />
        <img
          src={trainingImg2}
          alt="Training img 2"
          className="w-[33%] h-72 rounded mr-4 border"
        />
        <img
          src={trainingImg3}
          alt="Training img 3"
          className="w-[33%] h-72 rounded  border"
        />
      </div>
      <p className="text-center text-[#69ffd6] text-5xl font-semibold mt-8">
        Car Achievers
      </p>
      <div className="w-[10%] mx-auto border-b-2 border-[#69ffd6] mt-2"></div>
      <div className="flex px-[10%] w-full mt-8">
        <img
          src={carAchiever1}
          alt="Training img 1"
          className="w-[33%] h-72 rounded mr-4 border"
        />
        <img
          src={carAchiever2}
          alt="Training img 2"
          className="w-[33%] h-72 rounded mr-4 border"
        />
        <img
          src={carAchiever3}
          alt="Training img 3"
          className="w-[33%] h-72 rounded  border"
        />
      </div>
      <div className="flex px-[10%] w-full mt-8">
        <img
          src={carAchiever4}
          alt="Training img 1"
          className="w-[33%] h-72 rounded mr-4 border"
        />
        <img
          src={carAchiever5}
          alt="Training img 2"
          className="w-[33%] h-72 rounded mr-4 border"
        />
        <img
          src={carAchiever6}
          alt="Training img 3"
          className="w-[33%] h-72 rounded border"
        />
      </div>
      <p className="text-center text-[#69ffd6] text-5xl font-semibold mt-8">
      Cherishing Moments
      </p>
      <div className="w-[15%] mx-auto border-b-2 border-[#69ffd6] mt-2"></div>
      <div className="flex px-[10%] w-full mt-8">
        <img
          src={moments1}
          alt="Training img 1"
          className="w-[33%] h-72 rounded mr-4 border"
        />
        <img
          src={moments2}
          alt="Training img 2"
          className="w-[33%] h-72 rounded mr-4 border"
        />
        <img
          src={moments3}
          alt="Training img 3"
          className="w-[33%] h-72 rounded border"
        />
      </div>
      <div className="flex px-[10%] w-full mt-8">
        <img
          src={moments4}
          alt="Training img 1"
          className="w-[33%] h-72 rounded mr-4 border"
        />
        <img
          src={moments5}
          alt="Training img 2"
          className="w-[33%] h-72 rounded mr-4 border"
        />
        <img
          src={moments6}
          alt="Training img 3"
          className="w-[33%] h-72 rounded border"
        />
      </div>
      <div className="flex px-[10%] w-full mt-8 pb-12">
        <img
          src={moments7}
          alt="Training img 1"
          className="w-[33%] h-72 rounded mr-4 border"
        />
        <img
          src={moments8}
          alt="Training img 2"
          className="w-[33%] h-72 rounded mr-4 border"
        />
        <img
          src={moments9}
          alt="Training img 3"
          className="w-[33%] h-72 rounded border"
        />
      </div>
    </div>
  );
};
