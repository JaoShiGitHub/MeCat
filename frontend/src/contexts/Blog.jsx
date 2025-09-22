import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuth } from "./Auth";

const BlogContext = React.createContext();

function BlogProvider(props) {
  const [editBlog, setEditBlog] = useState();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchError, setSearchError] = useState("");
  const [socket, setSocket] = useState(null);
  const { loggedInUser } = useAuth();

  // initial socket

  useEffect(() => {
    const newSocket = io("http://localhost:4000", { withCredentials: true });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [loggedInUser]);

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
