import React from "react";
import aboutImg from "../img/arun about photo.jpeg";

export const About = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-black text-white w-full px-[10%] ">
      <div>
        <img
          src={aboutImg}
          alt="Arun Dhawan img"
          className="w-full h-[30rem] borde px-[5%]"
        />
      </div>
      <h1 className="text-center text-[#69ffd6] text-5xl font-semibold mt-4">
        MD Arun Dhawan
      </h1>
      <div className="w-[10%] mx-auto border-b-2 border-[#69ffd6] mt-2"></div>
      <div className="">
        <ul className="list-disc text-xl ]">
         
          <li className="mt-4  ">
            <span className="text-[#69ffd6]">Mr. Arun Dhawan</span>, a name
            synonymous with excellence in the world of{" "}
            <span className="text-[#69ffd6]">business</span> , serves as the{" "}
            <span className="text-[#69ffd6]">Managing Director</span> of{" "}
            <span className="text-[#69ffd6]">
              {" "}
              Bestway Health and Future Pvt Ltd
            </span>
            . With over a <span className="text-[#69ffd6]">decade</span> of{" "}
            <span className="text-[#69ffd6]">experience</span> in the field, he
            has established himself as a
            <span className="text-[#69ffd6]">visionary leader</span>
            and a driving force behind the company's success. His{" "}
            <span className="text-[#69ffd6]">journey </span>in{" "}
            <span className="text-[#69ffd6]">network marketing</span> has been
            nothing short of{" "}
            <span className="text-[#69ffd6]">inspirational</span>.
          </li>
          <li className="mt-4 ">
            As a successful entrepreneur, Mr. Dhawan has navigated the complex
            terrain of business with finesse and determination. His innovative
            strategies and unwavering commitment to his goals have propelled
            Bestway Health and Future Pvt Ltd to new heights. Under
            hisleadership, the company has achieved remarkable milestones ,
            setting an example for others to follow.
          </li>
          <li className="mt-4 ">
            Beyond his role as a corporate leader, Mr. Arun Dhawan is a
            renownedmotivational speaker. His words resonate with aspiring
            entrepreneursand individuals seeking to make their mark in the
            business world. Through his speeches and seminars, he imparts
            valuable insights andinspires others to chase their dreams
            relentlessly.
          </li>
          <li className="mt-4 ">
            Mr. Dhawan's influence extends beyond the boardroom. He is a
            dedicated philanthropist with a deep sense of social responsibility.
            His commitment to giving back to the community is evident through
            various charitable initiatives and projects aimed at improving the
            lives of those less fortunate. He believes in using his success to
            make the world a better place.
          </li>
          <li className="mt-4 ">
            In conclusion, Mr. Arun Dhawan is a multifaceted individual who
            wears many hats with grace and distinction. Whether it's his role as
            the Managing Director, his entrepreneurial endeavors, motivational
            speaking engagements, or philanthropic work, he continues to make a
            significant impact. His journey serves as an inspiration to all,
            illustrating that with dedication, innovation, and a giving spirit,
            one can achieve greatness in both business and life.
          </li>
        </ul>
      </div>
    </div>
  );
};
