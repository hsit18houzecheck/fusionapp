"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [origin, setOrigin] = useState("");
  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);
  return (
    <div className="container px-4 md:px-0 md:mx-auto mb-10">
      <nav className="flex items-center justify-between bg-primary-lead-old-50 pt-4">
        <a href={origin} className="w-1/2">
          <Image
            src="/assets/images/old-website/lead/Navbar/houzecheck-logo.png"
            alt="Houzecheck"
            className="w-4/5 md:w-1/5 lg:w-64"
            width={300}
            height={200}
          />
        </a>
        <a href="tel:0330 113 1133" className="w-1/2">
          <p className="font-bold text-xl flex items-center justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            0330 113 1133
          </p>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
