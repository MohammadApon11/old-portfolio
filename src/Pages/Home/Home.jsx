import About from "../../components/About";
import Banner from "../../components/BannerLottie";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills";
import SectionGap from "../../components/gap's/SectionGap";
import { useInfo } from "../../provider/infoProvider";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar.jsx/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <SectionGap />
      <Experience />
      <SectionGap />
      <Skills />
      <SectionGap />
      <Projects />
      <SectionGap />
      <Contact />
      <SectionGap />
      <Footer />
    </>
  );
};

export default Home;
