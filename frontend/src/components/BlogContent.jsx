import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/Auth";
import { useEditForm } from "../contexts/EditForm";
import axios from "axios";
import dayjs from "dayjs";
import BASE_URL from "../config";

function BlogContent({ blog = {} }) {
  const { setEditBlog } = useEditForm();
  const { loggedInUser } = useAuth();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const author = `Created by: ${blog?.username}`;
  const date = dayjs(blog?.updated_at).format("DD/MM/YYYY HH:mm");
  const lastUpdated =
    blog?.posted_at === blog?.updated_at ? `${date}` : `Edit: ${date}`;

  const handleDeleteBlogById = async (blogId) => {
    try {
      await axios.delete(`${BASE_URL}/blogs/${blogId}`, {
        withCredentials: true,
      });
      setSuccessMessage("Blog has been deleted");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data?.message || error.message);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        navigate(-1);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage, navigate]);

  return (
    <article className="max-w-[60vw] overflow-y-auto pt-16">
      {successMessage ? (
        <p>{successMessage}</p>
      ) : (
        <section className="">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-[clamp(1.5rem,4vh,3rem)] font-bold ">
              {blog?.title}
            </h1>
            {loggedInUser?.id === blog?.user_id && (
              <div className="flex text-[clamp(1rem,2.5vh,2rem)] gap-x-8">
                <button
                  className="hover:font-semibold hover:underline hover:text-red-700"
                  onClick={() => handleDeleteBlogById(blog?.blog_id)}
                >
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
          <div className="flex gap-x-4">
            <span>{author}</span> <span>{lastUpdated}</span>
          </div>

          <p className="leading-relaxed tracking-wide mt-8">{blog?.content}</p>
        </section>
      )}
    </article>
  );
}

export default BlogContent;
