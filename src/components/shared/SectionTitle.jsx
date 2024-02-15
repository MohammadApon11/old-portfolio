import React from "react";

const SectionTitle = ({ title1, title2="" }) => {
  return (
    <h1 className="2xl:text-5xl xl:text-[45px] sm:text-[40px] xxs:text-[35px] pt-5  xxs:max-sm:w-[80vw] text-gray-300 z-[1]">
      {title1} <span className="text-[#28e98c]"> {title2}</span>
    </h1>
  );
};

export default SectionTitle;
