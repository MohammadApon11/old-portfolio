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
import { useInfo } from "../provider/infoProvider";
import SectionGap from "./gap's/SectionGap";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

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
      <div id="about" className="overflow-hidden">
        <SectionGap />
        <div className="flex items-center justify-between text-gray-300">
          <div className="relative">
            <SectionBtn>About me</SectionBtn>
            <SectionTitle
              title1={"Professional"}
              title2={"Problem Solutions"}
            />
            <h1 className="2xl:text-5xl xl:text-[45px] sm:text-[40px] xxs:text-[35px] 2xl:mt-2 xxs:max-xs:w-[85vw] xxs:-mt-2 text-gray-300">
              For Digital Products
            </h1>
            <p className="2xl:mt-6 xxs:mt-4 xl:w-[70%] lg:w-[80%] md:w-[100%] xs:max-md:w-[84vw] xxs:w-[78vw]">
              Hello! I’m Mohammad Apon. Web Developer with over 2 years of
              experience. Experienced with all stages of the development cycle
              for dynamic web projects. Having an in-depth knowledge including
              advanced HTML5, CSS3, JavaScript, ReactJS, NextJS. Strong
              background in management and leadership.
            </p>
            <div className="sm:grid grid-cols-2 xs:max-md:flex flex-col xs:max-md:gap-2 xl:text-2xl sm:text-[22px] xxs:text-[23px] 2xl:gap-5 xl:gap-3 md:gap-[9px] 2xl:mt-6 xl:mt-5 xxs:mt-4">
              <div className="flex items-center gap-3">
                <IoCheckmarkDoneSharp className="text-primary" />
                Web Development
              </div>
              <div className="flex items-center gap-3">
                <IoCheckmarkDoneSharp className="text-primary" />
                Web Design
              </div>
              <div className="flex items-center gap-3">
                <IoCheckmarkDoneSharp className="text-primary" />
                Software Development
              </div>
              <div className="flex items-center gap-3">
                <IoCheckmarkDoneSharp className="text-primary" />
                Branding & Design
              </div>
            </div>
            <ContentGap />
            <div className="rounded-[15px] bg-lighter flex sm:items-center xxs:max-sm:flex-col xxs:max-md:gap-[20px] justify-between xl:w-[80%] lg:max-xl:w-[700px] sm:w-[100%] xxs:w-[370px]  2xl:px-10 xl:px-7 md:max-xl:px-9 xxs:px-6 2xl:py-5 sm:py-4 xxs:py-6 lg:max-xl:absolute md:left-[18%]">
              <div
                className="flex items-center 2xl:gap-3 xxs:gap-2
              "
              >
                <div className="primary-bg w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-black text-[20px]">
                  <LuPhone />
                </div>
                <div>
                  <span className="font-semibold xs:text-[16px] xxs:text-[14px]">Make A Call</span>
                  <p className="font-semibold xs:text-[18px] xxs:text-[16px]">+880-1881105726</p>
                </div>
              </div>
              <div
                className="flex xxs:max-xs:flex-col xs:items-center xl:gap-3 xxs:gap-2
              "
              >
                <div className="primary-bg w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-black text-[20px]">
                  <MdOutlineEmail />
                </div>
                <div>
                  <span className="font-semibold xs:text-[16px] xxs:text-[14px]">Email Us</span>
                  <p className="font-semibold xs:text-[18px] xxs:text-[16px]">
                    mohammadapon11@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative after:content-[''] after:w-[100%] after:h-[100%] after:absolute xl:after:-top-[50px] lg:after:-top-[40px] xl:after:-left-[50px] lg:after:-left-[40px] after:-z-[1] z-[2] xl:after:border-[7px] lg:after:border-[6px] after:border-[#28e98c] hidden lg:block">
            <div className="bg-lighter 2xl:w-[460px] xl:w-[350px] lg:w-[310px] relative px-2 pt-4">
              <img src="apon.png" alt="" />
            </div>
            <div className="bg-white rounded-[24px] text-black font-semibold py-2 px-4 2xl:w-[57%] lg:w-[75%] flex items-center justify-between absolute top-2/4 z-[101] -left-[40%] invisible xl:visible">
              <img src="/aboutIcon.png" alt="" />
              <span>Experience Developer</span>
              <MdOutlineArrowOutward />
            </div>
          </div>
        </div>
        <div className="lg:w-[70%] md:w-[100%] mx-auto text-gray-300 2xl:mt-[60px] xl:mt-[50px] lg:mt-[120px] xxs:mt-[30px]">
          <h1 className="text-center lg:text-3xl xxs:text-[26px]">
            MY INTERESTS
          </h1>
          <ContentGap />
          <div className="sm:flex xxs:grid xs:grid-cols-4 xxs:grid-cols-3 items-center justify-between lg:max-xl:-mt-5">
            {interest.map((item, index) => (
              <div className="group text-center" key={index}>
                <div className="xl:w-[90px] sm:w-[80px] xl:h-[90px] sm:h-[80px] xxs:h-[70px] xxs:w-[70px] rounded-[50%] border border-[#28e98c] flex items-center justify-center text-[#28e98c] text-[30px] group-hover:bg-gradient-to-r  group-hover:from-[#28e98c] group-hover:to-[#26ebda] group-hover:text-black transition-all  duration-300 text-center">
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
