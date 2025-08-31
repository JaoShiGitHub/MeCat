import { NavLink } from "react-router-dom";

const navLinkStyle =
  " hover:border-2 hover:border-black hover:text-black flex items-center justify-center rounded-md h-10";

export function LongButton({ btnName, type = "button" }) {
  return (
    <button
      type={type}
      className="bg-black01 w-full text-white font-medium shadow-md h-[5vh] rounded-md mt-4 hover:bg-babyCorn hover:text-black"
    >
      {btnName}
    </button>
  );
}

export function CustomNavLink({ to, page }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `font-bold text-black ${navLinkStyle}` : `${navLinkStyle}`
      }
    >
      <span>{page}</span>
    </NavLink>
  );
}
