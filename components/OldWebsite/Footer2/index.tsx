import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full px-10 bg-primary-old py-2">
        <div className="md:max-w-[1020px] mx-auto px-5 py-2">
          <div className="flex items-center justify-between">
            <Link href="https://www.houzecheck.com/terms" className="underline">
              Terms & Conditions
            </Link>
            <Link href="https://www.houzecheck.com/terms" className="underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full px-10 bg-black py-2">
        <p className="text-white text-sm text-center">
          © 2024 HouzeCheck. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
