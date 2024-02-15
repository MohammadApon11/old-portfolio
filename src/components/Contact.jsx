import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import SectionWrapper from "./wrapper/SectionWrapper";
import SectionBtn from "./btn's/SectionBtn";
import SectionTitle from "./shared/SectionTitle";
import PrimaryBtn from "./btn's/PrimaryBtn";

const Contact = () => {
  return (
    <SectionWrapper>
      <div id="contact" className="">
        <SectionBtn>Contact Me</SectionBtn>
        <SectionTitle title1={"Let's Work"} title2="Together!" />
        <div className="flex xxs:max-xl:flex-col-reverse xl:items-center xl:gap-[230px] pt-10 w-[100%] mx-auto">
          <div className="lg:mb-0 mb-10 text-gray-300">
            <div className="flex gap-2 py-6">
              <AiOutlineMail className="text-3xl" />
              <div>
                <p className="sm:w-[280px]">
                  Email: mohammadapon11@gmail.com
                </p>
                <a
                  href="mailto:mohammadapon11@gmail.com"
                  className="text-[#28e98c] "
                >
                  Send A Message
                </a>
              </div>
            </div>
            <div className="flex gap-2 xl:mt-24 py-6">
              <RiMessengerLine className="text-3xl" />
              <div>
                <p>Messenger: Mohammad Apon</p>
                <a
                  href="https://web.facebook.com/mohammad.apon.426/"
                  className="text-[#28e98c] "
                >
                  Send A Message
                </a>
              </div>
            </div>
          </div>
          <form className="w-full text-gray-300">
            <div className="sm:flex items-center gap-8 ">
              <div className="w-full">
                <input
                  className="w-[100%] bg-transparent border-none outline-none placeholder:text-gray-300"
                  placeholder="Name"
                  type="text"
                />
                <div className="h-[1px] w-full bg-[#28e98c] mt-2"></div>
              </div>
              <div className="w-full xxs:max-sm:mt-9">
                <input
                  className="w-[100%] bg-transparent border-none outline-none placeholder:text-gray-300"
                  placeholder="Email"
                  type="text"
                />
                <div className="h-[1px] w-full bg-[#28e98c]  mt-2"></div>
              </div>
            </div>
            <div className="mt-9">
              <textarea
                placeholder="Message"
                className="w-full bg-transparent outline-none placeholder:text-gray-300 md:h-[220px] xxs:h-[150px]"
              ></textarea>
              <div className="h-[1px] bg-[#28e98c] w-full"></div>
            </div>
            <div className="mt-6 flex items-center justify-end">
              <PrimaryBtn bg={false} to={""}>
                Send
              </PrimaryBtn>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
