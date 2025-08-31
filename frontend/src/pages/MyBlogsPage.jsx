import BlogList from "../components/BlogList";
import Layout from "../components/Layout";

function MyBlogsPage() {
  return (
    <Layout>
      <BlogList listName="My blogs" />
    </Layout>
  );
}

export default MyBlogsPage;
