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
        <div className="flex items-center gap-[230px] pt-10 w-[100%] mx-auto">
          <div className="lg:mb-0 mb-10">
            <div className="py-6 mb-5">
              <AiOutlineMail className="text-2xl" />
              <p className="flex items-center">Email: mohammadapon11@gmail.com</p>
              <a
                href="mailto:mohammadapon11@gmail.com"
                className="text-[#28e98c] "
              >
                Send A Message
              </a>
            </div>
            <div className="rounded-sm py-5">
              <RiMessengerLine className="text-3xl" />
              <p>Messenger: Mohammad Apon</p>
              <a
                href="https://web.facebook.com/mohammad.apon.426/"
                className="text-[#28e98c] "
              >
                Send A Message
              </a>
            </div>
          </div>
          <form className="w-full">
            <div className="flex items-center gap-8">
              <div className="w-full">
                <input
                  className="w-[100%] bg-transparent border-none outline-none"
                  placeholder="Name"
                  type="text"
                />
                <div className="h-[1px] w-full bg-[#28e98c] mt-2"></div>
              </div>
              <div className="w-full">
                <input
                  className="w-[100%] bg-transparent border-none outline-none"
                  placeholder="Email"
                  type="text"
                />
                <div className="h-[1px] w-full bg-[#28e98c]  mt-2"></div>
              </div>
            </div>
            <div className="mt-9">
              <textarea
                placeholder="Message"
                className="w-full bg-transparent outline-none"
                name=""
                id=""
                cols="30"
                rows="8"
              ></textarea>
              <div className="h-[1px] bg-[#28e98c] w-full"></div>
            </div>
            <div className="mt-6 flex items-center justify-end">
              <PrimaryBtn bg={false} to={""}>Send</PrimaryBtn>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
