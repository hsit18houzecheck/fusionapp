import React from "react";
import Sharelinks from "./Sharelinks";
import Image from "next/image";
import { BlogData } from "../types";

interface BlogBannerProps {
  dataVal?: BlogData;
}

const BlogBanner = ({ dataVal }: BlogBannerProps) => {
  return (
    <div>
      <div
        className="h-[65vh] w-full"
        style={{
          backgroundImage: `url(https://houzecheck.service-now.com/${dataVal?.u_banner_image}.iix)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          //
        }}
      >
        <div className="flex flex-col items-start justify-end w-full h-full bg-[#000000] bg-opacity-40">
          <div className="max-w-[1250px] mx-auto px-14 w-full py-10">
            <div className="text-left w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {dataVal?.u_title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1250px] mx-auto w-full pt-10 pb-0 px-10">
        <h2 className="font-normal mt-4">{dataVal?.description}</h2>
        {/* <div className="flex items-center justify-center mt-10">
          <Sharelinks />
        </div> */}
      </div>
    </div>
  );
};

export default BlogBanner;
