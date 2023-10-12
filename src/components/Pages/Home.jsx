import React from "react";
import topImg from "../img/arun main img.jpeg";
import { useNavigate } from "react-router-dom";
import { EventsCom } from "../EventsCom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary text-secondary w-full">
      <div className="relative flex flex-col justify-center items-center md:flex-row w-full ">
        <img src={topImg} alt="Arun Dhawan- MD" className="w-[100%] md:w-[40%]"></img>
        <div className="w-[100%] md:w-[60%] flex flex-col justify-center items-center mt-4 md:mt-0">
          <p className="md:text-5xl lg:text-7xl  text-tertiary font-semibold text-4xl">
            Arun Dhawan
          </p>
          <p className="md:text-2xl  lg:text-3xl md:mt-2  lg:mt-4 ">
            Managing Director
          </p>
          <p className="md:text-4xl  lg:text-5xl md:mt-2  lg:mt-4 text-2xl">
            BestWay Future
          </p>
        </div>
      </div>
      <div className="px-[10%] mt-10">
        <p className="md:text-5xl  text-tertiary text-center ">
          On a Mission to inspire Millions of Lives
        </p>
        <p className="text-center text-2xl mt-4">
          Arun Dhawan has spent more than 12 years of his life creating
          breakthroughs and transforming lives
        </p>
      </div>
      <div className="px-[10%] w-full flex items-center mt-10 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-red-600">
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/uKIkbq-IWVA?si=4LAX9uG3hgog_Kuz"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <p className="md:ml-10 text-xl mt-4">
            <span className="text-tertiary">Mr. Arun Dhawan</span>, the
            distinguished{" "}
            <span className="text-tertiary">Managing Director</span> of{" "}
            <span className="text-tertiary">
              Bestway Health and Future Pvt Ltd{" "}
            </span>
            stands as a remarkable figure in the world of business and
            motivational speaking. With over 12 years of invaluable experience
            in the field of network marketing . Mr. Arun Dhawanis not only a
            seasoned Network marketing professional but also a motivational
            luminary, positively impacting the lives of many and leaving an
            indelible mark on the world of business and personal development.
            His journey is a testament to the power of perseverance and
            greatness that lies within each of us.
          </p>
          <button
            className="py-2 px-16 bg-tertiary text-primary rounded  hover:bg-gray-400 mt-4 md:ml-10 md:mt-2"
            onClick={() => navigate("/about")}
          >
            SEE fULL BIO
          </button>
        </div>
      </div>
      <div className="px-[10%] lg:px-[10%] md:px-[2%] lg:w-full flex md:mt-10 flex-col md:flex-row ">
        <div className="lg:w-[40%] flex items-center flex-col md:flex-row ">
          <p className="md:text-[250px] text-[200px] text-tertiary py-[-100px]">
            {" "}
            12
          </p>
          <div className="flex flex-col lg:ml-5">
            <p className="text-5xl md:text-3xl pl-10 md:pl-0">Years of </p>
            <p className="text-5xl md:mt-1  md:text-3xl pl-5 md:pl-0 mt-0">
              experience
            </p>
            <p className="md:text-xl mt-4 md:mt-2 ">
              Glorious 12 years of{" "}
              <span className="md:hidden">experience and </span>
            </p>
            <p className="md:text-xl  pl-8 md:pl-0">
              <span className="hidden md:block">experience and </span>success in{" "}
              <span className="md:hidden">changing lives.</span>
            </p>
            <p className="text-xl hidden md:block">changing lives.</p>
          </div>
        </div>
        <div className="lg:w-[60%] flex items-center mt-10 md:mt-0">
          <div className="w-[50%]  flex flex-col items-center ">
            <div className="flex flex-col items-center">
              <p className="text-5xl ">10 +</p>
              <p className="text-3xl my-4">Countries</p>
              <hr className="w-[100%] lg:w-[200%]"></hr>
            </div>
            <div className="flex flex-col items-center mt-5">
              <p className="text-5xl">5.1 L</p>
              <p className="text-3xl my-4 pr-4 md:pr-0">Participants</p>
            </div>
          </div>
          <div className="w-[50%] border-l-2">
            <div className="flex flex-col items-center">
              <p className="text-5xl">500 +</p>
              <p className="text-3xl my-4 pl-4 md:pl-0">Workshops</p>
              <hr className="w-[80%]"></hr>
            </div>
            <div className="flex flex-col items-center mt-5">
              <p className="text-5xl">800 +</p>
              <p className="text-3xl my-4 mr-4 md:mr-0">Events</p>
            </div>
          </div>
        </div>
      </div>
      <EventsCom />
    </div>
  );
};
