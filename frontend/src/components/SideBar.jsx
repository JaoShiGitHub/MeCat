import { CustomNavLink } from "./Buttons";

function SideBar() {
  return (
    <aside className="bg-white text-gray-600 text-[clamp(0.5rem,3vh,1.2rem)] w-full h-screen shadow-lg max-w-[17vw] flex flex-col items-center justify-between pt-4 pb-10">
      <section className="flex flex-col items-center gap-y-7">
        <div className="flex items-center pl-[6%] gap-2">
          <img
            className="w-[15%]"
            alt="Cat is holding a pencil"
            src="/images/cat-pencil.png"
          />
          <span className="text-meCat font-lifeSavers font-semibold text-[clamp(2rem,8vh,3.5rem)]">
            MeCat
          </span>
        </div>
        <nav className="flex flex-col text-center w-full px-6 gap-y-6">
          <CustomNavLink to="/bogs" page="All blogs" />
          <CustomNavLink to="/my-blogs" page="My blogs" />
          <CustomNavLink to="/create" page="Create new blog" />
        </nav>
      </section>
      <button className="hover:text-black hover:font-semibold">Log out</button>
    </aside>
  );
}

export default SideBar;
