import { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import Layout from "../components/Layout";
import BASE_URL from "../config";
import axios from "axios";
import SearchBar from "../components/SearchBar";

function AllBlogsPage() {
  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchError, setSearchError] = useState("");

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

  const getBlogsBySearch = async () => {
    try {
      setSearchError("");
      const response = await axios.get(
        `${BASE_URL}/blogs?search=${search.trim()}`,
        {
          withCredentials: true,
        }
      );
      setSearchResult(response?.data?.blogs);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setSearchError(error.response?.data?.message);
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (search.trim()) {
      getBlogsBySearch();
    } else {
      setSearchResult([]);
      setSearchError("");
    }
  }, [search]);

  return (
    <Layout>
      <div className="w-full flex flex-col gap-y-10 max-w-[60vw]">
        <SearchBar
          search={search}
          setSearch={setSearch}
          func={getBlogsBySearch}
        />
        <BlogList
          pathName="blogs"
          listName="All blogs"
          searchError={searchError}
          blogs={searchResult?.length > 0 && search ? searchResult : blogs}
        />
      </div>
    </Layout>
  );
}

export default AllBlogsPage;
