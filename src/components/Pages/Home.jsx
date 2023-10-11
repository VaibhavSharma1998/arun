import React from "react";
import topImg from "../img/arun main img.jpeg";
import { useNavigate } from "react-router-dom";
import { EventsCom } from "../EventsCom";

export const Home = () => {
  const embedCode = `
  <iframe width="560" 
  height="325" 
  src="https://www.youtube.com/embed/uKIkbq-IWVA?si=4LAX9uG3hgog_Kuz"
   title="YouTube video player" frameborder="0" 
   allow="accelerometer; autoplay; 
   clipboard-write; 
   encrypted-media; 
   gyroscope; 
   picture-in-picture; 
   web-share" 
   allowfullscreen>
   </iframe>
  `;
  const navigate = useNavigate();
  return (
    <div className="bg-primary text-secondary w-full">
      <div className="relative ">
        <img src={topImg} alt="Arun Dhawan- MD"></img>
        <div className="absolute top-[30%] right-[10%] ">
          <p className="text-7xl text-tertiary font-semibold">Arun Dhawan</p>
          <p className=" text-3xl mt-4 ml-20">Managing Director</p>
          <p className=" text-5xl mt-4 ml-8">BestWay Future</p>
        </div>
      </div>
      <div className="px-[10%] mt-10">
        <p className="text-5xl  text-tertiary text-center ">
          On a Mission to inspire Millions of Lives
        </p>
        <p className="text-center text-2xl mt-4">
          Arun Dhawan has spent more than 12 years of his life creating
          breakthroughs and transforming lives
        </p>
      </div>
      <div className="px-[10%] w-full flex items-center mt-10">
        <div className="w-[50% ]">
          <div dangerouslySetInnerHTML={{ __html: embedCode }} />
        </div>
        <div className="w-[50%]">
          <p className="ml-10 text-xl">
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
            className="py-2 px-16 bg-tertiary text-primary rounded  hover:bg-gray-400 mt-2 ml-10"
            onClick={() => navigate("/about")}
          >
            SEE fULL BIO
          </button>
        </div>
      </div>
      <div className="px-[10%] w-full flex mt-10">
        <div className="w-[40%] flex items-center ">
          <p className="text-[250px] text-tertiary "> 12</p>
          <div className=" flex  flex-col ml-5">
            <p className="text-3xl">Years of </p>
            <p className="text-3xl mt-1">experience</p>
            <p className="text-xl mt-2">Glorious 12 years of</p>
            <p className="text-xl ">experience and success in</p>
            <p className="text-xl">changing lives.</p>
          </div>
        </div>
        <div className="w-[60%] flex items-center">
          <div className="w-[50%]  flex flex-col items-center ">
            <div className="flex flex-col items-center">
              <p className="text-5xl ">10 +</p>
              <p className="text-3xl my-4">Countries</p>
              <hr className="w-[200%]"></hr>
            </div>
            <div className="flex flex-col items-center mt-5">
              <p className="text-5xl">5.1 L</p>
              <p className="text-3xl my-4">Participants</p>
            </div>
          </div>
          <div className="w-[50%] border-l-2">
            <div className="flex flex-col items-center">
              <p className="text-5xl">500 +</p>
              <p className="text-3xl my-4">Workshops</p>
              <hr className="w-[80%]"></hr>
            </div>
            <div className="flex flex-col items-center mt-5">
              <p className="text-5xl">800 +</p>
              <p className="text-3xl my-4">Events</p>
            </div>
          </div>
        </div>
      </div>
      <EventsCom/>
    </div>
  );
};
