import React from "react";
import trainingImg2 from "./img/trainingImg2.jpeg";
import trainingImg3 from "./img/trainingImg3.jpeg";
import trainingImg4 from "./img/trainingImg4.jpeg";
import carAchiever1 from "./img/carAchiever1.jpeg";
import carAchiever2 from "./img/carAchiever2.jpeg";
import carAchiever3 from "./img/carAchiever3.jpeg";
import carAchiever4 from "./img/carAchiever4.jpeg";
import carAchiever5 from "./img/carAchiever5.jpeg";
import carAchiever6 from "./img/carAchiever6.jpeg";
import moments1 from './img/moments1.jpeg'
import moments2 from './img/moments2.jpeg'
import moments3 from './img/moments3.jpeg'
import moments4 from './img/moments4.jpeg'
import moments5 from './img/moments5.jpeg'
import moments6 from './img/moments6.jpeg'
import moments7 from './img/moments7.jpeg'
import moments8 from './img/moments8.jpeg'
import moments9 from './img/moments9.jpeg'


export const EventsCom = () => {
  return (
    <div className="w-full  bg-primary text-secondary">
      <p className="text-center text-tertiary md:text-5xl text-3xl font-semibold mt-10">
        Training
      </p>
      <div className="md:w-[5%] w-[20%] mx-auto border-b-2 border-tertiary mt-2"></div>
      <div className="flex px-[10%] w-full mt-10 md:flex-row flex-col">
        <img
          src={trainingImg4}
          alt="Training img 1"
          className="md:w-[33%] w-full h-72 rounded mr-4 border"
        />
        <img
          src={trainingImg2}
          alt="Training img 2"
          className="md:w-[33%] w-full h-72 rounded mr-4 border mt-10 md:mt-0"
        />
        <img
          src={trainingImg3}
          alt="Training img 3"
          className="md:w-[33%] w-full h-72 rounded  border mt-10 md:mt-0"
        />
      </div>
      <p className="text-center text-tertiary md:text-5xl text-3xl font-semibold mt-10">
        Car Achievers
      </p>
      <div className="md:w-[10%] w-[30%] mx-auto border-b-2 border-tertiary mt-2"></div>
      <div className="flex px-[10%] w-full mt-10 md:flex-row flex-col">
        <img
          src={carAchiever1}
          alt="Training img 1"
          className="md:w-[33%] w-full h-72 rounded mr-4 border"
        />
        <img
          src={carAchiever2}
          alt="Training img 2"
          className="md:w-[33%] w-full h-72 rounded mr-4 border mt-10 md:mt-0"
        />
        <img
          src={carAchiever3}
          alt="Training img 3"
          className="md:w-[33%] w-full h-72 rounded mr-4 border mt-10 md:mt-0"
        />
      </div>
      <div className="flex px-[10%] w-full mt-10 md:flex-row flex-col">
        <img
          src={carAchiever4}
          alt="Training img 1"
          className="md:w-[33%] w-full h-72 rounded mr-4 border"
        />
        <img
          src={carAchiever5}
          alt="Training img 2"
          className="md:w-[33%] w-full h-72 rounded mr-4 border mt-10 md:mt-0"
        />
        <img
          src={carAchiever6}
          alt="Training img 3"
          className="md:w-[33%] w-full h-72 rounded  border mt-10 md:mt-0"
        />
      </div>
      <p className="text-center text-tertiary md:text-5xl text-3xl font-semibold mt-10">
        Cherishing Moments
      </p>
      <div className="md:w-[15%]  w-[30%] mx-auto border-b-2 border-tertiary mt-3"></div>
      <div className="flex px-[10%] w-full mt-10 md:flex-row flex-col">
        <img
          src={moments1}
          alt="Training img 1"
          className="md:w-[33%] w-full h-72 rounded mr-4 border"
        />
        <img
          src={moments2}
          alt="Training img 2"
          className="md:w-[33%] w-full h-72 rounded mr-4 border mt-10 md:mt-0"
        />
        <img
          src={moments3}
          alt="Training img 3"
          className="md:w-[33%] w-full h-72 rounded  border mt-10 md:mt-0"
        />
      </div>
      <div className="flex px-[10%] w-full mt-10 md:flex-row flex-col">
        <img
          src={moments4}
          alt="Training img 1"
          className="md:w-[33%] w-full h-72 rounded mr-4 border"
        />
        <img
          src={moments5}
          alt="Training img 2"
          className="md:w-[33%] w-full h-72 rounded mr-4 border mt-10 md:mt-0"
        />
        <img
          src={moments6}
          alt="Training img 3"
          className="md:w-[33%] w-full h-72 rounded  border mt-10 md:mt-0"
        />
      </div>
      <div className="flex px-[10%] w-full mt-10 md:flex-row flex-col pb-10">
        <img
          src={moments7}
          alt="Training img 1"
          className="md:w-[33%] w-full h-72 rounded mr-4 border"
        />
        <img
          src={moments8}
          alt="Training img 2"
          className="md:w-[33%] w-full h-72 rounded mr-4 border mt-10 md:mt-0"
        />
        <img
          src={moments9}
          alt="Training img 3"
          className="md:w-[33%] w-full h-72 rounded  border mt-10 md:mt-0"
        />
      </div>
    </div>
  );
};
