import { useEffect, useState } from "react";
import { useEditForm } from "../contexts/EditForm";
import axios from "axios";
import BASE_URL from "../config";

function SearchBar() {
  const { search, setSearch, searchResult, setSearchError, setSearchResult } =
    useEditForm();

  const getBlogs = async () => {
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
      getBlogs();
    } else {
      setSearchResult([]);
    }
  }, [search]);

  return (
    <div className="w-full bg-white flex items-center gap-x-4 px-8 h-12 rounded-md shadow-md">
      <img src="/images/search-icon-1.png" className="h-[50%]" />
      <input
        type="text"
        className="w-full focus:outline-none placeholder-[#b3b3b3]"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getBlogs();
          }
        }}
      />
    </div>
  );
}

export default SearchBar;
