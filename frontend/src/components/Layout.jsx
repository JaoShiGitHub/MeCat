import SideBar from "./SideBar";

function Layout({ children }) {
  return (
    <section className="bg-whiteF5 h-screen flex">
      <SideBar />
      <div className="w-full flex justify-center pt-8">{children}</div>
    </section>
  );
}

export default Layout;
