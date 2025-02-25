import React, { useState, useEffect, useRef } from "react";
import footerShape from "../assets/footerShape.svg";
import arrow from "../assets/arrow.svg";

import { stack } from "../constants";

import Interest from "./Interest";

const Footer: React.FC = () => {
  const [overlayOpacity, setOverlayOpacity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000); // Hide after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const footerEl = footerRef.current;
      const elementTop = footerEl.offsetTop;
      const elementHeight = footerEl.offsetHeight;

      const scrollY = window.scrollY;
      const viewportBottom = scrollY + window.innerHeight;

      const startFadeFactor = 0.5; // 50% inside the footer
      const endFadeFactor = 1.0; // 100%

      const startFade = elementTop + elementHeight * startFadeFactor;
      const endFade = elementTop + elementHeight * endFadeFactor;

      if (viewportBottom < startFade) {
        setOverlayOpacity(1);
        return;
      }
      if (viewportBottom >= endFade) {
        setOverlayOpacity(0);
        return;
      }
      const progress = (viewportBottom - startFade) / (endFade - startFade);
      setOverlayOpacity(1 - progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check once initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={footerRef}
      className="
        relative
        w-screen
        h-[200vh]
        md:bg-hero-bg
        bg-[#1F1F1F]
        md:bg-cover
        bg-center
        bg-fixed
        flex
        flex-col
        justify-end
        text-white
        
      "
    >
      {/* Interested Text */}
      <div className="absolute z-20 top-[30vh] h-[100vh] text-center flex flex-col items-center w-full">
        <h1 className="text-[100px] font-lancelot  leading-[100px]">
          My <span className="text-[#EEAB3C]">stack</span>
        </h1>
        <div className="flex flex-wrap w-[90%] md:w-[900px] justify-center mt-10 gap-4">
          {stack.map((st, idx) => (
            <React.Fragment key={`spacer-${idx}`}>
              {idx === 4 && <div className="w-[90px] h-1" />}
              <Interest interst={st} key={idx} />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Black Overlay */}
      <div
        className="pointer-events-none absolute mt-[-1rem] inset-0 z-10"
        style={{
          backgroundColor: "#1F1F1F",
          opacity: overlayOpacity,
        }}
      />

      {/* Custom Alert */}
      {showAlert && (
        <div className="fixed top-16 md:top-20 text-[10px] md:text-[20px] left-1/2 transform -translate-x-1/2 bg-[#EEAB3C] text-plex text-white px-6 py-3 rounded-[50px] transition-opacity duration-300 flex items-center justify-center text-center">
          Email copied to clipboard!
        </div>
      )}

      {/* Footer Content */}
      <div className="relative w-full h-screen px-[5%] py-10 font-lancelot flex flex-col justify-end">
        <div className="flex flex-col">
          <img
            src={footerShape}
            alt="footer shape"
            className="w-[100px] h-[100px] md:w-[172px] md:h-[172px] mt-4"
          />
          <h1 className="mt-8 font-bebas text-[100px] leading-[80px] md:text-[250px] md:leading-[200px]">
            LET’S
            <br />
            <span className="text-[#EEAB3C]">CONNECT</span>
          </h1>
          <div className="flex flex-row w-full justify-end items-start md:items-center mt-4 hover:scale-105 transition duration-500 origin-center">
            <img
              src={arrow}
              alt="arrow"
              className="w-[50px] h-[14px] md:w-[98px] md:h-[25px]"
            />
            <p
              className="text-[30px] leading-[30px] md:text-[48px] md:leading-none font-bebas cursor-pointer"
              onClick={() => copyToClipboard("astarunov444@gmail.com")}
            >
              astarunov444@gmail.com
            </p>
          </div>
          <div className="mt-10 w-[90%] mx-auto">
            <div className="w-full h-[1px] bg-white mb-5" />
            <ul className="flex flex-row gap-[10vw] justify-center">
              <li className="text-[16px] font-plex hover:scale-125 transition duration-300">
                <a href="https://www.linkedin.com/in/astarunov/">linkedin</a>
              </li>
              <li className="text-[16px] font-plex hover:scale-125 transition duration-300">
                <a href="https://github.com/astarunov">github</a>
              </li>
              <li className="text-[16px] font-plex hover:scale-125 transition duration-300">
                <a href="https://t.me/astarunovv">telegram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
