import tech1 from "../assets/html.png"; //shadow-orange-500
import tech2 from "../assets/css-3.png"; //shadow-blue-500
import tech3 from "../assets/bootstrap.png"; //shadow-purple-500
import tech4 from "../assets/tailwindcss.png"; //shadow-sky-500
import tech5 from "../assets/js.png"; //shadow-yellow-500
import tech6 from "../assets/react.png"; //shadow-blue-500
import tech7 from "../assets/nodejs.png"; //primary
import tech8 from "../assets/icons8-express-js-500.png"; //shadow-gray-500
import tech9 from "../assets/icons8-mongodb-480.png"; //shadow-green-500
import tech11 from "../assets/icons8-firebase-480.png"; //shadow-yellow-500
import tech12 from "../assets/icons8-figma-480.png"; //shadow-orange-500
import tech13 from "../assets/icons8-github-512.png"; //shadow-gray-500
import SectionWrapper from "./wrapper/SectionWrapper";
import SectionBtn from "./btn's/SectionBtn";
import ContentGap from "./gap's/ContentGap";
import SectionTitle from "./shared/SectionTitle";
import { skilssData } from "../data/skillsData";

const Skills = () => {
  return (
    <SectionWrapper>
      <div id="skills" className="lg:pt-10">
        <SectionBtn>my skills</SectionBtn>
        <SectionTitle title1={"My"} title2={"Advantages"} />
        <ContentGap />
        <div className="grid grid-cols-6 gap-[20px]">
          {skilssData.map((item, index) => (
            <div
              key={index}
              className="rounded-md  border hover:border-[#28e98c] transition-all duration-300 border-[hsla(0,0%,100%,.1)] bg-lighter py-[25px] px-[20px] mx-auto w-[100%] text-center group"
            >
              <img className="w-[70px] mx-auto" src={item.image} alt="" />
              <h6 className="text-[22px] mt-4">{item?.name}</h6>
              <div className="w-[80%] mx-auto rounded-[12px] bg-black mt-4 font-medium text-[20px] text-primary px-3 py-1 group-hover:bg-[#28e98c] group-hover:text-black transition-all duration-300">
                {item?.percent}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
{
  /* <div className="grid lg:grid-cols-3 grid-cols-2 gap-10 mt-10">
  <div className="duration-500 shadow-orange-500 shadow-md hover:scale-105 py-4 rounded-lg flex flex-col items-center">
    <img className="w-24" src={tech1} alt="" />
    <span className="text-primary mt-4 text-[30px]">92%</span>
    <h2 className="text-white text-center mt-2 font-semibold text-xl">HTML</h2>
  </div>
  <div className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-blue-500 flex flex-col items-center">
    <img className="w-24" src={tech2} alt="" />
    <h2 className="text-white text-center mt-2 font-semibold text-xl">CSS</h2>
  </div>
  <div className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-purple-500 flex flex-col items-center">
    <img className="w-24" src={tech3} alt="" />
    <h2 className="text-white text-center mt-2 font-semibold text-xl">
      Bootstrap
    </h2>
  </div>
  <div className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-sky-500 flex flex-col items-center">
    <img className="w-24" src={tech4} alt="" />
    <h2 className="text-white text-center mt-2 font-semibold text-xl">
      Tailwind
    </h2>
  </div>
  <div className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-yellow-500 flex flex-col items-center">
    <img className="w-24" src={tech5} alt="" />
    <h2 className="text-white text-center mt-2 font-semibold text-xl">
      Javascript
    </h2>
  </div>
  <div className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-blue-500 flex flex-col items-center">
    <img className="w-24" src={tech6} alt="" />
    <h2 className="text-white text-center mt-2 font-semibold text-xl">
      ReactJs
    </h2>
  </div>
  <div className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-lime-500 flex flex-col items-center">
    <img className="w-24" src={tech7} alt="" />
    <h2 className="text-white text-center mt-2 font-semibold text-xl">
      NodeJs
    </h2>
  </div>
  <div className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-gray-500 flex flex-col items-center">
    <img className="w-24" src={tech8} alt="" />
    <h2 className="text-white text-center mt-2 font-semibold text-xl">
      ExpressJs
    </h2>
  </div>
  <div className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-green-500 flex flex-col items-center">
    <img className="w-24" src={tech9} alt="" />
    <h2 className="text-white text-center mt-2 font-semibold text-xl">
      MongoDB
    </h2>
  </div>
  <div className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-yellow-500 flex flex-col items-center">
    <img className="w-24" src={tech11} alt="" />
    <h2 className="text-white text-center mt-2 font-semibold text-xl">
      Firebase
    </h2>
  </div>
  <div className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-orange-500 flex flex-col items-center">
    <img className="w-24" src={tech12} alt="" />
    <h2 className="text-white text-center mt-2 font-semibold text-xl">Figma</h2>
  </div>
  <div className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-gray-500 flex flex-col items-center">
    <img className="w-28" src={tech13} alt="" />
    <h2 className="text-white text-center mt-2 font-semibold text-xl">
      GitHub
    </h2>
  </div>
</div>; */
}
