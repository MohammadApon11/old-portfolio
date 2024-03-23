import React from "react";
import SectionBtn from "./btn's/SectionBtn";
import SectionTitle from "./shared/SectionTitle";
import { GoArrowUpRight } from "react-icons/go";
import SectionWrapper from "./wrapper/SectionWrapper";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <SectionWrapper>
      <div id="experience" className="flex items-center justify-between">
        <div className="bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] hover:border-[#28e98c] transition-all duration-300 rounded-[50%] p-10 hidden lg:block">
          <img className="w-[150px]" src="logo.png" alt="" />
        </div>
        <div className="lg:w-[70%] w-[100%] group">
          <SectionBtn>My Experience</SectionBtn>
          <SectionTitle title1={"Real"} title2={"Problem Solutions"} />
          <h1 className="2xl:text-5xl xl:text-[45px] sm:text-[40px] xxs:text-[35px] 2xl:mt-1 xl:-mt-2 sm:-mt-3 text-gray-300">
            Experience
          </h1>
          <a
            href="https://solutya.com/"
            target="blank"
            className="w-[100%] px-[24px] py-12 mt-10 mb-[3px] mr-1 transition-all duration-300 rounded-md group flex items-start gap-5 shadow-sm shadow-[#28e98c]"
          >
            <button className="bg-black w-[40px] p-3 rounded-[50%] group-hover:bg-[#28e98c] border border-[hsla(0,0%,100%,.1)] group-hover:text-black transition-all duration-300 max-mobile:hidden block">
              <GoArrowUpRight />
            </button>
            <div className="text-gray-300">
              <span>July 2023 - February 2024</span>
              <h3 className="text-3xl mt-3">Web Developer</h3>
              <p className="text-[16px] mt-1">Solutya Pvt. Ltd.</p>
              <p className="mt-4">
                - Project Leadership and Launch Success. I spearheaded the
                development and successful <br /> launch of a cutting-edge
                application.
              </p>
              <div className="mt-4 flex flex-col gap-1">
                <p className="font-semibold">1. Frontend Development:</p>
                <p className="ml-2">
                  • Developed responsive and user-friendly web interfaces using
                  HTML5, CSS3, and JavaScript.
                </p>
                <p className="ml-2">
                  • Collaborated with the design team to implement UI/UX designs
                  effectively.
                </p>
                <p className="ml-2">
                  • Ensured cross-browser compatibility and optimized
                  performance for various devices.
                </p>
              </div>
              <div className="mt-4 flex-col gap-1">
                <p className="font-semibold">2. Backend Development:</p>
                <p className="ml-2">
                  • Assisted in building RESTful APIs using Node.js and Express
                  framework.
                </p>
                <p className="ml-2">
                  • Implemented CRUD operations to interact with the database
                  using MongoDB.
                </p>
                <p className="ml-2">
                  • Contributed to server-side logic for dynamic content
                  generation and user authentication.
                </p>
              </div>
              <div className="mt-4 flex-col gap-1">
                <p className="font-semibold">3. Continuous Learning:</p>
                <p className="ml-2">
                  • Stayed updated with the latest web development trends and
                  technologies.
                </p>
                <p className="ml-2">
                  • Explored new frameworks and libraries to improve development
                  efficiency.
                </p>
                <p className="ml-2">
                  • Engaged in online courses and workshops to enhance skills in
                  areas like React.js and Redux.
                </p>
              </div>
              <div className="mt-4 flex-col gap-1">
                <p className="font-semibold">4. Tools and Technologies Used:</p>
                <p className="ml-2">• Languages: HTML5, CSS3, JavaScript</p>
                <p className="ml-2">
                  • Frontend Frameworks/Libraries: React.js, Next.js, Tailwind,
                  Bootstrap, jQuery
                </p>
                <p className="ml-2">• Backend: Node.js, Express.js</p>
                <p className="ml-2">• Database: MongoDB</p>
                <p className="ml-2">• Version Control: Git</p>
                <p className="ml-2">• IDEs/Editors: Visual Studio Code</p>
                <p className="ml-2">• Collaboration: Slack</p>
              </div>
              <div className="mt-4 flex-col gap-1">
                <p className="font-semibold">5. Key Achievements:</p>
                <p className="ml-2">
                  • Successfully delivered multiple frontend components ahead of
                  schedule, contributing to overall project efficiency.
                </p>
                <p className="ml-2">
                  • Received positive feedback from the senior development team
                  for proactive problem-solving and quick learning ability.
                </p>
                <p className="ml-2">
                  • Implemented a responsive design approach that significantly
                  improved user experience across various devices.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
