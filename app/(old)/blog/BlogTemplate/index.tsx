import BlogCard from "./BlogCard";
import { BlogData } from "../types";

const BlogTemplate = ({ blogs }: { blogs: BlogData[] }) => {
  const blogsLen = blogs.length;
  if (blogsLen === 3) {
    return (
      <>
        {blogs.map((blog, i) => (
          <BlogCard key={`key ${i}`} jsonData={blog} width={340} />
        ))}
      </>
    );
  }
  return (
    <>
      {blogs.map((blog, i) => (
        <BlogCard key={`key ${i}`} jsonData={blog} width={520} />
      ))}
    </>
  );
};

export default BlogTemplate;
