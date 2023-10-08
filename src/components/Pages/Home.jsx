import React from "react";
import topImg from "../img/arun main img.jpeg";
import { useNavigate } from "react-router-dom";

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
    <div className="bg-black text-white w-full">
      <div className="relative border ">
        <img src={topImg} alt="Arun Dhawan- MD"></img>
        <p className="absolute top-[20%] right-[10%] text-7xl text-[#69ffd6] font-semibold">
          Arun Dhawan
        </p>
        <p className="absolute top-[35%] right-[18%] text-3xl">
          Managing Director
        </p>
        <p className="absolute top-[45%] right-[15%] text-5xl">
          BestWay Future
        </p>
      </div>
      <div className="px-[10%]">
        <p className="text-5xl  text-[#69ffd6] text-center mt-4">
          On a Mission to inspire Millions of Lives
        </p>
        <p className="text-center text-2xl mt-4">
          Arun Dhawan has spent more than 12 years of his life creating
          breakthroughs and transforming lives
        </p>
      </div>
      <div className="px-[10%] w-full flex items-center mt-10">
        <div className="w-[50%]">
          <div dangerouslySetInnerHTML={{ __html: embedCode }} />
        </div>
        <div className="w-[50%]">
          <p className="ml-5 text-xl">
            <span className="text-[#69ffd6]">Mr. Arun Dhawan</span>, the
            distinguished{" "}
            <span className="text-[#69ffd6]">Managing Director</span> of{" "}
            <span className="text-[#69ffd6]">
              Bestway Health and Future Pvt Ltd
            </span>{" "}
            , stands as a remarkable figure in the world of{" "}
            <span className="text-[#69ffd6]">business</span> and{" "}
            <span className="text-[#69ffd6]">motivational speaking</span>. With
            over <span className="text-[#69ffd6]">12 years</span> of invaluable
            experience in the field of{" "}
            <span className="text-[#69ffd6]">network marketing</span> .{" "}
            <span className="text-[#69ffd6]">Mr. Arun Dhawan</span>is not only a
            seasoned Network marketing professional but also a{" "}
            <span className="text-[#69ffd6]">motivational luminary</span>,{" "}
            <span className="text-[#69ffd6]">positively impacting </span>the
            lives of many and leaving an indelible mark on the{" "}
            <span className="text-[#69ffd6]">world of business</span> and{" "}
            <span className="text-[#69ffd6]">personal development</span>. His{" "}
            <span className="text-[#69ffd6]">journey</span> is a testament to
            the power of perseverance and greatness that{" "}
            <span className="text-[#69ffd6]">lies</span> within each of us.
          </p>
          <button
            className="py-2 px-4 bg-[#69ffd6] text-black rounded ml-[60%] hover:bg-gray-400"
            onClick={() => navigate("/about")}
          >
            See full Bio
          </button>
        </div>
      </div>
      <div className="px-[10%] w-full flex ">
        <div className="w-[40%] flex items-center ">
          <p className="text-[250px] text-[#69ffd6] "> 12</p>
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
    </div>
  );
};
