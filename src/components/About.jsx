import about from "../Lottie/about-us.json";
import Lottie from "lottie-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionWrapper from "./wrapper/SectionWrapper";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <SectionWrapper>
      <div id="about" className="">
        <h1 className="font-semibold text-4xl text-[#28e98c] underline decoration-wavy ">
          About Me
        </h1>
        <div className="lg:flex items-center justify-center gap-10">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="lg:w-2/3 lg:mt-0 lg:mb-0 mb-7 mt-10 w-full"
          >
            <Lottie animationData={about}></Lottie>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="lg:w-3/4 text-white"
          >
            <h1 className="font-semibold">
              I am <span className="text-[#28e98c] text-xl">Mohammad Apon</span>
              . From Mymensingh Netrakona. I am studying computer science at
              Kishoreganj Polytechnic Institute. I have been doing the web
              development course with Programming Hero for the past six months.
              I am among the top candidates out there. Alhamdulillah I was able
              to follow all their rules and get all the rewards. I’m passionate
              about everything that goes into making websites work well and look
              beautiful. The web is my passion because it’s where I can find the
              most exciting projects to work on. It’s also where I get to
              express my creativity in ways that are hard to find elsewhere.I
              love working with clients who want something more than just
              another website; they want their site to be more than just another
              website. They want it to be memorable, engaging, and valuable—and
              that’s where I come in!
            </h1>
            <h1 className="text-xl font-semibold text-[#28e98c] mt-2">
              My Skills
            </h1>
            <h1>
              <span className="font-bold">Expertise:</span> HTML | CSS |
              React.js | Bootstrap | Tailwind CSS | React Bootstrap | DaisyUI |
              Flowbite | Firebase.
            </h1>
            <h1>
              <span className="font-bold">Comfortable:</span> JavaScript And ES6
              | Node.js | Express.js | MongoDB | React Router.
            </h1>
            <h1>
              <span className="font-bold">Familiar:</span> ReactQuery | React
              Hook Form | Jsonwebtoken | Pagination and Debugging.
            </h1>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
