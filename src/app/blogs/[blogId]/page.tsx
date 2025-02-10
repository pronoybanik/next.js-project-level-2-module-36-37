import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { Blog } from "@/types";
import React from "react";

// set up and show frontend first 3 data in static  without loading
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();

  return blogs.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();

  return {
    title: blog.title,
    description: blog.description,
  };
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();

  return (
    <div className="my-8">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
