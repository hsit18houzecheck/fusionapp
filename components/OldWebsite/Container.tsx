import Script from "next/script";
import Navbar from "./Navbar";
import Footer from "./Footer";
import type { ContainerProps } from "./types";

const Container: React.FC<ContainerProps> = ({
  children,
  landing,
  landingPageContent,
}) => {
  return (
    <div>
      <Navbar hideLinks={landing} landingPageContent={landingPageContent} />
      {children}
      <Footer hideLinks={landing} landingPageContent={landingPageContent} />
      <Script id="call-conversion">{`gtag('config', 'AW-820666851/3EOiCJ_uktsBEOPDqYcD', {
        'phone_conversion_number': '0330 113 1133',
        'phone_conversion_css_class':'tel-num'
      });`}</Script>
    </div>
  );
};

export default Container;
