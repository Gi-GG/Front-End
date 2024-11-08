import { Link, NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { NavLinks } from "../../utils/constants";
import useAuthStore from "../../store/userTokenStore";
import TypoLogo from "../shared/TypoLogo";

const SideBar = () => {
    const token = useAuthStore((state) => state.authToken);

    return (
        <aside
            className={`hidden || w-80 h-screen || bg-[#343434] || ${
                token && "lg:flex"
            } flex-col items-center justify-between p-4`}
        >
            <Link to="/">
                <TypoLogo />
            </Link>

            <nav>
                <ul>
                    <li>
                        {NavLinks.map((link, idx) => (
                            <NavLink
                                key={idx}
                                to={link.link}
                                className="py-4 mt-3 px-10 flex items-center gap-4 justify-between hover:bg-highlight duration-200 rounded-l-lg rounded-r-lg"
                            >
                                {link.title}
                                <img src={link.icon} className="w-5" />
                            </NavLink>
                        ))}
                    </li>
                </ul>
            </nav>

            <LogoutButton />
        </aside>
    );
};

export default SideBar;
