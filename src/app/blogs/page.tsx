"use client";

import BlogCard from "@/components/ui/BlogCard";
import { TBlog } from "../types";
import { useGetBlogsQuery } from "@/redux/api/BaseApi";

const Blogs = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();
  //   console.log(blogs);

  const { data: blogs, isLoading, isError } = useGetBlogsQuery("");
  // console.log(data);

  return (
    <div className="w-11/12 mx-auto my-5">
      <div className="my-5">
        <h1 className="text-4xl font-semibold my-5 text-center">
          All Blog From <span className="text-accent">Blogiz</span>
        </h1>
        <p className="text-lg w-2/4 text-center mx-auto text-gray-400">
          <i>
            Dive into the fascinating world of quantum computing, where
            unlocking unprecedented computational power.
          </i>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {blogs?.map((blog: TBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
