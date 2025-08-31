import React, { useState, useEffect } from "react";

const EditFormContext = React.createContext();

function EditFormProvider(props) {
  const [editBlog, setEditBlog] = useState();

  return (
    <EditFormContext.Provider value={{ editBlog, setEditBlog }}>
      {props.children}
    </EditFormContext.Provider>
  );
}

const useEditForm = () => React.useContext(EditFormContext);

export { EditFormProvider, useEditForm };
