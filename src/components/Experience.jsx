import React from "react";
import SectionBtn from "./btn's/SectionBtn";
import SectionTitle from "./shared/SectionTitle";
import { GoArrowUpRight } from "react-icons/go";
import SectionWrapper from "./wrapper/SectionWrapper";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <div className="bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] hover:border-[#28e98c] transition-all duration-300 rounded-[50%] p-10 hidden lg:block">
          <img className="w-[150px]" src="logo.png" alt="" />
        </div>
        <div className="lg:w-[70%] w-[100%] group">
          <SectionBtn>My Experience</SectionBtn>
          <SectionTitle title1={"Real"} title2={"Problem Solutions"} />
          <h1 className="2xl:text-5xl xl:text-[45px] sm:text-[40px] xxs:text-[35px] 2xl:mt-2 text-gray-300">Experience</h1>
          <a
            href="https://solutya.com/"
            target="blank"
            className="w-[100%] px-[24px] py-12 mt-10 mb-[3px] mr-1 transition-all duration-300 rounded-md group flex items-start gap-5 shadow-sm shadow-[#28e98c]"
          >
            <button className="bg-black w-[40px] p-3 rounded-[50%] group-hover:bg-[#28e98c] border border-[hsla(0,0%,100%,.1)] group-hover:text-black transition-all duration-300">
              <GoArrowUpRight />
            </button>
            <div className="text-gray-300">
              <span>July 2023 - Present</span>
              <h3 className="text-3xl mt-3">Web Developer</h3>
              <p className="text-[16px] mt-1">Solutya Pvt. Ltd.</p>
              <p className="mt-4">
                - Project Leadership and Launch Success. I spearheaded the
                development and successful launch <br /> of a cutting-edge MERN
                stackbased application.
              </p>
            </div>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
