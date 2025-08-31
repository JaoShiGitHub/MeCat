import { useEffect, useState } from "react";
import { useEditForm } from "../contexts/EditForm";
import axios from "axios";
import BASE_URL from "../config";

function SearchBar() {
  const { search, setSearch, searchResult, setSearchResult } = useEditForm();

  useEffect(() => {
    getBlogs();
  }, [search]);

  const getBlogs = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/blogs?search=${search.trim()}`,
        {
          withCredentials: true,
        }
      );
      setSearchResult(response?.data?.blogs);
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
    <div className="w-full bg-white flex items-center gap-x-4 px-8 h-12 rounded-md shadow-md">
      <img src="/images/search-icon-1.png" className="h-[50%]" />
      <input
        className="w-full focus:outline-none placeholder-[#b3b3b3]"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
