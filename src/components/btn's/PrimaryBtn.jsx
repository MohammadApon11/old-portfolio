import React from "react";
import { Link } from "react-scroll";
import { AiOutlineMessage } from "react-icons/ai";

const PrimaryBtn = ({ to, bg = true, rounded = false, children }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      className={`lg:px-6 lg:py-2 lg:text-[15px] text-[10px] cursor-pointer px-3 py-2 font-semibold transition-all  duration-300 flex items-center lg:gap-2  ${
        rounded && "rounded-[24px]"
      } ${bg ? "bg-[#28e98c]" : "text-[#28e98c] hover:bg-[#28e98c] hover:text-black border-2 border-[#28e98c]"}`}
    >
      {children} <AiOutlineMessage className="text-xl lg:visible invisible" />
    </Link>
  );
};

export default PrimaryBtn;
