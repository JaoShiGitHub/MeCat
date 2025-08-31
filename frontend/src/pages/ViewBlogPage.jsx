import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import BlogContent from "../components/BlogContent";
import BASE_URL from "../config";

function ViewBlogPage() {
  const [blog, setBlog] = useState([]);
  const { blogId } = useParams();

  useEffect(() => {
    getBlog();
  }, [blogId]);

  const getBlog = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/blogs/${blogId}`, {
        withCredentials: true,
      });
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data?.message);
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <Layout>
      <BlogContent />
    </Layout>
  );
}

export default ViewBlogPage;
