import React, { useState, useEffect } from "react";

const EditFormContext = React.createContext();

function EditFormProvider(props) {
  const [editBlog, setEditBlog] = useState();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  return (
    <EditFormContext.Provider
      value={{
        editBlog,
        setEditBlog,
        search,
        setSearch,
        searchResult,
        setSearchResult,
      }}
    >
      {props.children}
    </EditFormContext.Provider>
  );
}

const useEditForm = () => React.useContext(EditFormContext);

export { EditFormProvider, useEditForm };
