import React from "react";

interface InterestProps {
  interst: string;
}

const Interest: React.FC<InterestProps> = ({ interst }) => {
  return (
    <div className="cursor-pointer border border-white min-w-[100px] text-[25px] md:text-[40px] rounded-[50px] h-[40px] md:h-[70px] flex items-center justify-center px-4 hover:bg-white hover:text-[#1F1F1F] transition duration-500">
      {interst}
    </div>
  );
};

export default Interest;
