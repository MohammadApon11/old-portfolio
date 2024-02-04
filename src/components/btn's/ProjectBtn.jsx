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
          className={` text-black font-medium px-[24px] py-2 rounded-[24px] border  hover:bg-black hover:text-[#28e98c] transition-all duration-300 ${
            color === "white"
              ? "border-white bg-white hover:bg-transparent hover:text-white"
              : "bg-[#28e98c] border-[#28e98c]  hover:border-[#28e98c]"
          }`}
          href={""}
        >
          {children}
        </a>
      ) : (
        <a
          className={` hover:text-black font-medium px-[24px] py-2 rounded-[24px] border transition-all duration-300 ${
            border === "white"
              ? "bg-[#28e98c] text-black border-[#28e98c] hover:bg-transparent hover:text-white hover:border-white"
              : "border-[#28e98c] hover:border-[#28e98c] hover:bg-[#28e98c] text-[#28e98c]"
          }`}
          href={""}
        >
          {children}
        </a>
      )}
    </>
  );
};

export default ProjectBtn;
