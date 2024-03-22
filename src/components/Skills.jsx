import SectionWrapper from "./wrapper/SectionWrapper";
import SectionBtn from "./btn's/SectionBtn";
import ContentGap from "./gap's/ContentGap";
import SectionTitle from "./shared/SectionTitle";
import { skillsData } from "../data/skillsData";
import { useState } from "react";

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <SectionWrapper>
      <div id="skills" className="lg:pt-10">
        <SectionBtn>my skills</SectionBtn>
        <SectionTitle title1={"My"} title2={"Advantages"} />
        <ContentGap />
        <div className="grid xl:grid-cols-6 lg:grid-cols-5  md:grid-cols-4 sm:grid-cols-3 mobile:grid-cols-3 xs:grid-cols-2 xxs:grid-cols-1 gap-[20px]">
          {!showAll
            ? skillsData.map((item, index) => (
               index < 12 && <div
                  key={index}
                  className="rounded-md  border hover:border-[#28e98c] transition-all duration-300 border-[hsla(0,0%,100%,.1)] bg-lighter py-[25px] px-[20px] mx-auto w-[100%] text-center group text-gray-300"
                >
                  <img className="w-[70px] mx-auto" src={item.image} alt="" />
                  <h6 className="text-[22px] mt-4">{item?.name}</h6>
                  <div className="w-[80%] mx-auto rounded-[12px] bg-black mt-4 font-medium text-[20px] text-primary px-3 py-1 group-hover:bg-[#28e98c] group-hover:text-black transition-all duration-300">
                    {item?.percent}
                  </div>
                </div>
              ))
            : skillsData.map((item, index) => (
                <div
                  key={index}
                  className="rounded-md  border hover:border-[#28e98c] transition-all duration-300 border-[hsla(0,0%,100%,.1)] bg-lighter py-[25px] px-[20px] mx-auto w-[100%] text-center group text-gray-300"
                >
                  <img className="w-[70px] mx-auto" src={item.image} alt="" />
                  <h6 className="text-[22px] mt-4">{item?.name}</h6>
                  <div className="w-[80%] mx-auto rounded-[12px] bg-black mt-4 font-medium text-[20px] text-primary px-3 py-1 group-hover:bg-[#28e98c] group-hover:text-black transition-all duration-300">
                    {item?.percent}
                  </div>
                </div>
              ))}
        </div>
        <ContentGap />
        <div className="flex items-center justify-center lg:mt-[30px] xxs:mt-[15px]">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-black w-[200px] py-3 rounded-[24px] border hover:bg-transparent hover:text-[#28e98c] transition-all duration-300 text-[14px] font-semibold bg-[#28e98c] border-[#28e98c] hover:border-[#28e98c]"
          >
            {!showAll ? "Show more" : "Show less"}
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
