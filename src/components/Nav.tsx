import { FaGithub, FaPhoneFlip } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GoMoon } from "react-icons/go";
import { LuSunMoon } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import { GrProjects, GrTechnology } from "react-icons/gr";
import { useLocation, Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../context";
export const Nav = () => {
  const { pathname } = useLocation();
  const { setDark, dark } = useContext(DarkModeContext);
  return (
    <nav className="flex items-center md:justify-between justify-center md:px-32 px-5 py-10 bg-main-bg-light dark:bg-main-bg-dark ">
      {/* big screens */}
      <ul className="md:flex hidden items-center gap-5">
        <li>
          <Link
            to={"/"}
            className={`transition hover:dark:text-primary hover:text-primary font-semibold ${
              pathname === "/"
                ? "text-primary dark:text-primary"
                : "dark:text-light-text text-dark-text"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            className={`transition hover:dark:text-primary hover:text-primary font-semibold ${
              pathname === "/about"
                ? "text-primary dark:text-primary"
                : "dark:text-light-text text-dark-text"
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={"/work"}
            className={`transition hover:dark:text-primary hover:text-primary font-semibold ${
              pathname === "/work"
                ? "text-primary dark:text-primary"
                : "dark:text-light-text text-dark-text"
            }`}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            className={`transition hover:dark:text-primary hover:text-primary font-semibold ${
              pathname === "/contact"
                ? "text-primary dark:text-primary"
                : "dark:text-light-text text-dark-text"
            }`}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to={"/tech-stack"}
            className={`transition hover:dark:text-primary hover:text-primary font-semibold ${
              pathname === "/tech-stack"
                ? "text-primary dark:text-primary"
                : "dark:text-light-text text-dark-text"
            }`}
          >
            Tech Stack
          </Link>
        </li>
      </ul>
      {/* small screens */}
      <ul className="fixed left-[50%] translate-x-[-50%] bottom-[20px] z-20 md:hidden flex items-center sm:gap-8 gap-6 py-3 px-5 rounded-xl backdrop-blur-sm bg-[#999999]">
        <li>
          <Link
            to={"/"}
            className={pathname === "/" ? "text-primary " : " text-white"}
          >
            <FiHome size={30} />
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            className={pathname === "/about" ? "text-primary " : " text-white"}
          >
            <CgProfile size={30} />
          </Link>
        </li>
        <li>
          <Link
            to={"/work"}
            className={pathname === "/work" ? "text-primary " : " text-white"}
          >
            <GrProjects size={30} />
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            className={
              pathname === "/contact" ? "text-primary " : " text-white"
            }
          >
            <FaPhoneFlip size={30} />
          </Link>
        </li>
        <li>
          <Link
            to={"/tech-stack"}
            className={
              pathname === "/tech-stack" ? "text-primary " : " text-white"
            }
          >
            <GrTechnology size={30} />
          </Link>
        </li>
      </ul>
      {/* icons */}
      <ul className="flex items-center gap-5">
        <li>
          <a
            href="https://www.linkedin.com/in/omar-alrifai-748b752b0/"
            target="_blank"
          >
            <FaLinkedin
              className="text-dark-text dark:text-light-text transition hover:dark:text-primary hover:text-primary"
              size={30}
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/OmarAlrifaee/" target="_blank">
            <FaGithub
              className="text-dark-text dark:text-light-text transition hover:dark:text-primary hover:text-primary"
              size={30}
            />
          </a>
        </li>
        <li className="w-[1px] h-[30px] bg-light-text-muted md:block hidden"></li>
        <li onClick={() => setDark((dark) => !dark)} className="cursor-pointer">
          {dark ? (
            <GoMoon
              className="text-dark-text dark:text-light-text transition hover:dark:text-primary hover:text-primary"
              size={30}
            />
          ) : (
            <LuSunMoon
              className="text-dark-text dark:text-light-text transition hover:dark:text-primary hover:text-primary"
              size={30}
            />
          )}
        </li>
      </ul>
    </nav>
  );
};
