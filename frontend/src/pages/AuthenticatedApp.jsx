import { Routes, Route } from "react-router-dom";
import AllBlogsPage from "./AllBlogsPage";
import MyBlogsPage from "./MyBlogsPage";
import CreateNewBlogPage from "./CreateNewBlogPage";
import ViewBlogPage from "./ViewBlogPage";

function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="/blogs" element={<AllBlogsPage />} />
      <Route path="/my-blogs" element={<MyBlogsPage />} />
      <Route path="/create" element={<CreateNewBlogPage />} />
      {/* TODO: Create paths & elements */}
      <Route path="/blogs/:blogId/:blogSlug" element={<ViewBlogPage />} />
      <Route path="/my-blogs/:blogId/:blogSlug" element={<ViewBlogPage />} />
      {/*  <Route path="/blogs/:blogSlug/edit" element={<EditMyBlog />} /> */}
      {/*  <Route path="/my-blog/:blogSlug/edit" element={<EditMyBlog />} /> */}

      <Route path="*" element={<AllBlogsPage />} />
    </Routes>
  );
}

export default AuthenticatedApp;
