import BlogForm from "./BlogForm";

function EditBlog({ originalTitle, originalContent }) {
  return (
    <section className="w-full max-w-[60vw] flex flex-col mt-10 items-center gap-y-10">
      <h1 className="font-bold text-3xl">Edit blog</h1>
      <BlogForm
        type="edit"
        originalTitle={originalTitle}
        originalContent={originalContent}
      />
    </section>
  );
}

export default EditBlog;
