// import Header from "@/Header";
import Container from "@/components/OldWebsite/Container";
import BlogBody from "./BlogBody";
import BlogBanner from "./BlogBanner";
import { BlogData, BlogPageProps } from "../types";

async function getBlog(
  params: BlogPageProps["params"]
): Promise<BlogData | { notFound: boolean }> {
  const { blogId } = await params;
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic c3VydmV5YXBwOnN1cnZleWFwcA==");
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    cache: "no-store",
  } as const;
  const res = await fetch(
    `${process.env.SNOW_BASE_URL}now/table/kb_knowledge?sysparm_query=u_urlLIKE${blogId}`,
    requestOptions as RequestInit
  );
  const { result }: { result: BlogData[] } = await res.json();
  if (result && result.length > 0 && result[0].workflow_state === "published") {
    return result[0];
  } else {
    return {
      notFound: true,
    };
  }
}
export async function generateMetadata({ params }: BlogPageProps) {
  const dataVal = await getBlog(params);
  if ("notFound" in dataVal) {
    return {
      title: "Not Found",
      description: "Blog post not found",
    };
  }
  return {
    title: dataVal?.meta,
    description: dataVal?.description,
  };
}

const BlogId = async ({ params }: BlogPageProps) => {
  const dataVal = await getBlog(params);

  if ("notFound" in dataVal) {
    return <div>Blog not found</div>; // Handle not found case
  }

  return (
    <Container>
      {/* <Header title={dataVal?.meta} description={dataVal?.meta_description} /> */}
      <BlogBanner dataVal={dataVal} />
      <BlogBody dataVal={dataVal} />
    </Container>
  );
};

export default BlogId;
