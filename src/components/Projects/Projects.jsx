import ProjectBtn from "../btn's/ProjectBtn";
import SectionBtn from "../btn's/SectionBtn";
import ContentGap from "../gap's/ContentGap";
import SectionGap from "../gap's/SectionGap";
import SectionTitle from "../shared/SectionTitle";
import SectionWrapper from "../wrapper/SectionWrapper";
import { BsArrowRight } from "react-icons/bs";

const Projects = () => {
  return (
    <SectionWrapper>
      <div id="projects" className="">
        <SectionBtn>Projects</SectionBtn>
        <SectionTitle title1={"Featured"} title2={"Projects"} />
        <ContentGap />
        <ContentGap />
        <div>
          <div
            className="group transition-all duration-300"
            href="https://inspiring-bonbon-b9bff1.netlify.app/"
            target="blank"
          >
            <img className="rounded-[40px]" src="pro1-copy2.png" alt="" />
            <div className="flex items-center justify-between mt-8">
              <h4 className="text-3xl "> Makinft - NFT Marketplace </h4>
              <div className="flex items-center gap-4">
                <ProjectBtn to="" bg={true}>
                  Live Project
                </ProjectBtn>
                <ProjectBtn to="" bg={false}>
                  Github
                </ProjectBtn>
              </div>
            </div>
          </div>
          <ContentGap />
          <ContentGap />
          <div className="flex items-center gap-10">
            <div className="group relative" href="">
              <img className="rounded-[30px]" src="pro4.png" alt="" />
              <div className="flex items-center gap-4 mt-4 absolute top-2 left-5">
                <ProjectBtn color="white" to="" bg={true}>
                  Live Project
                </ProjectBtn>
                <ProjectBtn border="white" to="" bg={false}>
                  Github
                </ProjectBtn>
              </div>
              <h5 className="mt-4 text-3xl  transition-all duration-300">
                Sports World - Learing Management 
              </h5>
            </div>
            <div className="group relative" href="">
              <div className="relative">
                <img className="rounded-[30px]" src="pro3.png" alt="" />
                <div className="flex items-center gap-4 mt-4 absolute top-2 left-5">
                  <ProjectBtn color="white" to="" bg={true}>
                    Live Project
                  </ProjectBtn>
                  <ProjectBtn border="white" to="" bg={false}>
                    Github
                  </ProjectBtn>
                </div>
                <h5 className="mt-4 text-3xl  transition-all duration-300">
                  Toy House - Shopping Mall
                </h5>
              </div>
            </div>
          </div>
          <ContentGap />
          <ContentGap />
          <div
            className="group transition-all duration-300"
            href="https://inspiring-bonbon-b9bff1.netlify.app/"
            target="blank"
          >
            <img className="rounded-[40px]" src="pro2.png" alt="" />
            <div className="flex items-center justify-between mt-8">
              <h4 className="text-3xl ">
                Mediusware - Software Company Portfolio{" "}
              </h4>
              <div className="flex items-center gap-4">
                <ProjectBtn to="" bg={true}>
                  Live Project
                </ProjectBtn>
                <ProjectBtn to="" bg={false}>
                  Github
                </ProjectBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
