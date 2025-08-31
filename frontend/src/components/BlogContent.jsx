import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

function BlogContent({ blog = {} }) {
  const navigate = useNavigate();
  const { loggedInUser } = useAuth();
  console.log(loggedInUser?.id);

  return (
    <section className="w-full flex justify-center">
      <div className="max-w-[70vw] w-full flex flex-col items-center gap-y-16">
        <button
          className="text-start self-start flex items-center gap-x-4 hover:font-bold"
          onClick={() => navigate(-1)}
        >
          <img className="h-[45%]" src="/images/black-arrow-left.svg" />
          <span>Back</span>
        </button>
        <article className="max-w-[60vw] overflow-y-auto">
          <div className="flex items-center justify-between mb-8 ">
            <h1 className="text-[clamp(1.5rem,4vh,3rem)] font-bold ">
              {blog?.title}
            </h1>
            {loggedInUser?.id === blog?.user_id && (
              <div className="flex text-[clamp(1rem,2.5vh,2rem)] gap-x-8">
                <button className="hover:font-semibold hover:underline hover:text-red-700">
                  Delete
                </button>
                <button className="hover:font-semibold hover:underline">
                  Edit
                </button>
              </div>
            )}
          </div>
          <p className="leading-relaxed tracking-wide ">{blog?.content}</p>
        </article>
      </div>
    </section>
  );
}

export default BlogContent;
