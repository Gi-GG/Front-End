import { NavLink } from "react-router-dom";
import { NavLinks } from "../../utils/constants";
import useAuthStore from "../../store/userTokenStore";

const NavBar = () => {
  const token = useAuthStore((state) => state.authToken);
  return (
    <nav
      className={`lg:hidden || w-screen h-fit || bg-[#343434] || ${
        token ? "flex" : "hidden"
      } items-center justify-between p-4 rounded-tr-xl rounded-tl-xl || absolute z-20 left-1/2 bottom-0 -translate-x-1/2`}
    >
      {NavLinks.map((link, idx) => (
        <NavLink key={idx} className="p-2" to={link.link}>
          <img src={link.icon} className="w-5" />
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
