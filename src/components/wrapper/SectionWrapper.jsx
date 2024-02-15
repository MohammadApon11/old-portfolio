import React from "react";

const SectionWrapper = ({ children }) => {
  return (
    <div className="2xl:w-[1250px] xl:w-[1100px] lg:w-[1000px] md:w-[760px] xxs:max-xl:px-8 mx-auto overflow-x-hidden">
      {children}
    </div>
  );
};

export default SectionWrapper;
