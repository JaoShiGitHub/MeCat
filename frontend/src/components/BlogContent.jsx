import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import { useEditForm } from "../contexts/EditForm";

function BlogContent({ blog = {} }) {
  const navigate = useNavigate();
  const { setEditBlog } = useEditForm();
  const { loggedInUser } = useAuth();

  return (
    <article className="max-w-[60vw] overflow-y-auto pt-16">
      <div className="flex items-center justify-between mb-8 ">
        <h1 className="text-[clamp(1.5rem,4vh,3rem)] font-bold ">
          {blog?.title}
        </h1>
        {loggedInUser?.id === blog?.user_id && (
          <div className="flex text-[clamp(1rem,2.5vh,2rem)] gap-x-8">
            <button className="hover:font-semibold hover:underline hover:text-red-700">
              Delete
            </button>

            <button
              className="hover:font-semibold hover:underline"
              onClick={() => setEditBlog(true)}
            >
              Edit
            </button>
          </div>
        )}
      </div>
      <p className="leading-relaxed tracking-wide ">{blog?.content}</p>
    </article>
  );
}

export default BlogContent;
