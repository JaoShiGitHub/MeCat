import React, { useState } from "react";

const BlogContext = React.createContext();

function BlogProvider(props) {
  const [editBlog, setEditBlog] = useState();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchError, setSearchError] = useState("");

  return (
    <BlogContext.Provider
      value={{
        editBlog,
        setEditBlog,
        search,
        setSearch,
        searchResult,
        setSearchResult,
        searchError,
        setSearchError,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
}

const useBlog = () => React.useContext(BlogContext);

export { BlogProvider, useBlog };
