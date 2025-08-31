import BlogList from "../components/BlogList";
import Layout from "../components/Layout";

function AllBlogsPage() {
  return (
    <Layout>
      <BlogList listName="All blogs" />
    </Layout>
  );
}

export default AllBlogsPage;
