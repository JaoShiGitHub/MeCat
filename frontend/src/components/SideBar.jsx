import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import { CustomNavLink } from "./Buttons";

function SideBar() {
  const navigate = useNavigate();
  const { logout, errorMessage } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", errorMessage || error);
    }
  };

  return (
    <aside className="bg-white text-gray-600 text-[clamp(0.5rem,3vh,1.2rem)] w-full h-screen shadow-lg min-w-[170px] max-w-[17vw] flex flex-col items-center justify-between pt-4 pb-10">
      <section className="flex flex-col items-center gap-y-7">
        <div className="flex items-center pl-[6%] gap-2">
          <img
            className="w-[15%]"
            alt="Cat is holding a pencil"
            src="/images/cat-pencil.png"
          />
          <span className="text-meCat font-lifeSavers font-semibold text-[clamp(2rem,4vw,3.5rem)]">
            MeCat
          </span>
        </div>
        <nav className="flex flex-col text-center w-full px-6 gap-y-6">
          <CustomNavLink to="/blogs" page="All blogs" />
          <CustomNavLink to="/my-blogs" page="My blogs" />
          <CustomNavLink to="/create" page="Create new blog" />
        </nav>
      </section>
      <button
        className="hover:text-black hover:font-semibold"
        onClick={handleLogout}
      >
        Log out
      </button>
    </aside>
  );
}

export default SideBar;
