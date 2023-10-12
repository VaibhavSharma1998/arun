import React from "react";
import aboutImg from "../img/arun about photo.jpeg";


export const About = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="bg-primary text-secondary w-full px-[10%] ">
        <div>
          <img
            src={aboutImg}
            alt="Arun Dhawan img"
            className="w-full h-[30rem] borde px-[5%]"
          />
        </div>
        <h1 className="text-center text-tertiary md:text-5xl text-3xl font-semibold mt-10">
          MD Arun Dhawan
        </h1>
        <div className="lg:w-[10%] w-[40%] md:w-[30%] mx-auto border-b-2 border-tertiary mt-2"></div>
        <div className="">
          <ul className="list-disc mt-10">
            <li className="">
              <span className="text-tertiary">Mr. Arun Dhawan</span>, a name
              synonymous with excellence in the world of{" "}
              <span className="text-tertiary">business</span> , serves as the{" "}
              <span className="text-tertiary">Managing Director</span> of{" "}
              <span className="text-tertiary">
                {" "}
                Bestway Health and Future Pvt Ltd
              </span>
              . With over a <span className="text-tertiary">
                decade
              </span> of <span className="text-tertiary">experience</span> in
              the field, he has established himself as a
              <span className="text-tertiary">visionary leader</span>
              and a driving force behind the company's success. His{" "}
              <span className="text-tertiary">journey </span>in{" "}
              <span className="text-tertiary">network marketing</span> has been
              nothing short of{" "}
              <span className="text-tertiary">inspirational</span>.
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
              dedicated philanthropist with a deep sense of social
              responsibility. His commitment to giving back to the community is
              evident through various charitable initiatives and projects aimed
              at improving the lives of those less fortunate. He believes in
              using his success to make the world a better place.
            </li>
            <li className="mt-4 ">
              In conclusion, Mr. Arun Dhawan is a multifaceted individual who
              wears many hats with grace and distinction. Whether it's his role
              as the Managing Director, his entrepreneurial endeavors,
              motivational speaking engagements, or philanthropic work, he
              continues to make a significant impact. His journey serves as an
              inspiration to all, illustrating that with dedication, innovation,
              and a giving spirit, one can achieve greatness in both business
              and life.
            </li>
          </ul>
        </div>
        <p className="text-tertiary text-2xl mt-10">Business Coach</p>

        <ul className="list-disc text-xl mt-10">
          <li className="">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              totam.
            </p>
          </li>
          <li className="mt-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              totam.
            </p>
          </li>
          <li className="mt-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              totam.
            </p>
          </li>
          <li className="mt-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              totam.
            </p>
          </li>
        </ul>
        <p className="text-tertiary text-2xl mt-10">Awards & Honours</p>

        <ul className="list-disc text-xl mt-10">
          <li className="">
            Awarded as the{" "}
            <span className="text-tertiary">Youngest Entrepreneur</span> of the{" "}
            <span className="text-tertiary">year 2022</span>.
          </li>
          <li className="mt-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              totam.
            </p>
          </li>
          <li className="mt-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              totam.
            </p>
          </li>
          <li className="mt-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              totam.
            </p>
          </li>
          <li className="mt-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              totam.
            </p>
          </li>
        </ul>
      </div>
      
      <div
        className=" px-[10%] md:px-[2%] lg:px-[10%] lg:w-full flex 
     flex-col md:flex-row bg-primary text-secondary w-full pb-10 md:pb-0"
      >
        <div className="lg:w-[40%] flex items-center flex-col md:flex-row ">
          <p className="md:text-[250px] text-[200px] text-tertiary py-[-100px]">
            {" "}
            12
          </p>
          <div className=" flex  flex-col lg:ml-5">
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
    </>
  );
};
