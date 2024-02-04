import React from "react";

const SectionTitle = ({ title1, title2="" }) => {
  return (
    <h1 className="text-5xl pt-5">
      {title1} <span className="text-[#28e98c]"> {title2}</span>
    </h1>
  );
};

export default SectionTitle;
