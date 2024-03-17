import { TBlog } from "@/app/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: TBlog[] }) => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="my-5 space-y-4">
        <h1 className="text-center text-4xl">
          Latest Blogs from <span className="text-accent">Blogiz</span>
        </h1>
        <p className="text-lg w-2/4 text-center mx-auto text-gray-400">
          <i>
            Dive into the fascinating world of quantum computing, where
            unlocking unprecedented computational power.
          </i>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {blogs.slice(0, 2).map((blog: TBlog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-5 my-5">
        {blogs.slice(2, 5).map((blog: TBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
