import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import Layout from "../components/Layout";
import axios from "axios";
import BASE_URL from "../config";
import SearchBar from "../components/SearchBar";
import { useAuth } from "../contexts/Auth";
import Loading from "../components/Loading";

function MyBlogsPage() {
  const [myBlogs, setMyBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchError, setSearchError] = useState("");
  const { loading, setLoading } = useAuth();

  useEffect(() => {
    getMyBlogs();
  }, []);

  const getMyBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/blogs/me`, {
        withCredentials: true,
      });
      setMyBlogs(response?.data?.myBlogs);
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error?.response?.data?.message);
        console.log(error.message);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const getMyBlogsBySearch = async () => {
    try {
      setLoading(true);
      setSearchError("");
      const response = await axios.get(
        `${BASE_URL}/blogs/me?search=${search.trim()}`,
        {
          withCredentials: true,
        }
      );
      setSearchResult(response?.data?.myBlogs);
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setSearchError(error.response?.data?.message);
        console.log(error.message);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search.trim()) {
      getMyBlogsBySearch();
    } else {
      setSearchResult([]);
      setSearchError("");
    }
  }, [search]);

  return (
    <Layout>
      <div className="flex flex-col items-center w-full gap-y-10 max-w-[60vw]">
        <SearchBar
          search={search}
          setSearch={setSearch}
          func={getMyBlogsBySearch}
        />
        {loading ? (
          <Loading />
        ) : (
          <BlogList
            pathName="my-blogs"
            listName="My blogs"
            searchError={searchError}
            blogs={searchResult?.length > 0 && search ? searchResult : myBlogs}
          />
        )}
      </div>
    </Layout>
  );
}

export default MyBlogsPage;
