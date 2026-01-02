import Script from "next/script";
import Nav from "./Navbar";
import type { NavbarProps } from "./types";

const Navbar: React.FC<NavbarProps> = ({ ...rest }) => {
  return (
    <div>
      <Nav {...rest} />
      <Script id="call-conversion">{`gtag('config', 'AW-820666851/3EOiCJ_uktsBEOPDqYcD', {
        'phone_conversion_number': '0330 113 1133',
        'phone_conversion_css_class':'tel-num'
      });`}</Script>
    </div>
  );
};

export default Navbar;
