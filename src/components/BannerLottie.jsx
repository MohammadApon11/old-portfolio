import bannerLottie from "../Lottie/banner.json";
import Lottie from "lottie-react";
import resume from "../assets/Full-stack Software Engineer Resume of Mohammad Apon.pdf";
import { BiDownload } from "react-icons/bi";
import SectionWrapper from "./wrapper/SectionWrapper";

const Banner = () => {
  return (
    <SectionWrapper>
      <div
        id="home"
        className="flex items-center justify-between overflow-hidden"
      >
        <div className="flex flex-col text-gray-300">
          <p className="xl:text-4xl lg:text-3xl md:text-[27px] sm:text-[20px] xs:text-[26px] xxs:text-[23px] xxs:max-sm:mt-5">
            Hello, I am
          </p>
          <h1 className="text-[#28e98c] lg:mt-3 xl:text-7xl lg:text-6xl md:text-5xl sm:text-[34px] xs:text-[40px] xxs:text-[35px]">
            Mohammad Apon
          </h1>
          <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-[28px] xs:text-3xl xxs:text-[28px] xl:mt-2 md:mt-1 xxs:max-md:-mt-1">
            Software Engineer
          </h1>
          <p className="xl:text-lg md:text-[16px] text-[16px] xl:mt-14 lg:mt-10 md:mt-7 sm:mt-5 xxs:max-sm:mt-4 xxs:max-sm:w-[75%]">
            I design and code beautifully simple{" "}
            <br className="md:hidden sm:max-md:block hidden" /> things and I
            love <br className="xxs:max-md:hidden block" /> what I do. Just{" "}
            <br className="md:hidden sm:max-md:block hidden" /> simple like
            that!
          </p>
          <div className="flex lg:mt-6 md:mt-5 mt-4">
            <a
              href={resume}
              download="Full-stack Developer Resume of Mohammad Apon.pdf"
              className="bg-[#28e98c] lg:px-6 px-5 lg:py-2 py-1 text-[16px] cursor-pointer text-black font-medium hover:bg-black hover:text-[#28e98c] transition-all duration-300 flex items-center gap-2 border-2 border-[#28e98c] rounded-[24px]"
            >
              Resume <BiDownload className="lg:text-[23px] text-[20px]" />
            </a>
          </div>
        </div>
        <div className="xl:w-[45%] md:w-[44%] sm:w-[50%] xxs:max-sm:hidden">
          <Lottie animationData={bannerLottie}></Lottie>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Banner;
