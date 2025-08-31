import SideBar from "./SideBar";

function Layout({ children }) {
  return (
    <section className="bg-whiteF5 h-screen flex">
      <SideBar />
      <div>{children}</div>
    </section>
  );
}

export default Layout;
