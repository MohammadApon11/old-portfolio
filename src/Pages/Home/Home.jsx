import About from "../../components/About";
import Banner from "../../components/BannerLottie";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills";
import SectionGap from "../../components/gap's/SectionGap";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar.jsx/Navbar";

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-black">
      <Navbar />
      <Banner />
      <SectionGap />
      <Experience />
      <SectionGap />
      <Skills />
      <SectionGap />
      <Projects />
      <SectionGap />
      <About />
      <SectionGap />
      <Contact />
      <SectionGap />
      <Footer />
    </div>
  );
};

export default Home;
