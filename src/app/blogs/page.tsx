import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "nexaBlog | Blogs",
};

const BlogsPage = async () => {
  // server site data fetching
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs: Blog[] = await res.json();

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Explore All <span className="text-teal-600">NexaBlog</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid  grid-cols-3 gap-6 my-6 ">
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <p className="text-center text-red-500">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
