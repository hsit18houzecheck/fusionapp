// COMPONENTS
import Image from "next/image";
import Link from "next/link";
import "./index.css";
import { BlogData } from "../types";

// CUSTOM COMPONENTS

// STYLES

interface BlogCardProps {
  jsonData: BlogData;
  width: number;
}

const BlogCard = ({ jsonData, width }: BlogCardProps) => {
  const { u_title, description, key, u_url, u_banner_image } = jsonData;
  return (
    <Link
      href={u_url}
      passHref
      className={`border-0 m-3 text-dark-old`}
      style={{ width: `${width}px` }}
    >
      <Image
        className="card-img-top rounded-t-3xl h-[revert-layer]"
        src={`https://houzecheck.service-now.com/${u_banner_image}.iix`}
        alt={key || u_title} // Fallback for alt
        width={width}
        height={240}
      />
      <div className="!border border-light-grey border-t-0 rounded-b-3xl p-4">
        <h2 className="h6 font-bold font-1">{u_title}</h2>

        <h3 className="text-justify text-truncated font-normal">
          {description}
        </h3>
      </div>
    </Link>
  );
};

export default BlogCard;
