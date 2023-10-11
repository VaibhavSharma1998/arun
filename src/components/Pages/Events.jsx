import React from "react";
import eventsMainImg from "../img/eventsMainImg.jpeg";
import { EventsCom } from "../EventsCom";
// import  trainingImg1 from '../img/trainingImg1.jpeg'


export const Events = () => {
  return (
    <div className="w-full  bg-primary text-secondary">
      <div className="relative">
        <img
          src={eventsMainImg}
          alt="Arun Dhawan"
          className="w-full h-[28rem] rounded-lg opacity-50 border"
        />
        {/* <p className='absolute top-80 right-[40rem] text-7xl font-semibold text-tertiary '>Events</p> */}
      </div>
      <EventsCom/>
    </div>
  );
};
