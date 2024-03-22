import { Link } from "react-scroll";
import SectionWrapper from "../../../components/wrapper/SectionWrapper";
import { HiBars2 } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { useInfo } from "../../../provider/infoProvider";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const { unclear, setUnclear } = useInfo();
  const ref = useRef();

  const navLinks = [
    { path: "home", title: "Home", icon: <IoHomeOutline /> },
    { path: "about", title: "About", icon: <FaRegUser /> },
    { path: "experience", title: "Experience", icon: <FaRegUser /> },
    { path: "skills", title: "Skills", icon: <GiSkills /> },
    { path: "projects", title: "Projects", icon: <GoProjectRoadmap /> },
    { path: "contact", title: "Contact", icon: <MdOutlineEmail /> },
  ];

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
    setUnclear(!unclear);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setNavToggle(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [ref, setNavToggle]);

  return (
    <SectionWrapper>
      <div
        className={`flex items-center justify-between xxs:max-lg:flex-row-reverse xxs:max-lg:py-5`}
      >
        <button className="lg:text-xl flex items-center gap-2">
          <img className="w-[40px]" src="logo.png" />{" "}
          <span className="xxs:max-xs:hidden text-gray-300">MOHAMMAD APON</span>
        </button>
        <div className="px-1 flex items-center xl:gap-3 lg:gap-3 xxs:max-lg:hidden">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              spy={true}
              smooth={true}
              offset={20}
              duration={1000}
              className="text-[16px] cursor-pointer px-3 xl:py-10 lg:py-7 text-gray-300 flex items-center gap-1"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3 xxs:max-lg:hidden">
          <a
            target="blank"
            href="https://github.com/mohammadapon11"
            className=" bg-[#28e98c] lg:px-6 lg:py-1 lg:text-[15px] text-[10px] cursor-pointer text-black px-3 py-1 font-semibold hover:bg-black hover:text-[#28e98c] transition-all duration-300 flex items-center lg:gap-2 border-2 border-[#28e98c] rounded-[24px]"
          >
            Github
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/mohammad-apon-1b0b88243/"
            className="hover:bg-[#28e98c] lg:px-6 lg:py-1 lg:text-[15px] text-[10px] cursor-pointer hover:text-black px-3 py-1 font-semibold bg-black text-[#28e98c] transition-all duration-300 flex items-center lg:gap-2 border-2 border-[#28e98c] rounded-[24px]"
          >
            Linkedin
          </a>
        </div>
        <div className="hidden xxs:max-lg:block">
          <div
            ref={ref}
            onClick={handleNavToggle}
            className={`w-[45px] h-[45px] hover:border-[#28e98c] flex items-center justify-center border border-[#575757] rounded-[50%] transition-all duration-300 hover:text-[#28e98c]`}
          >
            {" "}
            <HiBars2 className="text-[23px]" />
          </div>
        </div>
        <div
          className={`md:w-[35vw] xs:max-md:w-[50vw] xxs:max-xs:w-[70vw] h-[100vh] absolute top-0 bg-[#28e98c] transition-all duration-300 text-black pl-[8vw] z-[2] ${
            navToggle ? "left-0" : "-left-[150%]"
          }`}
        >
          <div className="flex flex-col text-[#575757] gap-4">
            <span className="mt-[40px] mb-[25px] text-[22px] font-semibold">
              Menu
            </span>
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                spy={true}
                smooth={true}
                offset={20}
                duration={1000}
                className="text-[16px] flex items-center gap-3 font-semibold cursor-pointer py-3 hover:text-[#28e98c] group"
              >
                <span className="text-[22px] text-[#575757] group-hover:text-[#28e98c]">
                  {item?.icon}
                </span>{" "}
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Navbar;
