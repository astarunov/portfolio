import React from "react";
import MainFunk from "./Model";

const About: React.FC = () => {
  return (
    <section
      className="pt-[10rem] pb-[50vh] bg-[#1F1F1F] px-[5%] flex flex-row items-baseline text-white relative"
      id="about"
    >
      <div className="flex flex-col">
        <h1 className="text-[128px] font-bebas leading-[128px] m-0">
          HELLO. I AM <span className="text-[#EEAB3C]">ARTEM</span>
        </h1>

        <p className="max-w-[50%] text-[32px] font-plex leading-none mt-4 indent-60">
          I use my passion and skills to create digital products and
          experiences. National and international customers rely on me for
          design, implementation, and management of their digital products. As
          an independent, I work also with web agencies, companies, startups and
          individuals to create a blueprint for the digital business. Advisor
          and partner of some digital and fintech startups. Also, Judge at CSSDA
          and The Webby.
        </p>
      </div>
      {/* The 3D model is positioned absolutely and aligned properly */}
      <MainFunk />
      <div className="absolute right-[30%] ">
        <div className="relative h-full flex justify-end items-center top-[70vh]">
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
              stroke-width="4"
              stroke-linecap="round"
            />
            <line
              x1="823.525"
              y1="43.7883"
              x2="747.788"
              y2="97.475"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
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
