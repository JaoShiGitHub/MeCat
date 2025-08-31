import { Routes, Route } from "react-router-dom";
import AllBlogsPage from "./AllBlogsPage";
import MyBlogsPage from "./MyBlogsPage";
import CreateNewBlogPage from "./CreateNewBlogPage";
import ViewBlogPage from "./ViewBlogPage";
import { EditFormProvider } from "../contexts/EditForm";

function AuthenticatedApp() {
  return (
    <EditFormProvider>
      <Routes>
        <Route path="/blogs" element={<AllBlogsPage />} />
        <Route path="/my-blogs" element={<MyBlogsPage />} />
        <Route path="/create" element={<CreateNewBlogPage />} />
        {/* TODO: Create paths & elements */}
        <Route path="/blogs/:blogId/:blogSlug" element={<ViewBlogPage />} />
        <Route path="/my-blogs/:blogId/:blogSlug" element={<ViewBlogPage />} />

        <Route path="*" element={<AllBlogsPage />} />
      </Routes>
    </EditFormProvider>
  );
}

export default AuthenticatedApp;
