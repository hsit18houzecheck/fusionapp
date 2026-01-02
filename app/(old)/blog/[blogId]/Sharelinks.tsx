"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Sharelinks = () => {
  const pathname = usePathname();
  //   console.log(asPath); // '/blog/xyz'
  //   console.log(pathname); // '/blog/[slug]'
  return (
    <>
      <Link href="mailto:hello@houzecheck.com" passHref>
        <div className="p-3 bg-light-blue-old rounded-full">
          <span className="text-primary-old d-flex cursor-pointer">
            <Image
              src="/assets/images/misc/mail.png"
              width={24}
              height={24}
              alt="mail"
            />
          </span>
        </div>
      </Link>
      <Link
        href={`https://www.linkedin.com/sharing/share-offsite/?url=houzecheck.com${pathname}`}
        passHref
      >
        <div className="p-3 bg-light-blue-old rounded-full ml-3">
          <span className="text-primary-old flex cursor-pointer">
            <Image
              src="/assets/images/misc/linkedin.png"
              width={24}
              height={24}
              alt="mail"
            />
          </span>
        </div>
      </Link>
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=houzecheck.com${pathname}&quote=Awesome%20Article!`}
        passHref
      >
        <div className="p-3 bg-light-blue-old rounded-full ml-3">
          <span className="text-primary-old flex cursor-pointer">
            <Image
              src="/assets/images/misc/fb.png"
              width={24}
              height={24}
              alt="mail"
            />
          </span>
        </div>
      </Link>
    </>
  );
};

export default Sharelinks;
