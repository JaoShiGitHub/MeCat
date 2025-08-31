import BlogForm from "../components/BlogForm";
import Layout from "../components/Layout";

function CreateNewBlogPage() {
  return (
    <Layout>
      <section className="w-full max-w-[60vw] flex flex-col mt-10 items-center gap-y-10">
        <h1 className="font-bold text-3xl">Create new blog</h1>
        <BlogForm type="create" />
      </section>
    </Layout>
  );
}

export default CreateNewBlogPage;
