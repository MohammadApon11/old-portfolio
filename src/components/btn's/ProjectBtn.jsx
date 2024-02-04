import React from "react";

const ProjectBtn = ({
  bg = true,
  color = "",
  border = "",
  to = "",
  children,
}) => {
  return (
    <>
      {bg ? (
        <a
          className={` text-black px-[15px] py-1 rounded-[24px] border hover:bg-transparent hover:text-[#28e98c] transition-all duration-300 text-[14px] ${
            color === "white"
              ? "border-white bg-white hover:bg-transparent hover:text-white"
              : "bg-[#28e98c] border-[#28e98c]  hover:border-[#28e98c]"
          }`}
          href={to}
          target="blank"
        >
          {children}
        </a>
      ) : (
        <a
          className={` hover:text-black text-[14px] px-[15px] py-1 rounded-[24px] border transition-all duration-300 ${
            border === "white"
              ? "bg-[#28e98c] text-black border-[#28e98c] hover:bg-transparent hover:text-white hover:border-white"
              : "border-[#28e98c] hover:border-[#28e98c] hover:bg-[#28e98c] text-[#28e98c]"
          }`}
          href={to}
          target="blank"
        >
          {children}
        </a>
      )}
    </>
  );
};

export default ProjectBtn;
