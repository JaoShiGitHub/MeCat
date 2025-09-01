import { Routes, Route } from "react-router-dom";
import AllBlogsPage from "./AllBlogsPage";
import MyBlogsPage from "./MyBlogsPage";
import CreateNewBlogPage from "./CreateNewBlogPage";
import ViewBlogPage from "./ViewBlogPage";
import { BlogProvider } from "../contexts/Blog";

function AuthenticatedApp() {
  return (
    <BlogProvider>
      <Routes>
        <Route path="/blogs" element={<AllBlogsPage />} />
        <Route path="/my-blogs" element={<MyBlogsPage />} />
        <Route path="/create" element={<CreateNewBlogPage />} />
        <Route path="/blogs/:blogId/:blogSlug" element={<ViewBlogPage />} />
        <Route path="/my-blogs/:blogId/:blogSlug" element={<ViewBlogPage />} />

        <Route path="*" element={<AllBlogsPage />} />
      </Routes>
    </BlogProvider>
  );
}

export default AuthenticatedApp;
