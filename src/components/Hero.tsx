import React, { useState, useEffect, useRef } from "react";
import Star from "./Star";

const Hero: React.FC = () => {
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Function to get the current date in "DD MMM" format
  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0"); // Add leading zero
    const month = date.toLocaleString("de-DE", { month: "short" }); // Get month as "Jan", "Feb", etc. in German format
    return `${day} ${month}`;
  };

  const [currentDate] = useState(getCurrentDate);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;

      const startFade = windowHeight * 0.5; // 100vh
      const endFade = windowHeight; // 200vh

      if (scrollY <= startFade) {
        setOverlayOpacity(0);
      } else if (scrollY >= endFade) {
        setOverlayOpacity(1);
      } else {
        const progress = (scrollY - startFade) / (endFade - startFade);
        setOverlayOpacity(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className={`
        relative
        h-[200vh]
        md:bg-hero-bg
        bg-hero-bg-mobile
        bg-mo
        bg-cover
        md:bg-fixed
        bg-center
        text-white
        px-[5%]
        w-screen
      `}
    >
      {/* Always visible SVG */}
      <div className="absolute top-[50%] left-[5vw] z-10 flex flex-row gap-96 items-center">
        <svg
          className="scale-[0.85]"
          width="215"
          height="979"
          viewBox="0 0 215 979"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M128.001 1.98847C429.5 444 -268.5 384 139.001 976.988"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M139 977L146 945"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <div className="hidden md:flex flex-row gap-10 items-center opacity-5">
          <Star width="150px" height="150px" color="#FFFFFF" />
          <h1 className="text-[120px] font-bebas leading-none ">SCROLL</h1>
        </div>
      </div>

      {/* Hero content */}
      <div className="h-screen flex flex-col justify-end">
        <div className="absolute right-[5vw] md:right-[10vw] top-[20vh] flex flex-row items-center">
          <Star width="50px" height="50px" color="#EEAB3C" />
          <h1 className="text-[80px] leading-[80px] md:text-[128px] font-poiret md:leading-[128px] m-0">
            {currentDate.split(" ")[0]}
          </h1>
          <div className="flex flex-col ml-4">
            <p className="font-lancelot text-[48px] leading-[48px]">
              {currentDate.split(" ")[1]}
            </p>
            <p className="font-plex max-w-[100px] text-[16px] leading-[16px]">
              available for work
            </p>
          </div>
        </div>
        <div className="flex flex-col font-lancelot">
          <p className="text-[48px] text-[#EEAB3C] leading-none">motivated</p>
          <h1 className="font-bebas text-[100px] md:text-[300px] leading-none md:tracking-[-1rem]">
            DEVELOPER
          </h1>
        </div>
      </div>

      {/* Overlay */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full h-full"
        style={{
          backgroundColor: "#1F1F1F",
          opacity: overlayOpacity, // Dynamic opacity
        }}
      />
    </section>
  );
};

export default Hero;
