import { Routes, Route } from "react-router-dom";
import AllBlogsPage from "./AllBlogsPage";
import MyBlogsPage from "./MyBlogsPage";
import CreateNewBlogPage from "./CreateNewBlogPage";

function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="/blogs" element={<AllBlogsPage />} />
      <Route path="/my-blogs" element={<MyBlogsPage />} />
      <Route path="/create" element={<CreateNewBlogPage />} />

      <Route path="*" element={<AllBlogsPage />} />
    </Routes>
  );
}

export default AuthenticatedApp;
