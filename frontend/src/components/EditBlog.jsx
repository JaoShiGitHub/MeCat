import { useBlog } from "../contexts/Blog";
import BlogForm from "./BlogForm";

function EditBlog({ blogId, originalTitle, originalContent }) {
  const { setEditBlog } = useBlog();
  return (
    <section className="w-full max-w-[60vw] flex flex-col mt-10 items-center gap-y-10">
      <h1 className="font-bold text-3xl">Edit blog</h1>
      <BlogForm
        type="edit"
        blogId={blogId}
        originalTitle={originalTitle}
        originalContent={originalContent}
        handleCancelBtn={() => setEditBlog(false)}
      />
    </section>
  );
}

export default EditBlog;
