import bannerLottie from "../Lottie/banner.json";
import Lottie from "lottie-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import resume from "../../public/Front-End Developer Resume Of Mohammad Apon.pdf";
import { BiDownload } from "react-icons/bi";
import SectionWrapper from "./wrapper/SectionWrapper";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <SectionWrapper>
      <div
        id="home"
        className="flex items-center justify-between lg:pb-0 pb-5 lg:pt-0 pt-5 lg:pl-0 pl-2 overflow-hidden"
      >
        <div data-aos="fade-right" className="flex flex-col">
          <p className="lg:text-4xl text-xl">Hello, I am</p>
          <h1 className="text-[#28e98c] lg:text-7xl text-2xl">Mohammad Apon</h1>
          <h1 className="lg:text-6xl text-2xl">Web Developer</h1>
          <p className="lg:text-lg text-xs mt-14">
            I design and code beautifully simple things and I love <br /> what I do.
            Just simple like that!
          </p>
          <div className="flex lg:gap-4 gap-2 mt-6">
            <a
              href={resume}
              download="Front-End Developer Resume Of Mohammad Apon.pdf"
              className="bg-[#28e98c] lg:px-6 lg:py-2 lg:text-[15px] text-[10px] cursor-pointer text-black px-3 py-2 font-semibold hover:bg-black hover:text-[#28e98c] transition-all duration-300 flex items-center lg:gap-2 border-2 border-[#28e98c] rounded-[24px]"
            >
              Download Resume{" "}
              <BiDownload className="text-[23px] lg:visible invisible" />
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="w-[45%]">
          <Lottie animationData={bannerLottie}></Lottie>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Banner;
