import React from "react";
import { Link } from "react-scroll";
import { AiOutlineMessage } from "react-icons/ai";

const PrimaryBtn = ({ to, rounded = false, children }) => {
  return (
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className={`bg-[#28e98c] lg:px-6 lg:py-2 lg:text-[15px] text-[10px] cursor-pointer text-black px-3 py-2 font-semibold hover:bg-black hover:text-[#28e98c] transition-all duration-300 flex items-center lg:gap-2 border-2 border-[#28e98c] ${
          rounded && "rounded-[24px]"
        }`}
      >
        {children} <AiOutlineMessage className="text-xl lg:visible invisible" />
      </Link>
  );
};

export default PrimaryBtn;
