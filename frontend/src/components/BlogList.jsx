import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useEditForm } from "../contexts/EditForm";

function BlogList({ pathName, listName, blogs = [] }) {
  const navigate = useNavigate();

  const { searchError, searchResult } = useEditForm();
  const displayBlogs = searchResult.length > 0 ? searchResult : blogs;

  return (
    <section className="flex flex-col items-center w-full gap-y-10 max-w-[60vw]">
      <SearchBar />
      <div className="w-full flex justify-between px-2">
        <h1 className="font-bold text-[clamp(1.5rem,2vh,3rem)]">{listName}</h1>
        <button
          className="hover:underline hover:font-semibold"
          onClick={() => navigate("/create")}
        >
          Create new blog
        </button>
      </div>
      {blogs.length === 0 || searchError ? (
        <p>Blogs not found</p>
      ) : (
        <ul className="flex flex-col gap-y-8 overflow-y-auto pb-10 ">
          {displayBlogs.map((blog) => {
            const blogSlug = blog.title.toLowerCase().split(" ").join("-");

            return (
              <li
                key={blog.blog_id}
                className="group relative text-start w-full h-[20vh] bg-white border-gray-300 rounded-xl border-2 py-10"
              >
                <Link to={`/${pathName}/${blog.blog_id}/${blogSlug}`}>
                  <h1 className="font-bold text-xl mb-4 px-10">{blog.title}</h1>
                  <p className="text-base line-clamp-4 px-10">{blog.content}</p>
                  <div className="hidden group-hover:flex bg-gray-300/50 backdrop-blur-sm w-full h-full absolute top-0 items-center justify-center rounded-xl gap-x-10 shadow-lg">
                    <img
                      className="h-[10vh]"
                      alt="A little cute cat is reading"
                      src="/images/cat-book.png"
                    />
                    <i className="underline text-[clamp(1rem,4vh,1.5rem)] font-semibold">
                      Read this blog
                    </i>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default BlogList;
