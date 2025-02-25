import React from "react";
import MainFunk from "./Model";
import { TypewriterEffectSmooth } from "./UI/typewriter";

const About: React.FC = () => {
  const words = [
    {
      text: "HELLO.",
    },
    {
      text: "I",
    },
    {
      text: "AM",
    },
    {
      text: "ARTEM",
      className: "text-[#EEAB3C] ",
    },
  ];

  return (
    <section
      className="pt-[10rem] pb-[50vh] bg-[#1F1F1F] px-[5%] flex flex-row items-baseline text-white relative"
      id="about"
    >
      <div className="flex flex-col z-10">
        <h1 className="block md:hidden text-[80px] leading-[80px]  font-bebas m-0">
          HELLO. I AM <span className="text-[#EEAB3C]">ARTEM</span>
        </h1>
        <h1 className="hidden md:block md:text-[128px] font-bebas md:leading-[128px] m-0">
          <TypewriterEffectSmooth words={words} />
        </h1>

        <p className="w-full md:max-w-[50%] text-[20px] leading-[20px] md:text-[32px] font-plex md:leading-none mt-4 indent-20 md:indent-60">
          I am a passionate web developer and a computer science student at RWTH
          Aachen University, specializing in creating innovative digital
          products and user-centric experiences. I leverage my technical
          expertise and problem-solving abilities to design, implement, and
          optimize scalable and efficient digital solutions that drive business
          growth and enhance user engagement. My collaborative mindset and
          dedication to continuous improvement make me a valuable contributor to
          any team, ensuring successful project execution and alignment with
          company goals.
        </p>
      </div>
      {/* The 3D model is positioned absolutely and aligned properly */}
      <MainFunk />
      <div className="absolute right-[30%] ">
        <div className="hidden relative h-full md:flex justify-end items-center top-[70vh]">
          <svg
            width="627"
            height="230"
            viewBox="0 0 827 630"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M824.5 43.0001C516 -54.9999 429 37.5001 421.5 186C414 334.5 76.4999 187 5.49987 399C5.49987 399 -25.0178 556.302 93.9998 602.5C213.018 648.698 398.931 632.189 512 532.5"
              stroke="#FFFEFE"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="823.525"
              y1="43.7883"
              x2="747.788"
              y2="97.475"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <h3 className="absolute text-[24px] right-[22vw] bottom-10 font-plex leading-none">
            I AM NOT
            <br />
            THIS ONE
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
