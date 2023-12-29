import { Link } from "react-router-dom";
import logoWhite from "/image/logoWhite.png";
import logoBlack from "/image/logoBlack.png";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../Context/Context";
import { RxCross2 } from "react-icons/rx";

import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";

const NavBar = () => {
  const { theme, setTheme } = useContext(StateContext);

  const toggleTheme = () =>
    setTheme(() => (theme == "dark" ? "light" : "dark"));

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const [isNav, setIsNav] = useState(false);

  const onClickNav = () => setIsNav(!isNav);

  const navVariant = {
    open: {x:100, transition: {duration: 1}},
    closed: {x:0, transition: {duration: 1}}
  }
  


  return (
    <nav className="flex items-center justify-between py-4 container mx-auto relative z-50 dark:text-white text-dark">
      <Link to={"/"}>
        <div className="logo w-8 md:w-12 h-auto cursor-pointer">
          <img src={theme == 'dark'?  logoWhite: logoBlack} className="w-full h-full object-cover relative" alt="" />
        </div>
      </Link>

      <ul className=" items-center flex-1 justify-end gap-6 hidden md:flex  text-dark dark:text-white ">
        <Link to={"/"}>
          <li className="text-inherit">Home</li>
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
      <div className="ml-5 border border-1 border-dark dark:border-white rounded-full hidden md:block">
        <div
          onClick={toggleTheme}
          className={` items-center  gap-3  w-12 h-6 cursor-pointer flex relative  ${
            theme == "dark" ? "justify-start" : "justify-end"
          }`}
        >
          {theme == "dark" ? (
            <CiDark  size={25} />
          ) : (
            <MdOutlineLightMode size={25} />
          )}
        </div>
      </div>

      {/* Mobile Nav */}

      <motion.div className="block md:hidden">
        <IoMenu size={20} onClick={onClickNav} className="c cursor-pointer" />
      </motion.div>

      <motion.div initial={{x:-100}} animate={{x:0}}  className="bg-black  w-1/3 h-screen fixed block md:hidden top-0 left-0 z-[100]">
        <RxCross2
          size={20}
          onClick={onClickNav}
          className="absolute top-0 right-0"
        />

        <ul className="">
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
      </motion.div>
    </nav>
  );
};

export default NavBar;
