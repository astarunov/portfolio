import React from "react";
import MainFunk from "./Model";

const About: React.FC = () => {
  return (
    <section
      className="py-[10rem] bg-[#1F1F1F] px-[5%] flex flex-row items-baseline text-white relative"
      id="about"
    >
      <div className="flex flex-col">
        <h1 className="text-[128px] font-bebas leading-[128px] m-0">HELLO.</h1>

        <span className="text-[64px] font-bebas m-0 leading-[64px]">
          I AM <span className="text-[#EEAB3C]">ARTEM</span>
        </span>

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
    </section>
  );
};

export default About;
