import React, { useState } from "react";

const EditFormContext = React.createContext();

function EditFormProvider(props) {
  const [editBlog, setEditBlog] = useState();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchError, setSearchError] = useState("");

  return (
    <EditFormContext.Provider
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
    </EditFormContext.Provider>
  );
}

const useEditForm = () => React.useContext(EditFormContext);

export { EditFormProvider, useEditForm };
