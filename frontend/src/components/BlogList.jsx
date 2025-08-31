import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

function BlogList({ listName, blogs = [] }) {
  const navigate = useNavigate();
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
      {blogs.length === 0 && <p>Blogs not found</p>}
      <ul className="flex flex-col gap-y-8 overflow-y-auto pb-10">
        {blogs.map((blog) => {
          return (
            <li
              key={blog.blog_id}
              className="bg-white border-2 border-gray-300 rounded-xl "
            >
              <button className="text-start w-full px-10 py-6 h-[20vh]">
                <h1 className="font-bold text-xl mb-4">{blog.title}</h1>
                <p className="text-base line-clamp-4">{blog.content}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default BlogList;
