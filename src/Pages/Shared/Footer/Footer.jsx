import SectionWrapper from "../../../components/wrapper/SectionWrapper";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-800">
      <SectionWrapper>
        <div className="flex items-center justify-between py-10">
          <p className="text-center font-semibold">
            Copyright ©{currentYear} Mohammad Apon all right reserved
          </p>
          <div className="flex items-center gap-5 font-semibold">
            <a href="https://github.com/MohammadApon11">Github</a>
            <a href="https://www.linkedin.com/in/mohammad-apon-1b0b88243/">
              LinedIn
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Footer;
