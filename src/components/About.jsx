import SectionBtn from "./btn's/SectionBtn";
import ContentGap from "./gap's/ContentGap";
import SectionTitle from "./shared/SectionTitle";
import SectionWrapper from "./wrapper/SectionWrapper";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineArrowOutward } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { FaPen, FaMusic, FaCoffee } from "react-icons/fa";
import { GiCommercialAirplane, GiFlyingDagger } from "react-icons/gi";
import { RiQuillPenFill } from "react-icons/ri";

const interest = [
  {
    name: "Drawing",
    icon: <FaPen />,
  },
  {
    name: "Travel",
    icon: <GiCommercialAirplane />,
  },
  {
    name: "Naath",
    icon: <FaMusic />,
  },
  {
    name: "Coffee",
    icon: <FaCoffee />,
  },
  {
    name: "Flying",
    icon: <GiFlyingDagger />,
  },
  {
    name: "Art",
    icon: <RiQuillPenFill />,
  },
];

const About = () => {
  return (
    <SectionWrapper>
      <div id="about" className="">
        <div className="flex items-center justify-between">
          <div>
            <SectionBtn>About me</SectionBtn>
            <SectionTitle
              title1={"Professional "}
              title2={"Problem Solutions"}
            />
            <h1 className="text-5xl mt-2">For Digital Products</h1>
            <p className="mt-6">
              Hello! I’m Mohammad Apon. Web Developer with over 2 years of
              experience. <br /> Experienced with all stages of the development
              cycle for dynamic web <br /> projects. Having an in-depth
              knowledge including advanced HTML5, <br /> CSS3, JavaScript,
              ReactJS, NextJS. Strong background in management <br /> and
              leadership.
            </p>
            <div className="grid grid-cols-2 gap-5 mt-6">
              <div className="flex text-2xl items-center gap-3">
                <FaCheck className="text-primary" />
                Web Development
              </div>
              <div className="flex text-2xl items-center gap-3">
                <FaCheck className="text-primary" />
                Web Design
              </div>
              <div className="flex text-2xl items-center gap-3">
                <FaCheck className="text-primary" />
                Software Development
              </div>
              <div className="flex text-2xl items-center gap-3">
                <FaCheck className="text-primary" />
                Branding & Design
              </div>
            </div>
            <ContentGap />
            <div className="rounded-[15px] bg-lighter flex items-center justify-between w-full px-10 py-5">
              <div
                className="flex items-center gap-3 first-letter:
              "
              >
                <div className="primary-bg w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-black text-[20px]">
                  <LuPhone />
                </div>
                <div>
                  <span className="font-semibold text-[14px]">Make A Call</span>
                  <p className="font-semibold text-[18px]">+880-1881105726</p>
                </div>
              </div>
              <div
                className="flex items-center gap-3 first-letter:
              "
              >
                <div className="primary-bg w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-black text-[20px]">
                  <MdOutlineEmail />
                </div>
                <div>
                  <span className="font-semibold text-[14px]">Email Us</span>
                  <p className="font-semibold text-[18px]">
                    mohammadapon11@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-lighter relative px-2 pt-4 after:content-[''] after:w-[100%] after:h-[100%] after:absolute after:-top-[50px] after:-left-[50px] after:-z-[1] z-[100] after:border-[7px] after:border-[#28e98c]">
              <img
                className="w-[460px] h-[500px] mx-auto"
                src="about.png"
                alt=""
              />
            </div>
            <div className="bg-white rounded-[24px] text-black font-semibold py-2 px-4 w-[57%] flex items-center justify-between absolute top-2/4 z-[101] -left-[40%]">
              <img src="/aboutIcon.png" alt="" />
              <span>Experience Developer</span>
              <MdOutlineArrowOutward />
            </div>
          </div>
        </div>
        <ContentGap />
        <div className="w-[70%] mx-auto">
          <h1 className="text-center text-3xl">MY INTERESTS</h1>
          <ContentGap />
          <div className="flex items-center justify-between">
            {interest.map((item, index) => (
              <div className="group">
                <div className="w-[90px] h-[90px] rounded-[50%] border border-[#28e98c] flex items-center justify-center text-[#28e98c] text-[30px] group-hover:bg-gradient-to-r  group-hover:from-[#28e98c] group-hover:to-[#26ebda] group-hover:text-black transition-all  duration-300">
                  {item?.icon}
                </div>
                <h4 className="text-[24px] mt-2 translate-y-[6px] group-hover:translate-y-0 opacity-0  group-hover:opacity-100 transition-all duration-300 text-white">
                  {item?.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
