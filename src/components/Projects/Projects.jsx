import { useState } from "react";
import { projectData } from "../../data/projectsData";
import ProjectBtn from "../btn's/ProjectBtn";
import SectionBtn from "../btn's/SectionBtn";
import ContentGap from "../gap's/ContentGap";
import SectionTitle from "../shared/SectionTitle";
import SectionWrapper from "../wrapper/SectionWrapper";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <SectionWrapper>
      <div id="projects" className="">
        <SectionBtn>Projects</SectionBtn>
        <SectionTitle title1={"Featured"} title2={"Projects"} />
        <ContentGap />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[24px]">
          {!showAll
            ? projectData?.map(
                (item, index) =>
                  index < 6 && (
                    <div
                      className="relative group bg-cover bg-center bg-no-repeat h-[300px] flex items-center justify-center hover:border-[15px] transition-all duration-300"
                      style={{ backgroundImage: `url(${item?.image})` }}
                      key={index}
                    >
                      <div className="bg-white w-[100%] h-[100%] mx-auto transition-all duration-300 scale-[.04] group-hover:scale-100 opacity-0 group-hover:opacity-[100%]"></div>
                      <div className="absolute text-center -z-[1] group-hover:z-[100]">
                        <div className="flex items-center justify-center gap-2">
                          <ProjectBtn to={item?.live}>Live Project</ProjectBtn>
                          <ProjectBtn to={item?.git} bg={false}>
                            Github
                          </ProjectBtn>
                        </div>
                        <h6 className="mt-4 text-black font-semibold xxs:max-mobile:px-[5px]">
                          {item?.title}
                        </h6>
                      </div>
                    </div>
                  )
              )
            : projectData?.map((item, index) => (
                <div
                  className="relative group bg-cover bg-center bg-no-repeat h-[300px] flex items-center justify-center hover:border-[15px] transition-all duration-300"
                  style={{ backgroundImage: `url(${item?.image})` }}
                  key={index}
                >
                  <div className="bg-white w-[100%] h-[100%] mx-auto transition-all duration-300 scale-[.04] group-hover:scale-100 opacity-0 group-hover:opacity-[100%]"></div>
                  <div className="absolute text-center -z-[1] group-hover:z-[100]">
                    <div className="flex items-center justify-center gap-2">
                      <ProjectBtn to={item?.live}>Live Project</ProjectBtn>
                      <ProjectBtn to={item?.git} bg={false}>
                        Github
                      </ProjectBtn>
                    </div>
                    <h6 className="mt-4 text-black font-semibold xxs:max-mobile:px-[5px]">
                      {item?.title}
                    </h6>
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
            {!showAll ? "See More" : "Less More"}
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
