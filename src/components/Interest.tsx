import React from "react";
import { InfiniteMovingCards } from "./Marquee";

const Interest: React.FC = () => {
  const testimonials = [
    {
      title: "Web dev.",
    },
    {
      title: "Prompt Engeneering",
    },
    {
      title: "Software dev.",
    },
    {
      title: "Sports",
    },
    {
      title: "Business",
    },
  ];

  return (
    <div
      className="relative overflow-hidden rounded-[50px]
             border border-white text-white text-[32px]
             flex items-center justify-center cursor-pointer w-[200px] h-[50px]"
    >
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
};

export default Interest;
