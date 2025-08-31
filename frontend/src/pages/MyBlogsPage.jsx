import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import Layout from "../components/Layout";
import axios from "axios";
import BASE_URL from "../config";

function MyBlogsPage() {
  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    getMyBlogs();
  }, []);

  const getMyBlogs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/blogs/me`, {
        withCredentials: true,
      });
      setMyBlogs(response.data.myBlogs);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error?.response?.data?.message);
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <Layout>
      <BlogList listName="My blogs" blogs={myBlogs} />
    </Layout>
  );
}

export default MyBlogsPage;
