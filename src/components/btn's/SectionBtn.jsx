import React from "react";
import { FaAtlassian } from "react-icons/fa";

const SectionBtn = ({ children }) => {
  return (
    <button className="flex items-center gap-2 uppercase px-5 py-[9px] border border-[#565656] cursor-text text-[12px] rounded-[32px]">
      <FaAtlassian /> {children}
    </button>
  );
};

export default SectionBtn;
