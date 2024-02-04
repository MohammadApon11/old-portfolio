import { Link } from "react-scroll";
import SectionWrapper from "../../../components/wrapper/SectionWrapper";

const Navbar = () => {
  
  const navLinks = [
    { path: "home", title: "Home" },
    { path: "skills", title: "Skills" },
    { path: "projects", title: "Projects" },
    { path: "about", title: "About" },
    { path: "contact", title: "Contact" },
  ];

  return (
    <SectionWrapper>
      <div className="">
        <div className="flex items-center justify-between">
          <button className="lg:text-xl text-md flex items-center gap-2">
            <img className="w-[40px]" src="logo.png" /> MOHAMMAD APON
          </button>
          <div className="px-1 flex items-center gap-10">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                spy={true}
                smooth={true}
                offset={20}
                duration={1000}
                className="text-[16px]  cursor-pointer px-3 py-10"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
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
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Navbar;
