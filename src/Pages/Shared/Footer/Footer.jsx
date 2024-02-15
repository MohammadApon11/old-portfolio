import SectionWrapper from "../../../components/wrapper/SectionWrapper";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="border-t border-[#565656]">
      <SectionWrapper>
        <div className="flex xxs:max-sm:flex-col  sm:items-center justify-between py-6 text-gray-300">
          <p className="font-semibold">
            Copyright ©{currentYear} Mohammad Apon all right reserved
          </p>
          <div className="flex items-center gap-5 font-semibold xxs:max-sm:mt-2">
            <a className="underline" href="https://github.com/MohammadApon11">
              Github
            </a>
            <a
              className="underline"
              href="https://www.linkedin.com/in/mohammad-apon-1b0b88243/"
            >
              LinedIn
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Footer;
