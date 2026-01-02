import Image from "next/image";
import Script from "next/script";
import { FaPhone } from "react-icons/fa6";

const Navbar = ({ hideNumber = false }) => {
  return (
    <div className="w-full bg-secondary-old md:px-10 px-0 sticky shadow-md top-0 z-50">
      <div className="max-w-[250px] md:max-w-[1020px] mx-auto p-4 md:flex justify-between items-center text-center">
        <Image
          src="/assets/images/old-website/landing2/hc_logo.webp"
          width={250}
          height={62}
          alt="HC logo"
          className="mb-2 md:mb-0 mx-auto md:mx-0"
        />
        {!hideNumber && (
          <div
            className="items-center justify-center bg-primary-old px-1 py-1 md:py-2 font-bold border
          border-black rounded hover:bg-black hover:text-yellow !w-full
          md:!w-auto !flex tracking-wider text-lg px-auto"
          >
            <FaPhone className="mr-3" width="25" height="25" />
            <a href="tel:0330 113 1133" id="tel-num" className=" tel-num">
              0330 113 1133
            </a>
          </div>
        )}
      </div>
      <Script id="call-conversion">{`gtag('config', 'AW-820666851/3EOiCJ_uktsBEOPDqYcD', {
        'phone_conversion_number': '0330 113 1133',
        'phone_conversion_css_class':'tel-num'
      });`}</Script>
    </div>
  );
};

export default Navbar;
