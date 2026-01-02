import Navbar from "@/components/OldWebsite/Navbar";
import Banner from "./Banner";
import BlogTemplate from "./BlogTemplate";
import { BlogData } from "./types";

async function getBlogs(): Promise<BlogData[][]> {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic c3VydmV5YXBwOnN1cnZleWFwcA==");
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    cache: "no-store",
  } as const; // Use as const or keep explicit typing

  const res = await fetch(
    `${process.env.SNOW_BASE_URL}now/table/kb_knowledge?sysparm_query=kb_category=12e272111b6ac5506932db92b24bcb4e^workflow_state=published`,
    requestOptions as RequestInit
  );
  const { result } = await res.json();
  const mainArr: BlogData[][] = [];
  let arr: BlogData[] = [];
  for (let i = 0; i < result.length; i++) {
    arr.push(result[i]);
    if (i % 5 == 1 || i % 5 == 4) {
      mainArr.push(arr);
      arr = [];
    }
  }
  mainArr.push(arr);
  return mainArr;
}

const Blog = async () => {
  const blogsArr = await getBlogs();
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="max-w-[1250px] mx-auto">
        <div className="flex flex-wrap justify-center">
          {blogsArr.map((blogs, i) => {
            return <BlogTemplate key={`key ${i}`} blogs={blogs} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
