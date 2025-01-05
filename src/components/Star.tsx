import React, { useEffect, useState } from "react";

interface StarProps {
  width: string;
  height: string;
  color: string;
}

const Star: React.FC<StarProps> = ({ width, height, color }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Adjust rotation speed by dividing scrollY by a factor (e.g., 5)
      setRotation(scrollY / 5);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        width,
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center", // Set the rotation center to the middle
        transition: "transform 0.1s linear",
        // Smooth rotation
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 402 405"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M201 0L238.588 40.6132L290.38 20.0538L306.32 72.6769L362.057 76.2433L353.192 130.454L401.835 157.44L369.92 202.5L401.835 247.56L353.192 274.546L362.057 328.757L306.32 332.323L290.38 384.946L238.588 364.387L201 405L163.412 364.387L111.62 384.946L95.6801 332.323L39.9427 328.757L48.8083 274.546L0.164856 247.56L32.08 202.5L0.164856 157.44L48.8083 130.454L39.9427 76.2433L95.6801 72.6769L111.62 20.0538L163.412 40.6132L201 0Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Star;
