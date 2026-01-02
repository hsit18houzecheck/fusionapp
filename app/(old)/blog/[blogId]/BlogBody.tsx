import React from "react";
import Sharelinks from "./Sharelinks";
import Image from "next/image";
import "./BlogBody.css";
import Button from "@/components/OldWebsite/Button";
import Link from "next/link";
import { BlogData } from "../types";

interface BlogBodyProps {
  dataVal?: BlogData;
}

const BlogBody = ({ dataVal }: BlogBodyProps) => {
  return (
    <div className="max-w-[1250px] mx-auto px-10 pb-24 pt-10">
      <div className="md:flex md:flex-wrap md:justify-between block">
        <div
          className="blog-main-content mt-5 w-full md:w-[64%]"
          dangerouslySetInnerHTML={{
            __html:
              dataVal?.text?.replace(
                'src="',
                'src="https://houzecheck.service-now.com/'
              ) || "",
          }}
        ></div>
        <div className="md:w-[34%] mt-5 relative w-full">
          <div className="sticky top-0">
            <div className="w-full rounded-lg overflow-hidden shadow-lg text-center mb-5">
              <p className="text-5xl font-bold my-5">Offer</p>
              <Image
                className="w-full"
                src="/assets/images/misc/card-banner.png"
                alt="Book Now"
                width={300}
                height={150}
              />
              <div className="px-6 py-4">
                <div className="font-semibold text-xl my-5">
                  Big discount on all Surveys and Valuations
                </div>
              </div>
            </div>
            <Button
              label={"Book a Surveyor"}
              className="!bg-secondary-old w-full"
              href={"/book"}
            />
            <div className="w-full rounded-lg overflow-hidden shadow-lg my-5">
              <div className="bg-primary-old">
                <p className="text-lg text-white p-5"> Quick Links</p>
              </div>
              <div className="underline px-5 py-0">
                <Link href="/lp_homebuyer_all" className="block my-3">
                  Homebuyer Survey
                </Link>
                <Link href="/lp_surveyor_bs" className="block my-3">
                  Building Survey
                </Link>
                <Link href="/lp_valuation" className="block my-3">
                  Property Valuation
                </Link>
                <Link href="/book" className="block my-3">
                  Book a Surveyor
                </Link>
                <Link href="/our-reach" className="block my-3">
                  Surveying Coverage
                </Link>
                <Link href="/rics-surveyor-jobs" className="block my-3">
                  Join as a Surveyor
                </Link>
                <Link href="/about" className="block my-3">
                  About Us
                </Link>
                <Link href="/contact" className="block my-3">
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden my-10">
              <p className="text-xl font-semibold">Follow Us</p>
              <div className="flex items-center justify-start mt-4">
                <Sharelinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
