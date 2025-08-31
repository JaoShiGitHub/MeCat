import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import BlogContent from "../components/BlogContent";
import BASE_URL from "../config";
import EditBlog from "../components/EditBlog";
import { useEditForm } from "../contexts/EditForm";

function ViewBlogPage() {
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();
  const { editBlog } = useEditForm();
  const { blogId } = useParams();

  useEffect(() => {
    getBlog();
  }, [blogId]);

  const getBlog = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/blogs/${blogId}`, {
        withCredentials: true,
      });
      setBlog(response?.data?.blog);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data?.message);
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  console.log(blog);

  return (
    <Layout>
      <section className="w-full flex justify-center">
        <div className="max-w-[70vw] w-full flex flex-col items-center">
          <button
            className="text-start self-start flex items-center gap-x-4 hover:font-bold"
            onClick={() => navigate(-1)}
          >
            <img className="h-[45%]" src="/images/black-arrow-left.svg" />
            <span>Back</span>
          </button>
          {editBlog ? (
            <EditBlog
              blogId={blog?.blog_id}
              originalTitle={blog?.title}
              originalContent={blog?.content}
            />
          ) : (
            <BlogContent blog={blog} />
          )}
        </div>
      </section>
    </Layout>
  );
}

export default ViewBlogPage;
