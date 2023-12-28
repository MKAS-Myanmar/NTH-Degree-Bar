import { Link } from "react-router-dom";
import logoWhite from "/image/logoWhite.png";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-4 container mx-auto relative z-50">
      <Link to={"/"}>
        <div className="logo w-16 h-auto cursor-pointer">
          <img src={logoWhite} alt="" />
        </div>
      </Link>

      <ul className="flex items-center flex-1 justify-end gap-6">
        <Link to={"/"}>
          <li>Home</li>
        </Link>

        <Link to={"/menus"}>
          <li>Menus</li>
        </Link>

        <Link to={"/news"}>
          <li>News</li>
        </Link>

        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
