import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import BlogContent from "../components/BlogContent";
import BASE_URL from "../config";
import EditBlog from "../components/EditBlog";
import { useEditForm } from "../contexts/EditForm";

function ViewBlogPage() {
  const [blog, setBlog] = useState({});
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
      {editBlog ? (
        <EditBlog originalTitle={blog?.title} originalContent={blog?.content} />
      ) : (
        <BlogContent blog={blog} />
      )}
    </Layout>
  );
}

export default ViewBlogPage;
