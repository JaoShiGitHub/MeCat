import { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import Layout from "../components/Layout";
import BASE_URL from "../config";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import { useAuth } from "../contexts/Auth";
import Loading from "../components/Loading";

function AllBlogsPage() {
  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchError, setSearchError] = useState("");
  const { loading, setLoading } = useAuth();

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/blogs`, {
        withCredentials: true,
      });
      setBlogs(response.data.blogs);
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data?.message);
        console.log(error.message);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const getBlogsBySearch = async () => {
    try {
      setLoading(true);
      setSearchError("");
      const response = await axios.get(
        `${BASE_URL}/blogs?search=${search.trim()}`,
        {
          withCredentials: true,
        }
      );
      setSearchResult(response?.data?.blogs);
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
      getBlogsBySearch();
    } else {
      setSearchResult([]);
      setSearchError("");
    }
  }, [search]);

  return (
    <Layout>
      <div className="w-full flex flex-col items-center gap-y-10 max-w-[60vw]">
        <SearchBar
          search={search}
          setSearch={setSearch}
          func={getBlogsBySearch}
        />
        {loading ? (
          <Loading />
        ) : (
          <BlogList
            pathName="blogs"
            listName="All blogs"
            searchError={searchError}
            blogs={searchResult?.length > 0 && search ? searchResult : blogs}
          />
        )}
      </div>
    </Layout>
  );
}

export default AllBlogsPage;
