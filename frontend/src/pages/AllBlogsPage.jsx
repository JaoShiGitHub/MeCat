import { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import Layout from "../components/Layout";
import BASE_URL from "../config";
import axios from "axios";
import { useAuth } from "../contexts/Auth";
import { useEditForm } from "../contexts/EditForm";

function AllBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const { errorMessage, setErrorMessage } = useAuth();
  const { searchResult } = useEditForm();

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/blogs`, {
        withCredentials: true,
      });
      setBlogs(response.data.blogs);
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
      <BlogList pathName="blogs" listName="All blogs" blogs={blogs} />
    </Layout>
  );
}

export default AllBlogsPage;
